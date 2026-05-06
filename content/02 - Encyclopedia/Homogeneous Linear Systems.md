---
created: 202605021256,
reviewed: 202605021256
tags:
  - math/topic/odes
  - math/topic/linear-algebra
  - math/concept
  - math/problems
---

# Homogeneous Linear Systems

## Finding the Original Solution Vector

*Here's a question:*  

Can we find a solution $\vec{X}$ of the form $\boxed{ \vec{X} = \vec{K}e^{ \lambda t } }$ for the general homogeneous first-order system $\vec{X}' = A\vec{X}$ where $A : n \times n$ ?

If so, from $\vec{X}' = \lambda \vec{K}e^{ \lambda t }$, the system becomes

$$
\begin{align}
 & \vec{X}' = A\vec{X} \\ \\
 & \lambda\vec{K}e^{ \lambda t } = A \vec{K}e^{ \lambda t } \\ \\
 & (A - \lambda I) \vec{K}e^{ \lambda t } = \vec{0}
\end{align}
$$

We disregard the scalar $e^{ \lambda t }$ since our goal is to ensure the equation holds for all $t \in (-\infty, \infty)$, which yields the condition

$$
\boxed{ (A-\lambda I)\vec{K} = \vec{0} } 
$$

From this condition, we find that for this solution to work, we are interested in a vector $\vec{K} \ne \vec{0}$ that satisfies the above equation. We can find $\vec{K}$ by solving the system above.

To find a nonzero vector $\vec{K}$, we pull from linear algebra to require that

$$
\det(A - \lambda I) = 0 
$$

The resulting polynomial in terms of $\lambda$ is called the **characteristic equation** of $A$. The solutions $\lambda_{i}$ to the characteristic equation are called **eigenvalues** and the vectors corresponding to the eigenvalues are called **eigenvectors**.

> In summary, the characteristic equation can be used to find nontrivial solutions to the homogeneous system $\vec{X}' = A\vec{X}$ by using the solved eigenvalues to form a definite system $(A - \lambda I)\vec{K} = \vec{0}$ which after solving yields $\vec{K}$.

With the characteristic polynomial comes roots that have 3 types: *distinct real eigenvalues*, *repeated eigenvalues*, and *complex eigenvalues*, where each takes on their own solution form. For systems with $n > 2$, you may use a mix of these distinct forms to write a general solution.

## Case I: Distinct Real Eigenvalues

> [!theorem]
> Let $\lambda_{1}, \lambda_{2}, ..., \lambda_{n}$ be real distinct eigenvalues of the coefficient matrix $A$ of the homogeneous system $\vec{X}' = A\vec{X}$ and let $\vec{K}_{1}, \vec{K}_{2}, ..., \vec{K}_{n}$ be the corresponding eigenvectors. 
> 
> The general solution of the system on the interval $I = (-\infty, \infty)$ is given by 
> $$\vec{X}' = c_{1}\vec{K}_{1}e^{ \lambda_{1}t } + c_{2}\vec{K}_{2}e^{ \lambda_{2}t } + \cdots + c_{n}\vec{K}_{n}e^{ \lambda_{n}t }$$

**Problem:** Find the general solution of the given system.

$$
\begin{align}
\frac{dx}{dt} & = 2x + 2y \\ \\
\frac{dy}{dt} & = x + 3y
\end{align}
$$

**Approach:** From the coefficient matrix $A = \begin{pmatrix}2 & 2 \\ 1 & 3 \end{pmatrix}$, we derive the determinant 

$$
\begin{align}
\det(A - \lambda I)  & = \det
\begin{pmatrix}
2 - \lambda  & 2 \\ 1 & 3 - \lambda
\end{pmatrix} \\ \\
 & = (2 - \lambda)(3 - \lambda) - 2 \\ \\
 & = \lambda^{2} - 5\lambda + 4 \\ \\
 & = (\lambda - 4)(\lambda - 1)
\end{align}
$$

which gives the distinct real roots $\lambda = 1, 4$. 

For the matrix corresponding to $\lambda = 1$:

$$
A - \lambda I = \begin{pmatrix}
1 & 2 \\ 1 & 2
\end{pmatrix}
$$
 
We are looking for a $\vec{K}$ that

