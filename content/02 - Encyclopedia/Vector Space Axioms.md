---
created: 202603141122,
reviewed: 202603141122
---
# Vector Space Axioms

Let $V$ be some nonempty set of objects for which two operations are defined: addition and multiplication by numbers called **scalars**. 

By **addition** we mean a rule for associating with each pair of objects $\mathbf{u}$ and $\mathbf{v}$ in $V$ an object $\mathbf{u} + \mathbf{v}$, called the **sum** of $\mathbf{u}$ and $\mathbf{v}$. By **scalar multiplication** we mean a rule for associating with each scalar $k$ and each object $\mathbf{u}$ in $V$ an object $k\mathbf{u}$, called the **scalar multiple** of $\mathbf{u}$ by $k$. 

> [!definition] 10 Axioms Defining Vector Spaces
> If the following axioms are satisfied by all objects $\mathbf{u}, \mathbf{v}, \mathbf{w}$ in $V$ and all scalars $k$ and $m$, then we call $V$ a **vector space** and we call the objects in $V$ **vectors**.
> 
> 1. If $\mathbf{u}$ and $\mathbf{v}$ are objects in $V$, then $\mathbf{u} + \mathbf{v}$ is in $V$.
> 
> 2. $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$
> 
> 3. $\mathbf{u} + (\mathbf{v} + \mathbf{w}) = (\mathbf{u} + \mathbf{v}) + \mathbf{w}$
> 
> 4. There exists an object in $V$, called the **zero vector**, that is denoted by $\mathbf{0}$ and has the property that $\mathbf{0} + \mathbf{u} = \mathbf{u} + \mathbf{0} = \mathbf{u}$ for all $\mathbf{u}$ in $V$.
> 
> 5. For each $\mathbf{u}$ in $V$, there is an object $- \mathbf{u}$ in $V$, called a **negative** of $\mathbf{u}$, such that $\mathbf{u} + (- \mathbf{u}) = (- \mathbf{u}) + \mathbf{u} = \mathbf{0}$.
> 
> 6. If $k$ is any scalar and $\mathbf{u}$ is any object in $V$, then $k \mathbf{u}$ is in $V$.
> 
> 7. $k(\mathbf{u} + \mathbf{v}) = k\mathbf{u} + k\mathbf{v}$
> 
> 8. $(k+m)\mathbf{u} = k\mathbf{u} + m\mathbf{u}$
> 
> 9. $k(m\mathbf{u}) = (km)\mathbf{u}$ 
> 
> 10. $1\mathbf{u} = \mathbf{u}$

Axiom 1 is called *closure under addition*, and Axiom 6 is called *closure under scalar multiplication*.
## Steps to Show a Vector Space

1. Identify the set $V$ of objects that will become vectors.

2. Identify the addition and scalar multiplication operations on $V$.

3. Verify Axioms 1 and 6, that is, adding two vectors in $V$ produces a vector in $V$, and multiplying a vector in $V$ by a scalar also produces a vector in $V$. 

4. Confirm that the rest of the Axioms hold.

## Examples of Vector Spaces

### Rn is a Vector Space

We can show how $R^{n}$ is a vector space. 

Let $V = R^{n}$, and define the vector space operations on $V$ to be the usual operations of addition and scalar multiplication of $n$-tuples; that is,

$$
\begin{align}
 & \mathbf{u} + \mathbf{v} = (u_{1}, u_{2}, ..., u_{n}) + (v_{1}, v_{2}, ..., v_{n}) = (u_{1} + v_{1}, u_{2} + v_{2}, ..., u_{n} + v_{n}) \\ \\
 & k \mathbf{u} = (ku_{1}, ku_{2}, ..., ku_{n})
\end{align}
$$

The set $V = R^{n}$ is closed under addition and scalar multiplication because the operations produce $n$-tuples as their end result, and these operations satisfy Axioms 2, 3, 4, 5, 7, 8, 9, and 10.
### Vector Space of 2x2 Matrices

Let $V$ be the set of $2 \times 2$ matrices with real entries, and take the vector space operations on $V$ to be the usual operations of matrix addition and scalar multiplication; that is,

$$
\mathbf{u} + \mathbf{v} = 
\begin{pmatrix}
u_{11} + v_{11} & u_{12} + v_{12} \\
u_{21} + v_{21} & u_{22} + v_{22}
\end{pmatrix}
$$

$$
k \mathbf{u} = \begin{pmatrix}
ku_{11} & ku_{12} \\
ku_{21} & ku_{22}
\end{pmatrix}
$$


So it holds that Axioms 1 and 6 satisfy because the result are $2 \times 2$ matrices with real entries. We know that the addition of matrices commute so Axiom 2 is settled and their addition also is associative which meets Axiom 3. Properties of scalar multiplication on matrices satisfy Axioms 7, 8, 9 and 10.

### A Set That is Not a Vector Space

Let $V = R^{2}$ and define addition and scalar multiplication operations as follows: If $\mathbf{u} = (u_{1}, u_{2})$ and $\mathbf{v} = (v_{1}, v_{2})$, then we define vector addition to be

$$
\mathbf{u} + \mathbf{v} = (u_{1} + v_{1}, u_{2} + v_{2})
$$

and if $k$ is any real number, then we define scalar multiplication as

$$
k\mathbf{u} = (ku_{1}, 0)
$$

While the addition operation is the standard addition from $R_{2}$, but the scalar multiplication is not. You can find 9 of the 10 Axioms hold, but Axiom 10 fails to hold. If $\mathbf{u} = (u_{1}, u_{2})$ such that $u_{2} \ne 0$ then

$$
1\mathbf{u} = 1(u_{1}, u_{2}) = (u_{1}, 0) \ne \mathbf{u}
$$

Thus, $V$ is not a vector space with the stated operations.

## Properties of Vectors

> [!theorem]
> Let $V$ be a vector space, $\mathbf{u}$ a vector in $V$, and $k$ a scalar, then:
> 
> * (a) $0\mathbf{u} = \mathbf{0}$
> * (b) $k\mathbf{0} = \mathbf{0}$
> * (c) $(-1)\mathbf{u} = -\mathbf{u}$
> * (d) If $k\mathbf{u} = \mathbf{0}$, then $k = 0$ or $\mathbf{u} = \mathbf{0}$ 

> Note that this is a consequent of a set being a vector space, and should not prove if a set is a vector space (antecedent).