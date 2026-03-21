---
created: 202603211134,
reviewed: 202603211134
tags:
  - math/topic/odes
  - math/building-blocks
  - math/theorem
---
# Theory on Solutions to DEs
## Wronskian Determinant

> [!definition]
> Suppose each of the functions $f_{1}(x), f_{2}(x), ..., f_{n}(x)$ possesses at least $n-1$ derivatives. The determinant
> 
> $$
> W(f_{1}, f_{2}, ..., f_{n}) = 
> \begin{vmatrix}
> f_{1} & f_{2} & ... & f_{n} \\ \\
> f_{1}' & f_{2}' & ... & f_{n}' \\ \\
> \vdots & \vdots &  & \vdots \\ \\
> f_{1}^{(n-1)} & f_{2}^{(n-1)} & ... & f_{n}^{(n-1)}
> \end{vmatrix}
> $$
> 
> is called the **Wronskian** of the functions.

### Criterion for Linearly Independent Solutions

> [!theorem]
> Let $y_{1}, y_{2}, ..., y_{n}$ be $n$ solutions of the homogeneous linear $n$th-order differential equation on an interval $I$. Then the set of solutions is **linearly independent** on $I$ if and only if $W(y_{1}, y_{2}, ..., y_{n}) \ne 0$ for every $x$ in the interval. 

It follows from this theorem that when $y_{1}, y_{2}, ..., y_{n}$ are $n$ solutions to a [[#Homogeneous Equations|homogeneous equation]] on an interval $I$, the Wronskian $W(y_{1}, y_{2}, ..., y_{n})$ is either identically zero or never zero on the interval. If we can show that $W(y_{1}, y_{2}, ..., y_{n}) \ne 0$ for some $x_{0}$ in $I$, then the solutions $y_{1}, y_{2}, ..., y_{n}$ are linearly independent on $I$. 

## Fundamental Set of Solutions

> [!definition]
> Any set $y_{1}, y_{2}, ..., y_{n}$ of $n$ linearly independent solutions of the homogeneous linear $n$th-order differential equation on an interval $I$ is said to be a **fundamental set of solutions** on the interval.

> This can be thought of as the [[basis]] for a space of solutions.
### Existence of a Fundamental Set

> [!theorem]
> There exists a fundamental set of solutions for a homogeneous linear $n$th-order differential equation on an interval $I$.

> What this states is that for an $n$th-order differential equation, it is guaranteed that there are exactly $n$ linearly independent solutions to that DE.

This is true based on the fact that any solution of an $n$th-order homogeneous linear differential equation on an interval $I$ can be expressed as a linear combination of $n$ linearly independent solutions on $I$. 
#### General Solution for Homogeneous Equations

> [!definition] 
> Let $y_{1}, y_{2}, ..., y_{n}$ be a fundamental set of solutions of a homogeneous linear $n$th-order differential equation on an interval $I$. Then the **general solution** of the equation on an interval is
> 
> $$
> y = c_{1}y_{1}(x) + c_{2}y_{2}(x) + \cdots + c_{n}y_{n}(x)
> $$
> 
> * where $c_{i}$ for $i = 1, 2, ..., n$ are arbitrary constants.
> 

##### Examples of the General Solution

The functions $y_{1} = e^{ x }$, $y_{2} = e^{ 2x }$, and $y_{3} = e^{ 3x }$ satisfy the third-order equation $y''' - 6y'' + 11y' - 6y = 0$. 

Since

$$
W(e^{ x }, e^{ 2x }, e^{ 3x }) = 
\begin{vmatrix}
e^{ x } & e^{ 2x } & e^{ 3x } \\ \\
e^{ x } & 2e^{ 2x } & 3e^{ 3x } \\ \\
e^{ x } & 4e^{ 2x } & 9e^{ 3x }
\end{vmatrix}
= 2e^{ 6x } \ne 0
$$

for every real value of $x$, the functions $y_{1}, y_{2}, y_{3}$ form a fundamental set of solutions on $(-\infty, \infty)$. We conclude that $$y = c_{1}e^{ x } + c_{2}e^{ 2x } + c_{3}e^{ 3x }$$ is the general solution of the differential equation on the interval.