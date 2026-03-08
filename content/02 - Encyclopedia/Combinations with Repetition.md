---
created: 202603071225,
reviewed: 202603071225
tags:
  - math/concept
  - math/problems
  - math/topic/counting
  - math/theorem
---

#### Counting Combinations when Repetition is Allowed

> [!theorem]
> There are $C(n+r-1, r) = C(n+r-1, n-1)$ $r$-combinations from a set with $n$ elements when repetitions of elements is allowed.

##### Intuition

> For reference, see the [[Combinations#Coin Flip Problem|coin flip problem]]

We can think of organizing our choices for $r$-combinations when repetition is allowed as a list of $r$ elements, denoted as `*` stars, where there are $n-1$ bars to divide each choice into their respective category-group. 

For example, a 6-combination from 3 groups can represented as 6 stars divided by $3-1=2$ bars. 

$$
**|***|*
$$

We can index the positions of the stars in the list, or conversely, the positions of the bars in the list. In the above example, the positions of the stars can be represented as the set of numbers $\{ 1, 2, 4, 5, 6, 8 \}$, where there are $6 + 3 - 1 = 8$ total positions (slots) to assign. 

So more generally, we can say if these are $n$ groups or types (more formally called *distinguishable objects*) to choose from for a $r$-combination where repetition is allowed, then there are $C(n+r-1, r)$ ways to assign the positions of the $r$-stars in an ordered list divided by $n-1$ bars.. Conversely, there are $C(n+r-1, n-1)$ ways to assign positions to $n-1$ bars. 

This is because there are $n+r-1$ positions and we can represent the star's index positions of the ordered list  as a set which form as a [[Subsets|subset]] of the full set of indexed positions $\{ 1, 2, 3, ..., n+r-1 \}$. [[Combinations#Formula for Counting Combinations|Combination formulas]] can be used to count how many ways we can assign positions to stars or bars. 

##### Examples of Counting Combinations with Repetition Allowed

**Problem:** Suppose that a cookie shop has four different kinds of cookies. How many different ways can six cookies be chosen? Assume that only the type of cookie, and not the individual cookies or the order in which they are chosen, matters.

**Approach:** The number of ways to choose six cookies is the number of 6-combinations of a set with four elements. From using the formula, this equals $C(6 + 4 -1, 6) = C(9, 6) = 84$.

##### Counting Non-Negative Solutions to Linear Equations

**Problem:** How many solution does the equation

$$
x_{1} + x_{2} + x_{3} = 11
$$

have, where $x_{1}, x_{2}, x_{3}$ are nonnegative integers?

**Approach:** To count the number of solutions, the solution corresponds to a way of selecting 11 items from a set of three elements so that $x_{1}$ of type one, $x_{2}$ items from type two, and $x_{3}$ items of type three are chosen. Hence, the number of solutions is equal to the number of 11-combinations with repetition allowed from a set with three elements. There are

$$
C(11 + 3 - 1, 11) = C(13, 11) = \frac{13 \cdot 12}{2 \cdot 1} = 78
$$

solutions.

In the case of counting solutions where $x_{1} \geq 1, x_{2} \geq 2, x_{3} \geq {3}$, a solution of this condition will always have at least one $x_{1}$ of type one, at least 2 $x_{2}$ items of type two, and at least 3 $x_{3}$ items of type three. That gives us $11-6=5$ possible items to choose from 3 different types. That means the number of solutions corresponds to the number of $5$-combinations choosing from a set with 3 elements where repetition is allowed.

$$
C(3 + 5 - 1, 5) = C(7, 5) = \frac{7 \cdot 6 }{2 \cdot 1} = 21
$$