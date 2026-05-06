---
created: 202603262202,
reviewed: 202603262202
tags:
  - math/concept
  - math/topic/odes
---
> [!thought]
> In short, the method of undetermined coefficients provides a way for us to make an educated guess of what the particular solution $y_{p}$ may look like depending on the nature of the input function $f(x)$. This method only works if the linear differential equation has [[Homogeneous Linear Equations with Constant Coefficients|constant coefficients]].  

> [!definition]
> The *method of undetermined coefficients* solves nonhomogeneous differential equations of the form
> 
> $$
> a_{n}y^{(n)} + a_{n-1}y^{(n-1)} + \cdots + a_{1}y' + a_{0}y = g(x)
> $$
> 
> * where $g(x)$ is one of the **four basic types** of elementary functions.

The *four basic types* are as follows

* constants
* polynomials
* exponential
* sine and cosine
* an extra type may be the finite sums and products constructed from the four basic types

The method of undetermined coefficients works with these kinds of functions because their derivatives are still sums and products of the same type of the original function.

# Demonstrating Method of Undetermined Coefficients

**Problem:** Solve `(*)`

$$
y'' + 4y' - 2y = 2x^{2} - 3x + 6
$$

**Approach:** Sole the associated homogeneous equation $y'' + 4y' - 2y = 0$ which gives the following auxiliary equation $m^{2} + 4m - 2 = 0$. 

The roots of this equation are

$$
m = \frac{-4 \pm \sqrt{ 16 - 4(-2) }}{2} = \frac{-4 \pm \sqrt{ 24 }}{2} = -2 \pm \sqrt{ 6 }
$$

