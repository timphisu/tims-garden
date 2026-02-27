---
created: 202602261007
reviewed: 202602261007
tags:
  - math/problems
---

### Motivations

Suppose there exists a function $\mu(x)$ such that $\displaystyle \frac{d\mu}{dx} = \mu(x)P(x)$. Then, we can multiply $\mu(x)$ on both sides of the standard form of linear equation that we get

$$
\mu(x)\frac{dy}{dx} + \mu(x)P(x)y = \mu(x)f(x)
$$

Since we defined $\mu$'s derivative, we can substitute ^688abf

$$
\mu(x)\frac{dy}{dx} + y\frac{d\mu}{dx} = \mu(x)f(x)
$$



Observe that the LHS of the equation is simply the [[Product Rule (Calculus)|product rule]] of the derivative between $\mu$ and $y$

$$
\frac{d}{dx} \left[ \mu(x)y \right] = \mu(x)f(x)
$$

Then solving for $y$, we can integrate both sides

$$
\begin{align} \\
 & \frac{d}{dx} \left[ \mu(x)y \right] = \mu(x)f(x) \\ \\
 & \mu(x)y = \int \mu(x)f(x)\, dx + C & \text{FTC} \\ \\ \\
 & y = \frac{\int \mu(x)f(x)\, dx + C}{\mu(x)}
\end{align}
$$

So we can see why finding the function $\mu(x)$, known as the **integrating factor**, is useful in solving linear equations.
### Integrating Factor

> [!definition]
> Suppose there exists a function $\mu(x)$ such that $\displaystyle \frac{d\mu}{dx} = \mu(x)P(x)$ where $P(x)$ is found in the standard form of the linear differential equation. This function is better known as the *integrating factor* and is defined as 
> 
> $$
> \mu(x) = e^{\int P(x)\, dx}
> $$
> 

 A linear differential equation is guaranteed to have an integrating factor if $\int P(x)\, dx$ has a nonelementary solution.
#### Finding the Integrating Factor

