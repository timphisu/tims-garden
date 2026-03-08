---
created: 202603071639,
reviewed: 202603071639
tags:
  - math/topic/linear-algebra
  - math/building-blocks
---

> [!definition]
> If $\mathbf{v} = \{ v_{1}, v_{2}, ..., v_{n} \}$ is a vector in $R^{n}$, then the **norm** of $\mathbf{v}$ (also called the **length** or **magnitude**) is denoted by $\| \mathbf{v} \|$, and is defined by the formula
> 
> $$\| \mathbf{v} \|  = \sqrt{ v_{1}^{2} + v_{2}^{2} + \cdots + v_{n}^{2} }$$

### Algebraic Properties of the Norm of a Vector

We generalize to $R^{n}$ the following facts that are true for vectors in $R^{2}$ or $R^{3}$. 

* Distances are nonnegative.
* The zero vector is the only vector of length zero.
* Multiplying a vector by a scalar multiplies its length by the absolute value of that scalar.

> [!theorem]
> If $\mathbf{v}$ is a vector in $R^{n}$, and if $k$ is any scalar, then:
> 
> * (a) $\| \mathbf{v} \| \geq 0$
> * (b) $\| \mathbf{v} \| = 0$ if and only if $\mathbf{v} = \mathbf{0}$
> * (c) $\| k\mathbf{v} \| = |k| \| \mathbf{v} \|$ 
> 

### Unit Vector

> [!definition]
> A vector of norm 1 is called a *unit vector*. If $\mathbf{v}$ is a nonzero vector in $R^{n}$, then 
> 
> $$\mathbf{u} = \frac{1}{\| \mathbf{v} \| } \mathbf{v}$$ 
> defines a unit vector that is in the same direction as $\mathbf{v}$. The process of obtaining a unit vector is called *normalizing* the vector.