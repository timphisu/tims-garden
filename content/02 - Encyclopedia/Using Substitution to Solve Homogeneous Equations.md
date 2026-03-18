---
created: 202603161312,
reviewed: 202603161312
tags:
  - math/problems
  - math/topic/odes
---

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
 & \int \frac{dx}{x} + \int\left( \frac{1-u}{1+u} \right)\, du = \int 0\, dx \\ \\
 & \int \frac{dx}{x} + \int\left( \frac{2}{u+1} - 1 \right)\, du = \int 0\, dx & \text{Long division: } \frac{1-u}{1+u} = \frac{2}{u+1} - 1 \\ \\
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

---

**Problem:** Solve the given homogeneous differential equation by using an appropriate substitution.

$$
y\, dx = 2(x+y)\, dy
$$

**Approach:** Rewriting in the differential form

$$
y\, dx - 2(x+y)\, dy = 0
$$

We know this is homogeneous, so we can go straight into using the method of substituting $x = vy$ (by inspection the $dx$ term is much easier to split) which makes our differential to be $dx = y\, dv + v\, dy$. 

Substituting all this information together,

$$
\begin{align}
 & y(y\, dv + v\, dy) - 2(vy + y)\, dy = 0 \\ \\
 & y^{2}\, dv + (vy - 2vy - 2y)\, dy = 0 \\ \\
 & y^{2}\, dv - (v + 2)y\, dy = 0 \\ \\
 & y\, dv - (v+2)\, dy = 0 \\ \\
 & \frac{dy}{y} - \frac{dv}{v+2} = \int 0\, dv \\ \\
 & \ln|y| - \ln|v+2| = C_{0} \\ \\
 & \ln \left| \frac{y}{v+2} \right| = C_{0} \\ \\
 & \frac{y}{v+2} = C_{1} \\ \\
 & y = C_{1}(v+2) \\ \\
 & y = C(v+2) \\ \\
 & y = C\left( \frac{x}{y} + 1 \right) \\ \\
 & y = \frac{C(x+y)}{y} \\ \\
 & \boxed{ y^{2} = C(x+y) } 
\end{align}
$$

Our final implicit solution is shown above in the box.

---

**Problem:** Solve

$$
\frac{dy}{dx} = \frac{y-x}{y+x}
$$

**Approach:** Writing in its differential form,

$$
\begin{align}
 & dy = \left( \frac{y-x}{y+x} \right) \, dx \\ \\
 & \left( \frac{x - y}{y + x} \right) \, dx + dy= 0 \\ \\
\end{align}
$$

We can then do a substitution $y = ux$, and $dy = u\, dx + x\, du$. 

$$
\begin{align}
 & \left( \frac{x - ux}{ux + x} \right) \, dx + (u\, dx + x\, du) = 0 \\ \\
 & \left( \frac{x - ux}{ux + x} + u \right) \, dx + x\, du = 0 \\ \\
 & \left( \frac{x - ux + ux + u^{2}x}{ux+x} \right)\, dx + x\, du = 0 \\ \\
 & \left( \frac{x + u^{2}x}{ux + x} \right)  \, dx + x\, du = 0 \\ \\
 & \left( \frac{1 + u^{2}}{1 + u} \right)\, dx + x\, du = 0 \\ \\
 & \frac{dx}{x} + \left( \frac{1+u}{1+u^{2}} \right)\, du = 0 \\ \\
 & \int \frac{dx}{x} + \int \left( \frac{1+u}{1+u^{2}} \right) \, du = \int 0\, dx \\ \\
 & \int \frac{dx}{x} + \int \left( \frac{1}{1+u^{2}} + \frac{u}{1+u^{2}} \right) \, du = \int 0\, dx \\ \\
 & \ln|x| + \arctan(u) + \frac{1}{2}\ln|1+u^{2}| = C \\ \\
 & \ln|x| + \arctan\left( \frac{y}{x} \right) + \ln \left| \frac{\sqrt{ x^{2} + y^{2} }}{x} \right| = C \\ \\
 & \ln|x| - \ln|x| + \arctan\left( \frac{y}{x} \right) + \ln \left| \sqrt{ x^{2} + y^{2} } \right| = C \\ \\
 & \arctan\left( \frac{y}{x} \right) + \ln \left| \sqrt{ x^{2} + y^{2} } \right| = C
\end{align}
$$