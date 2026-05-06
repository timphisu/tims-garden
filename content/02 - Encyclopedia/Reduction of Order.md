---
created: 202603211135,
reviewed: 202603211135
tags:
  - math/topic/odes
  - math/problems
  - math/concept
---

# Reduction of Order

## Introduction

Recall that the general solution of a homogeneous linear second-order differential equation `(1)`

$$
a_{2}(x)y'' + a_{1}(x)y' + a_{0}y = 0
$$

> Found in [[Initial Value Problems#Boundary-Value Problems|Boundary-Value Problems]]

is the linear combination 

$$
y = c_{1}y_{1} + c_{2}y_{2}
$$

where $y_{1}$ and $y_{2}$ form a fundamental set of solutions; that is, a linearly independent set on some interval $I$. 

If we know a nontrivial solution $y_{1}$ of the homogeneous equation above, it turns out we can construct a second solution $y_{2}$ of the DE (even when the coefficients are variable).

### Motivations

Let $y_{1}$ denote a nontrivial solution of a homogeneous equation `(1)` where $y_{1}$ is defined on an interval $I$. 

We seek a second solution $y_{2}$ such that the set $\{ y_{1}, y_{2} \}$ is linearly independent, then their quotient ${y_{2}}/{y_{1}}$ is nonconstant on $I$, that is

$$
\frac{y_{2}(x)}{y_{1}(x)} = u(x) \to y_{2}(x) = u(x)y_{1}(x)
$$

We can find the function $u(x)$ by substituting $y_{2}(x) = u(x)y_{1}(x)$ into the differential equation `(1)`. 

This method is called **reduction of order** because we must solve a linear first-order differential equation to find $u$. 

## General Process

Given a second-order linear equation `(1)`, we can write it in standard form by dividing by $a_{2}(x)$

$$
y'' + P(x)y' + Q(x)y = 0
$$

> Denote this standard form equation as `(2)`

Assume that $y_{1}(x)$ is a known solution of the above equation and that it's nonzero. 

We can then define our desired solution $y_{2} = y$ such that $y = u \cdot y_{1}$. Then by the [[Product Rule (Calculus)|product rule]], the first and second-order derivative is

$$
\begin{align}
y' &  = u'y_{1} + uy_{1}' \\ \\
y'' & = u''y_{1} + u'y_{1}' + u'y_{1}' + uy_{1}'' \\ \\
 & = u''y_{1} + 2u'y_{1}' + uy_{1}''
\end{align}
$$

Substituting this into `(2)`

$$
\begin{align}
 & y'' + Py' + Qy = 0 \\ \\
 & (u''y_{1} + 2u'y_{1}' + uy_{1}'') + P(u'y_{1} + uy_{1}') + Q(uy_{1}) = 0 \\ \\
 & u(y_{1}'' + Py_{1}' + Qy_{1}) + u''y_{1} + u'(2y_{1}' + Py_{1}) = 0 & \text{Grouping}
\end{align}
$$

If we focus our attention on this term $u(y_{1}'' + Py_{1}' + Qy_{1})$, then note that the inside expression actually forms the LHS of `(2)`, which we know $y_{1}$ satisfies the equation. So, the expression reduces to zero.

$$
\begin{align}
 & \cancel{ u(y_{1}'' + Py_{1}' + Qy_{1}) } + u''y_{1} + u'(2y_{1}' + Py_{1}) = 0 \\ \\
 & u''y_{1} + u'(2y_{1}' + Py_{1}) = 0
\end{align}
$$

If we make the substitution $w = u'$, then 

$$
\begin{align}
 & u''y_{1} + u'(2y_{1}' + Py_{1}) = 0 \\ \\
 & y_{1}w' + (2y_{1}' + Py_{1})w = 0
\end{align}
$$

which results in a <u>first-order</u> linear differential equation.

Separating variables, we obtain

$$
\begin{align}
 & y_{1}w' + 2wy_{1}' + Pwy_{1} = 0 \\ \\
 & y_{1}\, \mathbf{d}w + 2\, \mathbf{d}y_{1} + Py_{1}w = 0  & \text{Differential Form} \\ \\
 & \int \frac{dw}{w} + 2 \int \frac{dy_{1}}{y_{1}} + \int P\, dx = \int 0\, dx & \text{Integrating} \\ \\
 & \ln|w| + 2\ln|y_{1}| + \int P\, dx = C \\ \\
 & \ln \left| w y_{1}^{2} \right|  = C - \int P\, dx \\ \\
 & wy_{1}^{2} = Ce^{-\int P\, dx} & \text{Raise to} \ e^{x} \\ \\
 & w = C \frac{e^{- \int P\, dx}}{y_{1}^{2}}
\end{align}
$$

Now solving for $u$ since $w = u'$,

$$
u = C \int \frac{e^{- \int P \, dx}}{y_{1}^{2}}\, dx + k
$$

Then since $y = u \cdot y_{1}$,

$$
y = y_{1} \left( C \int \frac{e^{- \int P \, dx}}{y_{1}^{2}}\, dx + k \right) 
$$

* where $C$ and $k$ are arbitrary constants of integration but this represents a two-parameter family of solutions.

If we carefully choose our constants to be $C = 1, k = 0$, then we obtain a second solution $y_{2} = y$ that is <u>not</u> a linear combination of $y_{1}$. 

Thus, our second solution constructed from a known (first) solution is 

$$
\boxed{ y_{2}(x) = y_{1}(x) \int \frac{e^{- \int P\, dx}}{y_{1}^{2}}\, dx } 
$$

### Examples of Reducing Order

**Problem:** Given $y_{1} = e^{ x }$ is a solution of $y'' - y = 0$ on $(-\infty, \infty)$, use reduction of order to find a second solution $y_{2}$.

**Approach:** If $y = u(x)y_{1}(x) = u \cdot e^{ x }$, then by the product rule

$$
\begin{align}
 & y' = u'e^{x} + ue^{ x } \\ \\
 & y'' = u''e^{ x } + 2u'e^{ x } + ue^{ x }
\end{align}
$$

So substituting into the original differential equation where our objective is to find $u$,

$$
\begin{align}
 y'' - y  & = 0 \\ \\
(u''e^{ x } + 2u'e^{ x } + ue^{ x }) - ue^{ x } & = 0 \\ \\
 e^{ x }(u'' + 2u') & = 0
\end{align}
$$

> Note we are not using the solution $y_{2}$ to plug in for $y$ here but rather the definition we gave $y$ or $y_{1}$ as $y_{1} = u \cdot y_{2}$

Since $e^{ x } \ne 0$, we know that for the above equation to hold true then $u'' + 2u' = 0$. If we make a substitution $w = u'$ then the linear 2nd-order differential equation becomes

$$
\begin{align}
u'' + 2u' & = 0 \\ \\
w' + 2w  & = 0
\end{align}
$$

a [[Linear Differential Equations#First-Order Form|linear first-order differential equation]], which we know how to solve. By inspection, we quickly find our integrating factor to be $\mu = e^{ 2x }$. 

Now solving for $w$, which integrating again yields $u$,

$$
\begin{align}
 & e^{ 2x }w = \int 0\, dx \\ \\
 & w = c_{1}e^{ -2x }\\ \\
 & u = -\frac{1}{2}c_{1}e^{ -2x } + c_{2}
\end{align}
$$

> See how by integrating two times, you will arrive at two *different* constants of solution.

Thus, by our initial definition of $y$:

$$
\begin{align}
 y &  = u \cdot y_{2} = \left( -\frac{1}{2}c_{1}e^{ -2x } + c_{2} \right) e^{ x }\\ \\
  & = -\frac{1}{2}c_{1}e^{ -x } + c_{2}e^{ x }
\end{align}
$$

Disregarding the scalars or just by choosing $c_{1} = -2, c_{2} = 0$, then we form a desired second solution $y_{2} = e^{ -x }$ which is linearly independent since $W(e^{ x }, e^{ -x }) \ne 0$ for every $x$ on $(-\infty, \infty)$.

---

**Problem:** Find a second solution $y_{2}$

$$
y'' + 36y = 0; \quad y_{1} = \cos(6x)
$$

**Approach:** We should recognize that $P = 0$ in this DE and that gives $- \int P\, dx = -C$. 

Our new solution becomes

$$
\begin{align}
 y_{2} &  = y_{1} \int \frac{e^{-\int P\, dx}}{y_{1}^{2}} \\ \\
 &  = \cos(6x) \cdot \int \frac{e^{-C}}{\cos ^{2}(6x)}\, dx \\ \\
 & = e^{-C}\cos(6x) \int \sec ^{2}(6x)\, dx \\ \\
 & = e^{-C} \cos(6x) \cdot \tan(6x) + C
\end{align}
$$

> [!info] Drop Constants when Finding a Second Solution
> Note that we are seeking to find a linearly independent solution from $y_{1}$ in its fundamental form. So any scalar multiples or constants of integration are negligible. It's best practice to drop constants when unnecessary to solving for $y_{2}$.

Hence,

$$
\begin{align}
 y_{2} &  = \cancel{ e^{-C} } \cos(6x) \cdot \tan(6x) \cancel{ + C } \\ \\
  & = \cancel{ \cos(6x) } \cdot \frac{\sin(6x)}{\cancel{ \cos(6x) }} \\ \\
 & = \sin(6x)
\end{align}
$$

Our general solution becomes

$$
y = c_{1}\cos(6x) + c_{2}\sin(6x)
$$




