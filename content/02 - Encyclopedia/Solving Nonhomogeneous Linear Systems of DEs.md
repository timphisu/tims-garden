---
created: 202605051023,
reviewed: 202605051023
tags:
  - math/topic/odes
  - math/concept
  - math/problems
---

# Solving Nonhomogeneous Linear Systems of DEs

## Variation of Parameters

Recall from [[8.2 - Homogeneous Linear Systems]] that the complementary solution $\vec{X}_{c}$ is defined as

$$
\vec{X}_{c} = c_{1}\vec{X}_{1} + c_{2}\vec{X}_{2} + \cdots + c_{n}\vec{X}_{n}
$$

and is the general solution of some associated homogeneous system $\vec{X} = A \vec{X}$ where $\{ \vec{X}_{1}, \vec{X}_{2}, ..., \vec{X}_{n} \}$ forms a fundamental set. 

We can rewrite that solution vector as (dropping the subscript $c$)

$$
\begin{align}
\vec{X} & = c_{1} \begin{pmatrix}x_{11} \\ x_{21} \\ \vdots \\ x_{n 1} \end{pmatrix} + c_{2} \begin{pmatrix} x_{12} \\ x_{22} \\ \vdots \\ x_{n 2}\end{pmatrix} + \cdots + c_{n} \begin{pmatrix}x_{n 1} \\ x_{n 2} \\ \vdots \\ x_{nn} \end{pmatrix} = \begin{pmatrix} x_{11} & x_{12} & \cdots & x_{1n} \\
 x_{21} & x_{22} & \cdots & x_{2 n}  \\
 \vdots & \vdots &  & \vdots \\
 x_{n 1} & x_{n 2} & \cdots & x_{nn}\end{pmatrix} \begin{pmatrix}c_{1} \\ c_{2} \\ \vdots \\ c_{n} \end{pmatrix}
\end{align}
$$

where we can define the matrix on the left as $\Phi$, the **fundamental matrix** of the system whose column vectors consist of $\vec{X}_{i}\ \forall i \in (1, 2, ..., n)$, and the vector on the right as $\vec{C}$ whose elements consist of the arbitrary parameters $c_{i}\ \forall i$.

Neatly, we can write the complementary solution as 

$$\boxed{ \vec{X} = \Phi(t)\vec{C} }$$

Because $\vec{X}_{1}, \vec{X}_{2}, ..., \vec{X}_{n}$ form the linearly independent column vectors of $\Phi$, the determinant of the fundamental matrix must be nonzero, that is, $\det(\Phi) \ne 0$ for all $t$ on the interval $I$. From linear algebra, we know that an equivalent statement could be made that $\Phi ^{-1}$ exists. 

If $\Phi \vec{C}$ solves the system $\vec{X}' = A\vec{X}$ then it must be true that 

$$
(\Phi \vec{C})' = A \Phi \vec{C} \implies \Phi' = A\Phi
$$

Drawing inspiration from [[Variation of Parameters|variation of parameters]] for homogeneous equations, the question becomes can we replace the arbitrary parameters in $\vec{C}$ with a new vector $\vec{U}$ that consists of variable parameters such that $\vec{X}_{p} = \Phi \vec{U}$ is a solution to the nonhomogeneous system $\vec{X}' = A\vec{X} + \vec{F}$ where $\Phi(t)$, $\vec{U}(t)$ and $\vec{F}(t)$ are functions of $t$. 

By the [[Product Rule of Calculus]], 

$$
\vec{X}_{p}' = (\Phi \vec{U})' = \Phi'\vec{U} + \Phi \vec{U}'
$$

We can substitute this definition into the nonhomogeneous system 

$$
\begin{align}
 & \vec{X}_{p}' = A\vec{X}_{p} + \vec{F} \\ \\
 & \Phi'\vec{U} + \Phi \vec{U}' = A(\Phi \vec{U}) + \vec{F} &  \text{Definition of}\ X_{p}\ \text{and}\ X_{p}' \\ \\
 & A\Phi\vec{U} + \Phi \vec{U}' = A\Phi \vec{U} + \vec{F} & \Phi' = A\Phi \\ \\
 & \Phi \vec{U}' = \vec{F} & \text{Subtract both sides}\ A\Phi \vec{U} \\ \\
 & \vec{U}' = \Phi ^{-1}\vec{F} & \text{Multiply by}\ \Phi ^{-1}
