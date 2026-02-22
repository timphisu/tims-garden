---
created: 202602191503
reviewed: 202602191503
tags:
  - math/definition
---
# Differential Equations
## Definition

> [!definition]
> An equation containing the derivatives of one or more unknown functions (or dependent variables), with respect to one or more independent variables, is said to be a **differential equation (DE)**.

## Classifying Differential Equations

### Types of Differential Equations

| Type                                   | Definition                                                                                                                           |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| *ordinary* differential equation (ODE) | differential equation that contains derivatives of one or more unknown functions with respect to a <u>single</u> variable            |
| *partial* differential equation (PDE)  | differential equation that contains <u>partial derivatives</u> of one or more unknown functions of two independent variables or more |

### Order of Differential Equations

The *order of a differential equation* is the order of the highest derivative in the equation.
#### Examples

The following equation

$$
{\frac{d^{2} y}{dx^{2}}} + 5 \left( \frac{dy}{dx} \right)^{3} - 4y = e^{x}
$$

is a second-order ordinary differential equation since $\displaystyle \frac{d^{2}y}{dx^{2}}$ is our highest derivatives and is a second-order derivative.
##### Using Differentials to Solve First-Order ODEs

For first-order differential equations, we can take advantage of the fact that $\frac{dy}{dx}$ acts as a fraction where we can move around $dy$ and $dx.$ 

If $y$ is the dependent variable in a first-order ODE, then recall that the differential $dy$ is given by $dy = y' dx$

**Problem:** Find the *normal form* of the following differential equation, that is, isolate for the derivative.

$$
(y-x)\, dx + 4x\, dy = 0
$$

**Approach:** If we divide both sides $dx$, the equation becomes

$$
(y-x) + 4x \frac{dy}{dx} = 0
$$

Then the derivative $\frac{dy}{dx}$ appears, so we can easily isolate

$$
\frac{dy}{dx} = \frac{x-y}{4x}
$$
### Form of Differential Equations

First order differential equations can be written in the **differential form**

$$
M(x, y)\, dx + N(x, y)\, dy = 0
$$

We can also express an $n$-th order differential equation in the **general form**

$$
F(x, y, y', ..., y^{(n)}) = 0
$$

* where $F$ is a real-valued continuous function of $n+2$ variables

The solution of a general form DE can be written uniquely in $n+1$ terms, known as the **normal form**

$$
\frac{d^{(n)}y}{dx^{(n)}} = f(x, y, y', ..., y^{(n-1)})
$$




## Solutions for Differential Equations

> [!definition]
> Any function $\phi$, defined on an interval $I$ and possessing at least $n$ derivatives that are continuous on $I$, which when substituted into an $n$th-order ordinary differential equation reduces the equation to an identity, is said to be a **solution** of the equation on the interval.

Another way of expressing the above statement is that a solution of an $n$-th order ODE is a function $\phi$ that possesses at least $n$ derivatives and for which 

$$
F(x, \phi(x), \phi'(x), ..., \phi^{(n)}(x)) = 0 \quad \text{for all}\ x\ \text{in}\ I
$$

### Interval of Definition

The interval $I$ in this case is called the **interval of definition**, **interval of validity**, or the **domain of solution**. More on the case of $I$, the function $\phi$ is not the same as the solution $\phi$, that is, the domain of the solution is generally a [[Subsets|subset]] of the domain of the function.

> Note that a solution must be differentiable on the interval $I$ that it solves.

> [!note]
> An important requirement for the *interval of validity* is that $I$ can be an open interval $(a, b)$, closed interval $[a, b]$, or an infinite interval $[a, \infty)$; however, $I$ cannot be the [[set oper|union]] of disjoint intervals, that is, if $f(b)$ is undefined where $a < b < c$ then $I \ne [a, b)\cup(b, c]$ but rather we must restrict our domain to one continuous interval. 
> 
> When dealing with [[initial value problems]], if $\phi(x_{0}) = y_{0}$, it must also be required that the interval $I$ contains $x_{0}$. It is best recommended practice to define your *interval of validity* $I$ beginning with $x_{0}$ (See [[Solving Separable Equations#^85f196|here]] for an example).
### Types of Solutions

When we can express the solution of an ODE as a single function $y(x)$, we say this is an **explicit solution**.

When there's no way to express the solution solely in terms of $y$ on one hand and $x$ on the other, we write it as is, namely as an **implicit solution**.


