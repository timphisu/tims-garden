---
created: 202602031357
reviewed: 2026-02-03
tags:
  - math/topic/counting
  - math/theorem
  - math/concept
---

> [!definition]
> If a task can be done either in one of $n_{1}$ ways or in one of $n_{2}$ ways, where none of the set of $n_{1}$ ways is the same as any of the set of $n_{2}$ ways, then there are $n_{1} + n_{2}$ ways to do the task

> What this says is that assuming that there's no commonality shared between two sets, we are indifferent to either so counting both is adding both combinations together.

Generally, the sum rule is just a special case of [[2.2 - Set Operations#Union]] where

$$
| A_{1} \cup A_{2} \cup \ ...\  \cup A_{m}| = |A_{1}| + |A_{2}| + ... + |A_{m}| \quad \text{when}\ A_{i} \cap A_{j} = \varnothing , \forall i \ \forall j
$$

#### Examples of Sum Rule

1. Suppose that either a member of the mathematics faculty or a student who is a mathematics major is chosen as a representative to a university committee. How many different choices are there for this representative if there are 37 members of the mathematics faculty and 83 mathematics majors and no one is both a faculty member and a student?

	Choosing a member of the mathematics faculty is never the same as choosing a student who is a mathematics major because no one is both a faculty. By the *Sum Rule* it follows that there are $37 + 83 = 120$ possible ways to pick this representative.

#### Extension of Sum Rule

> [!info]
> Suppose that a task can be done in one of $n_{1}$ ways, in one of $n_{2}$ ways, or $n_{m}$ ways, where 
> 
> $$
> \forall i\  \forall j, 1 \le i \le j \le m \ | \ \{ n_{i} \} \cap \{ n_{j} \} = \varnothing
> $$
> 
> Then the number of ways to do the task is $n_{1} + n_{2} + ... + n_{m}$

