---
created: 2026-03-29 18:14
reviewed: 2026-03-29 18:14
tags:
  - math/theorem
  - math/topic/odes
---

# Superposition Principle

The *superposition principle* states that if $y_{1}$ and $y_{2}$ are solutions of say, a second-order differential equation, then a linear combination of $y_{1}$ and $y_{2}$ is also a solution. This is the underlying backbone for [[General Solutions of Differential Equations|general solutions]] of higher-order DE's.
## Differentiation as a Linear Operator

Here we introduce the linear operator $\mathbf{d}$ which can be extended to $n$th-order differentiation and gives way for us to prove the superposition principle.

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

## For Homogeneous Equations

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