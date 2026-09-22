# CV italiano e inglese

I contenuti sono in `cv-it.json` e `cv-en.json`. Il generatore usa Python e ReportLab:

```sh
python scripts/generate_cv_it.py
python scripts/generate_cv_it.py --locale en
```

Per creare un'anteprima senza sostituire il file scaricabile:

```sh
python scripts/generate_cv_it.py --output /percorso/anteprima.pdf
```

Il generatore scrive solo la lingua richiesta (italiano per impostazione predefinita).
Non riduce automaticamente
i caratteri per far entrare il testo: se supera lo spazio disponibile, interrompe la
generazione con un errore. I contenuti devono restare in due pagine; testo principale
e competenze sono a 10,5 pt, recapiti a 9 pt. Solo la nota privacy è più piccola.

Dopo ogni modifica, renderizzare e controllare visivamente entrambe le pagine,
verificare il testo estratto e i collegamenti. I test sui contenuti del sito verificano
anche titolo, perimetro Tricentis, dodici gruppi di competenze e descrizioni dei progetti.

Il controllo automatico di entrambe le versioni richiede `pypdf` e `pdfplumber`:

```sh
python scripts/check_cv.py
```

Verifica le due pagine, tutti i testi, i collegamenti, i margini e le dimensioni minime
del testo. Non sostituisce il controllo visivo delle pagine renderizzate.
