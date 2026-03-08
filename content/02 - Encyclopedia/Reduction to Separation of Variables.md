---
created: 202603071144
reviewed: 202603071143
tags:
  - math/topic/odes
  - math/problems
---

A differential equation of the form

$$
\frac{dy}{dx} = f(Ax + By + C)
$$

can always be reduced to an equation with [[Separable Equations|separable variables]] by means of the substitution $u = Ax + By + C$ where $B \ne 0$.

### Examples

**Problem:** Solve

$$
\frac{dy}{dx} = \sin(x + y)
$$

**Approach:** We have a function on the RHS whose argument is the linear expression $x+y$ where $A = 1, B = 1, C = 0$. We can make a substitution $u = x + y$.

$$
\begin{align}
 & u = x + y \\ \\
 & \frac{d}{dx} u = \frac{d}{dx} (x+y) \\ \\
 & \frac{du}{dx} = 1+ \frac{dy}{dx} \\ \\
 & \implies \frac{dy}{dx} = \frac{du}{dx} - 1
\end{align}
$$

Making the proper substitutions,

$$
\begin{align}
 & \frac{du}{dx} - 1 = \sin(u) & \text{Separable} \\ \\
 & \frac{1}{1 + \sin(u)}\, du = dx & \text{Rearranging} \\ \\
 & \int \frac{1}{1 + \sin(u)}\, du = \int dx & \text{Integrate} \\ \\
\end{align}
$$

Now focusing our attention to the LHS, we can multiply a factor that makes the integrand more workable.

$$
\begin{align}
\int \frac{1}{1 + \sin(u)}\, du  & = \\ \\
 & = \int \left[ \frac{1}{1 + \sin(u)} \cdot \frac{1 - \sin(u)}{1 - \sin(u)} \right]\, du \\ \\
 & = \int \frac{1 - \sin(u)}{1 - \sin^{2}(u)} \, du \\ \\
 & = \int \frac{1 - \sin(u)}{\cos ^{2}(u)}\, du \\ \\
 & = \int \sec^{2}(u)\, du - \int \sec(u)\tan(u)\, du \\ \\
 & = \tan(u) - \sec(u) + C
\end{align}
$$

So, 

$$
\begin{align}
 & \int \frac{1}{1 + \sin(u)}\, du = \int dx \\ \\
 & \tan(u) - \sec(u) = x + C \\ \\
 & \tan(x+y) - \sec(x+y) = x + C
\end{align}
$$

---

**Problem:** Solve

$$
\frac{dy}{dx} = (y - 2x)^{2} - 7, \quad y(0) = 0
$$

**Approach:** If we let $u = -2x + y$, then ${du}/{dx} = -2 + {dy}/{dx}$, which implies ${dy}/{dx} = {du}/{dx} + 2$ so the differential equation is transformed into

$$
\frac{du}{dx} + 2 = u^{2} - 7 \to \frac{du}{dx} = u^{2} - 9
$$

which is separable. And with partial fractions we can get

$$
\frac{1}{(u+3)(u-3)}\, du = dx \to \frac{1}{6} \left[ \frac{1}{u-3} - \frac{1}{u+3} \right]\, du = dx 
$$

By integrating both sides we should find,

$$
\begin{align}
 & \frac{1}{6} \int \left( \frac{1}{u-3} - \frac{1}{u+3} \right) \, du = \int dx \\ \\
 & \frac{1}{6} \ln \left| \frac{u-3}{u+3} \right|  = x + c_{1} \\ \\
 & \frac{u-3}{u+3} = ce^{6x} & \text{Let } c = e^{6c_{1}} \\ \\
 & u - 3 = ce^{6x} (u+3) \\ \\
 & u(1 - ce^{6x}) = 3ce^{6x} + 3 \\ \\
 & u = 3\left( \frac{1 + ce^{6x}}{1-c e^{ 6x }} \right) \\ \\
 & y - 2x = 3\left( \frac{1 + ce^{6x}}{1-c e^{ 6x }} \right)  & \text{Definition of } u = y - 2x \\ \\
 & y = 2x + 3\left( \frac{1 + ce^{6x}}{1-c e^{ 6x }} \right)
\end{align}
$$

Now applying the initial condition $y(0) = 0$

$$
0 = 3\left( \frac{1 + c}{1 - c} \right) \implies c = -1
$$

So our final solution curve becomes,

$$
\boxed{ y = 2x + 3\left( \frac{1 - e^{ 6x }}{1 + e^{ 6x }} \right)  } 
$$

On the $xy$-plane it looks like

![[Pasted image 20260306143629.png|400]]