$$
\begin{pmatrix}
1 & 2 \\ 1 & 2
\end{pmatrix}
\vec{K} = \vec{0}
$$

which can be solved by augmenting the zero vector on the coefficient matrix $A$, but any row operations still yields the zero vector on the RHS, so writing the augmented zero vector is negligible until the last step.

$$
\begin{pmatrix}
1 & 2 \\ 1 & 2
\end{pmatrix}
\to
\begin{pmatrix}
1 & 2 \\ 0 & 0
\end{pmatrix}
$$

which implies $k_{1} + 2k_{2} = 0$ or $k_{1} = -2k_{2}$. If we let $k_{2} = -1$ then $k_{1} = 2$; that forms $\vec{K}_{1} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ corresponding to $\lambda = 1$.

For $\lambda = 4$, the LHS of the characteristic matrix becomes

$$
(A - \lambda I) = \begin{pmatrix}
-2  &  2 \\ 1 & -1
\end{pmatrix}
\to
\begin{pmatrix}
1 & -1 \\ 0  &  0
\end{pmatrix}
\to k_{1} = k_{2}
$$

So letting $k_{2} = 1$, the corresponding eigenvector is $\vec{K}_{2} = \begin{pmatrix}1\\ 1\end{pmatrix}$

The linear independent solution vectors of the system are

$$
\begin{align}
\vec{X}_{1} & = \vec{K}_{1}e^{ \lambda_{1}t } =  \begin{pmatrix}
2 \\ 1
\end{pmatrix} e^{ t } \\ \\
\vec{X}_{2} & = \vec{K}_{2}e^{ \lambda_{2}t } = \begin{pmatrix}
1 \\ 1
\end{pmatrix}e^{ 4t }
\end{align}
$$

Hence, the general solution becomes

$$
\vec{X}(t) = c_{1} \begin{pmatrix}
2 \\ 1
\end{pmatrix}e^{ t } + c_{2} \begin{pmatrix}
1 \\ 1
\end{pmatrix}e^{ 4t }
$$

---

**Problem:** Find the general solution of the given system

$$
\begin{align}
\frac{dx}{dt} & = 2x - 7y \\ \\
\frac{dy}{dt} & = 5x + 10y + 4z \\ \\
\frac{dz}{dt} & = 5y + 2z
\end{align}
$$

**Approach:** We can construct a coefficient matrix 

$$
A = \begin{pmatrix}
2 & -7 & 0 \\ 5 & 10 & 4 \\ 0 & 5 & 2
\end{pmatrix}
$$

which gives the determinant $\det(A - \lambda I)$ to be

$$
\det(A - \lambda I) = 
\begin{vmatrix}
2 - \lambda & -7 & 0 \\ 5 & 10 - \lambda & 4 \\ 0 & 5 & 2 - \lambda
\end{vmatrix}
$$

And then reading from the left-most column down, we get

$$
\begin{align}
\det(A - \lambda I) &  = (2 - \lambda)
\begin{vmatrix}
10 - \lambda & 4 \\ 5 & 2 - \lambda
\end{vmatrix}
- 5
\begin{vmatrix}
-7 & 0 \\ 5 & 2-\lambda
\end{vmatrix} \\ \\
 & = (2 - \lambda) \left[ (10 - \lambda)(2 - \lambda) - 20 \right] - 5\left[ -7(2 - \lambda) \right] \\ \\
 & = (2 - \lambda)(\lambda^{2} - 12\lambda + 35) \\ \\
 & = (2 - \lambda)(7 - \lambda)(5 - \lambda)
\end{align}
$$

So, $\lambda = 2, 5, 7$. 

The corresponding eigenvectors can be found by row-reducing $({A - \lambda_{i} I} \ | \ {\vec{0}}\ )$ and then pulling the implied relations between $k$'s and picking appropriate values for the free-variables which gives simplified vectors. 

We find that 

$$
\begin{array}{ccc}
\vec{K}_{1} = \begin{pmatrix}
4 \\ 0 \\ -5
\end{pmatrix} & \text{corresponding to}  & \lambda_{1} = 2 \\ \\
\vec{K}_{2} = \begin{pmatrix} -7 \\ 3 \\ 5
\end{pmatrix} & \text{corresponding to}  & \lambda_{2} = 5 \\ \\
\vec{K}_{3} = \begin{pmatrix}
7 \\ -5 \\ -5
\end{pmatrix} & \text{corresponding to}  & \lambda_{3} = 7 \\ \\
\end{array}
$$

