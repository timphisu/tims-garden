---
created: 202602031521
reviewed: 2026-02-03
tags:
  - math/concept
---

> [!definition]
> A *permutation* of a set of distinct objects is an ordered arrangement of these objects. An ordered arrangement of $r$ elements of a set is called an *$r$-permutation*

The number of $r$-permutations of a set with $n$ elements is denoted by $P(n, r)$ 
### Examples of Permutations

For the set $S = \{ 1, 2, 3 \}$. The ordered arrangement $3, 1, 2$ is a permutation of $S$, and the ordered arrangement $3, 2$ is a $2$-permutation of $S$.

**Problem:** How many ways can we select three students from a group of five students to stand in line for a picture?

**Approach:** Note that the order in which we select the students matters. There are five different students we could pick from the pool to assign at the start of the line. Once this student has been selected, we can't reuse that same student for the second position (decreasing the available pool to pick from). So there are four different students available to pick for the second spot. And then for the third spot, there are three remaining students to pick from. By the product rule, there are $5 \cdot 4 \cdot 3 = 60$ ways to select three students from a group of five students to stand in line for a picture. 

> [!thought]
> The [[Product Rule|product rule]] results in a decreasing sequence of options when counting permutations because it represents *selection without replacement*. Each item an item is placed in a specific position, it cannot be used again for subsequent positions, reducing the total available pool by one for the next step.

Let $S = \{ a, b, c \}$. The 2-permutations of $S$ are the ordered arrangements $(a, b), (a, c), (b, a), (b, c), (c, a), (c, b)$. Generally, there are six 2-permutations for a set with three elements. That is because there are three ways to choose the first element of the arrangement, and two ways to choose the second element of the arrangement (since it's different from the first element). By the product rule, we see that $P(3, 2) = 3 \cdot 2 = 6$. 

### Formula for Counting Permutations

>[!theorem]
> If $n$ is a positive integer and $r$ is an integer with $1 \leq r \leq n$, then there are $$P(n, r) = n(n-1)(n-2)\dots(n-r+1)$$
$r$-permutations of a set with $n$ distinct elements

> See that if we were interested in the count of ordered arrangements of $n$ with length $n$, then the count becomes $P(n, n) = n!$
#### Intuition

Why would we stop at $(n-r+1)$? If we visualize the process of counting permutations as filling slots. Really we're asking, "How many ways can we fill $r$ distinct positions with $n$ available objects?"

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

### More Examples of Counting Permutations

**Problem:** Suppose that a saleswoman has to visit eight different cities. She must begin her trip in a specified city, but she can visit the other seven cities in any order she wishes. How many possible orders can the saleswoman use when visiting these cities?

**Approach:** Since the first city is determined, all ordered arrangements begin with the first city and there are no deviations for the first slot. But, the remaining seven can be ordered arbitrarily, meaning the number of possible paths is the number of permutations of 7 elements. That means there are $7! = 7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 5040$ ways for the saleswoman to choose her tour.

**Problem**: How many permutations of the letters $ABCDEFGH$ contain the string $ABC$ ?

**Approach**: Because the letters $ABC$ must occur as a block, we must see $ABC$ as its own object. We can find the answer to this problem by finding the number of permutations of six objects, namely, the block $ABC$ and the individual letters $D, E, F, G, H$. Because these six objects can occur in any order, there are $6! = 720$ permutations of the letters $ABCDEFGH$ in which $ABC$ occurs as a block.