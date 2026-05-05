# Book Tag Guide

Use this guide when adding or updating books in `_data/books*.yml`.

## Basic Shape

```yml
- title: Example Book
  img: https://example.com/cover.jpg
  alt: Example Book
  url: https://example.com/book
  genres: [science-fiction]
  tags: [hard-sf, first-contact, space-opera]
```

## Core Rule

`genres` is the primary shelf. Keep it to one value.

`tags` are facets. Use them for subgenres, topics, formats, regions, languages, and themes.

Why this matters: `books-grid.html` groups books by the first value in `genres`. If a book has multiple genres, only the first one controls where it appears.

## Formatting Rules

- Use lowercase slug-style values.
- Use hyphens instead of spaces: `science-fiction`, not `science fiction`.
- Avoid trailing spaces.
- Avoid title case: `self-development`, not `Self Development`.
- Prefer stable broad shelves in `genres`.
- Put narrow, debatable, or descriptive labels in `tags`.
- Use singular tags unless the plural is the natural term: `essay` is worse than `essays`, but `algorithm` is usually worse than `algorithms`.
- Do not use `general`.

## Primary Genres

Use one of these as the single value in `genres`.

| Genre | Use For |
|---|---|
| `science-fiction` | SF novels, hard SF, space opera, dystopia, first contact, rationalist fiction, speculative technology fiction |
| `literary-fiction` | Canon, modern classics, experimental fiction, magical realism, existential novels, serious literary novels |
| `thriller-mystery-horror` | Suspense, crime, mystery, psychological thrillers, horror, weird horror |
| `philosophy-and-meaning` | Philosophy, ethics, religion, spirituality, death, meaning, absurdism, existential inquiry |
| `psychology-and-cognition` | Behavioral science, intelligence, learning, cognition, decision-making, social psychology |
| `science-and-math` | Physics, biology, mathematics, statistics, scientific history, popular science |
| `technology-and-society` | AI, internet, privacy, surveillance, software, platforms, data, tech power |
| `economics-and-finance` | Economics, markets, money, risk, incentives, personal finance |
| `politics-and-society` | Power, institutions, activism, labor, social critique, governance |
| `history-and-civilization` | Broad history, civilization, geography, geopolitics, culture, travel, regional history |
| `biography-and-memoir` | Biography, memoir, life stories, career narratives, collected personal writings |
| `medicine-and-health` | Medical practice, illness, public health, surgery, clinical systems |
| `self-development` | Discipline, resilience, practical life advice, performance, habits |

## How To Choose A Primary Genre

Ask: where would I browse for this book first?

Examples:

- A dystopian novel goes in `science-fiction`, with `dystopia` as a tag.
- A book about AI politics goes in `technology-and-society`, with `ai`, `labor`, or `surveillance` as tags.
- A personal finance book goes in `economics-and-finance`, with `personal-finance` as a tag.
- A philosophical novel can go in `literary-fiction`, with `existentialism` as a tag.
- A religion introduction can go in `philosophy-and-meaning`, with `religion` and `very-short-introduction` as tags.

When in doubt, choose the shelf that best describes the reader's intent, not every possible identity the book has.

## Common Tags

### Fiction Subgenres

- `hard-sf`
- `space-opera`
- `first-contact`
- `dystopia`
- `utopia`
- `post-apocalyptic`
- `cyberpunk`
- `rationalist-fiction`
- `speculative`
- `philosophical-sf`
- `anthropological-sf`
- `linguistic-sf`
- `magical-realism`
- `historical-fiction`
- `experimental`
- `weird-fiction`
- `horror`
- `psychological-thriller`
- `crime`
- `satire`

### Forms

- `novel`
- `novella`
- `essays`
- `lectures`
- `memoir`
- `biography`
- `collected-writings`
- `narrative-nonfiction`
- `popular-science`
- `popular-economics`
- `very-short-introduction`
- `web-fiction`

### Science And Math

- `physics`
- `biology`
- `mathematics`
- `statistics`
- `probability`
- `relativity`
- `string-theory`
- `evolution`
- `aerospace`
- `history-of-science`
- `science-history`
- `data-literacy`
- `critical-thinking`

### Technology

- `ai`
- `algorithms`
- `automation`
- `data`
- `internet`
- `privacy`
- `surveillance`
- `security`
- `software-industry`
- `platforms`
- `information-theory`
- `communication`
- `future-of-work`
- `technology-history`

### Society And Politics

