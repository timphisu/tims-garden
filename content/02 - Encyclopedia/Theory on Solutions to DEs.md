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

> What this means for an $n$th-order differential equation is the guarantee that there are exactly $n$ linearly independent solutions to that DE.