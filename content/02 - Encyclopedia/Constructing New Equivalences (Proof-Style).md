---
created: 202602101322
reviewed: 2026-02-10
tags:
  - math/concept
---

#### Example 1.3.4

##### Problem

Show that $\neg (p \to q)$ and $p \land \neg q$ are logically equivalent

##### Approach

We can use the previous laws of logical equivalence to show these statements are logically equivalent in a two-column proof-style

$$
\begin{align}
	& \neg (p \to q) \\ \\& \equiv \neg(\neg p \lor q) & \text{Conditional-Disjunction Equiv.} \\
	\\
	&\equiv \neg(\neg p) \land \neg q & \text{De Morgan's Law} \\
	\\
	& \equiv p \land \neg q & \text{Double Negation Law}
\end{align}
$$

#### Example 1.3.5

##### Problem

Show that $(p \land q) \to (p \lor q)$ is a tautology

##### Approach

$$
\begin{align}
	& (p \land q) \to (p \lor q) \\
	\\
	&\equiv \neg(p \land q) \lor (p \lor q) & \text{Conditional Disjunction} \\
	\\
	&\equiv (\neg p \lor \neg q) \lor (p \lor q) & \text{De Morgan's Law} \\
	\\
	&\equiv (\neg p \lor p) \lor (q \lor \neg q) & \text{Associative \& Commutative} \\
	\\
	&\equiv \mathbf{T} \lor \mathbf{T} & \text{Negation Laws} \\
	\\
	&\equiv \mathbf{T} & \text{Domination Law}
\end{align}
$$

Since all possible truth values of the compound statement are true, then by definition, this statement is a tautology