Subsequently, the general solution can be written as

$$
\vec{X}(t) = c_{1} \begin{pmatrix}4\\0\\-5\end{pmatrix}e^{ 2t } + c_{2}\begin{pmatrix}-7\\3\\5\end{pmatrix}e^{ 5t } + c_{3}\begin{pmatrix}7\\-5\\-5\end{pmatrix}e^{ 7t }
$$

## Case II: Repeated Eigenvalues

Let's say $\lambda_{1}$ is an eigenvalue of $A: 2 \times 2$ but has multiplicity of 2. We know two linearly independent solutions are needed because of the Existence of a Fundamental Set. 

We can then take two routes to find the two eigenvectors corresponding to $\lambda_{1}$ : 

1. The first route is choosing values for free-variables $k_{i}$ that yield 2 linearly independent solutions. 

2. If you can derive $\vec{X}_{1}$ but can't yield a second linearly independent eigenvector for $\vec{X}_{2}$, then we use the *method of undetermined coefficients* by making an "educated guess" of what $\vec{X}_{2}$ could be. This is analogous to [[Method of Undetermined Coefficients|Chapter 4]].

### Method of Undetermined Coefficients

Suppose $\vec{X}_{1} = \vec{K}e^{ \lambda t }$ is a solution to the homogeneous linear system $\vec{X}' = A\vec{X}$. Then, we make a guess that $\vec{X}_{2} = \vec{K}te^{ \lambda t } + \vec{P}e^{ \lambda t }$. 

If so, we can substitute

$$
\vec{X}'_{2} = \vec{K}(1 + \lambda t)e^{ \lambda t } + \lambda \vec{P} e^{ \lambda t }
$$

into the homogeneous system $\vec{X}' = A\vec{X}$ to get

$$
\begin{align}
 & \vec{X}'_{2} = A\vec{X}_{2} \\ \\
 & \vec{K}(1 + \lambda t)e^{ \lambda t } + \lambda \vec{P} e^{ \lambda t } = A(\vec{K}te^{ \lambda t } + \vec{P}e^{ \lambda t }) & \text{Definition of } \vec{X}_{2}, \vec{X}_{2}' \\ \\
 & \vec{K}(1 + \lambda I) + \lambda I \vec{P} = A(\vec{K} + \vec{P}) & \text{Disregarding scalars and using}\ I \\ \\
 & (A - \lambda I)\vec{K} + (A - \lambda I)\vec{P} = \vec{K} & \text{Rearranging and grouping} \\ \\
 & \boxed{ (A - \lambda I)\vec{P} = \vec{K} }  & \text{Cancel left term since}\ (A - \lambda I)\vec{K} = \vec{0}
\end{align}
$$

which gives us a condition for $\vec{P}$ that if we solve for provides a vector that completes the second linearly independent solution $\vec{X}_{2}$.

> [!note]
> The vectors $\vec{K}$ and $\vec{P}$ are <u>linearly independent</u> from each other because $\vec{K}$ is defined to not be a scalar multiple of $\vec{P}$. This makes sense because if $\vec{P}$ was a scaled version of $\vec{K}$ then we would be able to express $\vec{X}_{2}$ in terms of $\vec{X}_{1}$, which is what we don't want.

---

#### Higher-Order Cases

##### Third-Order System

Consider the case where $A : 3 \times 3$ and the eigenvalue $\lambda$ has multiplicity 3 then we'd need a third linearly independent vector that completes the third solution. We can take with us the conditions $(A - \lambda I)\vec{K} = \vec{0}$ and $(A - \lambda I)\vec{P} = \vec{K}$ to build a new condition 

$$(A - \lambda I)\vec{Q} = \vec{P}$$ 
for the guessed solution $\vec{X}_{3} = \frac{1}{2}\vec{K}t^{2}e^{ \lambda t } + \vec{P}te^{ \lambda t } + \vec{Q}e^{ \lambda t }$. 

