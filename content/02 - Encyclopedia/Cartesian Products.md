---
created: 202602031635
reviewed: 2026-02-03
tags:
  - math/building-blocks
  - math/topic/set-theory
---

While sets are unordered, **ordered n-tuples** represent collections that are ordered

> [!definition]
> The *ordered $n$-tuple* $(a_1, a_2, \dots, a_n)$ is the ordered collection that has $a_i$ as its $i$-th element for $i = 1, 2, \dots, n$

Two ordered $n$-tuples are equal precisely when each corresponding pair of elements are equal. 

$$
(a_1, a_2, \dots, a_n) = (b_1, b_2, \dots, b_n) \iff a_i = b_i\ \forall i = 1, \dots, n
$$

Ordered 2-tuples are called **ordered pairs**

> [!definition]
> Let $A$ and $B$ be sets. The **Cartesian product** of $A$ and $B$, denoted $A \times B$, is the set of ordered pairs $(a, b)$ where $a \in A$ and $b \in B$.
> 
> That is,
> $$
>A \times B = \{ (a, b) \ | \ a \in A \land b \in B \}
> $$

Note that $A \times B \ne B \times A$  unless $A = B = \varnothing$

#### Examples

##### Problem

What is the Cartesian product of $A = \{ 1, 2 \}$ and $B = \{ a, b, c \}$?
##### Approach

The Cartesian product of $A \times B$ is 

$$
A \times B = \{ (1, a), (1, b), (1, c), (2, a), (2, b), (2, c) \}
$$

We can extend the definition of *Cartesian products* for sets of three or more 

![[Pasted image 20260114195413.png]]