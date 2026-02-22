---
created: 202602212001
reviewed: 202602212001
tags:
  - math/definition
---

> [!definition]
> Let $A$ and $B$ be sets. The *difference* of $A$ and $B$, denoted by $A - B$, is the set containing those elements that are in $A$ but not in $B$. The difference of $A$ and $B$ is also called the *complement of $B$ with respect to $A$*.

An element $x$ belongs to the difference of $A$ and $B$ if and only if $x \in A$ and $x \not\in B$. This tells us that

$$
A - B = \{ x \ | \ x \in A \land x \not\in B \}
$$
![[Pasted image 20260119114627.png|300]]


#### Examples

The difference of $\{ 1, 3, 5 \}$ and $\{ 1, 2, 3 \}$ is the set $\{ 5 \}$, which is, 

$$
\{ 1, 3, 5 \} - \{ 1, 2, 3 \} = \{ 5 \}
$$

However, this is not the same result for the difference

$$
\{ 1, 2, 3 \} - \{ 1, 3, 5 \} = \{ 2 \}
$$

The difference of the set of computer science majors at my school and the set the mathematics majors at my school is the set of all computer science majors at my school who are not also math majors.
#### Complement

Once the universal set $U$ has been specified, the *complement* of a set can be defined.

> [!definition]
> Let $U$ be the universal set. The *complement* of the set $A$, denoted by $\bar{A}$, is the complement of $A$ with respect to $U$. Therefore, the complement of the set $A$ is $U-A$

![[Pasted image 20260119115623.png|300]]