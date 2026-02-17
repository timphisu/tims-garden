---
created: 202602031740
reviewed: 2026-02-03
tags:
  - math/concept
---
# Combinations

## Definition

> [!definition]
> An *$r$-combination* of elements of a set is an <u>unordered selection</u> of $r$ elements from the set. Thus, an $r$-combination is simply a [[2.1 - Sets#Subsets|subset]] of the set with $r$ elements. The number of $r$-combinations of a set with $n$ distinct elements is denoted by $C(n, r)$ or also denoted by $\binom{n}{r}$ and is called the **binomial coefficient**.

## Examples of Combinations

Let $S$ be the set $\{ 1, 2, 3, 4 \}$. Then $\{ 1, 3, 4 \}$ is a 3-combination from $S$. Note that $\{ 4, 1, 3 \}$ is the same 3-combination as $\{ 1, 3, 4 \}$, since order of elements does not matter for sets.

We see that $C(4, 2)=6$ because the 2-combinations of $\{ a, b, c, d \}$ are the six subsets $\{ a, b \}, \{ a, c \}, \{ a, d \}, \{ b, c \}, \{ b, d \}, \{ c, d \}$

### Counting Poker Hands

**Problem**: How many poker hands of five cards can be dealt from a standard deck of 52 cards? Also, how many ways are there to select 47 cards from a standard deck of 52 cards?

**Approach**: Because the order in which the five cards are dealt from a deck of 52 cards does not matter, there are 

$$
C(52, 5) = \frac{52!}{5!47!}
$$

different hands of five cards that can be dealt. To compute the value of $C(52, 5)$, first divide the numerator and denominator by $47!$ to obtain 

$$
\begin{align}
C(52, 5)  & = \frac{52 \cdot 51 \cdot 50 \cdot 49 \cdot 48}{5 \cdot 4 \cdot 3 \cdot 2 \cdot 1} \\ \\
 & = 26 \cdot 17 \cdot 10 \cdot 49 \cdot 12 \\ \\
 & = 2, 598, 960
\end{align}
$$

Note that there are 

$$
C(52, 47) = \frac{52!}{47!5!}
$$

different ways to select 47 cards from a standard deck of 52 cards. We do not need to compute this value because $C(57, 47) = C(52, 5)$ due to commutativity of multiplication in the denominator. 

### Coin Flip Problem

**Problem:** A coin is flipped eight times where each flip comes up either heads or tails. How many possible outcomes 

1. are there in total?
2. contain exactly three heads?
3. contain at least three heads?

**Approach:** 

*For the first problem*

For each flip there are 2 outcomes, and doing that 8 times would yield $2^8=256$ possible outcomes for sequences of 8 flips.

*For the second problem*

A sequence like $HTTHTHTT$ represents the outcomes for each flip of 8; that would make this an ordered arrangement (permutation). However, if we view the sequence of flips as a collection of individual outcomes, then $S = \{ 1, 2, 3, 4, 5, 6, 7, 8 \}$ represents that collection. A [[Subsets|subset]] of $S$, for example $H = \{ 1, 3, 5 \}$ represents the flips out of 1-8 that were heads (conversely $T = \{ 2, 4, 6, 7, 8 \}$ would represent flips that were tails). In this problem, we are interested in $H \subseteq S$ where $|H| = 3$. We can count this by $C(8, 3) = \frac{8!}{3!5!}= 56$. So there are 56 outcomes that contain exactly 3 heads. 

> See [[Cardinality of Sets|set cardinality]] for more on the count of elements within a set

*For the third problem*

When asked "at least", we are being asked to count the subsets of $S$ that have 3 elements or more and at most 8. Let's denote this count as $N$. More concretely,

$$
N = \sum_{j=3}^{8} C(8, j)
$$

* where $j$ represents the number of heads in the sequence of 8 flips

But computing this by hand would mean computing combinations 6 times. Rather, we can use the [[complement strategy]] by taking the total possible ways and subtracting the negation of the condition to get the exact count of ways that satisfy the condition. We can ask, "How many possible outcomes are there less than 3 heads, that is, at most 2 heads?", and then subtract that count to find the count of outcomes that do contain at least 3 heads. 

We can compute this as

$$
\begin{align}
 N &= 256 - \sum_{j=0}^{2}C(8, j) \\ \\
 & = 256 - \left( C(8, 0) + C(8, 1) + C(8, 2) \right) \\ \\
 & = 256 - \left( \frac{8!}{0!8!} + \frac{8!}{1!7!} + \frac{8!}{2!6!} \right ) \\  \\
 & = 256 - (1 + 8 + 28) \\ \\
 & = 256 - 37 \\  \\
 & = 219
\end{align}
$$

which as you can see only needs three combinatoric computations rather than 6. 

So there are 219 possible outcomes that contain at least three heads.

## Formula for Counting Combinations

> [!theorem]
> The number of $r$-combinations of a set with $n$ elements, where $n$ is a nonnegative integer and $r$ is an integer with $0 \leq r \leq n$, is precisely
> $$
> C(n, r) = \frac{n!}{r!(n-r)!}
> $$
> 

### Intuition

Imagine you want to create a 3-permutation of the letters $\{ A, B, C, D, E \}$. You'd need to do a 2-step process of first picking then arranging objects. 

1. The Selection ($r$-combination)

	First, you reach into the bag and grab a handful of 3 letters. you don't care how they land in your hand; you just care *which* ones you got. Let's say you picked $\{ A, B, C \}$. This is $C(n, r)$

2.  The Arrangement ($r$-permutation)

	Then, you take that specific handful $\{ A, B, C \}$ and lay them out on a table in every possible order. You can arrange those letters in $3!$ ways, or $r!$. You would get: $ABC, ACB, BCA, CAB, CBA$.

Hence, the total number of [[Permutations|permutations]] is simply the number of combinations multiplied by the number of ways to arrange each one.

$$
P(n, r) = C(n, r) \cdot r!
$$

### Proof 

The $P(n, r)$ $r$-permutations of the set can be obtained by forming the $C(n, r)$ $r$-combinations of the set, and then ordering the elements in each $r$-combination, which can be done in $P(r, r)$ ways. 

Thus, by the product rule,
$$
\begin{align} \\
 P(n, r)  & = C(n, r) \cdot P(r, r) \\ \\
 & = C(n, r) \cdot r!
\end{align}

$$

Wherefore the [[Division Rule|division rule]] states that since order does not matter, there are $r!$ identical ways to order a combination. This implies that

$$
\begin{align}
C(n, r)  & = \frac{P(n, r)}{r!}  \\
 \\
 & = \frac{n!}{r!(n-r)!}
\end{align}
$$


## Symmetry Property of Counting Combinations

> [!theorem] Corollary 
> Let $n$ and $r$ be nonnegative integers with $r \leq n$. Then $C(n, r) = C(n, n-r)$

