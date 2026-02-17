---
created: 202602031635
reviewed: 2026-02-03
tags:
  - math/concept
---

> [!definition]
> Let $S$ be a set. If there are exactly $n$ distinct elements in $S$ where $n$ is a nonnegative integer, we say $S$ is a *finite set* and that $n$ is the **cardinality** of $S$. The cardinality of $S$ is denoted $|S|$ 

### Examples

* Let $S$ be the set of letters in the English alphabet. Then $|S|=26$

* Because the empty set has no elements, then $|\varnothing| = 0$ 

* However, the set of positive integers is infinite

### Power Sets

> [!definition]
> Given a set $S$, the *power set* of $S$ is the set of all subsets of the set $S$, that is, all possible combinations of subsets within $S$. The power set of $S$ is denoted by $P(S)$

#### Examples

##### Problem 1

What is the power set of the set $\{ 0, 1, 2 \}$?
##### Approach

The power set $P(\{ 0, 1, 2 \})$ is the set of all subsets of $\{ 0, 1, 2 \}$.

Thus,

$$
P(\{ 0, 1, 2 \}) = \{ \varnothing, \{ 0 \}, \{ 1 \}, \{ 2 \}, \{ 0, 1 \}, \{ 0, 2\}, \{ 1, 2 \}, \{ 0, 1, 2 \} \}
$$

---
##### Problem 2

What is the power set of the empty set?
##### Approach

The empty set has exactly one subset which is itself. 

Consequently, 

$$
P(\varnothing) = \{ \varnothing \}
$$