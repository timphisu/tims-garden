---
created: 202602150959
reviewed: 202602150959
tags:
  - math/problems
aliases:
---
# Counting with Disjoint Subsets

## "At Least / At Most" Formula

I generalized an observation I noticed with having to deal with "at least", "more than", "less than", or "at most" problems where you were forming a group but choosing from two different groups like forming a 6-member committee and choosing between men and women.

> [!theorem]
> Let $S_{1}$ and $S_{2}$ be sets such that $S_{1} \cap S_{2} = \varnothing$. The number of $r$-combinations that contain *at least* $n$ elements of $S_{1}$ or conversely *at most* $r-n$ elements of $S_{2}$ is given by
> 
> $$
> {\sum_{j=n}^{r} \binom{|S_{1}|}{j} \binom{|S_{2}|}{r-j} = \sum_{k=0}^{r-n} \binom{|S_{1}|}{r-k} \binom{|S_{2}|}{k}}
> $$

> See [[Combinations]] on how to compute the binomial and [[Cardinality of Sets]] for understanding $|S_{1}|, |S_{2}|$

## Examples of Counting with Disjoint Sets

**Problem:** Suppose that a department contains 10 men and 15 women. How many ways are there to form a committee with six members if it must have more women than men? 

**Approach:** There are various possibilities that would satisfy the case of a group of 6 committee members having more women than men: A group of 6 women and no men, a group of 5 women and 1 man, and a group of 4 women and 2 men (A group of 3 women and 3 men mean there's an equal amount ofGeneralized men versus women).  

We can count how many various combinations of women form subgroups (6, 5, 4) of 6, but to that, we also can find various combinations of men that form complements to those subgroups (respectively 0, 1, 2). By the [[Product Rule]], we must *multiply* combinations together to form total combinations that are formed from the combinations of subgroups.

* There are $C(15, 6) = 5005$ ways to combine combinations of 6 from 15 different women and there is only $C(10, 0)=1$ to arrange 0 men out of 10. So there are $C(15, 6)\cdot C(10, 0) = 5005$ ways to get a group of 6 with all women.

* For 5 women and 1 man, there are $C(15, 5) = 3003$ ways to pick 5 women for the first subgroup, and there's one seat remaining for a man where there are $C(10, 1)=10$ ways to pick a man. There are $C(15, 5) \cdot C(10, 1) = 3003 \cdot 10 = 30,030$ different ways to arrange 5 women and 1 man from the available bunch.

* For 4 women and 2 men, there are $C(15, 4) = 1365$ ways to pick a collection of 4 women and there are $C(10, 2) =45$ ways to pick 2 different men for the remaining seats. So in total there are $C(15, 4) \cdot C(10, 2) = 1365 \cdot 45 = 61,425$ different ways to pick 4 women and 2 men together. 

We are indifferent to all three cases which satisfy our counting condition, so by the *sum rule* there must be

$$
5005 + 30,030 + 61,425 = 96,460
$$

various groups of 6 that have more women than men

More compactly, this can be written as

$$
\sum_{j=4}^{6} \binom{15}{j} \binom{10}{6-j}
$$

where

* $j$ represents the number of women in the group of 6 committee chairs

**Problem:** A student club has 8 Computer Science majors and 6 Mathematics majors. You need to form a committee of 5 students. How many ways can this committee be formed if it must contain *more* Computer Science majors than Mathematics majors? 

**Approach:** Let $k$ represent the number of computer science majors in a group. For there to be more CS majors than math majors in a group of 5, there must be 3 computer science majors or more, that is, $3 \leq k \leq 5$. For each group of 5 that contain $k$ computer science majors, there are $\binom{8}{k}$ ways to choose different computer science majors. Moreover, for the $5-k$ remaining slots for this committee, there are $\binom{6}{5-k}$ ways to choose different mathematics majors. Hence, there are

$$
\begin{align}
\sum_{k=3}^{5} \binom{8}{k} \binom{6}{5-k}  & = \binom{8}{3}\binom{6}{2} + \binom{8}{4}\binom{6}{1} + \binom{8}{5}\binom{6}{0} \\ \\
&= \frac{8!}{3!5!} \frac{6!}{2!4!} + \frac{8!}{4!4!} \frac{6!}{1!5!} + \frac{8!}{5!3!} \frac{6!}{0!6!} \\ \\
& = 56 \cdot 15 + 70 \cdot 6 + 56 \cdot 1 \\ \\
 & = 840 + 420 + 56 \\ \\
 & = 1316
\end{align} 
$$

ways to from committees of 5 where there are more computer science majors than math majors.