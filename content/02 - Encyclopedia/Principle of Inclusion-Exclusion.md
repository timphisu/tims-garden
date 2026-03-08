---
created: 202602212001
reviewed: 202602212001
tags:
  - math/theorem
  - math/problems
  - math/topic/set-theory
  - math/topic/counting
---
## Formula for Counting Union of Sets

> [!theorem]
> To find the cardinality of the union of two sets:
> $$|A \cup B| = |A| + |B| - |A \cap B|$$

> See [[Cardinality of Sets]] to understand this theorem
### Intuition

The reasoning here is that $|A|$ + $|B|$ counts each elements that is in $A$ but not in $B$ or in $B$ but not in $A$ exactly once, and also each element each is in both $A$ and $B$ exactly twice. Thus, if the number of elements that are in both $A$ and $B$ is subtracted from $|A| + |B|$, elements in $A \cap B$ will be counted only once