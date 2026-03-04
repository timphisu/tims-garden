---
created: 202602260955
reviewed: 202602260955
tags:
  - math/definition
---
# Linear Differential Equations
## Definition

> [!definition]
> A first-order differential equation of the form
> 
> $$
> a_{1}(x) \frac{dy}{dx} + a_{0}(x)y = g(x)
> $$
> 
> is said to be a **linear equation** in the variable $y$

## Examples of Linear Equations

The following examples are linear and [[Separable Equations|separable]]

$$
\begin{align}
 & \frac{dy}{dx} + 2xy = 0 \\ \\
 & \frac{dy}{dx} = y + 5
\end{align}
$$

where using the [[Solving Separable Equations#Method to Solving Separable Equations|method]] for solving separable equations is still a valid approach.

However, finding a method that solves linear equations would be useful in solving differential equations such as

$$
\frac{dy}{dx} + y = x
$$

where they are linear, but not separable.

## Standard Form

> [!definition]
> If we divide a [[2.3 - Linear Equations#Definition|linear equation]] both sides by the lead coefficient $a_{1}(x)$, we obtain a much more workable form, the *standard form*, of a linear equation, expressed as
> 
> $$
> \frac{dy}{dx} + P(x)y = f(x)
> $$

> Note that $f(x)$ here and $g(x)$ [[#Definition|here]] are called *input functions* or *force functions* 

### Examples of Identifying the Standard Form

Consider the expression

$$
\frac{dy}{dx} + y = x
$$

Then in this case, $P(x)=1$ and $f(x) = 1$

## [[Solving Linear DEs]]

> See above how to solve linear equations and examples