\end{align}
$$

We can solve for $\vec{U}$ by integrating both sides with respect to $t$

$$
\vec{U}(t) = \int \Phi ^{-1}(t) \vec{F}(t)\, dt
$$

which gives way to explicitly solve for the particular solution of a nonhomogeneous system. 

> Note that constants of integration are not necessary and its justification is analogous to [[Variation of Parameters|Chapter 4's variation of parameters]]

Since $\vec{X}_{p} = \Phi \vec{U}$, we can write

$$
\boxed{ \vec{X}_{p} = \Phi(t) \int \Phi ^{-1}(t)\vec{F}(t)\, dt } 
$$

### Finding General Solutions of Nonhomogeneous Systems

**Problem:** Use variation of parameters to solve the given nonhomogeneous system

$$
\vec{X}' = \begin{pmatrix}2 & -1 \\ 4 & 2\end{pmatrix}\vec{X} + \begin{pmatrix}\sin{2t}\\2\cos{2t}\end{pmatrix}e^{ 2t }
$$

**Approach:** To find $\vec{X}_{p}$, the first piece of the puzzle is finding $\vec{X}_{c}$. 

It also helps in the beginning of this problem to identify $\vec{F} = \begin{pmatrix}\sin{2t} \\ 2\cos{2t}\end{pmatrix}e^{ 2t }$

Solving for eigenvalues of $\begin{pmatrix}2 & -1 \\ 4 & 2\end{pmatrix}$, we find

$$
\begin{align}
 & \begin{vmatrix}
2 - \lambda & -1 \\ 4 & 2-\lambda
\end{vmatrix} = (2- \lambda)^{2} + 4 = \lambda^{2} - 4\lambda + 8 \\ \\
 & \lambda = \frac{4 \pm \sqrt{ 16 - 32 }}{2} = \frac{4 \pm 4i}{2} = 2 \pm 2i
\end{align}
$$

* where $\alpha = 2, \beta = 2$

The characteristic matrix corresponding to $\lambda = 2 + 2i$ can be reduced to find the eigenvector $\vec{K}$

$$
\begin{pmatrix}-2i & -1\\ 4 & -2i\end{pmatrix} \to \begin{pmatrix}2 & -i \\ 0 & 0\end{pmatrix} \to 2k_{1} = ik_{2} \to k_{1} = \frac{i}{2}k_{2}
$$

If we let $k_{2} = -2i$ then $k_{1} = 1$, which gives

$$
\vec{K} = \begin{pmatrix}1 \\ -2i\end{pmatrix} =\underbrace{  \begin{pmatrix}1 \\ 0\end{pmatrix} }_{ \vec{B}_{1} } + \underbrace{ \begin{pmatrix}0 \\ -2\end{pmatrix} }_{ \vec{B}_{2} }i
$$

The complementary solution is a [[Homogeneous Linear Systems#Case III Complex Eigenvalues|case]] of complex eigenvalues—written as

$$
\begin{align}
\vec{X}_{c} & = c_{1} \left[ \begin{pmatrix}1 \\ 0\end{pmatrix}e^{ 2t }\cos{2t} - \begin{pmatrix}0 \\ -2\end{pmatrix}e^{ 2t }\sin{2t} \right] + c_{2} \left[ \begin{pmatrix}0 \\ -2\end{pmatrix}e^{ 2t }\cos{2t} + \begin{pmatrix}1 \\ 0\end{pmatrix}e^{ 2t }\sin{2t} \right] \\ \\
 & = \begin{pmatrix}e^{ 2t }\cos{2t} \\ 2e^{ 2t }\sin{2t}\end{pmatrix}c_{1} + \begin{pmatrix}e^{ 2t }\sin{2t} \\ -2e^{ 2t }\cos{2t}\end{pmatrix}c_{2} \\ \\
 & = \underbrace{ e^{ 2t }\begin{pmatrix}\cos{2t} & \sin{2t} \\ 2\sin{2t}  & -2\cos{2t}\end{pmatrix} }_{ \Phi(t) } \begin{pmatrix}c_{1} \\ c_{2} \end{pmatrix}
\end{align}
$$

The definition of $\vec{U}$ involves integrating $\Phi ^{-1}\vec{F}$. To do that, we must find $\Phi ^{-1}$ which is easy to do since $\Phi$ is a $2 \times 2$ matrix. Recall that for any $2 \times 2$ matrix $A$, its inverse can be computed as $A^{-1} = \frac{1}{\det(A)} \begin{pmatrix}d & -b \\ -c & a\end{pmatrix}$.

$$
\begin{align}
\det(\Phi) &  = \left(e^{ 2t }\right)^{2} \left[ -2\cos ^{2}(2t) - 2\sin ^{2}(2t) \right] \\ \\
 &  = -2e^{ 4t }[\sin ^{2}({2t}) + \cos ^{2}({2t})] \\ \\
  &  = -2e^{ 4t }
\end{align}
$$

> For any clarification on how I computed this determinant, recall that if $k$ is some scalar then $\det(kA) = k^{n}\det(A)$ where $A$ contains $n$ rows and $n$ columns.

We can use that inverse formula to find

$$
\Phi ^{-1} = \frac{e^{ 2t }}{-2e^{ 4t }} \begin{pmatrix}-2\cos{2t} & -\sin{2t} \\ -2\sin{2t} & \cos{2t}\end{pmatrix} = \frac{1}{2}e^{ -2t }\begin{pmatrix}2\cos{2t} & \sin{2t} \\ 2\sin{2t} & -\cos{2t}\end{pmatrix}
$$

Then,

$$
\begin{align}
\Phi ^{-1}\vec{F} & = \frac{1}{2}e^{ -2t }\begin{pmatrix}2\cos{2t} & \sin{2t} \\ 2\sin{2t} & -\cos{2t}\end{pmatrix} \begin{pmatrix}\sin{2t}\\2\cos{2t}\end{pmatrix}e^{ 2t }\\ \\
 & = \begin{pmatrix}\cos{2t} & \frac{1}{2}\sin{2t} \\ \sin{2t} & -\frac{1}{2}\cos{2t}\end{pmatrix} \begin{pmatrix}\sin{2t}\\2\cos{2t}\end{pmatrix} \\ \\
 & = \begin{pmatrix}\sin(2t)\cos(2t) + \sin(2t)\cos(2t) \\ \sin ^{2}(2t) - \cos ^{2}(2t)\end{pmatrix} \\ \\
 & = \begin{pmatrix}2\sin(2t)\cos(2t) \\  - (\cos ^{2}(2t) - \sin ^{2}(2t))\end{pmatrix} \\ \\
 & = \begin{pmatrix}\sin{4t} \\ - \cos{4t} \end{pmatrix}
\end{align}
$$

Integrating this vector results in

$$
\vec{U} = \int \begin{pmatrix}\sin{4t} \\ - \cos{4t} \end{pmatrix}\, dt = -\frac{1}{4} \begin{pmatrix}\cos{4t} \\ \sin{4t}\end{pmatrix}
$$

Consequently, 

$$
\begin{align}
\vec{X}_{p} &  = \Phi \vec{U} \\ \\
 & = - \frac{1}{4}e^{ 2t } \begin{pmatrix}\cos{2t} & \sin{2t} \\ 2\sin{2t}  & -2\cos{2t}\end{pmatrix} \begin{pmatrix}\cos{4t} \\ \sin{4t}\end{pmatrix} \\ \\
 & = - \frac{1}{4}e^{ 2t }\begin{pmatrix}\cos(2t)\cos(4t) + \sin(2t)\sin(4t) \\ 2\sin(2t)\cos(4t) - 2\sin(4t)\cos(2t)\end{pmatrix}
\end{align}
$$

Putting together the general solution involves $\vec{X} = \vec{X}_{c} + \vec{X}_{p}$

### Initial-Value Problems

Suppose along with the system $\vec{X}' = A\vec{X} + \vec{F}$, we are given an initial condition $\vec{X}(t_{0}) = \vec{X}_{0}$. The general solution of an initial-value problem takes the form

$$
\vec{X}(t) = \Phi(t)\vec{C} + \Phi(t) \int_{t_{0}}^{t} \Phi ^{-1}(s)\vec{F}(s)\, ds
$$

Implementing the initial condition into the general solution cancels out the integral and leaves

$$
\Phi(t_{0})\vec{C} = \vec{X}_{0} \implies \vec{C} = \Phi ^{-1}(t_{0})\vec{X}_{0}
$$

---

**Problem:** Solve the following system given the initial condition

$$
\vec{X} = \begin{pmatrix}7 & 1 \\ 1 & 7\end{pmatrix}\vec{X} + \begin{pmatrix}8e^{ 8t } \\ 8e^{ 6t }\end{pmatrix};\ \vec{X}(0) = \begin{pmatrix}1\\1\end{pmatrix}
$$

**Approach:** We first use the characteristic matrix to find the eigenvalues of $A$.

$$
\begin{align}
\begin{vmatrix}
7-\lambda & 1 \\ 1 & 7-\lambda
\end{vmatrix} &  = 
(7-\lambda)^{2} - 1 \\ \\
 & = \lambda^{2} - 14\lambda + 48 \\ \\
 & = (\lambda - 6)(\lambda - 8) \\ \\
 & \to \lambda = 6, 8
\end{align}
$$

The corresponding eigenvectors can be found as follows:

$$
\begin{align}
\lambda = 6: \\ \\
 & \begin{pmatrix}1 & 1 \\ 1 & 1\end{pmatrix} \to k_{1} = -k_{2} \to \vec{K}_{1} = \begin{pmatrix}1 \\ -1\end{pmatrix} \\ \\ \\
\lambda = 8: \\ \\
 & \begin{pmatrix}-1 & 1 \\ 1 & -1\end{pmatrix} \to k_{1} = k_{2} \to \vec{K}_{2} = \begin{pmatrix}1 \\ 1\end{pmatrix}
\end{align}
$$

Forming the complementary solution, we can rewrite the solution to find the fundamental matrix.

$$
\vec{X}_{c} = c_{1}\begin{pmatrix}1 \\ -1\end{pmatrix}e^{ 6t } + c_{2}\begin{pmatrix}1 \\ 1\end{pmatrix}e^{ 8t } = \underbrace{ \begin{pmatrix}e^{ 6t } & e^{ 8t } \\ -e^{ 6t } & e^{ 8t }\end{pmatrix} }_{ \Phi(t) }\vec{C}
$$

To get $\vec{U}$, we need $\Phi ^{-1}$ and subsequently $\det(\Phi)$.

$$
\det(\Phi) = e^{ 14t } + e^{ 14t } = 2e^{ 14t }
$$

Thus,

$$
\begin{align}
\Phi ^{-1} &  = \frac{1}{\det(\Phi)} \begin{pmatrix}e^{ 8t } & -e^{ 8t } \\ e^{ 6t } & e^{ 6t }\end{pmatrix} \\ \\
 & = \frac{1}{2}e^{ -14t }\begin{pmatrix}e^{ 8t } & -e^{ 8t } \\ e^{ 6t } & e^{ 6t }\end{pmatrix} \\ \\
 & = \frac{1}{2} \begin{pmatrix}e^{ -6t } & -e^{ -6t } \\ e^{ -8t } & e^{ -8t }\end{pmatrix}
\end{align}
$$

Doing further work,

$$
\begin{align}
 & \vec{U}' = \Phi ^{-1}\vec{F} = \frac{1}{2} \begin{pmatrix}e^{ -6t } & -e^{ -6t } \\ e^{ -8t } & e^{ -8t }\end{pmatrix}\begin{pmatrix}8e^{ 8t } \\ 8e^{ 6t }\end{pmatrix} = 4 \begin{pmatrix}e^{ 2t } - 1 \\ e^{ -2t } + 1\end{pmatrix} \\ \\
 & \implies  \vec{U} = 4 \begin{pmatrix} \frac{1}{2}e^{ 2t } - t \\ -\frac{1}{2}e^{ -2t } + t\end{pmatrix}
\end{align}
$$

which means our particular solution is defined as follows

$$
\begin{align}
\vec{X}_{p} &  = 4\begin{pmatrix}e^{ 6t } & e^{ 8t } \\ -e^{ 6t } & e^{ 8t }\end{pmatrix} \begin{pmatrix} \frac{1}{2}e^{ 2t } - t \\ -\frac{1}{2}e^{ -2t } + t\end{pmatrix} \\ \\
& = 4 \begin{pmatrix}e^{ 6t }\left( \frac{1}{2}e^{ 2t } - t \right) + e^{ 8t }\left( -\frac{1}{2}e^{ -2t } + t \right) \\ -e^{ 6t }\left( \frac{1}{2}e^{ 2t } - t \right) + e^{ 8t }\left( -\frac{1}{2}e^{ -2t }+ t \right)\end{pmatrix} \\ \\
& = 4 \begin{pmatrix} \frac{1}{2}e^{ 8t } + te^{ 8t } - \frac{1}{2}e^{ 6t } - te^{ 6t }\\ -\frac{1}{2}e^{ 8t } + te^{ 8t } - \frac{1}{2}e^{ 6t } + te^{ 6t }\end{pmatrix} \\ \\
& = \begin{pmatrix} 2e^{ 8t } + 4te^{ 8t } - 2e^{ 6t } - 4te^{ 6t }\\ -2e^{ 8t } + 4te^{ 8t } - 2e^{ 6t } + 4te^{ 6t }\end{pmatrix} \\ \\
 & = \begin{pmatrix}2 \\ -2\end{pmatrix}e^{ 8t } + \begin{pmatrix}4 \\ 4\end{pmatrix}te^{ 8t }+ \begin{pmatrix}-2 \\ -2\end{pmatrix}e^{ 6t } + \begin{pmatrix}-4 \\ 4\end{pmatrix}te^{ 6t }
\end{align}
$$

Our general solution is as follows:

$$
\vec{X}(t) = \underbrace{ c_{1}\begin{pmatrix}1 \\ -1\end{pmatrix}e^{ 6t } + c_{2}\begin{pmatrix}1 \\ 1\end{pmatrix}e^{ 8t } }_{ \vec{X}_{c} } + \underbrace{ \begin{pmatrix}2 \\ -2\end{pmatrix}e^{ 8t } + \begin{pmatrix}4 \\ 4\end{pmatrix}te^{ 8t }+ \begin{pmatrix}-2 \\ -2\end{pmatrix}e^{ 6t } + \begin{pmatrix}-4 \\ 4\end{pmatrix}te^{ 6t } }_{ \vec{X}_{p} }
$$

If we use the formula for choosing our arbitrary constants.

$$
\begin{align}
\Phi ^{-1}(0) & = \frac{1}{2}\begin{pmatrix}1 & -1 \\ 1 & 1\end{pmatrix} \\ \\
\vec{C}  & = \Phi ^{-1}(0)\vec{X}(0) \\ \\
 & = \begin{pmatrix} \frac{1}{2} & -\frac{1}{2} \\ \frac{1}{2} & \frac{1}{2}\end{pmatrix} \begin{pmatrix}1 \\ 1\end{pmatrix} \\ \\
 & = \begin{pmatrix}0 \\ 1\end{pmatrix}
\end{align}
$$

We define $\vec{U}(t)$ as the definite integral from $0$ to $t$:

$$\vec{U}(t) = \int_{0}^{t} \Phi ^{-1}(s)\vec{F}(s) ds$$

$$= \int_{0}^{t} \frac{1}{2} \begin{pmatrix}e^{ -6s } & -e^{ -6s } \\ e^{ -8s } & e^{ -8s }\end{pmatrix}\begin{pmatrix}8e^{ 8s } \\ 8e^{ 6s }\end{pmatrix} ds$$

$$= \int_{0}^{t} 4 \begin{pmatrix}e^{ 2s } - 1 \\ e^{ -2s } + 1\end{pmatrix} ds$$

Now, evaluate the antiderivative at $t$ and subtract the value at $0$:

$$\vec{U}(t) = 4 \left[ \begin{pmatrix} \frac{1}{2}e^{ 2s } - s \\ -\frac{1}{2}e^{ -2s } + s\end{pmatrix} \right]_{0}^{t}$$

$$= 4 \left( \begin{pmatrix} \frac{1}{2}e^{ 2t } - t \\ -\frac{1}{2}e^{ -2t } + t\end{pmatrix} - \begin{pmatrix} \frac{1}{2}e^{ 0 } - 0 \\ -\frac{1}{2}e^{ 0 } + 0\end{pmatrix} \right)$$

$$= \begin{pmatrix} 2e^{ 2t } - 4t \\ -2e^{ -2t } + 4t \end{pmatrix} - \begin{pmatrix} 2 \\ -2 \end{pmatrix}$$

$$= \begin{pmatrix} 2e^{ 2t } - 4t - 2 \\ -2e^{ -2t } + 4t + 2 \end{pmatrix}$$

The particular solution then becomes

$$\vec{X}_{p}(t) = \Phi(t)\vec{U}(t) = \begin{pmatrix}e^{ 6t } & e^{ 8t } \\ -e^{ 6t } & e^{ 8t }\end{pmatrix} \begin{pmatrix} 2e^{ 2t } - 4t - 2 \\ -2e^{ -2t } + 4t + 2 \end{pmatrix}$$

Multiplying row by column:

Top Row:

$$e^{6t}(2e^{2t} - 4t - 2) + e^{8t}(-2e^{-2t} + 4t + 2)$$

$$= 2e^{8t} - 4te^{6t} - 2e^{6t} - 2e^{6t} + 4te^{8t} + 2e^{8t}$$

$$= 4e^{8t} - 4e^{6t} + 4te^{8t} - 4te^{6t}$$

Bottom Row:

$$-e^{6t}(2e^{2t} - 4t - 2) + e^{8t}(-2e^{-2t} + 4t + 2)$$

$$= -2e^{8t} + 4te^{6t} + 2e^{6t} - 2e^{6t} + 4te^{8t} + 2e^{8t}$$

$$= 0e^{8t} + 0e^{6t} + 4te^{8t} + 4te^{6t}$$

Writing this back as a single vector and splitting it up:

$$\vec{X}_{p}(t) = \begin{pmatrix} 4e^{8t} - 4e^{6t} + 4te^{8t} - 4te^{6t} \\ 0e^{8t} + 0e^{6t} + 4te^{8t} + 4te^{6t} \end{pmatrix}$$

$$\vec{X}_{p}(t) = \begin{pmatrix} 4 \\ 0 \end{pmatrix}e^{8t} + \begin{pmatrix} -4 \\ 0 \end{pmatrix}e^{6t} + \begin{pmatrix} 4 \\ 4 \end{pmatrix}te^{8t} + \begin{pmatrix} -4 \\ 4 \end{pmatrix}te^{6t}$$

Because $\vec{X}_p(0) = \vec{0}$, we are now perfectly permitted to use the shortcut formula:

$$\vec{C} = \Phi ^{-1}(0)\vec{X}(0)$$

$$\vec{C} = \frac{1}{2}\begin{pmatrix}1 & -1 \\ 1 & 1\end{pmatrix} \begin{pmatrix}1 \\ 1\end{pmatrix}$$

$$\vec{C} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$$

We substitute $\vec{C}$ back into the homogeneous equation:

$$\vec{X}_{c}(t) = \Phi(t)\vec{C} = \begin{pmatrix}e^{ 6t } & e^{ 8t } \\ -e^{ 6t } & e^{ 8t }\end{pmatrix} \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} e^{8t} \\ e^{8t} \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}e^{8t}$$

Finally, we assemble the full solution $\vec{X}(t) = \vec{X}_{c}(t) + \vec{X}_{p}(t)$:

$$\vec{X}(t) = \begin{pmatrix} 1 \\ 1 \end{pmatrix}e^{8t} + \begin{pmatrix} 4 \\ 0 \end{pmatrix}e^{8t} + \begin{pmatrix} -4 \\ 0 \end{pmatrix}e^{6t} + \begin{pmatrix} 4 \\ 4 \end{pmatrix}te^{8t} + \begin{pmatrix} -4 \\ 4 \end{pmatrix}te^{6t}$$

Group the matching terms together:

$$\vec{X}(t) = \begin{pmatrix} 5 \\ 1 \end{pmatrix}e^{8t} + \begin{pmatrix} -4 \\ 0 \end{pmatrix}e^{6t} + \begin{pmatrix} 4 \\ 4 \end{pmatrix}te^{8t} + \begin{pmatrix} -4 \\ 4 \end{pmatrix}te^{6t}$$

