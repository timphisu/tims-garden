---
created: 202602211228
reviewed: 202602211228
tags:
  - math/problems
  - math/topic/odes
---

## Method to Solving Separable Equations

The method to solving separable equations is

1. Separate variables $x$ and $y$ such that we get a form $f(x)\, dx = g(y)\, dy$ 

2. Integrate on both sides
## Kinds of Separable Equations Problems

### Inverse Form

**Problem:** Solve the given differential equation by separation of variables

$$
y \ln(x) \frac{dx}{dy} = \left( \frac{y+1}{x} \right)^{2}
$$

**Approach:** The same strategy for the from $\frac{dy}{dx} = g(x)h(y)$ will work for $\frac{dx}{dy} = g(x)h(y)$. 

Begin by moving $dy$ to the other side and isolate $y$ to the respective side. Another plausible method is by inverting the equation. 

$$
\begin{align}
 & y \ln(x) \frac{dx}{dy} = \left( \frac{y+1}{x} \right)^{2} \\ \\
 & y \ln(x) \, dx = \frac{(y+1)^{2}}{x^{2}} \, dy \\ \\
 & x^{2}\ln(x)\, dx = \frac{(y+1)^{2}}{y}\, dy \\ \\
 & \int x^{2}\ln(x)\, dx = \int \frac{(y+1)^{2}}{y}\, dy \\ \\
 & \int \ln(x)\, d\left( \frac{1}{3}x^{3} \right)  = \int \frac{y^{2} + 2y + 1}{y}\, dy \\ \\
 & \frac{1}{3}\left( x^{3}\ln(x)  - \int x^{3}\, d\ln(x)\right) = \int\left( y + 2 + \frac{1}{y} \right)\, dy \\ \\
 & \frac{1}{3}\left( x^{3}\ln(x)  - \int x^{2}\, dx \right) = \int y\, dy + \int 2 \, dy + \int \frac{1}{y}\, dy \\ \\
 & \frac{1}{3}\left( x^{3}\ln(x)  - \frac{1}{3}x^{3} \right) + C = \frac{1}{2}y^{2} + 2y + \ln|y| \\ \\
 & \frac{1}{2}y^{2} + 2y + \ln|y| = \frac{1}{3}x^{3}\left( \ln(x) - \frac{1}{3} \right) + C
\end{align}
$$

### Separable Equations as IVPs

**Problem:** Solve the following [[Initial Value Problems|initial value problem]]

$$
\frac{dy}{dx} + 2xy^{2} = 0 \, ; \, y(2) = \frac{1}{2}
$$

^d9c952


**Approach:** Because this is a first-order DE, we can take move around $dx$ and $dy$ like fractions.


$$
\begin{align}
 &  \frac{dy}{dx} + 2xy^{2} = 0 & \text{Given} \\ \\
 & \frac{dy}{dx} = -2xy^{2}  & \text{Express in separable form}\\ \\
 & \frac{1}{y^{2}}\, dy = -2x\, dx  & \text{Differential form} \\ \\
 & \int \frac{1}{y^{2}}\, dy = -\int 2x\, dx  & \text{Integrate both sides} \\ \\
 & -\frac{1}{y} + C_{1} = -x^{2} + C_{2}  & \text{Constants of Integration}\ C_{1}, C_{2} \\ \\
 &  \frac{1}{y} - C_{1} = x^{2} - C_{2}  & \text{Apply}\ (-1)\ \text{on both sides} \\ \\
 & \frac{1}{y} = x^{2} + C_{1} - C_{2}  & \text{Move over} \\ \\
 & \frac{1}{y} = x^{2} + C  & \text{Let}\ C = C_{1} - C_{2} \\ \\
 & y = \frac{1}{x^{2}+C} & \text{Rearranging}
\end{align}
$$


