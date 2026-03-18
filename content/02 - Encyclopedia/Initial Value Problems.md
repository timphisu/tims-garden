---
created: 2026-02-21 21:02
reviewed: 2026-02-21 21:02
tags:
  - math/problems
  - math/concept
  - math/building-blocks
  - math/topic/odes
---

# Initial Value Problems

## Articulation of IVPs

> [!definition]
> An $n$th-order **initial-value problem (IVP)** is the problem that concerns with solving an $n$th-order differential equation on some interval $I$ subject to $n$ side conditions specified at $x_{0}$
> 
> * *Solve:* $\displaystyle \frac{d^{n}y}{dx^{n}} = f(x, y, y', ..., y^{(n-1)})$
> 
> * *Subject to:* $y(x_{0}) = y_{0}, y'(x_{0}) = y_{1}, ..., y^{(n-1)}(x_{0}) = y_{n-1}$
> 
> where $y_{0}, y_{1}, ..., y_{n-1}$ are arbitrary constants.

> *Side conditions* are conditions that are imposed on the unknown function $y(x)$ and its derivatives at a number $x_{0}$

The values of $y(x)$ and its first $n-1$ at $x_{0}$, namely $y(x_{0}) = y_{0}, y'(x_{0}) = y_{1}, ..., y^{(n-1)}(x_{0}) = y_{n-1}$ are called **initial conditions (IC)**.

