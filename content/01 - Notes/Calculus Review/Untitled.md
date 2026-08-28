
**General Method of Lagrangian Multipliers**

To find the extreme values of a scalar function $f$ with $n$ decision variables $\mathbf{x} = (x_{1}, x_{2}, ..., x_{n})$ subject to $m$ constraints $h_{1}(\mathbf{x})  = h_{2}(\mathbf{x}) = \cdots = h_{m}(\mathbf{x}) = 0$, assuming that the set $\{ \nabla h_{1}, \nabla h_{2}, ..., \nabla h_{m} \}$ is linearly independent, solve the following system of equations:

$$
\begin{align}
 & 1) & \nabla f = \sum_{i = 1}^{m} \lambda_{i} \nabla h_{i} \\ \\
 & 2) & h_{1} = h_{2} = \cdots = h_{m} = 0
\end{align}
$$


where $\lambda_{i}$ for $i = 1,2,..., m$ are called **Lagrangian multipliers**.

**Alternative Formulation of Lagrangian Multipliers** 

We can define a new arbitrary function $\mathcal{L}$ called the **Lagrangian**, defined as,

$$
\mathcal{L}(\mathbf{x}, \lambda _{1}, \lambda_{2}, ..., \lambda_{m}) = f(\mathbf{x}) - \sum_{i=1}^{m} \lambda_{i}h_{i}(\mathbf{x})
$$

If $H_{\mathcal{L}}$ is the *Hessian matrix* of $\mathcal{L}$ then solving for the vector $\mathbf{x}_{*}$ which satisfies the following equations:

$$
\begin{align}
 & 3) & \nabla \mathcal{L} = \mathbf{0} \\ \\
 & 4) & \det(H_{\mathcal{L}}) > 0
\end{align}
$$

will after evaluating at $f$ give the extreme values of $f : R^{n} \to R$ subject to $h_{1} = h_{2} = \cdots = h_{m} = 0$. 