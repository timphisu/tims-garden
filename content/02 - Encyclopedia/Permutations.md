---
created: 202602162300
reviewed: 202602162300
tags:
  - math/concept
---

# Permutations

## Definition

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

## Permutations with Repetition

### Counting Permutations when Repetition is Allowed

> [!theorem]
> The number of $r$-permutations of a set of $n$ objects with repetition allowed is $n^{r}$.

### Examples of Permutations with Repetition

**Problem:** How many strings of length $r$ can be formed from uppercase and lowercase letters of the English alphabet?

**Approach:** Since there are $26 + 26 = 52$ ways to choose both uppercase and lowercase letters, and we can use them repeatedly for $1, 2, 3, ... , r$ placements in some sequence. So, there are $52 \cdot 52 \cdot 52 ... 52 = 52^{r}$ strings of uppercase and lowercase letters. 

**Problem:** How many ways are there to choose 10 items from 6 distinct items when the items in the choices are ordered and repetition is allowed?

Since each of the 10 placements has 6 choices, then there are ${10}^{6}$ ways to arrange such a sequence.

## Permutations with Indistinguishable Objects
### Formula for Permutations with Indistinguishable Objects

> [!theorem]
> The number of different permutations of $n$ objects, where there are $n_{1}$ indistinguishable objects of type 1, $n_{2}$ indistinguishable objects of type 2, $...$, and $n_{k}$ indistinguishable objects of type $k$, is
> 
> $$
> \frac{n!}{n_{1}!n_{2}!\cdots n_{k}!}
> $$
> 

#### Proof

For $n$-permutations, there are $C(n, n_{1})$ ways to assign positions of the arrangement to $n_{1}$ items of type 1, which leaves $n-n_{1}$ positions free. Then there are $C(n-n_{1}, n_{2})$ ways to assign $n_{2}$ items of type 2, leaving $n - n_{1} - n_{2}$ positions free. If we keep placing these assignments to type 3, ..., type $k-1$ until the last stage where $n_{k}$ objects of type $k$ can be placed in $C(n-n_{1}-n_{2}-\cdots-n_{k-1}, n_{k})$ ways. 

By the [[Product Rule]], the total number of different permutations is

$$
\begin{align}
 & C(n, n_{1}) \cdot C(n-n_{1}, n_{2})  \cdots C(n-n_{1}- \cdots - n_{k-1}, n_{k}) \\  \\
  & = \frac{n!}{n_{1}!(n-n_{1})!} \cdot \frac{(n-n_{1})!}{n_{2}!(n-n_{1}-n_{2})!} \cdots \frac{(n-n_{1}-\cdots-n_{k-1})!}{n_{k}!(n-n_{1}-\cdots-n_{k-1}-n_{k})!} \\ \\
   & = \frac{n!}{n_{1}!n_{2}!\cdots n_{k}!}
\end{align}
$$

#### Examples of Permutations with Indistinguishable Objects

**Problem:** How many different strings can be made by reordering the letters of the word $SUCCESS$?

**Approach:** The solution to this problem is not just a 7-letter permutation since some letters in this word are the same. This word contains three $S$'s, two $C$'s, one $U$, and one $E$. Note that we can take inspiration from the [[Combinations#Coin Flip Problem|coin flip problem]] and assign positions of the word to different letters. Where there must be 3 positions for $S$'s, there are $C(7, 3)$ ways to select three positions. Now there are $7-3=4$ positions left and $C(4, 2)$ ways to pick $C$'s. There are $4 - 2 =2$ positions left and we pick one $U$, which gives us $C(2, 1)$. And finally there's one position left and there's $C(1, 1)$ way to do that. By the Product Rule, there are

$$
\begin{align}
C(7, 3) \cdot C(4, 2) \cdot C(2, 1) \cdot C(1, 1)  & = \frac{7!}{3!4!} \cdot \frac{4!}{2!2!} \cdot \frac{2!}{1!1!} \cdot \frac{1!}{1!0!} \\ \\
 & = \frac{7!}{3!2!1!1!} \\ \\
  & = 420
\end{align}
$$

different strings that can be made.