We can show that $\vec{K}, \vec{P}, \vec{Q}$ are linearly independent from one another, forming a fundamental set.

##### Proof of Linear Independence

The condition of linear independence for $\{ \vec{K}, \vec{P}, \vec{Q} \}$ is showing the expression

$$
c_{1}\vec{K} + c_{2}\vec{P} + c_{3}\vec{Q} = \vec{0}
$$

holds true if and only if $c_{1} = c_{2} = c_{3} = 0$.

But if we multiply both sides by $(A - \lambda I)^{2}$, then we'd find

$$
\begin{align}
 & c_{1}(A - \lambda I)^{2}\vec{K} + c_{2}(A - \lambda I)^{2}\vec{P} + c_{3}(A - \lambda I)^{2}\vec{Q} = (A - \lambda I)\vec{0} \\ \\
 & \cancel{ c_{1}(A - \lambda I)\vec{0} } + c_{2}(A - \lambda I)\vec{K} + c_{3}(A - \lambda I)\vec{P} = \vec{0} & \text{Use conditions} \\ \\
 & \cancel{ c_{2}\vec{0} } + c_{3}\vec{K} = \vec{0} & \text{Reapply conditions} \\ \\
 & c_{3}\vec{K} = \vec{0}
\end{align}
$$

But remember, $\vec{K} \ne \vec{0}$, so it must be $c_{3} = 0$. 

Revisiting the original expression but eliminating $c_{3}$,

$$
c_{1}\vec{K} + c_{2}\vec{P} = \vec{0}
$$

Since we know $\vec{K}$ and $\vec{P}$ are linearly independent from one another, it must be true that $c_{1} = c_{2} = 0$. 

Hence, we've proven $c_{1} = c_{2} = c_{3} = 0$, so $\{ \vec{K}, \vec{P}, \vec{Q} \}$ are linearly independent.

---

We've shown linear independence for multiplicity $m = 2$ and $m = 3$, but independence can be shown for cases $m > 3$ in a similar fashion.

In general, if there's only one eigenvector corresponding to $\lambda$ of multiplicity $m$ then $m$ linearly independent solutions of the form

$$
\begin{align}
\vec{X}_{1} & = \vec{K}_{11} e^{ \lambda t } \\ \\
\vec{X}_{2} & = \vec{K}_{21}e^{ \lambda t } + \vec{K}_{22}te^{ \lambda t } \\ \\
\vec{X}_{3} & = \vec{K}_{31} \frac{1}{2}t^{2}e^{ \lambda t } + \vec{K}_{32}te^{ \lambda t } + \vec{K}_{33}e^{ \lambda t } \\ \\
\vdots & \hspace{50pt} \vdots \\ \\
\vec{X}_{n} & = \vec{K}_{m 1} \frac{t^{m-1}}{(m-1)!} e^{ \lambda t } + \vec{K}_{m 2} \frac{t^{m-2}}{(m-2)!}e^{ \lambda t } + \cdots + \vec{K}_{mm}e^{ \lambda t }
\end{align}
$$

can be found where for the $i$-th solution, the $j$-th column vector $\vec{K}_{ij} \ \ne \vec{0} \ \forall j \in  (1, 2, ..., m)$ can be found by solving

$$
\begin{align}
(A - \lambda I)\vec{K}_{i 1} & = \vec{0} \\ \\
(A - \lambda I)\vec{K}_{i 2} & = \vec{K}_{i 1} \\ \\
(A - \lambda I)\vec{K}_{i 3} & = \vec{K}_{i 2} \\ \\

\vdots \\ \\
(A - \lambda I)\vec{K}_{i j} & = \vec{K}_{i, j - 1}
\end{align} 
$$

## Case III: Complex Eigenvalues

If $\lambda = \alpha + \beta i$ and its conjugate is $\overline{\lambda} = \alpha - \beta i$, then

$$
\begin{align}
\vec{X}_{1} & = \vec{K}e^{ \lambda t } \\ \\
\vec{X}_{2} & = \overline{\vec{K}}e^{ \overline{\lambda}t }
\end{align}
$$

are solutions to the system $\vec{X}' = A\vec{X}$, but our interest is in solutions of the real form. 

So, we could rewrite the solution vectors as

