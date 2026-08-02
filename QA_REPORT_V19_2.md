# QA Report — web_nl_learn V19.2.0

## Release result

- **Build:** passed
- **Automated tests:** 120/120 passed
- **Content validation:** 68 passed, 1 warning, 0 failed
- **HTTP smoke test:** index, bundle, stylesheet, service worker and representative image returned HTTP 200
- **Baseline preservation:** all 239 files from V18.18 are present in V19.2

## Preserved baseline

- 1,886 verbs in the atlas
- 1,807 manually reviewed verb entries
- 79 verb entries explicitly retained in the lexical review queue
- existing A0–B2 routes, profiles, progress, images, audio, knowledge graph and offline support
- all 8,024 pre-existing exercises

## V19.2 additions

- 6 practical learning scenarios
- 30 new validated exercises, 6 per level A0–B2
- visual exercise support in the shared exercise engine
- practical domains: travel, health, clothing, food, natural conversation and professional communication
- natural questions, answers, follow-up prompts and pronunciation focus
- project foundation, pedagogy, UX/UI, QA and release policy documents

## Final metrics

- **Exercises:** 8,054
- **Exercise distribution:** {"A0": 356, "A1": 1064, "A2": 1569, "B1": 2259, "B2": 2806}
- **Knowledge graph nodes:** 24,481
- **Knowledge graph edges:** 80,258
- **Known graph issues:** 79 (the existing lexical review queue)

## Known warning

The only warning is intentional and inherited from the baseline: 79 verbs contain conjugation and grammatical information but do not yet present an unverified lexical definition or synonyms. They remain explicitly marked for review rather than being filled with generic content.
