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

## Linear Initial Value Problems

Recall [[Initial Value Problems|initial-value problems]], where we articulated the problem for a general $n$th-order differential equation. But for a linear differential equation, an *$n$th-order initial value problem (IVP)* is

$$
\begin{array}{cc}
\text{Solve:} &  a_{n}(x) \frac{d^{n}y}{dx^{n}} + a_{n-1}(x) \frac{d^{n-1}x}{dx^{n-1}} + \cdots + a_{1}(x) \frac{dy}{dx} + a_{0}(x)y = g(x) \\ \\
\text{Subject to:} & y(x_{0}) = y_{0}, \quad y'(x_{0}) = y_{1}, ..., y^{(n-1)}(x_{0}) = y_{n-1}
\end{array}
$$

### Existence and Uniqueness Theorem for IVPs

> This is an interpretation of the [[Existence of a Unique Solution]] Theorem but for an $n$th-order linear differential equation.

> [!theorem]
> Let $a_{n}(x), a_{n_{0}1}(x), ..., a_{1}(x), a_{0}(x)$ and $g(x)$ be continuous on an interval $I$ and let $a_{n}(x) \ne 0$ for every $x$ in this interval. If $x = x_{0}$ is any point in this interval, then a solution $y(x)$ of the initial-value problem described [[#Linear Initial Value Problems|here]] exists on the interval and is unique.

> So for any IVP to have a unique solution, the two requirements are that every coefficient function including the input $g(x)$ should be continuous on $I$ and that the coefficient function for the highest-order derivative $a_{n}(x)$ should not be identically zero on $I$. 
#### Examples of Unique Solutions for an IVP

The initial value problem

$$
3y''' + 5y'' - 5y' + 7y = 0, \quad y(1) = 0, \quad y'(1) = 0, y''(1) = 0
$$

possesses the trivial solution $y = 0$. Because the 3rd-order equation is linear with constant coefficients, it follows that all the conditions of the above theorem are fulfilled. Hence $y=0$ is the *only* solution on any interval containing $x = 1$.

---

It can be verified that the function $y = 3e^{ 2x } + e^{ -2x } - 3x$ is a solution of the initial-value problem

$$
y'' - 4y = 12x, \quad y(0) = 4, y'(0)
$$
## Boundary-Value Problems

> [!definition]
> A **boundary-value problem (BVP)** consists of solving a differential equation of order two or greater in which the dependent variable $y$ or its derivatives are specified at *different points*. 
> 
> The problem could be articulated as 
> 
> $$
> \begin{array}{cc}
> \text{Solve:} & a_{2}(x) \frac{d^{2}y}{dx^{2}} + a_{1}(x) \frac{dy}{dx} + a_{0}(x)y = g(x) \\ \\
> \text{Subject to:} & y(a) = y_{0}, \quad y(b) = y_{1}
> \end{array}
> $$
> 
> * where $y(a) = y_{0}$ and $y(b) = y_{1}$ are called **boundary conditions (BC)**. 

> This is different from [[Initial Value Problems|initial value problems]] where conditions are specified at a single value, $x_{0}$, whereas boundary value problems deal with solution curves which pass through two points or more.

For a second-order differential equation other pairs of boundary conditions could be

$$
\begin{array}{cc}
y'(a) = y_{0},  & y(b) = y_{1} \\ \\
y(a) = y_{0},  & y'(b) = y_{1} \\ \\
y'(a) = y_{0},  & y'(b) = y_{1}
\end{array}
$$

where $y_{0}$ and $y_{1}$ denote arbitrary constants.

### BVPs Can Have Many, One, or No Solutions

We can show even when boundary conditions are fulfilled, a BVP can have several solutions, a unique solution, or no solution at all.

The two-parameter family of solutions of the differential equation $x'' + 16x = 0$ is

$$
x = c_{1}\cos{4t} + c_{2}\sin{4t}
$$

Suppose we wish to determine the solution of the equation that further satisfies the boundary conditions $x(0)= 0, x({\pi}/{2}) = 0$. Observe that the first condition $c_{1}\cos{0} + c_{2}\sin{0} = 0$ implies that $c_{1} = 0$, so $x = c_{2}\sin{4t}$. But when $t = {\pi}/{2}$, $c_{2}\sin(2\pi) = 0$ is satisfied for any choice of $c_{2}$, since $\sin(2\pi) = 0$. 

Hence the boundary-value problem

$$
x'' + 16x = 0, \quad x(0) = 0, \quad x\left( \frac{\pi}{2} \right) = 0
$$
has infinitely many solutions. 

The graph of the solution curve for various choices of $c_{2}$:

![[Pasted image 20260318141411.png]]

If the boundary-value problem was changed to

$$
x'' + 16x = 0, \quad x(0) = 0, \quad x\left( \frac{\pi}{8} \right) = 0 
$$

then $x(0)=0$ still requires $c_{1} = 0$ in the solution. But applying $x\left( \frac{\pi}{8} \right) = 0$ to $x = c_{2}\sin{4t}$ demands that $c_{2}\sin{4t} = 0 \to c_{2} = 0$. Hence $x = 0$ is a solution of this new boundary-value problem. 

Finally, if we change the problem to

$$
x'' + 16x = 0, \quad x(0) = 0, x\left( \frac{\pi}{2} \right) = 1
$$

We find again from $x(0) = 0$ that $c_{1} = 0$, but applying $x\left( \frac{\pi}{2} \right) = 1$ to $x = c_{2}\sin{4t}$ leads to contradiction $c_{2}\sin(2\pi) = 1 \to c_{2} \cdot 0 = 1$. Hence, the BVP has no solution.

