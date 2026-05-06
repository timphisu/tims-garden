---
created: 202605021254,
reviewed: 202605021254
tags:
  - math/building-blocks
  - math/topic/odes
---

# Linear Systems of Differential Equations as Matrices

Consider the first-order system

$$
\begin{align}
\frac{dx_{1}}{dt} & = g_{1}(t, x_{1}, x_{2}, ..., x_{n}) \\ \\
\frac{dx_{2}}{dt} & = g_{2}(t, x_{1}, x_{2}, ..., x_{n}) \\
 & \hspace{50pt} \vdots \\
\frac{dx_{n}}{dt} & = g_{n}(t, x_{1}, x_{2}, ..., x_{n})
\end{align}
$$

> [!thought]
> This is fundamentally different from [[4.9 Higher-Order Systems]] where we were using elimination to solve systems of 2nd or 3rd-order differential equations but here all the equations are first-order.

> We can speak more above later.

The normal form of this system, denoted `(*)`, looks like

$$
\begin{align}
\frac{dx_{1}}{dt} & = a_{11}(t)x_{1} + a_{12}(t)x_{2} + \cdots + a_{1n}(t)x_{n} + f_{1}(t) \\ \\
\frac{dx_{2}}{dt} & = a_{21}(t)x_{1} + a_{22}(t)x_{2} + \cdots + a_{2n}(t)x_{n} + f_{2}(t) \\ \\
\vdots & \hspace{90pt} \vdots \\ \\
\frac{dx_{n}}{dt} & = a_{n 1}(t)x_{1} + a_{n 2}(t)x_{2} + \cdots + a_{nn}(t)x_{n} + f_{n}(t)
\end{align}
$$

* Assuming $a_{ij}$ and $f_{i}$ are continuous on the shared interval $I$.

If $f_{i} = 0\ \forall i$ then the linear system is said to be *homogeneous*; otherwise, it's *nonhomogeneous*.

> Similar to the definition for [[Homogeneous Equations|homogeneous equations]] where the input function $f(t) = 0$.

Let $\vec{X}$, $A(t)$, and $\vec{F}(t)$ denote the following arrays

$$
\vec{X} = \begin{pmatrix}
x_{1}  \\
x_{2} \\
\vdots \\
x_{n}
\end{pmatrix},
A(t) = \begin{pmatrix}
a_{11}(t) & a_{12}(t) & \cdots & a_{1n}(t) \\
a_{21}(t) & a_{22}(t) & \cdots & a_{2n}(t) \\
\vdots &  &  & \vdots \\
a_{n 1}(t) & a_{n 2}(t) & \cdots & a_{n n}(t) 
\end{pmatrix}, 
\vec{F}(t) = \begin{pmatrix}
f_{1}(t) \\
f_{2}(t) \\
\vdots \\
f_{n}(t)
\end{pmatrix}
$$

then the following system `(*)` can be written as

$$
\frac{d}{dt} \begin{pmatrix}
x_{1} \\
x_{2} \\
\vdots \\
x_{n}
\end{pmatrix}
= \begin{pmatrix}
a_{11}(t) & a_{12}(t) & \cdots & a_{1n}(t) \\
a_{21}(t) & a_{22}(t) & \cdots & a_{2n}(t) \\
\vdots &  &  & \vdots \\
a_{n 1}(t) & a_{n 2}(t) & \cdots & a_{n n}(t) 
\end{pmatrix} 
\begin{pmatrix}
x_{1} \\
x_{2} \\
\vdots \\
x_{n}
\end{pmatrix}
+
\begin{pmatrix}
f_{1}(t) \\
f_{2}(t) \\
\vdots \\
f_{n}(t)
\end{pmatrix}
$$

 or simply as 

