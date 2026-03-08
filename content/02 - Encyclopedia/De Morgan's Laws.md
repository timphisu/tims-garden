---
created: 202602101321
reviewed: 2026-02-10
tags:
  - math/theorem
  - math/topic/logic
---

$$
\begin{align}
	& \neg (p \land q) \equiv \neg p \lor \neg q \\
	\\
	& \neg (p \lor q) \equiv \neg p \land \neg q
\end{align}
$$

> [!thought]
> What this says is that the negation of a compound statement distributes the negation to both propositions and converts the connective

#### Example 1.3.2

##### Problem

Show that $p \to q$ and $\neg p \lor q$ are logically equivalent, also known as **conditional disjunction equivalence**

##### Approach

We construct a [[Truth Tables|truth table]] to see if all truth tables are equivalent


| $$p$$ | $$q$$ | $$\neg p$$ | $p \to q$ | $$\neg p \lor q$$ |
| ----- | ----- | ---------- | --------- | ----------------- |
| T     | T     | F          | T         | T                 |
| T     | F     | F          | F         | F                 |
| F     | T     | T          | T         | T                 |
| F     | F     | T          | T         | T                 |

As we can see, the truth values agree with each other

Therefore, $p \to q \equiv \neg p \lor q$