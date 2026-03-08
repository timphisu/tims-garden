---
created: 2026-01-23 00:29
reviewed: 2026-01-23 00:29
tags:
  - math/building-blocks
  - math/topic/algebra
---
> [!definition]
A function $f$ is said to be **one-to-one**, or an *injection*, if and only if $f(a) = f(b)$ implies that $a = b$ for all $a$ and $b$ in the domain of $f$.

> The contrapositive of the implication is also true, that is, $f(a) \ne f(b)$ whenever $a \ne b$

A function is strictly increasing if $\forall x \forall y (x < y \to f(x) < f(y))$, or strictly decreasing if $\forall x \forall x (x < y \to f(x) > f(y))$. A function that is strictly increasing or strictly decreasing is guaranteed a one-to-one function.  
#### Examples of One-to-One

1. Determine whether the function $f$ from $\{ a, b, c, d \}$ to $\{ 1, 2, 3, 4, 5 \}$ with $f(a) = 4$, $f(b) = 5$, $f(c) = 1$, and $f(d) = 3$ is one-to-one

	The function $f$ is one-to-one because $f$ takes on different values at the four elements of its domain.
	![[Pasted image 20260122205822.png|250]]

2. Determine whether the function $f(x) = x^2$ from the set of integers to the set of integers is one-to-one. 

	The function $f : \mathbb{Z} \to \mathbb{Z} \ |\ f(x)=x^2$ is not one-to-one because a counterexample to this statement would be $f(1) = f(-1) = 1$, but $1 \ne -1$ 

3. Determine whether the function $f(x) = x+1$ from the set of real numbers to itself is one-to-one.

	Suppose that $x$ and $y$ are real numbers with $f(x) = f(y)$, so that $x+1 = y+1$ . This means that $x = y$ . Hence, $f(x) = x+1$ is a one-to-one function from $\mathbb{R}$ to $\mathbb{R}$ .