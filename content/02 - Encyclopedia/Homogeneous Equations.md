---
created: 202603071143
reviewed: 202603071143
tags:
  - math/form
  - math/problems
  - math/topic/odes
---

## Property of Homogeneous Functions

> [!definition]
> If a function $f(x, y)$ has the property
> 
> $$
> f(tx, ty) = t^{\alpha}f(x, y)
> $$
> 
> where $\alpha$ is some real number, then $f$ is said to be *homogeneous* of degree $\alpha$.

For a function to be homogeneous, when factoring out $t^{\alpha}$, there should be no instances of $t$ left inside the expression; otherwise, it is *not* homogeneous.

## Using Substitution to Solve Homogeneous Equations

#### Motivations

Given the differential form,

$$
M(x,y)\, dx + N(x, y)\, dy = 0
$$

If $M$ and $N$ are *homogeneous functions* then we can introduce a new independent variable $u$ such that $u = {y}/{x}$ or $v$ such that $v = {x}/{y}$.

If we let $u = {y}/{x}$,

$$
\begin{align}
M(x, y) = x^{\alpha}M(1, u) \\ \\
N(x, y) = x^{\alpha}N(1, u)
\end{align}
$$


or if we let $v = {x}/{y}$,

$$
\begin{align}
 & M(x, y) = y^{\alpha}M(v, 1) \\ \\
 & N(x, y) = y^{\alpha}N(v, 1)
\end{align}
$$

By using either substitution, we can reduce homogeneous equations to separable first-order ordinary differential equations.

To show this, let us assume $M$ and $N$ are homogeneous, then by letting $u = \frac{y}{x}$

$$
\begin{align}
 & M(x, y)\, dx + N(x, y)\, dy = 0 & \text{Given} \\ \\
 & x^{\alpha}M(1, u)\, dx + x^{\alpha}N(1, u)\, dy = 0 & \text{Property of}\ M, N \\ \\
 & M(1, u)\, dx + N(1, u) \, dy = 0  & \text{Cancel out}\ x^{\alpha} 
\end{align}
$$

Since $u$ is an independent variable where $u = {y}/{x}$, rearranging we can express $y = ux$.

Then to obtain $y$'s differential in order to complete the substitution, it must be recognized that $ux$ is a product between two functions $u(x)$ and $x$. 

So by the [[Product Rule (Calculus)|product rule]], 

$$
y = ux \implies dy = u\, dx + x\, du
$$

Then substituting,

$$
\begin{align}
 & M(1, u)\, dx + N(1, u)\, dy = 0 \\ \\
 & M(1, u)\, dx + N(1, u)\, (x\, du + u\, dx) = 0 \\ \\
 & [M(1, u) + uN(1, u)]\, dx + xN(1, u)\, du = 0  & \text{Collect}\ dx, du \\ \\
 & \frac{dx}{x} + \frac{N(1, u)}{M(1, u) + uN(1, u)}\, du = 0 & \text{Divide by all terms} 
\end{align}
$$

and what we have now is a [[Separable Equations|separable equation]] in terms of $x$ and $u$. When we determine what the function $u(x)$ is, then we resubstitute and derive $y = y(x, u(x))$   which solves the differential equation.

> Likewise the same process would work if we let $v = {x}/{y}$ and rewrote the equation in terms of $v$ and $y$. 

> [!tip]
>  Our choice of substitution depends on (1) which differential is easier to distribute since $dx$ or $dy$ becomes the sum of two terms, and (2) if one choice of substitution is analytically complex or arrives at no solution, then we choose the other and see if it's easier to work with.
#### Examples of Solving Homogeneous Equations

**Problem:** Solve

$$
(x^{2} + y^{2})\, dx + (x^{2} - xy)\, dy = 0
$$

**Approach:** By inspection, if we let $M = x^{2} + y^{2}$ and $N = x^{2} - xy$, note that $M_{y} \ne N_{x}$ so this is not an [[Exact Equations|exact equation]] nor is it [[Separable Equations|separable]]; however, if we let $x \to tx$ and $y \to ty$, then

$$
\begin{align}
 & \left[ (tx)^{2} + (ty)^{2} \right] \, dx + \left[ (tx)^{2} - (tx)(ty) \right]\, dy = 0 \\ \\
 & (t^{2}x^{2} + t^{2}y^{2})\, dx + (t^{2}x^{2} - t^{2}xy)\, dy = 0 \\ \\
 & t^{2} (x^{2} + y^{2})\, dx + t^{2}(x^{2} - xy)\, dy = 0
\end{align}
$$

which shows that $M$ and $N$ are homogeneous with degree $\alpha = 2$.

If the DE contains homogeneous functions, then we can make a substitution introducing the variable $u$ such that $u = {y}/{x}$.

$$
\begin{align}
 & (x^{2} + y^{2})\, dx + (x^{2} - xy)\, dy = 0 & \text{Given} \\ \\
 & [x^{2} + (ux)^{2}]\, dx + [x^{2} - x(ux)]\, dy = 0 & \text{Substitute:}\ y = ux \\ \\
 & (x^{2} + u^{2}x^{2})\, dx + (x^{2} - ux^{2})\, (u\, dx + x\, du) = 0 & \text{Substitute: } dy = u\,dx + x\, du \\ \\
 & (x^{2} + u^{2}x^{2} + ux^{2} - u^{2}x^{2})\, dx + (x^{3} - ux^{3})\, du = 0 & \text{Group } dx, du \\ \\
 & x^{2}(1 + u)\, dx + x^{3}(1 - u)\, du = 0 & \text{Simplify} \\ \\
 & (1+u)\, dx + x(1-u)\, du = 0 & \text{Cancel }x^{2} \\ \\
 & \frac{dx}{x} + \left( \frac{1-u}{1+u} \right)\, du = 0 & \text{Rearranging}
\end{align}
$$

Now you could move $\frac{dx}{x}$ on one hand and integrate, but since integration is a [[linear operator]], we can do

$$
\begin{align}
 & \int \frac{dx}{x} + \int\left( \frac{1-u}{1+u} \right)\, du = \int 0 \\ \\
 & \int \frac{dx}{x} + \int\left( \frac{2}{u+1} - 1 \right)\, du = \int 0 & \text{Long division: } \frac{1-u}{1+u} = \frac{2}{u+1} - 1 \\ \\
 & \ln|x| + 2\ln|u+1| - u = C
\end{align}
$$

And then resubstituting $u = {y}/{x}$,

$$
\begin{align}
 & \ln|x| + 2 \ln \left| 1 + \frac{y}{x} \right| - \frac{y}{x} = C_{0} \\ \\
 & \ln \left| x \cdot \frac{(x+y)^{2}}{x^{2}} \right| =  C_{0} + \frac{y}{x} \\ \\ \\
 & \frac{(x+y)^{2}}{x} = Ce^{{y}/{x}} & \text{Raise to } e, C = e^{C_{0}} \\ \\
 & (x+y)^{2} = Cxe^{{y}/{x}}
\end{align}
$$

gives us the implicit solution after making appropriate simplifications.
