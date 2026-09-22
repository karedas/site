"""Validate both CV PDFs after generation. Requires pypdf and pdfplumber.

This checks text, links and page bounds; rendered pages still need visual review.
"""
import json
import re
from pathlib import Path

import pdfplumber
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]


def normalize(text):
    return re.sub(r"\s+", "", text).replace("’", "'")


def check(locale, filename):
    data = json.loads((ROOT / f"scripts/cv-{locale}.json").read_text(encoding="utf-8"))
    path = ROOT / "public" / filename
    reader = PdfReader(path)
    assert len(reader.pages) == 2, f"{locale}: expected two pages"
    text = normalize(" ".join(page.extract_text() for page in reader.pages))
    values = [data[key] for key in ("name", "title", "subtitle", "location", "profile", "languages", "privacy")]
    for job in data["jobs"]:
        values.extend(job[key] for key in ("role", "company", "location", "dates"))
        values.extend(job["bullets"])
        values.extend(job.get("bullet_labels", []))
        if job.get("context"):
            values.append(job["context"])
    for group in data["skills"] + data["education"]:
        values.extend(group)
    for project in data["projects"]:
        values.extend(project[key] for key in ("name", "label", "body"))
    for value in values:
        assert normalize(value) in text, f"{locale}: missing text: {value}"

    uris = set()
    for page in reader.pages:
        for ref in page.get("/Annots", []):
            action = ref.get_object().get("/A", {})
            assert action.get("/S") == "/URI", f"{locale}: unexpected annotation action"
            uris.add(str(action["/URI"]))
    expected = {"mailto:lisandr84@gmail.com", "https://andrea-lisi.com/",
                "https://github.com/karedas", "https://linkedin.com/in/andrea-lisi84"}
    expected.update(project["url"] for project in data["projects"] if project.get("url"))
    assert uris == expected, f"{locale}: unexpected or missing links: {uris ^ expected}"
    assert "/OpenAction" not in reader.trailer["/Root"]

    with pdfplumber.open(path) as pdf:
        for page in pdf.pages:
            for char in page.chars:
                assert 34 <= char["x0"] <= char["x1"] <= page.width - 34, char
                assert 15 <= char["top"] < char["bottom"] <= page.height - 15, char
            body = [c for c in page.chars if c["top"] < page.height - 44]
            assert min(c["size"] for c in body) >= 9
    print(f"{locale}: 2 pages, all content, links and bounds verified")


if __name__ == "__main__":
    check("it", "andrea-lisi-cv-it.pdf")
    check("en", "andrea-lisi-cv.pdf")