Then, this follows [[Homogeneous Linear Equations with Constant Coefficients#Case I Distinct Real Roots|Case I]] where our complementary solution is

$$
y_{c} = c_{1}e^{ (-2 + \sqrt{ 6 })x } + c_{2}e^{ -(2 + \sqrt{ 6 })x }
$$

Our attention turns to finding our particular solution. Since $g(x)$ is a polynomial, we presume its particular solution is also of polynomial form; that is, 

$$
y_{p} = Ax^{2} + Bx + C
$$

* where $A, B, C$ are constants. 

We seek to find those constants $A, B, C$ by substituting $y_{p}$ and 

$$
y_{p}' = 2Ax + B, \quad y_{p}'' = 2A
$$

into `(*)`. 

Simplifying the LHS of `(*)`,

$$
\begin{align}
y_{p}'' + 4y_{p}' - 2 y_{p} &  = 2A + 4(2Ax + B) - 2(Ax^{2} + Bx + C) \\ \\
 & = 2A + 8Ax + 4B - 2Ax^{2} - 2Bx - 2C \\ \\
 & = (-2A)x^{2} + (8A - 2B)x + (2A + 4B - 2C)
\end{align}
$$

and bringing together the entire equation,

$$
\begin{align}
 y_{p}'' + 4y_{p}' - 2y_{p}  & = g(x) \\ \\
 (-2A)x^{2} + (8A - 2B)x + (2A + 4B - 2C) &  = 2x^{2} - 3x + 6
\end{align}
$$

We realize that the coefficients should line up with the RHS, which allows us to form a linear system.


$$
\begin{align}
-2A = 2 \\ \\
8A - 2B = -3 \\ \\
2A + 4B - 2C = 6
\end{align}
$$

The linear system $U\mathbf{x} = \mathbf{b}$ can be solved using a $3 \times 3$ matrix, finding its inverse, and then multiplying $\mathbf{b} = U^{-1}\mathbf{x}$, where

$$
U = 
\begin{bmatrix}
-2 & 0 & 0 \\
8  & -2 & 0 \\
2 & 4 & 2
\end{bmatrix}
, \quad
\mathbf{x} = \begin{bmatrix}
2 \\ -3 \\ 6
\end{bmatrix}
$$

> In reality, I would not solve the $3 \times 3$ system on paper. By inspection, $A = -1$, which allows me to reduce the system to a $2 \times 2$, where its inverse is easy to compute. 

After row reduction and then computing $U^{-1}\mathbf{x}$, we find $A = -1, B = -\frac{5}{2}, C = -9$. 

The particular solution $y_{p}$ is explicitly defined as

$$
y_{p} = -x^{2} - \frac{5}{2}x - 9
$$

Altogether, our general solution for this DE is

$$
y = y_{c} + y_{p} = c_{1}e^{ (-2 + \sqrt{ 6 })x } + c_{2}e^{ -(2 + \sqrt{ 6 })x } - x^{2} - \frac{5}{2}x - 9
$$

---

**Problem:** Solve 

$$y'' - 2y' - 3y = 4x - 5 + 6xe^{ 2x }$$

**Approach:** The solution of the associated homogeneous equation is given by solving its auxiliary equation $m^{2} - 2m - 3 = 0$. 

$$
m^{2} - 2m - 3 = 0 \to (m-3)(m+1) = 0 \to m = -1, 3
$$

Then by Case I, 

$$
y_{c} = c_{1}e^{ -x } + c_{2}e^{ 3x }
$$

In our quest to find the particular solution, we recognize $g(x)$ as the sum of two functions, that is, $g(x) = g_{1}(x) + g_{2}(x)$ where $g_{1} = 4x - 5$ represents the (polynomial) linear part of $g$ and $g_{2} = 6xe^{ 2x }$ is the exponential part. 

> Our goal is to break up $g$ into multiple functions that are of the same type/nature.

By the Superposition Principle, 

$$
y_{p} = y_{p_{1}} + y_{p_{2}}
$$

* where $y_{p_{1}}$ solves $g_{1}(x)$ and $y_{p_{2}}$ solves $g_{2}(x)$.

We can break up the problem into two parts:

$$
\begin{align}
y'' - 2y' - 3y = g_{1}(x) \\ \\
y'' - 2y' - 3y = g_{2}(x)
\end{align}
$$

For $g_{1}$ and $g_{2}$, we propose the following solutions, respectively.

$$
\begin{align}
 & y_{p_{1}} = Ax + B \\ \\
 & y_{p_{2}} = (Cx + D)e^{ 2x }
\end{align}
$$

After substituting $y_{p}, y_{p}', y_{p}''$ into the original DE, simplifying, and then solving, we find that $A = -\frac{4}{3}, B = \frac{23}{9}, C = -2, D = -\frac{4}{3}$.

So, 

$$
y_{p} = -\frac{4}{3}x + \frac{23}{9} -2xe^{ 2x } - \frac{4}{3} e^{ 2x }
$$

Consequently,

$$
y(x) = c_{1}e^{ -x } + c_{2}e^{ 3x }-\frac{4}{3}x + \frac{23}{9} -2xe^{ 2x } - \frac{4}{3} e^{ 2x }
$$


## Special Considerations

We may have a case where our guess of the particular solution is actually one of the functions in the complementary solution. So to avoid that we must make a more educated guess: Our choice of $y_{p}$ must be *linearly independent* from the functions in $y_{c}$ but its derivatives contain functions whose type is of $g(x)$. The following example continues this discussion.

**Problem:** Find a particular solution of

$$
y'' - 5y' + 4y = 8e^{ x }
$$

**Approach:** The only kind of elementary function whose derivatives add and combine to be the type of $g(x)$, an exponential, is $e^{ x }$. While we could propose that the solution is of the form $y_{p} = Ae^{ x }$ where $A$ is a constant, if we substitute,

$$
\begin{align}
 y_{p}'' - 5y_{p}' + 4y_{p} &  = 8e^{ x }\\ \\
 Ae^{ x } - 5Ae^{ x } + 4Ae^{ x }  & = 8e^{ x } \\ \\
 & 0 = 8e^{ x }
\end{align}
$$

But $e^{ x } \ne 0$ so we are led to a contradiction. 

Actually, if you compare this proposed solution to the complementary solution $y_{c} = c_{1}e^{ 4x } + c_{2}e^{ x }$, you'd find that $e^{ x }$ is already one of the fundamental solutions; hence, why the LHS reduces to zero. 

However, if we chose...

$$
\begin{align}
y_{p} & = Axe^{ x } \\ \\
y_{p}' & = A(1 + x)e^{ x } \\ \\
y_{p}'' & = A(2 + x)e^{ x }
\end{align}
$$

and then substituted into the original DE

$$
\begin{align}
y_{p}'' - 5y_{p}' + 4y_{p} &  = 8e^{ x }\\ \\
A(2+x)e^{ x } - 5A(1+x)e^{ x } + 4Axe^{ x } & = 8e^{ x } \\ \\
A(2+x) - 5A(1+x) + 4Ax & = 8 \\ \\
2A + \cancel{ Ax } - 5A \cancel{ - 5Ax + 4Ax } & = 8 \\ \\
-3A & = 8 \\ \\
A & = - \frac{8}{3}
\end{align}
$$

We find a consistent solution for $A$, which makes 

$$
y_{p} = -\frac{8}{3}xe^{ x }
$$

---

In general, let $y_{c}$ be the complementary solution of a nonhomogeneous DE such that $y_{c}$ contains $k_{1}e^{ mx } + k_{2}xe^{ mx } + \cdots + k_{r}x^{r}e^{ mx }$ where $k_{i}$ is a scalar, $m$ is a root of the associated auxiliary equation, and $r$ is the multiplicity of $m$. 

If the input function is of the form $g(x) = Ke^{ x }$, then its particular solution $y_{p}$ is of the form $y_{p} = Ax^{r}e^{ mx }$.

In other words, we add an $x$ of the $r$-th power to $e^{ x }$ which makes it linearly independent from fundamental functions found in $y_{c}$.