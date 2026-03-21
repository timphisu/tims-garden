---
created: 202603211120,
reviewed: 202603211120
tags:
  - math/building-blocks
  - math/theorem
  - math/concept
  - math/topic/odes
---

> This is different from homogeneous equations in [[2.5 - Substitutions]]

A linear $n$th-order differential equation of the form

$$
a_{n}(x) \frac{d^{n}y}{dx^{n}} + a_{n-1} \frac{d^{n-1}(x)}{dx^{n-1}} + \cdots + a_{1}(x) \frac{dy}{dx}y = 0
$$

is said to be *homogeneous*, whereas if the RHS was some function $g(x)$ that is not identically zero then the equation would be said to be *nonhomogeneous*.

The following assumptions are made on some interval $I$

* the coefficient functions $a_{i}(x)$ for $i = 0, 1, 2,...,n$ and $g(x)$ are continuous

* $a_{n}(x) \ne 0$ for every $x$ in the interval

## Differentiation as a Linear Operator

The symbol $\mathbf{d}$ is called a **differential operator** because it transforms a differentiable function into another function. Higher-order derivatives can be expressed in terms of $\mathbf{d}$ in a natural manner: 

$$
\frac{d}{dx} \left( \frac{dy}{dx} \right) = \frac{d^{2}y}{dx^{2}} = \mathbf{d}(\mathbf{d}y) = \mathbf{d^{2}}y
$$

which in general, 

$$
\frac{d^{n}y}{dx^{n}} = \mathbf{d^{n}}y 
$$
An *$n$-th order differential operator* or *polynomial operator* to be

$$
L = a_{n}(x)\mathbf{d^{n}} + a_{n-1}(x)\mathbf{d^{n-1}} + \cdots + a_{1}(x)\mathbf{d^{1}} + a_{0}(x)
$$

The differential operator $L$ possesses the property of linearity by the basic properties of differentiation. 

$$
L\left( \alpha f(x) + \beta g(x) \right) = \alpha L(f(x)) + \beta L(g(x))
$$

* where $\alpha$ and $\beta$ are constants

Because of this, we say $L$ is a [[linear operator]].

We can compactly write a homogeneous equation as 

$$
L(y) = 0
$$

and a nonhomogeneous equation as

$$
L(y) = g(y)
$$

### Superposition Principle for Homogeneous Equations

> [!theorem]
> Let $y_{1}, y_{2}, ..., y_{k}$ be solutions of the homogeneous $n$th-order differential equation on an interval $I$. Then the linear combination
> 
> $$
> y = c_{1}y_{1}(x) + c_{2}y_{2}(x) + \cdots + c_{k}y_{k}(x)
> $$
> 
> where $c_{i}$ for $i = 1, 2, ..., k$ are arbitrary constants, is also a solution on the interval

That is to say, a linear combination of functions $y_{i}$ that solve a differential equation also forms a solution to that same DE.

### Proof

Let $L$ be the differential operator defined [[#Differentiation as a Linear Operator|here]], and let $y_{i}(x)$ for $i = 1, 2, ..., k$ be solutions of the homogeneous equation $L(y) = 0$. 

If we define

$$
y = c_{1}y_{1}(x) + c_{2}y_{2}(x) + \cdots + c_{k}
$$

then by linearity of $L$ we have

$$
\begin{align}
L(y)  & = L\left[c_{1}y_{1}(x) + c_{2}y_{2}(x) + \cdots + c_{k}y_{k}(x) \right] \\ \\ & = c_{1}L(y_{1}) + c_{2}L(y_{2}) + \cdots + c_{k}L(y_{k})
\end{align}
$$

### Corollaries

> [!theorem]
> 
> * (a) A constant multiple $y = c_{1}y_{1}(x)$ of a solution $y_{1}(x)$ of a homogeneous linear differential equation is also a solution.
> 
> * (b) A homogeneous linear differential equation always possesses the trivial solution $y = 0$.
> 

## Linear Dependence and Independence for Functions

> [!definition]
> A set of functions $f_{1}(x), f_{2}(x), ..., f_{n(x)}$ is said to be **linearly dependent** on an interval $I$ if there exist constants $c_{1}, c_{2}, ..., c_{n}$ that are not all zero, such that
> 
> $$
> c_{1}f_{1}(x) + c_{2}f_{2}(x) + \cdots + c_{n}f_{n}(x) = 0
> $$
> 
> for every $x$ in the interval. If the set of functions is not linearly dependent on the interval, it is said to be **linearly independent**. 

A function $f_{r}$ in a linearly dependent set on an interval $I$ can be expressed as a linear combination of other functions within the set. A set of $n$ functions is linearly independent on $I$ if no single function is a linear combination of the other functions.
### Examples of Linear Independence/Dependence

If $f_{1}(x) = x$ and $f_{2}(x) = |x|$, then the set $\{ f_{1}, f_{2} \}$ is linearly independent on $(-\infty, \infty)$.

---

The set of functions $f_{1}(x) = \cos ^{2}(x)$, $f_{2}(x) = \sin ^{2}(x)$, $f_{3}(x) = \sec ^{2}(x)$, $f_{4}(x) = \tan ^{2}(x)$ is linearly dependent on the interval $\left(-{\pi}/{2}, {\pi}/{2}\right)$ because

$$
c_{1}\cos ^{2}x + c_{2}\sin ^{2}x + c_{3} \sec ^{2}x + c_{4}\tan ^{2}x = 0
$$

for every real number $x$ in the interval when $c_{1} = 1 = c_{2}$, $c_{3} = -1$, $c_{4} = 1$. You can use the identities $\sin ^{2}x + \cos ^{2}x = 1$ and $\sec ^{2}x = 1 + \tan ^{2}x$.

---

The set of functions $f_{1}(x) = \sqrt{ x } + 5$, $f_{2}(x) = \sqrt{ x } + 5x$, $f_{3}(x) = x-1$, $f_{4}(x) = x^{2}$ is linearly dependent on the interval $(0, \infty)$ because $f_{2}$ can be written as a linear combination of $f_{1}, f_{3}, f_{4}$, which symbolically is

$$
f_{2}(x) = 1 \cdot f_{1}(x) + 5 \cdot f_{2}(x) + 0 \cdot f_{4}(x)
$$

for every $x$ in the interval $(0, \infty)$.
