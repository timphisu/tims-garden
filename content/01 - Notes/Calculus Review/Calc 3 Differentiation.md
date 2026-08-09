---
tags:
  - math/subject/calculus
---

# Chain Rule

> [!theorem] Chain Rule: Big Boy Version
> 
> Suppose that $u$ is a differentiable function of the $n$ variables $x_{1}, x_{2}, \cdots, x_{n}$ and each $x_{i}$ is a differentiable function of the $m$ variables $t_{1}, t_{2},\cdots, t_{m}$. Then $u$ is a function of $t_{1}, t_{2}, \cdots, t_{m}$ and 
> 
> $$ \frac{ \partial u }{ \partial t_{i} } = \frac{ \partial u }{ \partial x_{1} } \frac{ \partial x_{1} }{ \partial t_{i} } + \frac{ \partial u }{ \partial x_{2} } \frac{ \partial x_{2} }{ \partial t_{i} } + \cdots \frac{ \partial u }{ \partial x_{n} } \frac{ \partial x_{n} }{ \partial t_{i} }   $$

# Directional Derivatives

> [!theorem] Directional Derivative is a Dot Product
> If $f$ is a differentiable function of $x$ and $y$, then $f$ has a *directional derivative* in the direction of any unit vector $\vec{u} = \langle a, b \rangle$ and
> 
> $$ D_{u} f(x,y) = f_{x}(x,y)a + f_{y}(x, y)b$$


**Proof:** Let $g(h) = f(x_{0} + ha, y_{0} + hb)$. Since $x'(a) = \lim_{ x \to a } \frac{f(x) - f(a)}{x-a}$, we can utilize this definition to differentiate $g$ with respect to $h$ at $a = 0$,

$$
g'(0) = \lim_{ h \to 0 } \frac{g(h) - g(0)}{h} = \lim_{ h \to 0 } \frac{f(x_{0} + ha, y_{0} + hb) - f(x_{0}, y_{0})}{h} = D_{u}f(x,y)
$$

From another perspective, $g(h) = f(x,y)$ where $x = x_{0} + ha$ and $y = y_{0} + hb$. So by the Chain Rule,

$$
g'(h) = \frac{ \partial g }{ \partial x } \frac{ d x }{ d h } + \frac{ \partial g }{ \partial y } \frac{ d y }{ d h }  = f_{x}(x,y)a + f_{y}(x,y)b
$$

If we put $h = 0$, then $x = x_{0}$ and $y = y_{0}$, so 

$$
g'(0) = f_{x}(x_{0}, y_{0})a + f_{y}(x_{0}, y_{0})b
$$

So we've shown that $D_{u} f(x, y) = f_{x}(x,y)a + f_{y}(x,y)b$. 

## Gradient Vector

> [!definition]
> If $f$ is a function of two variables $x$ and $y$ then the gradient of $f$ is the vector function $\nabla f$ defined by 
> 
> $$ \nabla f(x,y) = \langle f_{x}, f_{y} \rangle = \frac{ \partial f }{ \partial x } \hat{i} + \frac{ \partial f }{ \partial y } \hat{j}$$

We can rewrite the directional derivative then as

$$
D_{u} f(x,y) = \nabla f(x,y) \cdot \vec{u}
$$

### Properties of the Gradient Vector

Let $f$ be a differentiable function of two (or three variables), that is, $f = f(\vec{x})$ where $\vec{x} = \langle x_{0}, y_{0} \rangle$ or $\vec{x} = \langle x_{0}, y_{0}, z_{0} \rangle$. 

Suppose that $\nabla f(\vec{x}) \ne \vec{0}$, then the following statements are true:

1. The directional derivative of $f$ at $\vec{x}$ in the direction of $\vec{u}$ is the scalar projection of the gradient vector $\nabla f(\vec{x})$ onto $\vec{u}$. 

2. $\nabla f(\vec{x})$ points in the direction of maximum rate of increase for $\vec{f}$ at $\vec{x}$ and that maximum rate of change is $||\nabla f(\vec{x})||$. Moreover, $-\nabla f(\vec{x})$ points backwards so it'd be in the direction of maximum rate of decrease for $f$, measured by $-||\nabla f(\vec{x})||$.

3. $\nabla f(\vec{x})$ is perpendicular to the level curve or level surface of $f$ through $\vec{x}$.


