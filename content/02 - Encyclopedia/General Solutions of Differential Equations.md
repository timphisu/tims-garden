---
created: 202603291205,
reviewed: 202603291205
tags:
  - math/building-blocks
  - math/topic/odes
---

# General Solutions of Differential Equations

A solution $y(x)$ is said to be a **general solution** when $y$ contains all the solutions $y_{i}(x)$  $\forall i = (1, 2, ..., n)$ for an $n$th-order linear differential equation. 

We are interested in finding the *general solution* because it captures all the behaviors of the model which satisfies the differential equation; moreover satisfying all possible initial conditions.
## For Homogeneous Equations

> [!definition] 
> Let $y_{1}, y_{2}, ..., y_{n}$ be a fundamental set of solutions of a homogeneous linear $n$th-order differential equation on an interval $I$. Then the **general solution** of the equation on an interval is
> 
> $$
> y = c_{1}y_{1}(x) + c_{2}y_{2}(x) + \cdots + c_{n}y_{n}(x)
> $$
> 
> * where $c_{i}$ for $i = 1, 2, ..., n$ are arbitrary constants.
> 

> That is to say that the general solution of a differential equation set to zero will be a linear combination of its linearly independent solutions.

> See [[Superposition Principle]] on why the general solution still *solves* the differential equation. 

> [!thought]
> As a consequent of the [[Existence of a Fundamental Set]], the general solution of a homogeneous linear $n$th-order DE will contain exactly $n$ terms (specifically terms, $c_{i}y_{i}$); for nonhomogeneous equations, it contains at least $n$ terms.
> 
> So if your general solution of a second-order DE contains only one term, then you've probably done something wrong; however, there's no guarantee on count of terms for the particular solution $y_{p}$.
##### Examples of a General Solution

The functions $y_{1} = e^{ x }$, $y_{2} = e^{ 2x }$, and $y_{3} = e^{ 3x }$ satisfy the third-order equation $y''' - 6y'' + 11y' - 6y = 0$. 

Since the Wronskian is

$$
W(e^{ x }, e^{ 2x }, e^{ 3x }) = 
\begin{vmatrix}
e^{ x } & e^{ 2x } & e^{ 3x } \\ \\
e^{ x } & 2e^{ 2x } & 3e^{ 3x } \\ \\
e^{ x } & 4e^{ 2x } & 9e^{ 3x }
\end{vmatrix}
= 2e^{ 6x } \ne 0
$$

for every real value of $x$, the functions $y_{1}, y_{2}, y_{3}$ form a fundamental set of solutions on $(-\infty, \infty)$. We conclude that 

$$y = c_{1}e^{ x } + c_{2}e^{ 2x } + c_{3}e^{ 3x }$$

is the general solution of the differential equation on the interval.

## For Nonhomogeneous Equations

> See [[Nonhomogeneous Equations|here]] for the definition of nonhomogeneous equations
### Particular Solution

A function $y_{p}(x)$ which solves a *nonhomogeneous equation* and has no arbitrary parameters is said to be the **particular solution**.

It can be found that you can pair the general solution along with the particular solution to form a new solution of the DE. 

---

> [!theorem] General Solution for Nonhomogeneous Equations
> Let $y_{p}$ be the *particular* solution of a nonhomogeneous linear $n$th-order differential equation and let $S = \{ y_{1}, y_{2}, ..., y_{n} \}$ be the fundamental set of solutions of its associated homogeneous equation on the interval $I$. Then the **general solution** of the equation on the interval is
> 
> $$
> y = c_{1}y_{1}(x) + c_{2}y_{2}(x) + \cdots + c_{n}y_{n}(x) + y_{p}(x)
> $$
> 
> * where $c_{i}$ for $i = (1, 2, ..., n)$ are arbitrary constants.

### Complementary Function

The part of the general solution that solves the associated homogeneous equation is called the **complementary function** and is denoted 

$$
y_{c} = c_{1}y_{1}(x) + c_{2}y_{2}(x) + \cdots + c_{n}y_{n}(x)
$$


