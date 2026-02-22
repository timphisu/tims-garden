
## General Reference

Given some training array $X$ with shape $(m, d)$, we forward pass each example with some given weights and biases at each layer $\ell \in (1, L)$ where the number of neurons for that layer is denoted $n_{\ell}$ .

| Cases                           | Input Layer                                  | Weights                                   | Bias                                      | Pre-Activation                            | Activation-Output                           |
| ------------------------------- | -------------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ------------------------------------------- |
| Perceptron                      | $$\mathbf{x} \in (d, 1)$$                    | $$\mathbf{w} \in (1, d)$$                 | $$b \in (1, 1)$$                          | $$z \in (1, 1)$$                          | $$\hat{y} = a \in (1, 1)$$                  |
| Neural Network (Single Example) | $$\mathbf{x} = \mathbf{a}^{(0)} \in (d, 1)$$ | $$W^{(\ell)} \in (n_{\ell}, n_{\ell-1})$$ | $$\mathbf{b}^{(\ell)} \in (n_{\ell}, 1)$$ | $$\mathbf{z}^{(\ell)} \in (n_{\ell}, 1)$$ | $$\hat{y} = \mathbf{a}^{(L)} \in (1, 1)$$   |
| Neural Network (Batch)          | $$X^T = A^{(0)} \in (d, m)$$                 | $$W^{(\ell)} \in (n_{\ell}, n_{\ell-1})$$ | $$B^{(\ell)} \in (n_{\ell}, 1)$$          | $$Z^{(\ell)} \in (n_{\ell}, m)$$          | $$\mathbf{\hat{y}} = {A}^{(L)} \in (1, m)$$ |

## The Shape Problem

For the update rule to be a valid operation, the gradients must be of the same shape as the objects we are subtracting from. For future reference, we must generalize this rule for any parameter. 
### Gradient Dimension Consistency

> [!theorem] 
> 
> Let $J : \mathbb{R}^{n \times m} \to \mathbb{R}$ be a scalar-valued differentiable function of a matrix dependent on a parameter tensor $\theta \in \mathbb{R}^{n \times m}$. The gradient of $J$ with respect to $\theta$, denoted $\frac{\partial J}{\partial \theta}$ or $\nabla_{\theta} J$, is a tensor of partial derivatives that maps one-to-one with the elements of $\theta$. 
> 
> Therefore, $\frac{\partial J}{\partial \theta}$ must exist in the same vector space as $\theta$
>  
>  $$
>  \dim \left(\frac{\partial J}{\partial \theta} \right) = \dim(\theta)
>  $$

> **Proof:**
> By the definition of matrix addition-subtraction, the update rule cannot be valid if $\frac{\partial J}{\partial \theta}$ does not match the rows and columns of $\theta$

#### Corollary: Application To Neural Network Layers

We defined the weight matrix $W^{(\ell)}$ such that its rows correspond neurons in the current layer and columns to neurons in neurons in the previous layer. 

$$
W^{(\ell)} \in (n_{\ell}, n_{\ell - 1})
$$

By the theorem, the gradient matrix must match exactly 

$$
\frac{\partial J}{\partial W^{(\ell)}} \in (n_{\ell}, n_{\ell - 1})
$$

And likewise for the bias vector $b^{(\ell)}$

$$
b^{(\ell)} \in (n_{\ell}, 1) \longrightarrow \frac{\partial J}{\partial b^{(\ell)}} \in (n_{\ell}, 1)
$$

