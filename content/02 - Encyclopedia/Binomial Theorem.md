---
created: 202602051507
reviewed: 2026-02-05
tags:
  - math/theorem
  - math/topic/counting
  - math/topic/algebra
---
# Binomial Theorem

## Definition

> A **binomial** is the sum of the two terms, $x$ and $y$, that is, $x + y$

> [!theorem] Binomial Theorem
> Let $x$ and $y$ be variables, and let $n$ be a nonnegative integer. Then
> $$
> (x+y)^n = \sum_{k=0}^n \binom{n}{k} x^{n-k}y^{k} = \binom{n}{0}x^n + \binom{n}{1}x^{n-1}y + \ \dots \ + \binom{n}{n-1}xy^{n-1} + \binom{n}{n}y^n
> $$ 

### Intuition

Consider the expression $(x+y)^n$

**Problem:** Without expanding, what are the coefficients of its terms? 

**Approach:** The multiplication of these binomial factors results in a series of terms between $x$ and $y$ that have a combined degree of $n$. We <u>choose</u> exactly $k$ $x$'s from each binomial term to form coefficients for the term $x^{k}y^{n-k}$ where $0 \leq k \leq n$ and $y$ contributes to the remaining slots. Due to [[commutativity of multiplication]], the order of choosing $x$'s does not matter and the term $x^{k}y^{n-k}$ can be seen as a $k$-combination of a set with $n$ elements, where $k$ is the number of $x$'s you choose. Therefore, the binomial coefficient of the term $x^{k}y^{n-k}$ is $\binom{n}{k}$. Conversely, we can choose $k$ $y$'s from each binomial factor and form $x^{n-k}y^{k}$ where its binomial coefficient is $\binom{n}{n-k}$ and this is because of the logical equivalence of the [[Combinations#Symmetry Property of Combinations|symmetry property of combinations]].

> See the [[Combinations#Coin Flip Problem|coin flip problem]] 
### Examples of the Binomial Theorem

**Problem:** What is the expansion $(x+y)^4$?

**Approach:** From the binomial theorem it follows that

$$
\begin{align}
(x+y)^4  & = \sum_{k=0}^n \binom{4}{k} x^{4-k}y^{k}  \\
 \\
 & = \binom{4}{0}x^4 + \binom{4}{1}x^3y + \binom{4}{2}x^2y^2 + \binom{4}{3}xy^3 + \binom{4}{4}y^4  \\
 \\
 & = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4
\end{align}
$$

**Problem:** What is the coefficient of $x^{12}y^{13}$ in the expansion of $(x+y)^{25}$

**Approach:** From the binomial theorem it follows that this coefficient is $$\binom{25}{13} = \frac{25!}{13!12!} = 5,200,300$$
**Problem:** What is the coefficient of $x^{12}y^{13}$ in the expansion of $(2x-3y)^{25}$?

**Approach:** By the binomial theorem, we see that

$$
(2x + (-3y))^{25}U = \sum_{k=0}^{25} \binom{25}{k}(2x)^{25-k}(-3y)^{k} = \sum_{k=0}^{25} {\binom{25}{k}2^{25-k}(-3)^{k}}x^{25-k}y^{k}
$$

where ${\binom{25}{k}2^{25-k}(-3)^{k}}$ is our binomial coefficient and when letting $k=13$, we get

$$
\binom{25}{13}2^{25-13}(-3)^{13} = -\frac{25!}{13!12!}2^{12}3^{13}
$$

### Corollaries of the Binomial Theorem

> [!theorem] Equivalence of $2^n$
> Let $n$ be a positive integer, then
> $$
> 2^n = \sum_{k=0}^n \binom{n}{k}
> $$

> [!theorem] Equivalence of Zero
> Let $n$ be a positive integer, then
> $$
> \sum_{k=0}^{n}(-1)^k\binom{n}{k} = 0
> $$
>