$$
\begin{align}
\vec{K}e^{ \lambda t } & = \vec{K}e^{ \alpha t }(\cos(\beta t) + i\sin(\beta t)) \\ \\
\overline{\vec{K}}e^{ \overline{\lambda} t } & = \overline{\vec{K}}e^{ \alpha t }(\cos(\beta t) - i\sin(\beta t))
\end{align}
$$

By the [[Superposition Principle]], the following are also solution vectors

$$
\begin{align}
\vec{X}_{1} & = \frac{1}{2}(\vec{K}e^{ \lambda t } + \overline{\vec{K}}e^{ \overline{\lambda}t }) = \frac{1}{2}(\vec{K} + \overline{\vec{K}})e^{ \alpha t }\cos(\beta t) - \frac{i}{2}(-\vec{K} + \overline{\vec{K}})e^{ \alpha t }\sin(\beta t) \\ \\
\vec{X}_{2} & = \frac{1}{2}(-\vec{K}e^{ \lambda t } + \overline{\vec{K}}e^{ \overline{\lambda}t }) = \frac{1}{2}(-\vec{K} + \overline{\vec{K}})e^{ \alpha t }\cos(\beta t) - \frac{i}{2}(\vec{K} + \overline{\vec{K}})e^{ \alpha t }\sin(\beta t)
\end{align}
$$

We wrote the solution vectors that way because we can take advantage of a known fact for complex numbers:

$$
\begin{align}
\text{Re}(z) = \frac{1}{2}(z + \overline{z}) &  = \frac{1}{2}(\alpha + \beta i + \alpha - \beta i) = \alpha \\ \\
\text{Im}(z) = -\frac{i}{2}(- z + \overline{z}) & = -\frac{i}{2}(-\alpha - \beta i + \alpha - \beta i) = \beta
\end{align}
$$

where $\text{Re}(z), \text{Im}(z)$ denotes the real and imaginary parts of $z$, respectively. 

If we let

$$
\begin{align}
\vec{B}_{1} & = \frac{1}{2}(\vec{K} + \overline{\vec{K}}) \\ \\
\vec{B}_{2} & = \frac{i}{2}(- \vec{K} + \overline{\vec{K}})
\end{align}
$$

then from the results of complex numbers, we can show that all entries of $\vec{B}_{1}$ and $\vec{B}_{2}$ are real.

We generalize all the previous results to make this theorem that gives a formula to write real solutions corresponding to complex eigenvalues. 

### Real Formula for Complex Eigenvalues

> [!theorem]
> Let $\lambda_{1} = \alpha + \beta i$ be a complex eigenvalue of the coefficient matrix $A$ in the homogeneous system $\vec{X}' = A\vec{X}$ and let $\vec{B}_{1} = \mathrm{Re}(\vec{K}_{1})$ and $\vec{B}_{2} = \mathrm{Im}(\vec{K}_{1})$ be column vectors defined as before. Then
> 
> $$
> \begin{align}
> \vec{X}_{1} & = e^{ \alpha t }[\vec{B}_{1}\cos(\beta t) - \vec{B}_{2}\sin(\beta t)]  \\ \\
> \vec{X}_{2} & = e^{ \alpha t }[\vec{B}_{2}\cos(\beta t) + \vec{B}_{1}\sin(\beta t)]
> \end{align}
> $$
> 
> are linearly independent solutions of the homogeneous system on the interval $I = (-\infty, \infty)$.

This means the general solution will contain $c_{1}\vec{X}_{1} + c_{2}\vec{X}_{2}$ or equivalently,

$$
\begin{align}
c_{1}\vec{X}_{1} + c_{2}\vec{X}_{2} & = [c_{1} \vec{B}_{1} + c_{2}\vec{B}_{2}]e^{ \alpha t }\cos(\beta t) + [c_{2}\vec{B}_{2} - c_{1}\vec{B}_{1}]e^{ \alpha t }\sin(\beta t)
\end{align}
$$


> It makes sense why $\vec{B}_{1}$ and $\vec{B}_{2}$ are linearly independent making $\{ \vec{X}_{1}, \vec{X}_{2} \}$ independent is because the complex parts of a number will never be a scalar multiple of a real number. 
#### Examples Working with Complex Eigenvalues