$$
\boxed{ \vec{X}' = A\vec{X} + \vec{F} }
$$

* where $\vec{X}$ is called the solution vector if it satisfies `(*)`.

If the system is homogeneous, then it can be written as $\vec{X} = A\vec{X}$.

## Writing Linear Systems of DEs in Matrix Form

**Problem:** Write the linear system in matrix form.

$$
\begin{align}
\frac{dx}{dt} & = 4x - 7y \\ \\
\frac{dy}{dt} & = 5x
\end{align}
$$

**Approach:** If we let our vector $\vec{X}$ to be $\vec{X} = \begin{pmatrix} x \\ y \end{pmatrix}$, then we can write

$$
\vec{X}' = \begin{pmatrix}
4 & -7 \\
5 & 0
\end{pmatrix}
\begin{pmatrix}
x \\
y
\end{pmatrix}
=
\begin{pmatrix}
4 & -7 \\
5 & 0
\end{pmatrix}
\vec{X}
$$

where $A = \begin{pmatrix} 4 & -7 \\ 5 & 0 \end{pmatrix}$, so because the linear system can be written as $\vec{X}' = A\vec{X}$,  it is homogeneous.

---

**Problem:** Write the given linear system in matrix form.

$$
\begin{align}
\frac{dx}{dt} & = -3x + 4y + e^{ -t }\sin(2t) \\ \\
\frac{dy}{dt} & = 5x + 9z + 4e^{ -t }\cos(2t) \\ \\
\frac{dz}{dt} & = y + 6z - e^{ -t }
\end{align}
$$

**Approach:** If we define our solution vector to be $\vec{X} = \begin{pmatrix} x \\ y  \\ z \end{pmatrix}$, then the system can organized in array structure as

$$
\frac{d}{dt} \begin{pmatrix}
x \\ y \\ z
\end{pmatrix} = \begin{pmatrix}
-3 & 4 & 0 \\
5 & 0 & 9 \\
0 & 1 & 6
\end{pmatrix}
\begin{pmatrix}
x \\ y \\ z
\end{pmatrix}
+
\begin{pmatrix}
\sin(2t) \\ 4\cos(2t) \\ -1
\end{pmatrix}e^{ -t }
$$

> Notice how I pulled out the common factor $e^{ -t }$ out of the original vector which is justified since it's a scalar but practically makes writing easier.

or 

$$
\vec{X}' = A\vec{X} + \vec{F}
$$

* where $A = \begin{pmatrix}-3 & 4 & 0 \\ 5 & 0 & 9 \\ 0 & 1 & 6\end{pmatrix}$ and $\vec{F} = \begin{pmatrix} \sin(2t) \\ 4\cos(2t) \\ -1 \end{pmatrix}e^{ -t }$


---

**Problem:** Verify on the interval $I = (-\infty, \infty)$ that

$$
\begin{align}
\vec{X}_{1} &  = \begin{pmatrix}
1 \\ -1
\end{pmatrix} e^{ -2t } = \begin{pmatrix}
e^{ -2t } \\ - e^{ -2t }
\end{pmatrix} \\ \\
\vec{X}_{2} & = \begin{pmatrix}
3 \\ 5
\end{pmatrix} e^{ 6t } = \begin{pmatrix}
3e^{ 6t } \\ 5e^{ 6t }
\end{pmatrix}
\end{align}
$$

are solutions of the system

$$
\vec{X}' = \begin{pmatrix}
1  & 3 \\ 5 & 3
\end{pmatrix} \vec{X}
$$

> Writing the solution vectors with the common factor $e^{ \alpha t }$ pulled out makes reading easier on the eyes.

**Approach:** Computing the derivatives $\vec{X}_{1}'$ and $\vec{X}_{2}'$, we get

$$
\begin{align}
\vec{X}_{1}' & = \begin{pmatrix}
-2e^{ -2t } \\ 2e^{ -2t }
\end{pmatrix} = \begin{pmatrix}
-2 \\ 2
\end{pmatrix} e^{ -2t } \\ \\
\vec{X}_{2}' & = \begin{pmatrix}
18e^{ 6t } \\ 30e^{ 6t }
\end{pmatrix} = \begin{pmatrix}
18 \\ 30
\end{pmatrix} e^{ 6t }
\end{align}
$$
And computing $A\vec{X}_{1}$ and $A\vec{X}_{2}$,

$$
\begin{align}
A\vec{X}_{1} &  = \begin{pmatrix}
1 & 3 \\ 5 & 3
\end{pmatrix} \begin{pmatrix}
1 \\ -1
\end{pmatrix} e^{ -2t } = \begin{pmatrix}
-2 \\ 2
\end{pmatrix} e^{ -2t } \\ \\
A\vec{X}_{2} & = \begin{pmatrix}
1 & 3 \\ 5 & 3
\end{pmatrix} \begin{pmatrix}
3 \\ 5
\end{pmatrix} e^{ 6t } = \begin{pmatrix}
18 \\ 30
\end{pmatrix} e^{ 6t }
\end{align}
$$

which we see $X_{1}' = A\vec{X}_{1}$ and $\vec{X}_{2} = A\vec{X}_{2}$, so $\vec{X}_{1}$ and $\vec{X}_{2}$ are solution vectors of the system.

## Solutions for Linear Systems of DEs

The same ideas from homogeneous equations cross over to this topic including 

* [[Initial Value Problems]] and [[Existence of a Unique Solution]]
* [[Superposition Principle]]
* [[Linear Dependence and Independence for Functions]]
* [[Existence of a Fundamental Set]]
* [[General Solution]]