- `politics`
- `power`
- `institutions`
- `political-science`
- `activism`
- `labor`
- `capitalism`
- `social-critique`
- `inequality`
- `geopolitics`
- `geography`
- `maps`
- `civilization`
- `world-history`
- `ancient-history`

### Psychology And Meaning

- `cognition`
- `decision-making`
- `behavioral-economics`
- `psychology`
- `psychometrics`
- `learning`
- `education`
- `collective-intelligence`
- `existentialism`
- `absurdism`
- `spirituality`
- `religion`
- `death`
- `meaning`
- `ethics`

### Regions, Languages, And Metadata

- `india`
- `china`
- `asia`
- `australia`
- `kannada`
- `classic`
- `modern-classic`
- `nobel-author`
- `series`
- `film`

## Tagging Patterns

### Science Fiction

```yml
genres: [science-fiction]
tags: [hard-sf, first-contact, space-opera, series]
```

Use `science-fiction` broadly. Let tags carry the precision.

Good SF tags:

- `hard-sf`
- `space-opera`
- `first-contact`
- `dystopia`
- `consciousness`
- `evolution`
- `philosophical-sf`
- `weird-fiction`

### Literary Fiction

```yml
genres: [literary-fiction]
tags: [existentialism, classic, novella]
```

Use this when the main appeal is literary form, canon status, prose, existential inquiry through fiction, or experimental structure.

Good literary tags:

- `classic`
- `modern-classic`
- `experimental`
- `magical-realism`
- `historical-fiction`
- `existentialism`
- `absurdism`
- `novella`

### Technology Nonfiction

```yml
genres: [technology-and-society]
tags: [ai, privacy, data, labor]
```

Use this for books about technology's effect on people, institutions, markets, or power.

Good tech tags:

- `ai`
- `data`
- `privacy`
- `surveillance`
- `internet`
- `platforms`
- `algorithms`
- `software-industry`

### Science Nonfiction

```yml
genres: [science-and-math]
tags: [physics, popular-science, relativity]
```

Use this for books where the main object is scientific explanation, math, or scientific history.

Good science tags:

- `physics`
- `biology`
- `mathematics`
- `statistics`
- `history-of-science`
- `popular-science`

### Philosophy, Religion, And Meaning

```yml
genres: [philosophy-and-meaning]
tags: [existentialism, religion, meaning]
```

Use this for direct inquiry into meaning, ethics, religion, death, consciousness, or spiritual life.

Good meaning tags:

- `existentialism`
- `spirituality`
- `religion`
- `death`
- `meaning`
- `ethics`

## Examples From The Current Library

```yml
- title: Dune
  genres: [science-fiction]
  tags: [space-opera, ecology, politics, classic]
```

```yml
- title: Thinking, Fast and Slow
  genres: [psychology-and-cognition]
  tags: [behavioral-economics, decision-making, cognition]
```

```yml
- title: Who Owns the Future
  genres: [technology-and-society]
  tags: [internet, economics, data, platforms]
```

```yml
- title: The Stranger
  genres: [literary-fiction]
  tags: [existentialism, absurdism, classic, novella]
```

```yml
- title: Complications
  genres: [medicine-and-health]
  tags: [medicine, essays, surgery, clinical-practice]
```

## Adding A New Book

1. Choose exactly one primary `genres` value.
2. Add 3-5 `tags`.
3. Put format tags first if important: `essays`, `memoir`, `very-short-introduction`.
4. Add topic tags next: `ai`, `physics`, `privacy`, `geopolitics`.
5. Add metadata last: `india`, `kannada`, `classic`, `series`.
6. If a tag will probably only apply to one book forever, avoid it unless it is genuinely useful.

## Anti-Patterns

Avoid this:

```yml
genres: [general]
```

Avoid this:

```yml
genres: [science-fiction, philosophy, classic]
```

Use this instead:

```yml
genres: [science-fiction]
tags: [philosophical-sf, classic]
```

Avoid this:

```yml
genres: [sci-fi ]
tags: [AI, Big Ideas, Stuff]
```

Use this instead:

```yml
genres: [science-fiction]
tags: [ai, ideas]
```

## Maintenance Rule

Every few months, scan for near-duplicates:

- `sci-fi` vs `science-fiction`
- `ai` vs `artificial-intelligence`
- `psychology` vs `cognition`
- `bio` vs `biology`
- `personal finance` vs `personal-finance`
- `india` vs `indian`

Prefer the shorter, clearer slug unless the longer one has a strong reason to exist.
