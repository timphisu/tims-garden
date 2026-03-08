---
created: 202603071235,
reviewed: 202603071235
tags:
  - math/topic/set-theory
  - math/building-blocks
  - math/concept
  - math/topic/counting
---

> [!definition]
> Let $A$ and $B$ be sets. The *intersection* of the sets $A$ and $B$, denoted by $A \cap B$, is the set containing those elements in both $A$ and $B$.

An element $x$ belongs to the intersection of the sets $A$ and $B$ if and only if $x$ belongs $A$ and $x$ belongs $B$. This tells us that

$$
A \cap B = \{ x \ | \ x \in A \land x \in B \}
$$

![[Pasted image 20260119113119.png|300]]

#### Example of Intersecting Sets

The intersection of the sets $\{ 1, 3, 5 \}$ and $\{ 1, 2, 3 \}$ is the set $\{ 1, 3 \}$. That is, 

$$
\{ 1, 3, 5 \} \cap \{  1, 2, 3 \} = \{ 1, 3 \}
$$

The intersection of the set of all computer science majors at your school and the set of all mathematics majors is the set of all students who are *joint* majors in mathematics and computer science.

> [!note]
> Two sets are called **disjoint** if the intersection is the empty set

Let $A = \{ 1, 3, 5, 7, 9 \}$ and $B = \{ 2, 4, 6,8, 10 \}$. Because $A \cap B = \varnothing$, $A$ and $B$ are *disjoint*.