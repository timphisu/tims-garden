---
created: 202603071640,
reviewed: 202603071640
tags:
  - math/topic/linear-algebra
  - math/building-blocks
---

> [!definition]
> If $\mathbf{u}$ and $\mathbf{v}$ are nonzero vectors in $R^{2}$ or $R^{3}$, and if $\theta$ is the angle between $\mathbf{u}$ and $\mathbf{v}$, then the **dot product** (also called the *Euclidean inner product*) of $\mathbf{u}$ and $\mathbf{v}$ is denoted by $\mathbf{u} \cdot \mathbf{v}$ and is defined as
> 
> $$\mathbf{u} \cdot \mathbf{v} = \| \mathbf{u} \|  \|  \mathbf{v} \| \cos{\theta} $$

> If $\mathbf{u} = \mathbf{0}$ or $\mathbf{v} = \mathbf{0}$, then $\mathbf{u \cdot v} = 0$ by definition of the dot product

When $\mathbf{u}$ and $\mathbf{v}$ are nonzero, then the sign of the dot product reveals information about the angle $\theta$ that we can obtain by rearranging the definition of the dot product to be

$$
\cos{\theta} = \frac{\mathbf{u} \cdot \mathbf{v}}{\| \mathbf{u} \| \| \mathbf{v} \| }
$$
* $\theta$ is acute if $\mathbf{u} \cdot \mathbf{v} > 0$
* $\theta$ is obtuse if $\mathbf{u} \cdot \mathbf{v} < 0$
* $\theta = \frac{\pi}{2}$ if $\mathbf{u} \cdot \mathbf{v} = 0$

### Component Form of the Dot Product

> [!definition]
> If $\mathbf{u} = (u_{1}, u_{2}, ..., u_{n})$ and $\mathbf{v} = (v_{1}, v_{2}, ..., v_{n})$ are vectors in $R^{n}$, then the **dot product** (also called the *Euclidean inner product*) of $\mathbf{u}$ and $\mathbf{v}$ is denoted by $\mathbf{u} \cdot \mathbf{v}$ and is defined as
> 
> $$\mathbf{u} \cdot \mathbf{v} = u_{1}v_{1} + u_{2}v_{2} + \cdots + u_{n}v_{n}$$
#### Intuition

Let $\mathbf{u} = (u_{1}, u_{2}, u_{3})$ and $\mathbf{v} = (v_{1}, v_{2}, v_{3})$ be two nonzero vectors.

The following visual can be made in space where the terminal points that $\mathbf{u}$ points to is $P(u_{1}, u_{2}, u_{3})$ and $\mathbf{v}$ points to $Q(v_{1}, v_{2}, v_{3})$. Then, another vector can be made $\vec{PQ}$; another name for this vector would be $\mathbf{v} - \mathbf{u}$.

![[Pasted image 20260301131809.png|300]]

If $\theta$ is the angle between $\mathbf{u}$ and $\mathbf{v}$, then the [[law of cosines]] yields

$$
\| \vec{PQ} \| = \| \mathbf{u} \| ^{2} + \| \mathbf{v} \| ^{2} - 2\| \mathbf{u} \| \| \mathbf{v} \| \cos \theta
$$

Since $\vec{PQ}= \mathbf{v} - \mathbf{u}$, and after rearranging

$$
\| \mathbf{u} \| \| \mathbf{v} \| \cos \theta = \frac{1}{2} \left( \| \mathbf{u} \|^{2} + \| \mathbf{v} \| ^{2} - \| \mathbf{v} - \mathbf{u} \| ^{2} \right) 
$$

We know that

$$
\begin{align}
 & \| \mathbf{u} \| ^{2} = u_{1}^{2} + u_{2}^{2} + u_{3}^{2} \\ \\
 & \| \mathbf{v} \| ^{2} = v_{1}^{2} + v_{2}^{2} + v_{3}^{2} \\ \\
 & \| \mathbf{v} - \mathbf{u} \| ^{2} = (v_{1}-u_{1})^{2} + (v_{2}-u_{2})^{2} + (v_{3} -u_{3})^{2} \\ \\
 
\end{align}
$$

Then, by substituting

$$
\begin{align}
\mathbf{u} \cdot \mathbf{v}  & = \frac{1}{2} \left( \| \mathbf{u} \|^{2} + \| \mathbf{v} \| ^{2} - \| \mathbf{v} - \mathbf{u} \| ^{2} \right) & \text{Given} \\ \\
 & = \frac{1}{2}   \left[u_{1}^{2} + u_{2}^{2} + u_{3}^{2} + v_{1}^{2} + v_{2}^{2} + v_{3}^{2} + (v_{1}-u_{1})^{2} + (v_{2}-u_{2})^{2} + (v_{3} -u_{3})^{2}\right]
\end{align}
$$

After simplifying, we derive

$$
\mathbf{u} \cdot \mathbf{v} = u_{1}v_{1} + u_{2}v_{2} + u_{3}v_{3}
$$

### Properties of the Dot Product

We find that 

$$
\mathbf{v} \cdot \mathbf{v} = v_{1}^{2} + v_{2}^{2} + \cdots + v_{n}^{2} = \| \mathbf{v} \| ^{2}
$$

which gives us the relation where the length of a vector can be expressed in terms of the dot product

$$
\| \mathbf{v} \| = \sqrt{ \mathbf{v} \cdot \mathbf{v} }
$$

> [!theorem]
> If $\mathbf{u}$, $\mathbf{v}$, and $\mathbf{w}$ are vectors in $R^{n}$, and if $k$ is a scalar, then:
> 
> $$
> \begin{array}{ccc}
> (a) &  \mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}  & \text{Symmetry property} \\ \\
> (b) & \mathbf{u} \cdot (\mathbf{v} + \mathbf{w}) = \mathbf{u} \cdot \mathbf{v} + \mathbf{u} \cdot \mathbf{w} & \text{Distributive property} \\ \\
> (c) & k(\mathbf{u} \cdot \mathbf{v}) = (k\mathbf{u}) \cdot \mathbf{v} & \text{Homogeneity property}\\ \\
> (d) & \mathbf{v} \cdot \mathbf{v} \geq 0 \land \mathbf{v} \cdot \mathbf{v} = 0 \iff \mathbf{v} = \mathbf{0}  & \text{Positivity property}
> \end{array}
> $$


This is to say that dot products commute and distribute. Other operations like scalar multiplication distribute in dot products. And there's a fact to be said about zero vectors in terms of dot products.

#### Cauchy-Schwarz Inequality

> [!theorem]
> If $\mathbf{u} = (u_{1}, u_{2}, ..., u_{n})$ and $\mathbf{v} = (v_{1}, v_{2}, ..., v_{n})$ are vectors in $R^{n}$, then
> $$
> |\mathbf{u} \cdot \mathbf{v}| \leq \| \mathbf{u} \| \| \mathbf{v} \|
> $$