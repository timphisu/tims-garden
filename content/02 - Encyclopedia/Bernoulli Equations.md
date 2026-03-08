---
created: 202603071144
reviewed: 202603071144
tags:
  - math/form
  - math/problems
  - math/topic/odes
---

> [!definition]
> The differential equation
> 
> $$
> \frac{dy}{dx} + P(x)y = f(x)y^{n}
> $$
> 
> where $n$ is a real number, is called *Bernoulli's equation*.

### Intuition for Substitution

Let's walk through some cases of $n$ to understand more about this equation

If $n=0$, then the equation takes the [[Linear Differential Equations#Standard Form|standard form]] of a linear equation. And if $n=1$, then the equation is still linear because

$$
\begin{align}
 & \frac{dy}{dx} + P(x)y = f(x)y & n = 1 \\ \\
 & \frac{dy}{dx} + P(x)y - f(x)y = 0\\ \\
 & \frac{dy}{dx} + \left[ P(x) - f(x) \right] y = 0 \\ \\
 & \frac{dy}{dx} + Q(x)y = g(x) & Q(x) = P(x) - f(x), \quad g(x) =0
\end{align}
$$

But for $n \ne 0$ and $n \ne 1$, then the equation becomes nonlinear but can be solved with the substitution $u = y^{1-n}$ to make the equation become [[Linear Differential Equations|linear]].

### Using Substitution to Linearize Bernoulli DEs

The process of substitution is pretty straightforward where we are substituting $y$ and $\frac{dy}{dx}$. Please take a look at the following examples to get a better idea of what's going on.

**Problem:** Solve

$$
x \frac{dy}{dx} + y = x^{2}y^{2}
$$

**Approach:** If we divide by $x$ on both sides to write in standard form, we get

$$
\frac{dy}{dx} + \frac{y}{x} = xy^{2}
$$

but this is not a linear equation just by inspection since the degree of $y$ is $n > 1$. 

We make the substitution $u = y^{1-2} = y^{-1}$ which makes $y = \frac{1}{u}$. Now note that $u = u(x)$, so by the Chain Rule that tells us

$$
\frac{dy}{dx} = \frac{dy}{du} \frac{du}{dx} = -\frac{1}{u^{2}} \frac{du}{dx} 
$$

So by substitution, the DE transforms to

$$
\begin{align}
 & - \frac{1}{u^{2}} \frac{du}{dx} + \frac{1}{ux} = \frac{x}{u^{2}} \\ \\
 & \frac{du}{dx} - \frac{1}{x}u = -x  & \text{Std. Form}
\end{align}
$$

which becomes a linear equation. If we identify $P(x) = -\frac{1}{x}$ and $f(x) = -x$, this makes our integrating factor

$$
\mu(x) = e^{\int P\, dx} = e^{-\ln|x|} = x^{-1}
$$

Then solving for $u$, we should get

$$
\begin{align}
 & \frac{d}{dx}[\mu(x)\cdot u(x)] = \mu(x) \cdot f(x) \\ \\
 & \frac{d}{dx} \left[ \frac{1}{x} u \right] = \frac{1}{x} \cdot (-x) \\ \\
 & \frac{1}{x}u = \int -1\, dx \\ \\
 & \frac{1}{x}u = -x + C \\ \\
 & u = Cx - x^{2}
\end{align}
$$

And since we defined $u = {1}/{y}$ then,

$$
y = \frac{1}{Cx - x^{2}}
$$

---

**Problem:** Solve

$$
\frac{dy}{dx} - y = e^{ x }y^{2}
$$

**Approach:** This equation is nonlinear, so we identify this as a Bernoulli equation where we can introduce the substitution $u = y^{-1}$. We can use calculations from the previous example and rewrite the above equation as

$$
\begin{align}
 & -\frac{1}{u^{2}} \frac{du}{dx} - \frac{1}{u} = \frac{e^{ x }}{u^{2}} \\ \\
 & \frac{du}{dx} + u = -e^{ x }
\end{align}
$$

Since the equation is now linear, we can quickly recognize that $P(x) = 1$ making $\mu = e^{\int P\, dx} = e^{x}$, so quickly solving for $u$ using the identity of integrating factors

$$
\begin{align}
 & \frac{d}{dx} \left[ \mu(x) \cdot u(x) \right] = \mu(x) \cdot (- e^{x}) \\ \\
 & e^{x} \cdot u = \int -e^{ 2x }\, dx \\ \\
 & e^{ x } \cdot u = -\frac{1}{2}e^{2x} + C \\ \\
 & u = -\frac{1}{2}e^{ x } + Ce^{-x}
\end{align}
$$

And then resubstituting for $y$,

$$
y = \left( -\frac{1}{2}e^{x} + Ce^{ -x }\right)^{-1} 
$$