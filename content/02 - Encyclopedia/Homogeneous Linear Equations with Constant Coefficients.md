---
created: 202603211502,
reviewed: 202603211502
tags:
  - math/topic/odes
  - math/form
  - math/problems
---

## Motivations and the Auxiliary Equation

Consider the 2nd-order differential equation `(*)`

$$
ay'' + by' + cy = 0
$$

> Specifically, this is a second-order [[Homogeneous Equations|homogeneous]] linear equation with constant coefficients.

* where $a, b, c$ are constants

The only nontrivial elementary function which solves this solution is of the form $y = e^{ mx }$ where $m$ is a constant. If our solution really is $y = e^{ mx }$, then $y' = me^{ mx }$ and $y'' = m^{2}e^{ mx }$. Substituting into `(*)`, we find

$$
\begin{align} \\
 & ay'' + by' + cy = 0 \\ \\
 & am^{2}e^{ mx } + bme^{ mx } + ce^{ mx } = 0 \\ \\
 & e^{mx}(am^{2} + bm + c) = 0 \\ \\
\end{align}
$$

Since $e^{ mx } \ne 0$, then it must be 

$$
am^{2} + bm + c = 0
$$

which is called the **auxiliary equation** for `(*)`. There must be some root(s) $m$ which satisfies the quadratic equation, which in turn solves the differential equation. 

By the quadratic formula, we know the two possible roots of $m$ can be

$$
m_{1} = \frac{-b + \sqrt{ b^{2} - 4ac }}{2a}, \quad m_{2} = \frac{-b - \sqrt{ b^{2} - 4ac }}{2a}
$$

which yields 3 cases based on the discriminant.

### Case I: Distinct Real Roots

