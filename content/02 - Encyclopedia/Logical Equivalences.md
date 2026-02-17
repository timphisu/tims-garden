---
created: 202602101322
reviewed: 2026-02-10
tags:
  - math/concept
---

For compound propositions $p$ and $q$, when truth values for all possible cases of $p$ are equal to values of $q$, then we say they are **logically equivalent**

Regardless of the truth values of the propositions inside, a compound statement can be identified as the following based on their truth values for all possible cases

| Term              | Definition   |
| ----------------- | ------------ |
| **Tautology**     | always true  |
| **Contradiction** | always false |
| **Contigency**    | neither      |

#### Example 1.3.1

##### Problem

Show that the converse is logically equivalent to the inverse, that is, $(q \to p) \equiv (\neg p \to \neg q)$
##### Approach

We construct a truth table to find all possible cases of the converse and the inverse.

| $$p$$ | $$q$$ | $$\neg p$$ | $$\neg q$$ | $$q \to p$$ | $$\neg p \to \neg q$$ |
| ----- | ----- | ---------- | ---------- | ----------- | --------------------- |
| T     | T     | F          | F          | T           | T                     |
| T     | F     | F          | T          | T           | T                     |
| F     | T     | T          | F          | F           | F                     |
| F     | F     | T          | T          | T           | T                     |

Since all truth values are the same for the last two columns, then the two statements are logically equivalent

Moreover, the inverse is the contrapositive of the converse.

### [[De Morgan's Laws]]

![[De Morgan's Laws]]

### [[Equivalence Laws]]

![[Equivalence Laws]]


### [[Constructing New Equivalences (Proof-Style)]]

![[Constructing New Equivalences (Proof-Style)]]
