---
created: 202603071344,
reviewed: 202603071344
tags:
  - math/topic/counting
  - math/theorem
---

>[!theorem]
> If $n$ is a positive integer and $r$ is an integer with $1 \leq r \leq n$, then there are $$P(n, r) = n(n-1)(n-2)\dots(n-r+1)$$
$r$-permutations of a set with $n$ distinct elements

> See that if we were interested in the count of ordered arrangements of $n$ with length $n$, then the count becomes $P(n, n) = n!$
#### Intuition

Why would we stop at $(n-r+1)$? If we visualize the process of counting permutations as filling slots. Really we're asking, "How many ways can we fill $r$ distinct positions with $n$ available objects?".

Suppose you have $r$ empty slots to fill

| Slot   | Objects Available |
| ------ | ----------------- |
| First  | $n-0$             |
| Second | $n-1$             |
| Third  | $n-2$             |
| $r$    | $n-(r-1)$         |

Following this logic for the $r$-th slot, the number of choices remaining is

$$
n - (r-1) \to n - r +1
$$

#### Explicit Formula for Counting Permutations

> [!theorem] Corollary
> If $n$ and $r$ are integers with $0 \leq r \leq n$, then 
> $$
> P(n, r) = \frac{n!}{(n-r)!}
> $$

Interesting results from this formula include

1. $P(n, n) = n!$

2. $P(n, n) = P(n, n-1)$