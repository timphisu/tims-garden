---
created: 202603071645,
reviewed: 202603071645
tags:
  - math/concept
  - math/theorem
  - math/topic/linear-algebra
---

We can express (or decompose) a vector $\mathbf{u}$ in $R^{2}$ as a sum of two terms, $\mathbf{w}_{1}$ being a scalar multiple of a specified nonzero vector $\mathbf{a}$ and $\mathbf{w}_{2}$ being orthogonal to $\mathbf{a}$.

![[Pasted image 20260301152905.png]]

### Projection Theorem

> [!theorem]
> If $\mathbf{u}$ and $\mathbf{a}$ are vectors in $R^{n}$, and if $\mathbf{a} \ne \mathbf{0}$, then $\mathbf{u}$ can be expressed in exactly one way in the form $\mathbf{u} = \mathbf{w}_{1} + \mathbf{w}_{2}$, where $\mathbf{w}_{1}$ is a scalar multiple of $\mathbf{a}$ and $\mathbf{w}_{2}$ is orthogonal to $\mathbf{a}$. 

In this theorem, the vector $\mathbf{w}_{1}$ is called the orthogonal projection of $\mathbf{u}$ on $\mathbf{a}$, and the vector $\mathbf{w}_{2}$ is called the vector component of $\mathbf{u}$ orthogonal to $\mathbf{a}$. The vector $\mathbf{w}_{1}$ is commonly denoted by $\operatorname{proj}_{\mathbf{a}}\mathbf{u}$, in which case $\mathbf{w}_{2} = \mathbf{u} - \operatorname{proj}_{\mathbf{a}}\mathbf{u}$.

#### Proof

Since $\mathbf{w}_{1}$ is a scalar multiple of $\mathbf{a}$, then $\mathbf{w}_{1} = k \mathbf{a}$. 

We want to show that

$$
\mathbf{u} = \mathbf{w}_{1} + \mathbf{w}_{2}
$$
but by substituting

$$
\mathbf{u} = k\mathbf{a} + \mathbf{w}_{2}
$$

If we take the dot product between $\mathbf{u}$ and $\mathbf{a}$, then we'll find

$$
\mathbf{u} \cdot \mathbf{a} = (k \mathbf{a} + \mathbf{w}_{2}) \cdot \mathbf{a} = k \| \mathbf{a} \| ^{2} + \mathbf{w}_{2} \cdot \mathbf{a}
$$

But note that we defined $\mathbf{w}_{2}$ to be orthogonal to $\mathbf{a}$, which means their dot product would be zero, yielding a requirement for $k$

$$
\mathbf{u} \cdot \mathbf{a} = k \| \mathbf{a} \| ^{2} \implies k = \frac{\mathbf{u} \cdot \mathbf{a}}{\| \mathbf{a} \| ^{2}}
$$

We can then rewrite $\mathbf{w}_{2}$ to be 

$$
\mathbf{w}_{2} = \mathbf{u} - \mathbf{w}_{1} = \mathbf{u} - k\mathbf{a} = \mathbf{u} - \frac{\mathbf{u} \cdot \mathbf{a}}{\| \mathbf{a} \| ^{2}} \mathbf{a}
$$

By this definition of $\mathbf{w}_{2}$, you can confirm that $\mathbf{w}_{2} \cdot \mathbf{a}  = 0$.

> By inputting facts we made through defining $\mathbf{w}_{1}$ and $\mathbf{w}_{2}$, we found a scalar $k$ that works to decompose $\mathbf{u}$ in terms of $\mathbf{w}_{1}$ and $\mathbf{w}_{2}$.

#### Vectors in Projection Theorem

The vector $\mathbf{w}_{1}$ is called the orthogonal projection of $\mathbf{u}$ onto $\mathbf{a}$, and is denoted $\operatorname{proj}_{\mathbf{a}} \mathbf{u}$. The vector $\mathbf{w}_{2}$ is called the vector component of $\mathbf{u}$ orthogonal to $\mathbf{a}$, and is expressed as $\mathbf{w}_{2} = \mathbf{u} - \operatorname{proj}_{\mathbf{a}} \mathbf{u}$.

$$
\begin{align}
 & \mathbf{w}_{1} = \operatorname{proj}_{\mathbf{a}} \mathbf{u} = \frac{\mathbf{u} \cdot \mathbf{a}}{\| \mathbf{a} \| ^{2}} \mathbf{a} \\ \\
 & \mathbf{w}_{2} = \mathbf{u} - \operatorname{proj}_{\mathbf{a}} \mathbf{u} = \mathbf{u} - \frac{\mathbf{u} \cdot \mathbf{a}}{\| \mathbf{a} \| ^{2}} \mathbf{a}
\end{align}
$$

