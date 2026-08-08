
> [!theorem] Theorem 3.3.2
> If $\vec{u}$ and $\vec{a}$ are vectors in $R^{n}$, and if $a \ne \vec{0}$, then $\vec{u}$ can be expressed in exactly one way in the form $\vec{u} = \vec{w}_{1} + \vec{w}_{2}$, where $\vec{w}_{1}$ is a scalar multiple of $\vec{a}$ and $\vec{w}_{2}$ is orthogonal to $\vec{a}$. 

**Proof:**

What's given to us is that the vector $\vec{w}_{1}$ is a scalar multiple of $\vec{a}$, so $\vec{w}_{1}$ can be written in the form $\vec{w}_{1} = k\vec{a}$. We need to find the value of $k$ and a vector $\vec{w}_{2}$ that orthogonal to $\vec{a}$ such that $\vec{u} = \vec{w}_{1} + \vec{w}_{2}$. 

We can determine the value of $k$ by rewriting

$$
\vec{u} = k\vec{a} + \vec{w}_{2}
$$

Dotting on both sides with $\vec{a}$, 

$$
\vec{u} \cdot \vec{a} = k\vec{a} \cdot \vec{a} + \vec{w}_{2} \cdot \vec{a}
$$

Since $\vec{w}_{2}$ is orthogonal to $\vec{a}$, then their dot product must be zero.

$$
\vec{u} \cdot \vec{a} = k\| \vec{a} \|^{2}
$$

So we obtain 

$$
k = \frac{\vec{u} \cdot \vec{a}}{\| \vec{a} \| ^{2}}
$$

as the only possible value of $k$. 

Then rewriting the expression for $\vec{u}$, we can get a formula for $\vec{w}_{2}$.
$$
\vec{w}_{2} = \vec{u} - \vec{w}_{1} = \vec{u} - k\vec{a} = \vec{u} - \frac{\vec{u} \cdot \vec{a}}{\| \vec{a} \| ^{2}} \vec{a}
$$

To verify that $\vec{w}_{2}$ is orthogonal to $\vec{a}$, we dot both sides of the equation:

$$
\begin{align}
\vec{w}_{2} \cdot \vec{a}  & = \vec{u} \cdot \vec{a} - \frac{\vec{u} \cdot \vec{a}}{\| \vec{a} \| ^{2}} \vec{a} \cdot \vec{a} \\ \\
  & = \vec{u} \cdot \vec{a} - \frac{\vec{u} \cdot \vec{a}}{\cancel{ \| \vec{a} \| ^{2} }} \|  \cancel{ \vec{a} \| ^{2} } \\ \\
 & = \vec{u} \cdot \vec{a} - \vec{u} \cdot \vec{a} \\ \\
 & = 0 
\end{align}
$$

Hence we've shown that $\vec{w}_{2} \perp \vec{a}$.

The vector $\vec{w}_{1}$ is called the **orthogonal projection** on $\vec{a}$ and the vector $\vec{w}_{2}$ is called the component of $\vec{u}$ orthogonal to $\vec{a}$. 

Notationally, we write them as

$$
\begin{align}
\vec{w}_{1} &  = \text{proj}_{\vec{a}}\vec{u} = \frac{\vec{u} \cdot \vec{a}}{\| \vec{a} \| ^{2}}\vec{a} \\ \\
\vec{w}_{2} & = \vec{u} - \text{proj}_{\vec{a}}\vec{u} = \vec{u} - \frac{\vec{u} \cdot \vec{a}}{\| \vec{a} \| ^{2}}\vec{a} 
\end{align}
$$

