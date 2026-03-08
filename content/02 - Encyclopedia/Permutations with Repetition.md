---
created: 202603071344,
reviewed: 202603071344
tags:
  - math/concept
  - math/topic/counting
  - math/theorem
---

### Counting Permutations when Repetition is Allowed

> [!theorem]
> The number of $r$-permutations of a set of $n$ objects with repetition allowed is $n^{r}$.

### Examples of Permutations with Repetition

**Problem:** How many strings of length $r$ can be formed from uppercase and lowercase letters of the English alphabet?

**Approach:** Since there are $26 + 26 = 52$ ways to choose both uppercase and lowercase letters, and we can use them repeatedly for $1, 2, 3, ... , r$ placements in some sequence. So, there are $52 \cdot 52 \cdot 52 ... 52 = 52^{r}$ strings of uppercase and lowercase letters. 

**Problem:** How many ways are there to choose 10 items from 6 distinct items when the items in the choices are ordered and repetition is allowed?

Since each of the 10 placements has 6 choices, then there are ${10}^{6}$ ways to arrange such a sequence.

## Permutations with Indistinguishable Objects
### Formula

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