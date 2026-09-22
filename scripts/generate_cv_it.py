"""Generate one CV at a time with ReportLab; Italian remains the default.

Usage: python scripts/generate_cv_it.py [--locale it|en] [--output path.pdf]
Content lives in cv-it.json / cv-en.json. Page bounds fail instead of shrinking text.
"""

import argparse
import json
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Paragraph

ROOT = Path(__file__).resolve().parents[1]
W, H = 595.276, 841.89
MARGIN = 36
WIDTH = W - 2 * MARGIN
INK = HexColor("#282A29")
MUTED = HexColor("#464B48")
GREEN = HexColor("#007662")
PURPLE = HexColor("#6251B5")
BG = HexColor("#F6F1E7")
RULE = HexColor("#D8CEBD")


class Layout:
    def __init__(self, path, copy, locale):
        self.c = Canvas(str(path), pagesize=(W, H), pageCompression=1)
        self.copy = copy
        self.c.setTitle("Andrea Lisi - Senior Software Engineer - " + ("CV italiano" if locale == "it" else "English CV"))
        self.c.setAuthor("Andrea Lisi")
        self.c.setSubject(copy["subtitle"])
        self.c.setCreator("Andrea Lisi CV generator")
        self.y = H - MARGIN

    def text(self, text, size=10.5, leading=14, bold=False, color=INK,
             x=MARGIN, width=WIDTH, gap=0):
        style = ParagraphStyle("body", fontName="Helvetica-Bold" if bold else "Helvetica",
                               fontSize=size, leading=leading, textColor=color)
        para = Paragraph(text, style)
        _, height = para.wrap(width, H)
        if self.y - height < 43:
            raise ValueError(f"Page overflow at y={self.y}: {text[:90]}")
        para.drawOn(self.c, x, self.y - height)
        self.y -= height + gap

    def section(self, title):
        self.y -= 10
        self.c.setStrokeColor(RULE)
        self.c.setLineWidth(0.6)
        self.c.line(MARGIN, self.y + 3, W - MARGIN, self.y + 3)
        self.text(title, size=12, leading=16, bold=True, color=GREEN, gap=6)

    def page(self, number):
        self.c.setFillColor(BG)
        self.c.rect(0, 0, W, H, stroke=0, fill=1)
        self.c.setStrokeColor(RULE)
        self.c.setLineWidth(0.6)
        self.c.line(MARGIN, 34, W - MARGIN, 34)
        self.c.setFont("Helvetica", 7.2)
        self.c.setFillColor(MUTED)
        self.c.drawString(MARGIN, 23, self.copy["privacy"])
        self.c.setFont("Helvetica", 8)
        self.c.setFillColor(GREEN)
        self.c.drawRightString(W - MARGIN, 23, f"{number} / 2")
        self.y = H - MARGIN

    def job(self, job):
        self.y -= 6
        title_y = self.y
        self.text(escape(job["role"]), size=12, leading=15, bold=True)
        self.c.setFillColor(MUTED)
        self.c.setFont("Helvetica", 9)
        self.c.drawRightString(W - MARGIN, title_y - 10.5, job["dates"])
        self.text(f'<b>{escape(job["company"])}</b> | {escape(job["location"])}',
                  size=9.5, leading=13, color=GREEN, gap=6)
        if job.get("context"):
            self.text(escape(job["context"]), size=10, leading=14, bold=True, gap=5)
        labels = job.get("bullet_labels", [])
        for index, bullet in enumerate(job["bullets"]):
            self.c.setFont("Helvetica", 10.5)
            self.c.setFillColor(GREEN)
            self.c.drawString(MARGIN, self.y - 11, "-")
            lead = f'<b>{escape(labels[index])}.</b> ' if labels else ''
            self.text(lead + escape(bullet), x=MARGIN + 10, width=WIDTH - 10, leading=14.5, gap=4)
        self.y -= 5


def build(output, locale="it"):
    data = json.loads((ROOT / f"scripts/cv-{locale}.json").read_text(encoding="utf-8"))
    output.parent.mkdir(parents=True, exist_ok=True)
    doc = Layout(output, data, locale)
    doc.page(1)
    doc.text(data["name"], size=29, leading=34, bold=True, gap=4)
    doc.text(data["title"], size=14, leading=18, bold=True)
    doc.text(data["subtitle"], size=10, leading=14, color=GREEN, gap=6)
    doc.text(data["location"] + ' | <link href="mailto:lisandr84@gmail.com">lisandr84@gmail.com</link>',
             size=9, leading=12)
    doc.text('<link href="https://andrea-lisi.com/">andrea-lisi.com</link> | '
             '<link href="https://github.com/karedas">github.com/karedas</link> | '
             '<link href="https://linkedin.com/in/andrea-lisi84">linkedin.com/in/andrea-lisi84</link>',
             size=9, leading=12, gap=10)
    doc.text(escape(data["profile"]), gap=1)
    doc.section("Esperienza" if locale == "it" else "Experience")
    for job in data["jobs"]:
        doc.job(job)
    print(f"Page 1 content ends at {doc.y:.1f} pt (minimum 43)")
    doc.c.showPage()

    doc.page(2)
    doc.text("Andrea Lisi", size=17, leading=21, bold=True)
    doc.section("Competenze tecniche" if locale == "it" else "Technical skills")
    for title, skills in data["skills"]:
        doc.text(escape(title), bold=True, size=10.5, leading=13,
                 color=PURPLE if title in ("Design e UI engineering", "Design & UI engineering") else INK)
        # Keep each skill together: wrap between entries, not within a tool name.
        skill_text = " | ".join(escape(item.strip()).replace(" ", "&nbsp;")
                                for item in skills.split("|"))
        doc.text(skill_text, size=10.5, leading=13.5, color=MUTED, gap=6)

    doc.section("Progetti personali" if locale == "it" else "Personal projects")
    for project in data["projects"]:
        label = escape(project["label"])
        if project.get("url"):
            label = f'<link href="{project["url"]}" color="#007662">{label}</link>'
        doc.text(f'<b>{escape(project["name"])}</b> | {label}',
                 size=10.5, leading=14)
        doc.text(escape(project["body"]), size=10.5, leading=13.5, gap=5)
    doc.section("Formazione e lingue" if locale == "it" else "Education & languages")
    for title, body in data["education"]:
        doc.text(f'<b>{escape(title)}</b> - {escape(body)}', size=10.5, leading=13.5, gap=5)
    doc.text(escape(data["languages"]), size=10.5, leading=13.5)
    print(f"Page 2 content ends at {doc.y:.1f} pt (minimum 43)")
    doc.c.save()
    print(output)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--locale", choices=("it", "en"), default="it")
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    output = args.output or ROOT / ("public/andrea-lisi-cv-it.pdf" if args.locale == "it" else "public/andrea-lisi-cv.pdf")
    build(output.resolve(), args.locale)
