---
created: 202603211135,
reviewed: 202603211135
tags:
  - math/building-blocks
  - math/topic/odes
  - math/theorem
---

Any function $y_{p}$, <u>free of arbitrary parameters</u>, that satisfies a nonhomogeneous equation is said to be a **particular solution** of the equation.

If $y_{1}, y_{2}, ..., y_{k}$ are solutions of a homogeneous equation on an interval $I$ and $y_{p}$ is any particular solution of a nonhomogeneous equation on $I$, then the linear combination

$$
y = c_{1}y_{1}(x) + c_{2}y_{2}(x) + \cdots + c_{k}y_{k}(x) + y_{p}(x)
$$

is also a solution of the nonhomogeneous equation. 

## General Solution for Nonhomogeneous Equations

> [!theorem]
> Let $y_{p}$ be any particular solution of a nonhomogeneous linear $n$th-order differential equation, and let $y_{1}, y_{2}, ..., y_{n}$ be a fundamental set of solutions of the associated homogeneous differential equation on $I$. Then the **general solution** of the equation on the interval is
> 
> $$
> y = c_{1}y_{1}(x) + c_{2}y_{2}(x) + \cdots + c_{n}y_{n}(x) + y_{p}(x)
> $$
> 
> where $c_{i}$ for $i = 1, 2, ..., n$ are arbitrary constants. 

### Complementary Function

The part of the above general solution that solves the associated homogeneous equation is called the **complementary function** and is denoted $y_{c}(x) = c_{1}y_{1}(x) + c_{2}y_{2}(x) + \cdots + c_{n}y_{n}(x)$.

In order to solve a nonhomogeneous linear differential equation, we first solve the associated homogeneous equation and then find any particular solution of the nonhomogeneous equation.

The general solution of the nonhomogeneous equation is then

$$
\boxed{ y = y_{c} + y_{p} } 
$$

### Superposition Principle for Nonhomogeneous Equations

> [!theorem]
> Let $y_{p_{1}}, y_{p_{2}}, ..., y_{p_{k}}$ be $k$ particular solutions of a nonhomogeneous linear $n$th-order differential equation on an interval $I$ corresponding, in turn, to $k$ distinct functions $g_{1}, g_{2}, ..., g_{k}$. That is, suppose $y_{p_{i}}$ denotes a particular solution of the corresponding differential equation `(1)`
> 
> $$
> a_{n}(x)y^{(n)} + a_{n-1}(x)y^{n-1} + \cdots + a_{1}(x)y' + a_{0}(x)y = g_{i}(x)
> $$
> 
> * where $i = 1, 2, ..., k$.
> 
> Then
> 
> $$y_{p}(x) = y_{p_{1}}(x) + y_{p_{2}}(x) + \cdots + y_{p_{k}}(x)$$
> 
> is a particular solution of `(2)`
> 
> $$
> a_{n}(x)y^{(n)} + a_{n-1}(x)y^{(n-1)} + \cdots + a_{1}(x)y' + a_{0}(x)y = g_{1}(x) + g_{2}(x) + \cdots + g_{k}(x)
> $$

Note that if $y_{p_{i}}$ are particular solutions of `(1)` for $i = 1, 2, ..., k$ then the linear combination

$$
y_{p} = c_{1}y_{p_{1}} + c_{2}y_{p_{2}} + \cdots + c_{k}y_{p_{k}}
$$

where $c_{i}$ are constants, is also a particular solution for `(2)` when the RHS of the equation is the linear combination

$$
c_{1}g_{1}(x) + c_{2}g_{2}(x) + \cdots + c_{k}g_{k}(x)
$$
#### Example of Superposition for Nonhomogeneous Equations

It can be verified that the following are particular solution to their respective differential equation:

$$
\begin{array}{ccc}
y_{p_{1}} = -4x^{2} & \text{is a particular solution of} & y''-3y'+4y = -16x^{2} \\ \\
y_{p_{2}} = e^{ 2x } & \text{is a particular solution of} & y''-3y'+4y = 2e^{ 2x } \\ \\
y_{p_{3}} = xe^{ x } & \text{is a particular solution of} & y'' - 3y' +4y = 2xe^{ x }
\end{array}
$$

It follows from the above theorem that the super position of $y_{p_{1}}$, $y_{p_{2}}$, and $y_{p_{3}}$,

$$
y = y_{p_{1}} + y_{p_{2}} + y_{p_{3}} = -4x^{2} + e^{ 2x } + xe^{ x }
$$

is a solution of 

$$
y'' - 3y' + 4y =  \underbrace{ -16x^{2} + 24x - 8 }_{ g_{1}(x) } + \underbrace{ 2e^{ 2x } }_{ g_{2}(x) } + \underbrace{ xe^{ 2x } }_{ g_{3}(x) }
$$