> The [[Differential Equations#Types of Solutions|explicit solution]] $\displaystyle \frac{1}{x^{2}+C}$ represents a whole [[family of curves]], specifically a 1-parameter family. In this case, the constant of integration $C$ is not a placeholder, but rather a parameter. 

But since $y(2) = \frac{1}{2}$, then by substituting, we see that

$$
\frac{1}{2} = \frac{1}{2^{2} + C} \to 4 + C = 2 \to C = -2
$$

When we think of a solution, we must also think of its domain, namely its *domain of solution*. Taking a look at the function $\displaystyle y(x) = \frac{1}{x^{2} - 2}$, we know that for $y(x)$ to be defined then $x \ne \pm \sqrt{ 2 }$. However, the domain of solution $I$ cannot be $(-\infty, -\sqrt{ 2 })\cup(-\sqrt{ 2 }, \sqrt{ 2 })\cup(\sqrt{ 2 }, \infty)$; we must choose one of the three disjoint intervals. Since there is an initial condition $y(2) = \frac{1}{2}$, then $I$ must contain 2, hence we choose $I = (\sqrt{ 2 }, \infty)$. ^85f196

Thus, the graph of the function $\displaystyle y(x) = \frac{1}{x^{2} - 2}$ on the interval $I = (\sqrt{2}, \infty)$ is the [[Solution Curves|solution curve]] to the above differential equation.

![[Pasted image 20260218210629.png|500]]

> Observe that the solution curve is the only curve such that $y(2) = \frac{1}{2}$

> [!tip]
> We must constantly be checking our constants of integration throughout the solving process when $C$ is defined as it is easy to absorb negatives or numbers into $C$ and then substitute initial conditions to our solution without tracing the changes done to $C$. 
>  
>  So, $\int f(y)\, dx = \int g(x)\, dx$ gives us $F(y) + C_{1} = G(x) + C_{2}$. In solutions, we can skip to write $F(y) = G(x) + C$ which in the background is just $C = C_{2} - C_{1}$.

> Note that if $C$ is illegal, then the solution is the wrong model.

#### Finding Singular Solutions

Further analyzing this [[Solving Separable Equations#^d9c952|problem]], consider that $y=0$ is an acceptable solution since

$$
\frac{dy}{dx} = -2xy^{2} \implies y'(0) = 0
$$

which means

$$
\frac{dy}{dx} + 2xy^{2} = 0 \implies y'(0) + 2x(0)^{2} = 0
$$

satisfies.

However when taking a look at the explicit solution $\displaystyle y = \frac{1}{x^{2} + C}$, there's no way we can get $y=0$ from shifting values of $C$, which means $y = 0$ is a [[singular solution]].

> [!tip]
> The way we can find *singular solutions* is when working with separable equations we might divide by $h(y)$. If we do so, we should solve for $h(y)=0$ before integrating. If $h(c) = 0$ for some constant $c$ then see if we can derive $y=c$ by plugging in values for $C$ in the explicit solution. And if there's no values of $C$ that can get $y=c$, then $y=c$ is a singular solution.

---

**Problem:** Find the solution to the following differential equation that satisfies the condition

$$
(2y-2) \frac{dy}{dx} = 3x^{2} + 4x + 2 \, ; \, y(1) = -2
$$

^42cbe6

**Approach:** This is easy to turn the equation into its differential form

$$
\begin{align}
 & (2y-2) \frac{dy}{dx} = 3x^{2} + 4x + 2  \\ \\
 & (2y-2)\, dy = (3x^{2} + 4x + 2)\, dx  & \text{Differential form} \\ \\
 & \int (2y-2)\, dy = \int (3x^{2} + 4x + 2)\, dx & \text{Integrate both sides} \\ \\
 & y^{2} - 2y = x^{3} + 2x^{2} + 2x + C \\ \\
\end{align}
$$

And since we need to satisfy the condition $y(1) = -2$, we substitute $x = 1, y = -2$ and find  ^4d9c08

$$
\begin{align}
 & (-2)^{2} - 2(-2) = (1)^{3} + 2(1)^{2} + 2(1) + C \\ \\
 & 4 + 4 = 1 + 2 + 2 + C \\ \\
 & 8 = 5 + C \\ \\
 & C = 3
\end{align}
$$

which gives us

$$
y^{2} - 2y = x^{3} + 2x^{2} + 2x + 4
$$

and then by completing the square, we can find $y$

$$
\begin{align}
 & y^{2} - 2y + 1 = x^{3} + 2x^{2} + 2x + 4 \\ \\
 & (y-1)^{2} = x^{3} + 2x^{2} + 2x + 4 \\ \\
 & y - 1 = \pm \sqrt{ x^{3} + 2x^{2} + 2x + 4 } \\ \\
 & y = 1 \pm \sqrt{ x^{3} + 2x^{2} + 2x + 4 } \\ \\
\end{align}
$$

where the two solutions are [[members]] of the family of curves. But looking in further, since $y<0$ when $x = 1$ that means we should be looking for a negative solution. Thus, we pick the minus part

$$
y = 1 - \sqrt{ x^{3} + 2x^{2} + 2x + 4 }
$$

as our solution.

Another idea to keep in consideration is [[Differential Equations#Solutions for Differential Equations|domain of solution]], the solution $y = 1 - \sqrt{ x^{3} + 2x^{2} + 2x + 4 }$ is defined so long as

$$
\begin{align}
 & x^{3} + 2x^{2} + 2x + 4 \geq 0 & \text{Condition of Square Root} \\ \\
 & x^{2}(x + 2) + 2 (x+2) \geq 0  \\ \\
 & (x^{2}+2)(x+2) \geq 0 & \text{Factored form} \\ \\
\end{align}
$$

And by analyzing, we find $x \geq -2$ for $y$ to be defined, so one might consider $I = \{ {x \in \mathbb{R}} \ | \ {x \geq -2} \}$.

But recall [[Differential Equations#Interval of Definition|here]] that the definition of a first-order ODE solution needs a derivative continuous on the domain of solution. Consider $y'$ and its domain.

$$
\frac{dy}{dx} = -\frac{3x^{2}+4x+2}{2\sqrt{ x^{3} + 2x^{2}+ 2x + 4 }}
$$

For $y'$ to be defined, $x^{3} + 2x^{2} + 2x + 4 \ne 0 \implies x \ne -2$, so we restrict the domain of solution to be $I = \{ {x \in \mathbb{\mathbb{R}}} \ | \ {x > -2} \}$

> This means we should be adjusting $I$ so that the domains of $\phi$ and $\phi'$ agree

In whole, the solution to the differential equation is

$$
y = 1 - \sqrt{ x^{3} + 2x^{2} + 2x + 4 }  \quad \text{for all}\ x > -2
$$

---

**Problem:** Solve

$$
\frac{dy}{dx} = y^{2}\sin(x^{2}) \, , \, y(-2) = \frac{1}{3}
$$

^d3ab56

**Approach:** We begin by rearranging to its differential form and then integrating both sides

$$
\begin{align}
 & \frac{dy}{dx} = y^{2}\sin(x^{2}) \\ \\
 & \frac{dy}{y^{2}} = \sin(x^{2})\, dx \\ \\
 & \int \frac{dy}{y^{2}} = \int \sin(x^{2})\, dx
\end{align}
$$

But note that $\int \sin(x^{2})\, dx$ has a nonelementary solution, so we reexpress the equation as definite integrals by the [[Fundamental Theorem of Calculus]].

$$
\int_{-2}^{x} y^{-2}\, dy = \int_{-2}^{x} \sin(t^{2})\, dt
$$

* where $t$ is a "dummy variable" and our bounds of integration are $-2 \leq t \leq x$

> By relating our bounds of integration to our initial conditions, while solving for $C$ would be plausible, we find a more precise solution $y(x)$ such that our initial conditions still hold when in our case $x=-2$.

Then evaluating the integral on the LHS,

$$
\begin{align}
 & \int_{-2}^{x} y^{-2}\, dy = \int_{-2}^{x} \sin(t^{2})\, dt \\ \\
 & -\frac{1}{y(t)} \Big|_{-2}^{x} = \int_{-2}^{x} \sin(t^{2})\, dt \\ \\
\end{align}
$$

To continue further, we must recognize $y$ as a function of $t$, denoted $y(t)$, which when evaluating we find $y(t)$ when $t =x$ is the same as $y(x) = y$. Moreover, $y(t) = \frac{1}{3}$ when $t=-2$ by the initial condition. So substituting, 

$$
\begin{align}
 & - \frac{1}{y} + \frac{1}{\frac{1}{3}} =  \int_{-2}^{x} \sin(t^{2})\, dt & \text{FTC II} \\ \\
 & -\frac{1}{y} + 3 = \int_{-2}^{x} \sin(t^{2})\, dt \\ \\
 & -\frac{1}{y} = \int_{-2}^{x} \sin(t^{2})\, dt - 3 \\ \\
 & \boxed{ y = \left( 3 - \int_{-2}^{x} \sin(t^{2})\, dt \right)^{{-1}} }  & \text{Rearranging}
\end{align}
$$

> [!note]
> This is an example of an [[integral-defined solution]] when a nonelementary integral is involved so we use the FTC I definition of an antiderivative to still give a valid solution. This kind of solution is useful when there's an elementary solution for $f(y)$ but a nonelementary solution for $g(x)$.

---

**Problem:** Solve the following IVP

$$
(1 + x^{4})\, dy + x(1 + 4y^{2})\, dx = 0, \quad y(1) = 0
$$

**Approach:** By rearranging the equation by dividing both sides by $(1+x^{4})$ and then $(1+4y^{2})$ as to group $x$'s with $dx$'s and $y$'s with $dy$'s.

$$
\frac{1}{1 + 4y^{2}}\, dy + \frac{x}{1 + x^{4}}\, dx = 0
$$

Then integrating both sides,

$$
\begin{align}
 & \int \frac{1}{1 + 4y^{2}}\, dy + \int \frac{x}{x + x^{4}}\, dx = \int 0\, dx \\ \\
 & \frac{1}{2} \arctan(2y) + \frac{1}{2}\arctan(x^{2}) = C
\end{align}
$$

Then substituting for the initial condition

$$
\frac{1}{2}\arctan(0) + \frac{1}{2}\arctan(1) = C \to C = \frac{\pi}{8}
$$

So the solution which solves the IVP is

$$
\arctan(x^{2}) + \arctan(2y) = \frac{\pi}{4}
$$

or explicitly,

$$
y = \frac{1}{2}\tan\left( \frac{\pi}{4} - \arctan(x^{2}) \right)
$$

---

### Using Integration by Parts

**Problem:** Find the solution of the differentiable equation

$$
e^{x}y \frac{dy}{dx} = e^{-y} + e^{-2x-y}
$$

**Approach:** The first question approaching this kind of problem is, "Can we separate this?", which just means if we can separate the variables of this equation into their own respective sides. In this case, the answer is yes.

$$
\begin{align}
 & e^{x}y \frac{dy}{dx} = e^{-y} + e^{-2x-y} \\  \\
 & e^{x}y \frac{dy}{dx} = e^{-y}(1 + e^{-2x})  & \text{Factor} \\ \\
 & ye^{y}\, dy = \left( \frac{1+e^{-2x}}{e^{x}} \right) dx & \text{Differential Form} \\ \\
 & \int ye^{y}\, dy = \int \left( e^{-x} + e^{-3x} \right) \, dx & \text{Integrate both sides} \\ \\
 & \int y \, de^{y} = \int \left( e^{-x} + e^{-3x} \right) \, dx & \text{IBP on LHS} \\ \\
 & \int d(ye^{y}) - \int e^{y}\, dy = \int \left( e^{-x} + e^{-3x} \right) \\ \\
 & \boxed{ ye^{y} - e^{y} = -e^{-x} - \frac{1}{3}e^{-3x} + C } & \text{Evaluate RHS}
\end{align}
$$

> Since $y$ cannot be isolated on its own, we say this is an [[Differential Equations#Types of Solutions|implicit solution]]

---

**Problem:** Solve

$$
\frac{dy}{dx} = \frac{e^{\sqrt{ x }}}{y}, \quad y(1) = 10
$$

**Approach:** Rearranging and then integrating both sides, we can get

$$
\begin{align}
 \int y\, dy & = \int e^{\sqrt{ x }}\, dx \\ \\
 & =  xe^{\sqrt{ x }} - \int x\, de^{\sqrt{ x }} \\ \\
 & =  xe^{\sqrt{ x }} - \int x \cdot \frac{e^{\sqrt{ x }}}{2\sqrt{ x }}\, dx \\ \\
 & = xe^{ \sqrt{ x } } - \frac{1}{2} \int \sqrt{ x }e^{\sqrt{ x }}\, dx
\end{align}
$$

Now focusing our attention towards the integral on the RHS, we can do a $u$-substitution that allows us to do a more workable IBP

$$
u = \sqrt{ x } \to u^{2} = x \to dx = 2u \, du
$$

so the integral becomes

$$
\begin{align}
 \int \sqrt{ x }e^{\sqrt{ x }}\, dx & = \int ue^{u} (2u\, du) \\ \\
  & = 2 \int u^{2} e^{u}\, du = 2 \int u^{2}\, de^{u} \\ \\
  & = 2 \left( u^{2}e^{ u } - \int e^{ u }\, du^{2} \right) \\ \\
  & = 2 \left( u^{2}e^{ u } - 2 \int ue^{u}\, du \right) = 2 \left( u^{2}e^{ u } - 2 \int u\, de^{ u } \right)\\ \\
  & = 2 \left( u^{2}e^{ u } - 2 \left( ue^{u} - \int e^{u}\, du  \right)  \right) \\ \\
  & = 2 \left( u^{2}e^{ u } - 2ue^{ u } + 2e^{ u } \right) \\ \\
  & = 2 \left( xe^{\sqrt{ x }} - 2\sqrt{ x }e^{\sqrt{ x }} + 2e^{ \sqrt{ x } } \right) \\ \\  
\end{align}
$$

Now resubstituting this back into our original differential equation

$$
\begin{align}
\int y\, dy  & = xe^{ \sqrt{ x } } - \left( xe^{ \sqrt{ x } } - 2\sqrt{ x }e^{ \sqrt{ x } } + 2e^{ \sqrt{ x } } \right) \\ \\
\frac{1}{2}y^{2} & = 2\sqrt{ x }e^{ \sqrt{ x } } - 2e^{ \sqrt{ x } } + C \\ \\
C  & = y^{2} - 4\sqrt{ x }e^{ \sqrt{ x } } + 4e^{ \sqrt{ x } }
\end{align}
$$

Implementing the initial condition, $y(1) = 10$,

$$
C = 10^{2} - 4(1)e^{1} + 4e^{1}= 100
$$

When getting the explicit solution, we pick the positive part of the square root since it contains our initial condition $(1, 10)$

$$
\begin{align}
\frac{1}{2} y^{2}  & = 2\sqrt{ x }e^{ \sqrt{ x } } - 2e^{ \sqrt{ x } } + 100 \\ \\
y^{2}  & = 4\sqrt{ x }e^{ \sqrt{ x } } - 4e^{ \sqrt{ x } } + 200 \\ \\
y  & = \sqrt{ 4\sqrt{ x }e^{ \sqrt{ x } } - 4e^{ \sqrt{ x } } + 200 } \\ \\
y & = 2\sqrt{ \sqrt{ x }e^{ \sqrt{ x } } - e^{ \sqrt{ x } } + 50 }
\end{align}
$$

---

### Solving Separable Autonomous Equations

**Problem:** Find $Q$ given

$$
\frac{dQ}{dt} = k(Q-70)
$$

^e10a21

* where $k$ is a constant

**Approach:**
$$
\begin{align}
 & \frac{dQ}{dt} = k(Q-70) \\ \\
 & \frac{1}{Q-70}\, dQ = k\, dt \\ \\
 & \int\frac{1}{Q-70}\, dQ = \int k\, dt \\ \\
 & \ln|Q-70| = kt + C_{2}  & \int \frac{1}{x}\, dx = \ln|x|\\ \\
 & |Q-70| = e^{kt + C_{2}} & \ln(x) = y \to x = e^{y} \\ \\
 & |Q-70| = C_{1}e^{kt}  & \text{Let}\ C_{1} = e^{C_{2}} \\ \\
 & Q-70 = \pm C_{1}e^{kt} & |x| = y \to x = \pm y \\ \\
 & \boxed{ Q = 70 + Ce^{kt} }  & \text{Let}\ C = \pm C_{1}
\end{align}
$$

> Note for this problem that there was no variable of $t$ on the RHS. This form of separable equation $\frac{dy}{dx} = f(y)$ is called an [[Autonomous Equations|autonomous equation]]

---

**Problem:** Solve

$$
\frac{dP}{dt} = P - P^{2}
$$

**Approach:** This is an autonomous equation, which rearranging gives us 

$$
\frac{1}{P(1 - P)}\, dP = dt
$$

where we can quickly see the denominator on the LHS is a product of linear factors; this tell us we can do rational decomposition.

$$
\begin{align}
 & \frac{A}{P} + \frac{B}{1-P} = \frac{1}{P(1-P)} \\ \\
 & A(1-P) + BP = 1 & \text{Mult. both sides by LCD} \\ \\
\end{align}
$$

If $P = 0$, then $A = 1$, and if $P = 1$, then $B = 1$. 

The original DE becomes

$$
\begin{align} \\
 & \left( \frac{1}{P} + \frac{1}{1-P} \right)\, dP = dt \\ \\
 & \int \left( \frac{1}{P} + \frac{1}{1-P} \right) \, dP = \int dt  & \text{Integrate both sides} \\ \\
 & \ln|P| - \ln|1-P| = t + C_{0} \\ \\
 & \ln \left|\frac{P}{1-P} \right| = t+C_{0} \\ \\
 & \frac{P}{1-P} = e^{t + C_{0}} & \text{Raise both sides to }e \\ \\
 & \frac{P}{1-P} = Ce^{t} & \text{Let } C = e^{C_{0}} \\ \\
\end{align}
$$

Then the solution becomes

$$
\begin{align}
 & \frac{P}{1-P} = Ce^{t} \\ \\
 & P = Ce^{ t }(1-P) \\ \\
 & P = Ce^{ t } - CPe^{ t } \\ \\
 & P + CPe^{ t } = Ce^{ t } \\ \\
 & P(1 + Ce^{ t }) = Ce^{ t } \\ \\
 & \boxed{ P(t) = \frac{Ce^{ t }}{1 + Ce^{ t }} } 
\end{align}
$$

> This problem is related to the [[logistic model]]. 