If $b^{2} - 4ac > 0$, then $m_{1}$ and $m_{2}$ are real and distinct. Since $m_{1} \ne m_{2}$, we find 2 solutions $y_{1} = e^{ m_{1}x }$ and $y_{2} = e^{ m_{2}x }$. It can be found that they are linearly independent on $(-\infty, \infty)$ and form a [[Theory on Solutions to DEs#Fundamental Set of Solutions|fundamental set]]. 

The general solution is 

$$
\boxed{ y = c_{1}e^{ m_{1}x } + c_{2}e^{ m_{2}x } } 
$$

### Case II: Repeated Roots

If $b^{2} - 4ac = 0$, then $m_{1} = - \frac{b}{2a} = m_{2}$, which yields only one exponential solution $y_{1} = e^{ m_{1}x }$. We know by the [[Theory on Solutions to DEs#Existence of a Fundamental Set|Existence of a Fundamental Set Theorem]], we are guaranteed for a second-order differential equation exactly 2 linearly independent solutions. 

We use reduction of order to find $y_{2}$,

$$
y_{2}(x) = e^{ m_{1}x } \cdot \int \frac{e^{ -\int P\, dx }}{e^{2m_{1}x}}\, dx
$$

where $P = \frac{b}{a}$ from taking `(*)` in its standard form so $- \int P\, dx = -\frac{b}{a}x$ but note that $-\frac{b}{a}=2m_{1}$.

Taking that into account,

$$
y_{2}(x) = e^{ m_{1}x } \int \cancel{ \frac{e^{ 2m_{1}x }}{e^{ 2m_{1}x } }}\, dx = e^{ m_{1}x } \int dx = xe^{ m_{1}x }
$$

So a general solution where roots are repeated is

$$
\boxed{ y = c_{1}e^{ m_{1}x } + c_{2}xe^{ m_{1}x } } 
$$

### Case III: Complex Roots

If $b^{2} - 4ac < 0$, then $m_{1}$ and $m_{2}$ are distinct like Case I but complex. 

We can express the complex results of $m_{1}$ and $m_{2}$ as two parts:

$$
m_{1} = \alpha + \beta i, \quad m_{2} = \alpha - \beta i
$$

* where $\alpha$ and $\beta > 0$ are real numbers.

While `(1)`

$$y = c_{1}e^{ (\alpha + \beta i)x } + c_{2} e^{ (\alpha - \beta i )x}$$

is formally an acceptable answer, we seek a solution consisting of real functions. 

We can use [[Euler's identity]] $e^{ i\theta } = \cos(\beta \theta) + i\sin(\beta \theta)$ to derive

$$
\begin{align}
e^{ i \beta x } &  = \cos(\beta x) + i\sin(\beta x) \\ \\
e^{ -i \beta x } & = \cos(\beta x) - i\sin(\beta x)
\end{align}
$$

Observe that when adding and subtracting both equations above,

$$
\begin{align}
e^{ i \beta x } + e^{ -i \beta x } & = 2\cos(\beta x) \\ \\
e^{ i \beta x } - e^{ -i \beta x } &  = 2i\sin(\beta x)
\end{align}
$$

Bringing this to `(1)`, if we let $c_{1} = c_{2} = 1$, and $c_{1} = 1, c_{2} = -1$, we get two solutions:

$$
\begin{align}
y_{1}  & = e^{ (\alpha + \beta i)x } + e^{ (\alpha - \beta i)x } = 2e^{ \alpha x }\cos(\beta x) \\ \\
y_{2}  & = e^{ (\alpha + \beta i)x } - e^{ (\alpha - \beta i) } = 2ie^{ \alpha x }\sin(\beta x)
\end{align}
$$

From[[Homogeneous Equations#Superposition Principle for Homogeneous Equations| Corollary A of the Superposition Theorem]], we find that $e^{ \alpha x }\cos(\beta x)$ and $e^{ \alpha x }\sin(\beta x)$ form real solutions to `(*)`.

A general solution looks like

$$
\boxed{ y = e^{ \alpha x }\left( c_{1}\cos(\beta x) + c_{2}\sin(\beta x) \right)  } 
$$

## Solving Second-Order Equations w/ Constant Coefficients

**Problem:** Find the general solution of the 2nd-order DE

$$
y'' - 10y' + 25y = 0
$$

**Approach:** The auxiliary equation for this DE is given as

$$
\begin{align}
 & m^{2} - 10m + 25 = 0 \\ \\
 & (m-5)^{2} = 0 \\ \\
 & m = 5
\end{align}
$$

So after solving the quadratic, we find that this is a case of repeating roots where $y_{1} = e^{ 5x }$ and the general solution becomes

$$
y = c_{1}e^{ 5x } + c_{2}xe^{ 5x }
$$

> This is a matter of memorizing the formula, rather than the process.

## Notable Equations and Their Solutions

The differential equations

$$
y'' + k^{2}y = 0
$$

and

$$
y'' - k^{2}y = 0
$$

where $k$ is real, are important in applied mathematics. 

For $y'' + k^{2}y = 0$ the auxiliary equation $m^{2} + k^{2} = 0$ has imaginary roots $m_{1} = ki$ and $m_{2} = -ki$, which fits Case III. With $\alpha = 0$ and $\beta = k$, the general solution of the DE is seen to be 

$$
y = c_{1} \cos{kx} = c_{2} \sin{kx}
$$

For the other DE $y'' -k^{2}y = 0$, the auxiliary equation $m^{2} - k^{2} = 0$ has distinct real roots $m_{1} = k$ and $m_{2} = -k$, and so by Case I the general solution of the DE is

$$
y = c_{1}e^{ kx } + c_{2}e^{ -kx }
$$

Note that if we choose $c_{1} = c_{2} = \frac{1}{2}$, and $c_{1} = \frac{1}{2}, c_{2} = -\frac{1}{2}$ for the above equation, we get the particular solutions $y = \frac{1}{2}\left( e^{ kx } + e^{ -kx } \right) = \cosh{kx}$ and $y = \frac{1}{2} \left( e^{ kx } - e^{ -kx } \right) = \sinh{kx}$. Since $\cosh{kx}$ and $\sinh{kx}$ are linearly independent on $(-\infty, \infty)$, an alternative form of the general solution of $y'' - k^{2}y = 0$ is

$$
y = c_{1} \cosh{kx} + c_{2} \sinh{kx}
$$

## Higher-Order Equations

In general, to solve an $n$th-order homogeneous differential equation,

$$
a_{n}y^{(n)} + a_{n-1}y^{(n-1)} + \cdots + a_{1}y' + a_{0}y = 0
$$

* where $a_{i}$ for $i = 0, 1, 2, ..., n$ are real constants and $a_{n} \ne 0$

We must solve the following auxiliary equation, which is an $n$th-degree polynomial

$$
a_{n}m^{n} + a_{n-1}m^{n-1} + \cdots + a_{1}m + a_{0} = 0
$$

> [!thought]
> Taking into account the [[Fundamental Theorem of Algebra]], that means for an $n$th-degree polynomial in an auxiliary equation, there are exactly $n$ roots (*considering multiplicity*). 

When the roots of this polynomial are real and distinct, it's easy to write the general solution of this DE to be

$$
y = c_{1}e^{ m_{1}x } + c_{2}e^{ m_{2}x } + \cdots + c_{n}e^{ m_{n}x }
$$

However, for $n > 2$, various combinations of real and complex solutions arise with sometimes multiplicity $k > 1$. In general, when $m_{i}$ for $i \in [1, n]$ is a root of multiplicity $k$ of an $n$th-degree auxiliary equation, it can be shown that the linearly independent solutions are

$$
e^{ m_{i}x }, xe^{ m_{i}x }, x^{2}e^{ m_{i}x }, ..., x^{k-1}e^{ m_{i}x }
$$

and must be included in the linear combination that makes the general solution.

### Examples

**Problem:** Solve

$$
\frac{d^{4}y}{dx^{4}} + 2 \frac{d^{2}y}{dx^{2}} + y = 0
$$

**Approach:** The auxiliary equation $m^{4} + 2m^{2} + 1 = (m^{2} + 1)^{2} = 0$ has roots $m_{1} = m_{3} = i$ and $m_{2} = m_{4} = -i$. Which from Case II gives the solution

$$
y = C_{1}e^{ ix } + C_{2}xe^{ -ix } + C_{3}xe^{ ix } + C_{4}xe^{ -ix }
$$

> For the third and fourth terms, they represent the repeating solution so they get an $x$. 

By Euler's formula, $C_{1}e^{ ix } + C_{2}e^{ -ix }$ can be rewritten as

$$
\begin{align}
C_{1}e^{ ix } + C_{2}e^{ -ix } &  = C_{1}(\cos{x} + i\sin{x}) + C_{2}(\cos{x} - i\sin{x}) \\ \\
 & = (C_{1} + C_{2})\cos{x} + (C_{1} - C_{2})i\sin{x} \\ \\
 & = c_{1}\cos{x} + c_{2}\sin x
\end{align}
$$

after letting $c_{1} = C_{1} + C_{2}$ and $c_{2} = (C_{1} - C_{2})i$. 

Similarly, $x(C_{3}e^{ ix } + C_{4}e^{ -ix })$ can be expressed as $x(c_{3}\cos{x} + c_{4}\sin{x})$. Hence, the general solution is

$$
y = c_{1}\cos{x} + c_{2}\sin{x} + c_{3}x\cos{x} + c_{4}x\sin{x}
$$