Recall [[#Motivations|here]] that the solution depends on the fact that

$$
\frac{d\mu}{dx} = \mu P(x)
$$

Rearranging,

$$
\frac{d\mu}{\mu} = P(x)\, dx
$$

Then by integrating both sides, we can solve for $\mu$

$$
\begin{align}
 & \int \frac{d\mu}{\mu} = \int P(x)\, dx & \text{Integrate both sides} \\ \\
 & \ln|\mu(x)| = \int P(x)\, dx + C_{1} \\ \\
 & \mu(x) = e^{\int P(x)\, dx + C_{1}}  & \text{Raise both sides}\ e \\ \\
 & \mu(x) = Ce^{\int P(x)\, dx} & \text{Let}\ C = e^{C_{1}}
\end{align}
$$

> [!info] Negligibility of Integration Constant
> 
> If we use the general solution $\mu(x) = Ce^{\int P(x)\, dx}$, when multiplying this [[#Standard Form|equation]] by $\mu(x)$
> 
> $$
> Ce^{\int P(x)\, dx} \frac{dy}{dx} + Ce^{\int P(x)\, dx} P(x) = Ce^{\int P(x)\, dx}f(x)
> $$
> We quickly find out that $C$'s can pretty much cancel out.

> Note that the constant of integration for $\mu(x)$ is negligible but the the constant in $\int \mu(x)f(x)\, dx + C$ is <u>not</u> negligible.

Since $C$ is negligible, let $C = 1$ and we find

$$
\boxed{ \mu(x) = e^{\int P(x)\, dx} } 
$$
### Method of Solution

1. Convert the linear equation to standard form

2. Identify $P(x)$ and then find the integrating factor $\mu = e^{\int P(x)\, dx}$. Note that the constant of integration is negligible for $\int P(x)\, dx$.

3. By multiplying both sides of the standard form by $\mu$, we automatically get

$$
\frac{d}{dx} \left[ \mu(x)y \right]  = \mu(x)f(x)
$$

4. Integrate both sides of the last equation and solve for $y$.
### Examples of Solving Linear DEs

**Problem:** Solve the following first-order linear DE ^b55661

$$
y' + 2xy = x^{3}
$$

**Approach:** This is already in standard form and we can identify $P(x) = 2x$ and $f(x) = x^{3}$.

Then the integration factor should be $\mu = e^{x^{2}}$ so,

$$
\begin{align}
 & \frac{d}{dx} \left[ e^{x^{2}}y \right] = x^{3}e^{x^{2}} \\ \\
 & e^{x^{2}}y = \int x^{3}e^{x^{2}}\, dx  & \text{Integrate both sides} \\  \\
 & e^{x^{2}}y = \frac{1}{2} \int x^{2}de^{x^{2}} & \text{Integration by Parts} \\ \\
 & e^{x^{2}}y = \frac{1}{2} \left( x^{2}e^{x^{2}} - \int e^{x^{2}}dx^{2} \right) \\ \\
 & e^{x^{2}}y = \frac{1}{2} \left( x^{2}e^{x^{2}} - e^{x^{2}} \right) + C \\ \\
 & e^{x^{2}}y = \frac{1}{2} e^{x^{2}}\left( x^{2} - 1 \right) + C  & \text{Factor out}\ e^{x^{2}} \\ \\
 & y = \frac{1}{2}(x^{2}-1) + Ce^{-x^{2}}  & \text{Solving for}\ y
\end{align}
$$

Now considering the interval of solution, we can see from the original problem that there were no restrictions on $x$ and looking at the solution $y$, we see no restrictions on $x$ either as even $e^{-x^{2}} = \frac{1}{e^{x^{2}}}$ if defined for all numbers. So, the interval of solution is $I = (-\infty, \infty)$.

Additionally, suppose we took the limit of this [[#^b55661|problem's]] solution as $x \to \infty$.

$$
	\lim_{ x \to \infty } y(x) = \frac{1}{2}\lim_{ x \to \infty } (x^{2}-1) + C\lim_{ x \to \infty } e^{-x^{2}}
$$

Note that the first term $\lim_{ x \to \infty } \left[ \frac{1}{2}(x^{2}-1) \right] = \infty$, however, the second becomes

$$
\lim_{ x \to \infty } \left[ Ce^{-x^{2}} \right] = 0
$$

Thus, such a term is called a [[transient term]] where terms of the solution reduce to zero when taken the limit as $x \to \infty$.

---

**Problem:** Solve the given linear differential equation.

$$
(x+1) \frac{dy}{dx} - xy = x + x^{2}
$$

**Approach:** First convert to standard form and clean up.

$$
\begin{align}
 & (x+1) \frac{dy}{dx} - xy = x + x^{2} \\ \\
 & \frac{dy}{dx} - \frac{xy}{x+1} = \frac{x(1 + x)}{x+1} \\ \\ \\
 & \frac{dy}{dx} = \left( \frac{x}{x+1} \right) y = x
\end{align}
$$

Then we identify $P(x) = -\frac{x}{x+1}$ and $f(x) = x$. However, to derive the integrating factor, we must anti-differentiate $P(x)$ which is much easier when rewritten with polynomial division.

$$
P(x) = -\frac{x}{x+1} = \left( \frac{1}{x+1} - 1 \right)
$$

$$
\int P(x)\, dx = \int \left( \frac{1}{x+1} - 1 \right)\, dx = \ln|x+1| - x
$$
which gives our integrating factor to be

$$
\mu(x) = e^{\int P(x)\, dx} = e^{\ln|x+1| - x} = (x+1)e^{-x}
$$

Then evaluating the identity of the integrating factor,

$$
\begin{align}
 & \frac{d}{dx} \left[ \mu(x)y(x) \right] = \mu(x)f(x)  & \text{Given} \\ \\
 & \frac{d}{dx} \left[ \mu(x)y(x) \right] = x(1+x)e^{-x} & \text{Definition of}\ \mu(x), f(x) \\ \\
 & \mu(x)y(x) = \int (x+x^{2})e^{-x}\, dx & \text{Integrating both sides} \\ \\
 & \mu(x)y(x) = - \int (x+x^{2})\, de^{-x}  & \text{Integration by Parts} \\ \\
 & \mu(x)y(x) = - \left[ (x+x^{2})e^{-x} - \int e^{-x}d(x+x^{2}) \right] \\ \\
 & \mu(x)y(x) = - \left[ (x+x^{2})e^{-x} - \int e^{-x}(1+2x)\, dx \right] \\ \\
 & \mu(x)y(x) = - \left[ (x+x^{2})e^{-x} - \int e^{-x}\, dx - 2\int xe^{-x}\, dx \right]  & \text{Split integral}  \\ \\
 & \mu(x)y(x) = - \left[ (x+x^{2})e^{-x} + e^{-x} + 2(x+1)e^{-x} \right] + C  & \int xe^{-x}\, dx = -e^{-x}(x+1) + C\\ \\
 & (x+1)e^{-x}y = - x(x+1)e^{-x} - e^{-x} - 2(x+1)e^{-x} + C  & \text{Simplifying} \\ \\
 & (x+1)y = -x(x+1) - 1 - 2(x+1) + Ce^{x} & \text{Multiply}\ e^{x} \\ \\
 & y = -x - \frac{1}{x+1} - 2 + \frac{Ce^{x}}{x+1} & \text{Divide by}\ \frac{1}{x+1}
\end{align}
$$

Now considering the domain of the function above, it is $(-\infty, -1)\cup(-1, \infty)$. We choose a continuous interval, either of the two, and define $I = (-1, \infty)$.

Note that if we take $\lim_{ x \to \infty }y$ then none of the terms converge to $0$, so there are no transient terms in this solution.

---

**Problem:** Find $P(t)$

$$
\frac{dP}{dt} + (2t-1)P = 4t-2
$$

**Approach:** Since the variable $P$ is used here, we won't use $P(x)$ but we identify it and go straight into finding $\mu(t)$

$$
\mu(t) = e^{\int (2t-1)\, dt} = e^{t^{2} - t}
$$

Then find $y$,

$$
\begin{align}
 & \mu y = \int e^{t^{2}-t}(4t-2)\, dt & \text{Identity of}\ \mu \\ \\
 & \mu y = 2 \int e^{t^{2}-t}(2t-1)\, dt \\ \\
 & \mu y = 2 \int e^{t^{2}-t}d(t^{2} - t) \\ \\
 & \left(e^{t^{2} - t}\right) y = 2 e^{t^{2} - t} + C \\ \\
 & y(t) = 2 + Ce^{t - t^{2}} & \text{Divide both sides by}\ \mu
\end{align}
$$

* where $I = (-\infty, \infty)$

We should also find that $Ce^{t-t^{2}}$ is a transient term in this solution

$$
\lim_{ t \to \infty } \frac{C}{e^{t^{2} - t}} = \lim_{ t \to \infty } \frac{C}{e^{\infty}} = \lim_{ t \to \infty }  \frac{C}{\infty} = 0
$$

> [!tip]
> It's quite easy to get mixed up with the laws of exponents but note that $e^{a+b} = e^{a}e^{b}$ which is not the same as $e^{ab} = (e^{a})^{b}$.
>  

---

**Problem:** Find $y(x)$

$$
(x^{2}-1) \frac{dy}{dx} + 2y = (x+1)^{2}
$$

**Approach:**

$$
\begin{align}
 & (x^{2}-1) \frac{dy}{dx} + 2y = (x+1)^{2} & \text{Given} \\ \\
 & \frac{dy}{dx} + \left( \frac{2}{x^{2}-1} \right)y = \frac{x+1}{x-1} & \text{Standard Form}
\end{align}
$$

We identify $\displaystyle P(x) = \frac{2}{x^{2}-1}$ and $\displaystyle f(x) = \frac{x+1}{x-1}$, so we are interested in finding $\int P(x)\, dx$. An approach is to first do rational decomposition since the denominator is a product of linear factors.

$$
P(x) = \frac{2}{(x+1)(x-1)} = \frac{A}{x+1} + \frac{B}{x-1}
$$

We solve the linear equation

$$
2 = A(x-1) + B(x+1)
$$

by holding $x = -1, 1$ 

$$
\begin{align}
 & x = -1 \implies 2 = -2A \implies A = -1 \\ \\
 & x = 1 \implies 2 = 2B \implies B = 1
\end{align}
$$

So,

$$
\int P(x)\, dx = \int \left( \frac{1}{x-1} - \frac{1}{x+1} \right)\, dx = \ln \left| \frac{x-1}{x+1} \right| 
$$

which means 

$$
\mu(x) = e^{\ln \left| \frac{x-1}{x+1} \right| } = \frac{x-1}{x+1}
$$

Then solving for $y(x)$,

$$
\begin{align}
 & \mu y = \int \left( \frac{x-1}{x+1} \right)\left( \frac{x+1}{x-1} \right)\, dx \\ \\
 & \mu y = \int 1 \, dx \\ \\
 & \left( \frac{x-1}{x+1} \right) y = x + C \\ \\
 & y = \frac{x(x+1)}{x-1} + \frac{C(x+1)}{x-1}
\end{align}
$$

* where we choose $I = (1, \infty)$

Note that there are no transient terms.

---
#### Piecewise Functions

**Problem:** Consider the following differential equation

$$
(1+x^{2}) \frac{dy}{dx} + 2xy = f(x), \quad y(0) = 0
$$

where 

$$
f(x) = 
\begin{cases}
x & \text{if}  & 0 \leq x < 1 \\ \\
-x & \text{if}  & x \geq 1
\end{cases}
$$

**Approach:** What we have are two different input functions depending on the subinterval. Our ultimate goal is to resolve this discontinuity and get the largest domain of solution possible. We are going to have two different solutions depending on the subinterval. 

For $0 \leq x \leq 1$, we find the following equation to be true

$$
\begin{align}
 & (1+x^{2}) \frac{dy}{dx} + 2xy = x \\ \\
 & \frac{dy}{dx} + \left( \frac{2x}{1+x^{2}} \right)y = \frac{x}{1+x^{2}}  & \text{Std. Form}
\end{align}
$$

Assuming you know $P(x)$ and $f(x)$, we find

$$
\mu(x) = e^{\ln|1+x^{2}|} = 1+x^{2}
$$

then

$$
\begin{align}
 & \mu y = \int x \, dx \\ \\
 & (1+x^{2}) y = \frac{1}{2}x^{2} + C \\ \\
 & y(x) = \frac{x^{2}}{2(1+x^{2})} + \frac{C_{1}}{1+x^{2}}  & 0 \leq x < 1
\end{align}
$$

> [!note]
> As you will see, for the solutions of $y$ on different intervals. The constants of integration are denoted $C_{1}$ and $C_{2}$ since they should be different. Using $C$ would imply that both solutions have the same constant.

For $x \geq 1$, we'll see that $P(x)$ is the same as above so $\mu$ is the same, but $\displaystyle f(x) = -\frac{x}{1+x^{2}}$

$$
\begin{align}
 & (1+x^{2}) \frac{dy}{dx} + 2xy = -x \\ \\
 & \frac{dy}{dx} + \left( \frac{2x}{1+x^{2}} \right)y = -\frac{x}{1+x^{2}}  & \text{Std. Form}
\end{align}
$$

Then,

$$
\begin{align}
 & \mu y = \int -x, dx \\ \\
 & \mu y = -\frac{1}{2}x^{2}+C \\ \\
 & y = -\frac{x}{2(1+x^{2)}} + \frac{C_{2}}{1+x^{2}}  & x \geq 1
\end{align}
$$

> Note that if $C$ is a constant, $\frac{d}{dx} C = 0$ so $\int 0 \, dx = C$. Just some intuition since the derivative of any flat line will be zero. 

Now we must consider the initial condition $y(0) = 0$. Since $0$ is defined on the interval $0 \leq x < 1$ of the first solution. We find $C_{1}$ that satisfies this condition by substituting

$$
\begin{align}
 & y(x) = \frac{x^{2}}{2(1+x^{2})} + \frac{C_{1}}{1+x^{2}} \\ \\
 & 0 = \frac{0}{2(1+0)} + \frac{C_{1}}{1+0} \\ \\
 & \implies C_{1} = 0
\end{align}
$$

So the first part of our *piecewise solution* becomes $\displaystyle y(x) = \frac{x^{2}}{2(1+x^{2})}$ for $0 \leq x < 1$. 

We want the largest interval of solution possible, for that to be true, it must be continuous (see its [[Differential Equations#Interval of Definition|definition]]). For continuity at $x=1$, left hand and right hand limits must agree, that is, $\lim_{ x \to 1^{-} } y(x) = \lim_{ x \to 1^{+} }y(x)$. Another way of saying this is that the curves must touch (and be defined) at $x=1$.

Set the two parts of the piecewise function equal to each other and let $x=1$ so that the second part is equal to the first part at $x=1$.

$$
\begin{align}
 & \frac{x^{2}}{2(1+x^{2})} = -\frac{x}{2(1+x^{2)}} + \frac{C_{2}}{1+x^{2}}  & \text{Set equal to each other} \\ \\
 & \frac{1}{2(1+1)} = - \frac{1}{2(1+1)} + \frac{C_{2}}{1+1} & \text{Let}\ x= 1 \\ \\
 & \frac{1}{4} = - \frac{1}{4} + \frac{C_{2}}{2} \\ \\
 & \frac{1}{2} = \frac{C_{2}}{2} \\ \\
 & C_{2} = 1
\end{align}
$$

Now we find that,

$$
y(x) = 
\begin{cases}
\frac{x^{2}}{2(1+x^{2})} & 0 \leq x < 1 \\  \\
\frac{1}{1 + x^{2}} - \frac{x}{2(1+x^{2})} & x\geq 1
\end{cases}
$$

* for all $x$ in $I = [0, \infty)$

![[Pasted image 20260226143959.png|500]]

> Note that $y(x)$ at $x=1$ is a cusp, hence $y$ is not differentiable at $x=1$

