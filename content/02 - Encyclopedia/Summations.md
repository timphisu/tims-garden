---
created: 2026-01-28 19:35
reviewed: 2026-01-28 19:35
tags:
  - math/topic/algebra
  - math/building-blocks
---
# Summations

## Definition

> [!definition]
> Suppose we wanted to express the sum of the following terms $a_{m}, a_{m+1}, a_{m+2}, ..., a_{n}$ . We use *summation notation* to compactly describe the sum of some part $S \subseteq \{ a_{n} \}$
> 
> $$
> \sum_{i = m}^n a_{i}$$
> 
> where 
> 
> * $i$ is the *summation index*
> * $m$ is the *lower limit*
> * $n$ is the *upper limit*
> * $a_{i}$ is the prescribed formula for the terms

We can also sum over the images $f(s)$ of each element $s$ of a set $S$

$$
\sum_{s \in S} f(s)
$$

## Examples of Summations

1. What is the value of $\sum_{j = 1}^5 j^2$ ?

	We have 	
	$$
	\begin{align}
	 \sum_{j=1}^5 & = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 \\ \\
	 & = 1 + 4 + 9 + 16 + 25 \\ \\
	 & = 55 \\ 
	\end{align}
	$$

It might be useful to adjust indices so that summations can combine. To adjust indices, we must adjust the formula accordingly.

2. Consider the sum $\sum_{j=1}^5 j^2$ but we want the index to run over $0, 1, ..., 4$ rather than $1, 2, ..., 5$. 

	To do this, let $k = j - 1$ so that when $j=1 \to k = 0$ and when $j = 5 \to k = 4$ which implies $j = k+1$
	
	So, 
	
	$$
	\sum_{j=1}^5 j^2 = \sum_{k=0}^4 (k+1)^2
	$$