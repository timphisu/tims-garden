---
created: 202602101322
reviewed: 2026-02-10
tags:
  - math/theorem
---

$$
\begin{align}

\end{align}
$$
Here we have the following important equivalence laws

| Name                | Equivalence                                                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identity Laws       | $$\begin{align} & p \land \mathbf{T} \equiv p \\ & p \lor \mathbf{F} \equiv p \end{align}$$                                                        |
| Domination Laws     | $$ \begin{align} & p \lor \mathbf{T} \equiv \mathbf{T} \\ & p \land \mathbf{F} \equiv \mathbf{F} \end{align}$$<br><br>                             |
| Idempotent Laws     | $$\begin{align}  & p \lor p \equiv p \\ & p \land p \equiv p \end{align}$$                                                                         |
| Double Negation Law | $$ \begin{align} \neg (\neg p) \equiv p\end{align} $$                                                                                              |
| Commutative Laws    | $$\begin{align} p \lor q \equiv q \lor p \\ p \land q \equiv q \land p \end{align}$$                                                               |
| Associative Laws    | $$\begin{align} & (p \lor q) \lor r \equiv p \lor (q \lor r) \\ & (p \land q) \land r \equiv p \land (q \lor r) \end{align}$$                      |
| Distributive Laws   | $$ \begin{align} & p \lor (q \land r) \equiv (p \lor q) \land (p \lor r) \\ & p \land (q \lor r) \equiv (p \land q) \lor (p \land r) \end{align}$$ |
| De Morgan's Laws    | $$\begin{align} & \neg (p \land q) \equiv \neg p \lor \neg q \\ & \neg (p \lor q) \equiv \neg p \land \neg q \end{align}$$                         |
| Absorption Laws     | $$\begin{align} p \lor (p \land q) \equiv p \\ p \land (p \lor q) \equiv p \end{align}$$                                                           |
| Negation Laws       | $$\begin{align} p \lor \neg p \equiv \mathbf{T} \\ p \land \neg p \equiv \mathbf{F}\end{align}$$                                                   |

The following involves *conditional statements*

| Equivalences                                           |
| ------------------------------------------------------ |
| $$p \to q \equiv \neg p \lor q$$                       |
| $$p \to q\equiv \neg q \to \neg p$$                    |
| $$p \lor q \equiv \neg p \to q$$                       |
| $$p \land q \equiv \neg(p \to \neg q)$$                |
| $$\neg (p \to q) \equiv p \land \neg q$$               |
| $$(p \to q) \land (p \to r) \equiv p \to (q \land r)$$ |
| $$(p \to r) \land (q \to r) \equiv (p \lor q) \to r$$  |
| $$(p \to q) \lor (p \to r) \equiv p \to (q \lor r)$$   |
| $$(p \to r) \lor (q \to r) \equiv (p \land q) \to r$$  |

The following are logical equivalences involving *biconditional statements*

| Equivalences                                                           |
| ---------------------------------------------------------------------- |
| $$p \leftrightarrow q \equiv (p \to q) \land (q \to p)$$               |
| $$p \leftrightarrow q \equiv \neg p \leftrightarrow \neg q$$           |
| $$p \leftrightarrow q \equiv (p \land q) \lor (\neg p \land \neg q) $$ |
| $$ \neg (p \leftrightarrow q) \equiv p \leftrightarrow \neg q$$        |

#### Example 1.3.3

##### Problem

Show that $p \lor (q \land r)$ and $(p \lor q) \land (p \lor r)$ are logically equivalent. This is the *distributive law* of disjunction over conjunction

##### Approach

Construct a [[Truth Tables|truth table]] by beginning to create the possible truth-false combinations we can make among the three propositional variables $p, q, r$

Then the conjunctives and disjunctive statements are added which we use to construct the more complex compound statements in the last columns


| $$p$$ | $$q$$ | $$r$$ | $$p \lor q$$ | $$q \land r$$ | $$p \lor r$$ | $$p \lor (q \land r)$$ | $$(p \lor q) \land (p \lor r)$$ |
| ----- | ----- | ----- | ------------ | ------------- | ------------ | ---------------------- | ------------------------------- |
| T     | T     | T     | T            | T             | T            | T                      | T                               |
| T     | T     | F     | T            | F             | T            | T                      | T                               |
| T     | F     | T     | T            | F             | T            | T                      | T                               |
| T     | F     | F     | T            | F             | T            | T                      | T                               |
| F     | T     | T     | T            | T             | T            | T                      | T                               |
| F     | T     | F     | T            | F             | F            | F                      | F                               |
| F     | F     | T     | F            | F             | T            | F                      | F                               |
| F     | F     | F     | F            | F             | F            | F                      | F                               |

Since all truth values agree, then the compound propositions are logically equivalent