Recall from [[04 - Articles/Neural Networks/Neural Network Report#Backpropagation|backpropagation]] that the cost function is the average of the loss which means that we expect 

$$
\begin{align}
& \frac{\partial L}{\partial W^{(\ell)}} \in (n_{\ell}, n_{\ell - 1}) \\
\\
& \frac{\partial L}{\partial b^{(\ell)}} \in (n_{\ell}, 1)
\end{align}
$$

### Computing Gradients (ii)

This is the continuation of the discussion for backpropagation as this handles more of the *shape handling* of backpropagation
#### The Error Term

This brings us to the question of how to properly multiply terms together properly when for $\ell = (L - 1, L - 2, \dots, 1)$ 

$$
\delta^{(\ell)} = \frac{\partial L}{\partial z^{(\ell)}} = \delta^{(\ell+1)} \frac{\partial z^{(\ell+1)}}{\partial a^{(\ell)}} \frac{\partial a^{(\ell)}}{\partial z^{(\ell)}}
$$

where

$$
\begin{align}
	& \delta^{(\ell + 1)} \in (n_{\ell+1}, 1) \\
	\\
	& \frac{\partial z^{(\ell + 1)}}{\partial a^{(\ell)}} \ = W^{(\ell + 1)} \in (n_{\ell+1}, n_{\ell})\\
	\\
	& \frac{\partial a^{(\ell)}}{\partial z^{(\ell)}} = \sigma'(z^{(\ell)}) = a^{(\ell)}(1- a^{(\ell)}) \in (n_{\ell}, 1)
\end{align}
$$

Analyzing the shape of $\delta^{(\ell)}$, the terms do not naturally match up

$$
\text{Shape of $\delta^{(\ell)}$: } (n_{\ell + 1}, 1)(n_{\ell + 1}, n_{\ell})(n_{\ell}, 1)
$$

> [!info]
> When we pass tensors through the sigmoid function $\sigma(z)$, the function operation is element-wise, that is,
> $$a^{(\ell)} = \sigma(z^{\ell}) = \left[ \sigma(z_j^{(\ell)}) \right]$$
> Hence, it's derivative product must also be element-wise, denoted $\odot$ as the *Hadamard product*.

So we zoom in entry-wise for each $j$-th neuron in layer $\ell$ 

$$
\delta_{j}^{(\ell)} = \frac{\partial L}{\partial z_{j}^{(\ell)}} = a_j^{(\ell)}(1-a_{j}^{(\ell)}) \cdot \sum_{i} w_{ij}^{(\ell+1)} \delta_{i}^{(\ell+1)} 
$$

* where $i$ represents the $i$-th neuron in the forward layer

By the matrix multiplication of $W^{(\ell+1)}$ we are mapping forward from $n_{\ell}$ to $n_{\ell+1}$ . In order to map <u>backward</u> the "flow of error" from $n_{\ell+1} \to n_{\ell}$ we must *transpose* the weight matrix, that is, $W^{(\ell + 1)T}$ . 

So,

$$
\delta_{j}^{(\ell)} = a_j^{(\ell)}(1-a_{j}^{(\ell)}) \cdot \sum_{i} w_{ji}^{(\ell+1)} \delta_{i}^{(\ell+1)} 
$$

which then becomes acceptable matrix-vector multiplication.

Generally for $\ell = (L-1, L-2, \dots, 1)$,

$$
{\delta^{(\ell)} = W^{(\ell+1)T} \delta^{(\ell + 1)} \odot \sigma'(z^{(\ell)}) }
$$

#### Weight Gradient 

Recall that

$$
\frac{\partial L}{\partial W^{(\ell)}} = \delta^{(\ell)} \frac{\partial z^{(\ell)}}{\partial W^{(\ell)}}
$$

* where $\displaystyle \frac{\partial z^{(\ell)}}{\partial W^{(\ell)}} = a^{(\ell - 1)}$

But since both $\delta^{(\ell)}$ and $a^{(\ell - 1)}$ are both vectors so multiplying them side by side is non-sense. The theorem requires $\displaystyle \frac{\partial L}{\partial W^{(\ell)}} \in (n_{\ell}, n_{\ell - 1})$. 

What is needed is an **outer product** (also known as a *tensor product*) which forms an array of element-wise products between the elements of one column vector and the elements of the second column vector. 

> [!definition]
> 
> For vectors $u \in R^m$ and $v \in R^n$, their outer product $\mathbf{uv}^{T}$ produces an $m \times n$ matrix $A$, where $(A)_{ij} = u_{i}v_{j}$ 

Applying the concept to the gradient, we transpose $a^{(\ell - 1)} \to a^{(\ell - 1)T}$, so explicitly,  

$$
\frac{\partial L}{\partial W^{(\ell)}} = \delta^{(\ell)}a^{(\ell - 1)T}
$$

## Backpropagation Shapes

For the $i$-th training example across $m$ observations, the computations are true for the following cases
### Single Example

|                 | Expression                                                                      | Shape                       |
| --------------- | ------------------------------------------------------------------------------- | --------------------------- |
| Error Term      | $$\delta^{(\ell)} = W^{(\ell+1)} \delta^{(\ell+1)} \odot \sigma'(z^{(\ell)})$$  | $$(n_{\ell}, 1)$$           |
| Weight Gradient | $$\frac{\partial L_{i}}{\partial W^{(\ell)}} = \delta^{(\ell)} a^{(\ell -1)T}$$ | $$(n_{\ell}, n_{\ell -1})$$ |
| Bias Gradient   | $$\frac{\partial L_i}{\partial b^{(\ell)}} = \delta^{(\ell)}$$                  | $$(n_{\ell}, 1)$$           |
### Batch Vectorization

|                 | Expression                                                                     | Shape                       |
| --------------- | ------------------------------------------------------------------------------ | --------------------------- |
| Error Term      | $$\delta^{(\ell)} = W^{(\ell+1)} \delta^{(\ell+1)} \odot \sigma'(Z^{(\ell)})$$ | $$(n_{\ell}, m)$$           |
| Weight Gradient | $$\frac{\partial L}{\partial W^{(\ell)}} = \delta^{(\ell)} A^{(\ell - 1)T}$$   | $$(n_{\ell}, n_{\ell -1})$$ |
| Bias Gradient   | $$\frac{\partial L}{\partial B^{(\ell)}} = \delta^{(\ell)}$$                   | $$(n_{\ell}, m)$$           |

> See [[Neural Networks/Neural Network Report#Defining the Bias Tensor]] for how we broadcast the addition to $(n_{\ell}, m)$
