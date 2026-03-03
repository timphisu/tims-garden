---
created: 202602261409
reviewed: 202602261409
tags:
  - math/definition
aliases:
  - interval of solution
  - interval of domain
---

The interval $I$ is called the **interval of definition**, **interval of validity**, or the **domain of solution**. From [[Differential Equations|differential equations]], the function $\phi$ is not the same as the solution $\phi$, that is, the domain of the solution is generally a [[Subsets|subset]] of the domain of the function.

> Note that a solution must be differentiable on the interval $I$ that it solves.

> [!info]
> An important requirement for the *interval of validity* is that $I$ can be an open interval $(a, b)$, closed interval $[a, b]$, or an infinite interval $[a, \infty)$; however, $I$ cannot be the [[set oper|union]] of disjoint intervals, that is, if $f(b)$ is undefined where $a < b < c$ then $I \ne [a, b)\cup(b, c]$ but rather we must restrict our domain to one continuous interval. 
> 
> When dealing with [[Initial Value Problems]], if $\phi(x_{0}) = y_{0}$, it must also be required that the interval $I$ contains $x_{0}$. It is best recommended practice to define your *interval of validity* $I$ beginning with $x_{0}$ (See [[Solving Separable Equations#^85f196|here]] for an example).
### Types of Solutions

When we can express the solution of an ODE as a single function $y(x)$, we say this is an **explicit solution**.

When there's no way to express the solution solely in terms of $y$ on one hand and $x$ on the other, we write it as is, namely as an **implicit solution**.