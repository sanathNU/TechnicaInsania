# Book Genre System

This is a review suggestion for the yearly `_data/books*.yml` files. The key rule is that `books-grid.html` groups each book by the first item in `genres`, so the first value should be a stable primary shelf. Additional values can be narrower facets.

## Recommended Fields

```yml
genres: [science-fiction]
tags: [space-opera, hard-sf, first-contact]
```

Keep `genres` to one primary value unless you deliberately want the display grouping to change. Use `tags` for everything else: subgenre, theme, format, language, region, or topic.

## Primary Shelves

- `science-fiction`: SF novels, including hard SF, space opera, dystopian SF, alien contact, and rationalist/web fiction.
- `literary-fiction`: canon, modern classics, experimental fiction, magical realism, existential novels.
- `thriller-mystery-horror`: suspense, mystery, psychological thriller, horror, weird horror.
- `philosophy-and-meaning`: existentialism, ethics, religion, spirituality, meaning, death, absurdism.
- `psychology-and-cognition`: behavioral science, intelligence, learning, decision-making, neuroscience-adjacent cognition.
- `science-and-math`: physics, biology, mathematics, statistics, scientific history, popular science.
- `technology-and-society`: AI, internet, privacy, data, software industry, technological power.
- `economics-and-finance`: economics, markets, money, incentives, personal finance.
- `politics-and-society`: power, institutions, activism, social critique, governance.
- `history-and-civilization`: broad history, civilization, geography, cultural history.
- `biography-and-memoir`: life stories, collected writings, memoir, career narrative.
- `medicine-and-health`: medical practice, illness, public health, body, clinical systems.
- `self-development`: discipline, performance, practical life advice.

## Common Facets

- Forms: `novel`, `essays`, `lectures`, `very-short-introduction`, `popular-science`, `memoir`, `biography`, `collected-writings`.
- Fiction subgenres: `hard-sf`, `space-opera`, `first-contact`, `dystopia`, `utopia`, `post-apocalyptic`, `cyberpunk`, `satire`, `magical-realism`, `experimental`, `weird-fiction`, `horror`.
- Topics: `ai`, `privacy`, `data`, `statistics`, `economics`, `cognition`, `physics`, `biology`, `evolution`, `religion`, `geopolitics`, `india`, `china`, `history-of-science`.
- Reading metadata: `kannada`, `classic`, `modern-classic`, `nobel-author`, `series`.

## Suggested Tags By Book

### `_data/books23.yml`

| Book | genre | tags |
|---|---|---|
| Brave New World | `science-fiction` | `dystopia`, `classic`, `social-engineering`, `modern-classic` |
| Dataclysm | `technology-and-society` | `data`, `internet`, `privacy`, `social-science` |
| The Scientific Edge | `science-and-math` | `india`, `technology`, `aerospace`, `popular-science` |
| Fooled By Randomness | `economics-and-finance` | `probability`, `risk`, `markets`, `decision-making` |
| Man's Search for Meaning | `philosophy-and-meaning` | `memoir`, `existentialism`, `psychology`, `holocaust` |
| Thinking, Fast and Slow | `psychology-and-cognition` | `behavioral-economics`, `decision-making`, `cognition` |
| Leonardo Da Vinci | `biography-and-memoir` | `biography`, `art`, `science`, `renaissance` |
| Dune | `science-fiction` | `space-opera`, `ecology`, `politics`, `classic` |
| Siddhartha | `philosophy-and-meaning` | `spirituality`, `novel`, `classic`, `buddhism` |
| 50 Economics Ideas | `economics-and-finance` | `economics`, `introductory`, `ideas` |
| The Left Hand of Darkness | `science-fiction` | `anthropological-sf`, `gender`, `classic`, `first-contact` |

### `_data/books24.yml`

| Book | genre | tags |
|---|---|---|
| Discipline Is Destiny | `self-development` | `stoicism`, `discipline`, `virtue` |
| Developer Hegemony | `technology-and-society` | `software-industry`, `career`, `labor` |
| The Three Body Problem | `science-fiction` | `first-contact`, `hard-sf`, `china`, `series` |
| The Dark Forest | `science-fiction` | `first-contact`, `dark-forest-theory`, `series` |
| Emperor's New Mind | `science-and-math` | `consciousness`, `ai`, `physics`, `mathematics` |
| Death's End | `science-fiction` | `cosmic-sf`, `hard-sf`, `series` |
| Bullshit Jobs | `politics-and-society` | `labor`, `anthropology`, `capitalism`, `social-critique` |
| Gone Girl | `thriller-mystery-horror` | `psychological-thriller`, `crime`, `marriage` |
| Guns, Germs and Steel | `history-and-civilization` | `world-history`, `geography`, `civilization` |
| Rendezvous With Rama | `science-fiction` | `hard-sf`, `first-contact`, `big-dumb-object`, `classic` |
| How to Lie with Statistics | `science-and-math` | `statistics`, `critical-thinking`, `data-literacy` |
| 100 Years of Solitude | `literary-fiction` | `magical-realism`, `family-saga`, `nobel-author`, `classic` |
| Who Owns the Future | `technology-and-society` | `internet`, `economics`, `data`, `platforms` |
| Slaughterhouse Five | `literary-fiction` | `war`, `satire`, `time-travel`, `modern-classic` |
| If This Isn't Nice, What Is | `biography-and-memoir` | `lectures`, `essays`, `writing`, `kurt-vonnegut` |
| Cloud Atlas | `literary-fiction` | `experimental`, `nested-narrative`, `speculative`, `historical` |
| The Dictator's Handbook | `politics-and-society` | `power`, `institutions`, `political-science`, `incentives` |
| House of Leaves | `thriller-mystery-horror` | `experimental`, `horror`, `weird-fiction`, `ergodic` |
| Grasp | `psychology-and-cognition` | `learning`, `education`, `cognition` |
| Can't Hurt Me | `self-development` | `memoir`, `resilience`, `performance` |
| Let's Talk Money | `economics-and-finance` | `personal-finance`, `india`, `money` |
| Holy Cow! | `history-and-civilization` | `travel`, `india`, `culture`, `memoir` |
| Fahrenheit 451 | `science-fiction` | `dystopia`, `censorship`, `classic` |
| The Undercover Economist | `economics-and-finance` | `economics`, `incentives`, `popular-economics` |
| Embassytown | `science-fiction` | `linguistic-sf`, `first-contact`, `weird-fiction` |
| Data and Goliath | `technology-and-society` | `privacy`, `surveillance`, `security`, `data` |
| Ed | `history-and-civilization` | `travel`, `australia`, `culture`, `memoir` |
| Everybody Lies | `technology-and-society` | `data`, `internet`, `behavior`, `social-science` |
| Blindsight | `science-fiction` | `hard-sf`, `first-contact`, `consciousness`, `horror` |
| Echopraxia | `science-fiction` | `hard-sf`, `consciousness`, `biology`, `series` |
| Atlas of AI | `technology-and-society` | `ai`, `politics`, `labor`, `environment` |
| Our Oriental Heritage | `history-and-civilization` | `civilization`, `ancient-history`, `asia`, `series` |

