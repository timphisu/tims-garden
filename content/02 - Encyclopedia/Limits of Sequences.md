---
created: 202603071648,
reviewed: 202603071648
tags:
  - math/building-blocks
  - math/topic/calculus
---

### Definitions

> [!definition] Intuitive Definition
> A sequence $\{ a_{n} \}$ has the **limit** $L$ and we write 
> 
> $$
> \lim_{ n \to \infty } a_{n} = L
> $$
> if we can make the terms $a_{n}$ as close to $L$ as we like by taking $n$ sufficiently large. 
> 
> If $\lim_{ n \to \infty }a_{n}$ exists, we say the sequence **converges** (or is *convergent*). Otherwise, we say the sequence **diverges** (or is *divergent*).

> [!definition] Precise Definition
> A sequence $\{ a_{n} \}$ has the limit $L$ and we write
> 
> $$
> \lim_{ n \to \infty } a_{n} = L
> $$
> if for every $\epsilon > 0$ there is a corresponding integer $N$ such that 
> 
> $$
> \text{ if } \quad n > N \quad \text{then} \quad |a_{n} - L| < \epsilon
> $$

> This coincides with the general definition of a limit

For *divergent* series, we have another precise definition

> [!definition] Definition of a Divergent Series
> The notation $\lim_{ n \to \infty } a_{n} = \infty$ means that for every positive integer number $M$ there is an integer $N$ such that
> 
> $$
> \text{if} \quad n>N \quad \text{then} \quad a_{n} > M
> $$
> The same holds for $\lim_{ n \to \infty } a_{n} = -\infty$
> 

### Examples of Convergent Sequences

Consider the [[Sequences|sequence]]

$$
\left\{  \frac{n}{n+1}  \right\} = \left\{  \frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \frac{4}{5}, ...  \right\}
$$

Since a sequence is a function that maps the [[Notable Sets|natural numbers]], its graph consists of discrete points with coordinates

$$
(1, a_{1}) \quad (2, a_{2}) \quad (3, a_{3}) \quad ... \quad (n, a_{n})
$$

Its graph looks like

![[Pasted image 20260217162853.png]]


The values seem to be approaching 1 as $n$ becomes large. We can indicate this by writing the limit notation,

$$
\lim_{ n \to \infty } \frac{n}{n+1} = 1
$$

Here's another graph of a *convergent* sequence as $n \to \infty$ that $a_{n} \to 3$.

![[Pasted image 20260217163508.png]]


## Properties of Convergent Sequences

### Limit Laws for Sequences

Suppose that $\{ a_{n} \}$ and $\{ b_{n} \}$ are convergent sequences and $c$ is a constant, then

| Law                   | Expression                                                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sum Law               | $$\lim_{ n \to \infty } (a_{n} + b_{n}) = \lim_{ n \to \infty } a_{n} + \lim_{ n \to \infty } b_{n}$$                                                               |
| Difference Law        | $$\lim_{ n \to \infty } (a_{n} - b_{n}) = \lim_{ n \to \infty } a_{n} - \lim_{ n \to \infty } b_{n}$$                                                               |
| Constant Multiple Law | $$\lim_{ n \to \infty }  ca_{n} = c \lim_{ n \to \infty } a_{n}$$                                                                                                   |
| Product Law           | $$\lim_{ n \to \infty } (a_{n}b_{n}) = \lim_{ n \to \infty } a_{n} \cdot \lim_{ n \to \infty } b_{n}$$                                                              |
| Quotient Law          | $$\lim_{ n \to \infty } \frac{a_{n}}{b_{n}} = \frac{\lim_{ n \to \infty } a_{n}}{\lim_{ n \to \infty } b_{n}} \quad \text{ if } \lim_{ n \to \infty } b_{n} \ne 0$$ |

#### Examples of Limit Laws on Sequences

**Problem:** Find $\displaystyle \lim_{ n \to \infty } \frac{n}{n+1}$

**Approach:** Find the numerator and denominator by the highest power found in the denominator. And then by using Limit Laws, we can find the solution.

$$
\begin{align}
\lim_{ n \to \infty } \frac{n}{n+1}  & = \lim_{ n \to \infty } \frac{n}{n\left( 1+\frac{1}{n} \right)}  & \text{Factor out}\ n \\ \\
 & = \lim_{ n \to \infty } \frac{1}{1+\frac{1}{n}}  & \text{Cancel out}\  n\\ \\
  & = \frac{\lim_{ n \to \infty } 1}{\lim_{ n \to \infty } 1 + \lim_{ n \to \infty } \frac{1}{n}}  & \text{Quotient Rule and Sum Law} \\ \\
   & = \frac{1}{1 + 0} = 1
\end{align}
$$

### Power Law

> [!theorem]
> Let $a_{n}$ be the image of the integer $n$ and $p \in \mathbb{R}$ such that $p > 0$, then
> 
> $$
> \lim_{ n \to \infty } (a_{n})^{p} = \left[\lim_{ n \to \infty } a_{n} \right]^{p}
> $$

### Squeeze Theorem for Sequences

> [!theorem]
> If $a_{n} \leq b_{n} \leq c_{n}$ for $n\geq n_{0}$ and $\lim_{ n \to \infty }a_{n}= \lim_{ n \to \infty }c_{n}=L$ , then $\lim_{ n \to \infty }b_{n} = L$
>