### `_data/books25.yml`

| Book | genre | tags |
|---|---|---|
| Intelligence | `psychology-and-cognition` | `very-short-introduction`, `cognition`, `psychometrics` |
| The Birth and Death of Meaning | `philosophy-and-meaning` | `anthropology`, `death`, `meaning`, `psychology` |
| The Black Swan | `economics-and-finance` | `risk`, `probability`, `uncertainty`, `decision-making` |
| The Science of Interstellar | `science-and-math` | `physics`, `relativity`, `film`, `popular-science` |
| Children of Time | `science-fiction` | `evolution`, `space-opera`, `uplift`, `series` |
| The Argumentative Indian | `history-and-civilization` | `india`, `essays`, `culture`, `politics` |
| The Elegant Universe | `science-and-math` | `physics`, `string-theory`, `popular-science` |
| Reincarnation Blues | `literary-fiction` | `speculative`, `afterlife`, `humor`, `novel` |
| The Boy Who Could Change the World | `technology-and-society` | `collected-writings`, `internet`, `activism`, `copyright` |
| Children of Men | `science-fiction` | `dystopia`, `social-collapse`, `novel` |
| The Fourth Age | `technology-and-society` | `ai`, `future`, `automation`, `technology-history` |
| Ra | `science-fiction` | `rationalist-fiction`, `magic-system`, `web-fiction` |
| Complications | `medicine-and-health` | `medicine`, `essays`, `surgery`, `clinical-practice` |
| AI Superpowers | `technology-and-society` | `ai`, `china`, `economics`, `future-of-work` |
| Islam | `philosophy-and-meaning` | `religion`, `very-short-introduction`, `history` |
| Prisoners of Geography | `history-and-civilization` | `geopolitics`, `maps`, `geography` |
| The Accidental Billionaires | `biography-and-memoir` | `facebook`, `startup`, `business`, `narrative-nonfiction` |
| The Knowledge Illusion | `psychology-and-cognition` | `cognition`, `collective-intelligence`, `decision-making` |
| The Scientific Revolution | `science-and-math` | `history-of-science`, `very-short-introduction`, `early-modern` |
| The Stranger | `literary-fiction` | `existentialism`, `absurdism`, `classic`, `novella` |
| The Information | `technology-and-society` | `information-theory`, `history-of-science`, `communication` |
| The Code Breaker | `biography-and-memoir` | `biography`, `biology`, `crispr`, `science-history` |
| The Maniac | `literary-fiction` | `historical-fiction`, `science`, `von-neumann`, `ai` |
| Project Hail Mary | `science-fiction` | `hard-sf`, `first-contact`, `space`, `problem-solving` |

### `_data/books26.yml`

| Book | genre | tags |
|---|---|---|
| Weapons of Math Destruction | `technology-and-society` | `algorithms`, `data`, `inequality`, `statistics` |
| ಕರ್ವಾಲೋ (Karvaloo) | `literary-fiction` | `kannada`, `nature`, `adventure`, `science-fiction` |
| There is no Antimemetics Division | `science-fiction` | `horror`, `weird-fiction`, `memory`, `scp` |
| Leviathan Wakes | `science-fiction` | `space-opera`, `solar-system`, `series`, `detective` |
| Notes from the End of Everything | `philosophy-and-meaning` | `existentialism`, `illness`, `death`, `fiction` |
| Sublimia Syndrome | `science-fiction` | `philosophical-sf`, `speculative`, `exurb1a` |

## Migration Notes

1. Replace `genres: [general]` with exactly one primary shelf from this doc.
2. Add `tags` for facets. Your current templates will ignore `tags`, but they are future-proof for search/filtering.
3. Normalize spelling and whitespace: lowercase slugs, no trailing spaces, no title-case values like `Discipline`.
4. Keep language as a tag, not a primary genre: `tags: [kannada]`.
5. If a book feels split across two shelves, choose the shelf someone would browse for it under and put the second identity in `tags`.
