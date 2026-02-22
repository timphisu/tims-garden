## Introduction

Over the winter break, I've been building a neural network from scratch as a learning experience for an undergraduate maths student. I decided to do it on Python as that has many of the array-mechanisms there in place that I don't have to bother worrying about (i.e. NumPy).

In this article, I build from the ground up the mathematical structure of a neural network, then show you along how to implement it into code, and finally make model evaluations and possible steps forward. 

### The Problem

To begin to comprehend how a neural network works, consider we had various inputs $\mathbf{x}=[x_j]$ where $j = (1, ..., d)$ which determine a binary output $[0, 1]$. We don't know what the relations are between the inputs and the output but we seek to build a model that describes the *non-linear* relationship between the inputs and the output; not just any linear regression. 

![[Pasted image 20260111204558.png|300]]

Solving this problem is particularly useful in binary classification such as yes/no decisions, image labeling, and in our interest determining financial loan defaults. 

### Perceptron

A neuron fires based on if the signal given is strong enough for an activation—the foundation of how our **perceptron** works. A perceptron $f(x_1, x_2, ..., x_d)$ acts as a single neuron taking the linear combination between the inputs and weights $\mathbf{w} = ( w_1, w_2, ..., w_d )$, adding a bias $b$ for relationships that are centered off the origin, that is, $z = \mathbf{w}\mathbf{x} + b$ and passing it through a *step function* $\hat{y} = o(z)$ that gives outputs $[0, 1]$. 

![[Pasted image 20260115190256.png|500]]

> [!tip]
> It's important to keep track of the shapes of the objects we're referring to as they will change as we build up. I've made a [[Neural Network Shapes Guide]] that you can refer to for notation as well as shapes of these arrays. 
### Sigmoid Neuron

We could pass the linear output through an **activation function** $a = \sigma(z)$. You can use any activation function, but the *sigmoid function* 

$$
\sigma(z) = \frac{1}{1 + e^{-z}}
$$

has a range $(0, 1)$ and its smooth curve "saturates" values into this range. From this view, we are doing linear regression but passing a layer of *non-linearity* to our model; if our final activation is the sigmoid function then this is logistic regression, also called a sigmoid neuron. 

## Neural Network Concepts

We can start building up a **network** model of neurons that find the high-dimensional patterns and relationships between many inputs and the probability of $f=1$.  

The figure below has the following *architecture* with an input layer $\ell = 0$ consisting of two inputs $x_1, x_2$  which get passed through two hidden layers $h_1, h_2$ that have two sigmoid neurons, or activations, and then finally a single neuron for the final activation layer $\ell = L$ that results in a probability $\hat{y}$ . 

![[Images/Pasted image 20260102223847.png|500x200]]


### Building Up

Suddenly, our computational complexity builds where each layer has its associated neurons and those neurons have their own weights and biases. For a layer that's not the input layer ($\ell \ne 0$) and if the input layer is a single example, that is, $\mathbf{a}^{(\ell = 0)} = [x_j]$, then the following computations are true

$$
\begin{align}
	& \mathbf{z}^{(\ell)} = W^{(l)}\mathbf{a}^{(\ell -1)} + \mathbf{b}^{(\ell)} \\
	\\
	& \mathbf{a}^{(\ell)} = \sigma(\mathbf{z}^{(\ell)})
\end{align}
$$

where $W^{(\ell)} = \left[ w_{ji}^{(\ell)} \right]$ is the *weight matrix* with neurons for that layer $n_{\ell}$ form its rows and the neurons from the previous layer $n_{\ell - 1}$ form its columns.

> Refer to the [[Neural Network Shapes Guide]] for the shapes of the other terms.

> [!note]
> In this specific case of binary classification, when using sigmoid activation, the last activation layer $\mathbf{a}^{(L)}$ can be viewed as a *maximum likelihood estimation* of a Bernoulli distribution, which is what I mean when I refer to "probability".

It may be difficult getting to terms with the idea of passing in the same vector of inputs to neurons in the same layer but yielding different activations. By initializing random values for $w_{ji}$ and $b_{j}$ at each layer, each $j$-th neuron gets a chance to learn how groups of inputs activate together ultimately recognizing patterns that emerge among combinations of inputs.

### Motivations for Gradient Descent

By initializing random weights and biases, the model has a "clean slate" to explore and predict the inputs to a "probability" (loosely speaking); however, these *parameters* have not been properly tuned. You want your model to fit the training data: To *train* your neural network or for it to "learn", we must iteratively make small steps to adjust our weights and biases based on some **cost function** ${J}$

The cost function ${J}(\hat{y}, y)$ is the accumulated error across examples quantifying how close the model's predictions $\hat{y}$ were to the actual training observations $y$ . The cost function is the average loss at some time step across $m$ training examples, that is, 

$$
{J}(\hat{y}, y) = \frac{1}{m} \sum_{i=1}^{m} L_i(\hat{y}, y)
$$ 
The **loss function** we will be using for our task of binary classification is *binary cross entropy*, defined as,

$$
L_i = - [y_i\log(\hat{y}_i) + (1-{y}_i)\log(1-\hat{y}_i)]
$$

* where $i$ is the $i$-th example in a training set

By *minimizing* the cost function, we close in on our parameters $W^{(\ell)}, b^{(\ell)}$ for $\ell \in (1, ..., L)$ being able to effectively predict binary outcomes—learning the high-dimension relationships between trainable inputs $\mathbf{x}$ and the actual outcomes $y$ .

Recall that the negative *gradient* vector is the direction of steepest descent for a function, so to reach the minimum of the cost function we must iteratively take steps of steepest descent with respect to each parameter that will help converge to a minimum. Expressed as an *update rule*,

$$
{\begin{align}
& W^{(\ell)} := W^{(\ell)} - \eta \frac{\partial {J}}{\partial W^{{(\ell)}}} \\
\\
& b^{(\ell)} := b^{(\ell)} - \eta \frac{\partial {J}}{\partial b^{(\ell)}}
\end{align}}
$$

* where $\eta$ is the **learning rate** (scalar) 


>  As you will begin to see, the shape of these objects begin to become ambiguous moving from array, to vector, to scalar. Appropriately I will use uppercase to refer to an array and lowercase to a vector or scalar.

### Backpropagation

Now our attention focuses towards the problem of computing $\frac{\partial {J}}{\partial b^{(\ell)}}$ which is just

$$
\begin{align}
	& \frac{\partial J}{\partial W^{(\ell)}} = \frac{1}{m} \sum_{i=1}^{m} \frac{\partial L_i}{\partial W^{(\ell)}} \\
	\\
	& \frac{\partial J}{\partial b^{(\ell)}} = \frac{1}{m} \sum_{i=1}^{m} \frac{\partial L_i}{\partial b^{(\ell)}}
\end{align}
$$

> For ease of reading I've dropped the $i$ for the notation of $L$ but will be revisited later

To compute these gradients, we must recognize from the mathematical viewpoint that a neural network is essentially a composition of functions dependent by layers which map a vector of input values onto a scalar range $[0, 1]$. That means that $L$ is dependent on $\hat{y}$ which is dependent on the  $\sigma(z^{(L)})$, the sum of weights and biases of that layer and the layers preceding it, making it a multi-variable function dependent on $[w_{ji}^{(\ell)}], [b_{j}^{(\ell)}]$ .

Referring back to the previous visual, the model's output of interest $\hat{y}$ is dependent on functions at each layer

![[Images/Pasted image 20260103015014.png|500x200]]

By the **Chain Rule**, we can compute the gradient of each parameter by going *backwards*. For $\ell \in L, ..., 1$

| Layer ($\ell$) | $$\frac{\partial L}{\partial W^{(\ell)}}$$                                                                                                                                                                                                                                                                                                                                         | $$\frac{\partial L}{\partial b^{(\ell)}}$$                                                                                                                                                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $$L$$          | $$\color{red}{\frac{\partial L}{\partial a^{(L)}} \frac{\partial a^{(L)}}{\partial z^{(L)}}}\;\color{black}{\frac{\partial z^{(L)}}{\partial W^{(L)}}}$$                                                                                                                                                                                                                           | $$\color{red}{\frac{\partial L}{\partial a^{(L)}} \frac{\partial a^{(L)}}{\partial z^{(L)}}}\;\color{black}{\frac{\partial z^{(L)}}{\partial b^{(L)}}}$$                                                                                                                                                                                                                           |
| $$L-1$$        | $$\color{red}{\frac{\partial L}{\partial a^{(L)}} \frac{\partial a^{(L)}}{\partial z^{(L)}}}\;\color{blue}{ \frac{\partial z^{(L)}}{\partial a^{(L-1)}} \frac{\partial a^{(L-1)}}{\partial z^{(L-1)}}}\;\color{black}{\frac{\partial z^{(L-1)}}{\partial W^{(L-1)}}}$$                                                                                                             | $$\color{red}{\frac{\partial L}{\partial a^{(L)}} \frac{\partial a^{(L)}}{\partial z^{(L)}}}\;\color{blue}{ \frac{\partial z^{(L)}}{\partial a^{(L-1)}} \frac{\partial a^{(L-1)}}{\partial z^{(L-1)}}}\;\color{black}{\frac{\partial z^{(L-1)}}{\partial b^{(L-1)}}}$$                                                                                                             |
| $$L-2$$        | $$\color{red}{\frac{\partial L}{\partial a^{(L)}} \frac{\partial a^{(L)}}{\partial z^{(L)}}}\;\color{blue}{ \frac{\partial z^{(L)}}{\partial a^{(L-1)}} \frac{\partial a^{(L-1)}}{\partial z^{(L-1)}}}\;\color{teal}{\frac{\partial z^{(L-1)}}{\partial a^{(L-2)}} \frac{\partial a^{(L-2)}}{\partial z^{(L-2)}}}\;\color{black}{\frac{\partial z^{(L-2)}}{\partial W^{(L-2)}}} $$ | $$\color{red}{\frac{\partial L}{\partial a^{(L)}} \frac{\partial a^{(L)}}{\partial z^{(L)}}}\;\color{blue}{ \frac{\partial z^{(L)}}{\partial a^{(L-1)}} \frac{\partial a^{(L-1)}}{\partial z^{(L-1)}}}\;\color{teal}{\frac{\partial z^{(L-1)}}{\partial a^{(L-2)}} \frac{\partial a^{(L-2)}}{\partial z^{(L-2)}}}\;\color{black}{\frac{\partial z^{(L-2)}}{\partial b^{(L-2)}}} $$ |
| $$\dots$$      | $$\dots$$                                                                                                                                                                                                                                                                                                                                                                          | $$\dots$$                                                                                                                                                                                                                                                                                                                                                                          |
| $$\ell=2$$     | $$\color{red}{\frac{\partial L}{\partial a^{(L)}} \frac{\partial a^{(L)}}{\partial z^{(L)}}}\;\color{purple}{\dots \frac{\partial z^{(3)}}{\partial a^{(2)}} \frac{\partial a^{(2)}}{\partial z^{(2)}}}\;\color{black}{\frac{\partial z^{(2)}}{\partial W^{(2)}}}$$                                                                                                                | $$\color{red}{\frac{\partial L}{\partial a^{(L)}} \frac{\partial a^{(L)}}{\partial z^{(L)}}}\;\color{purple}{\dots \frac{\partial z^{(3)}}{\partial a^{(2)}} \frac{\partial a^{(2)}}{\partial z^{(2)}}}\;\color{black}{\frac{\partial z^{(2)}}{\partial b^{(2)}}}$$                                                                                                                |
| $$\ell=1$$     | $$\color{red}{\frac{\partial L}{\partial a^{(L)}} \frac{\partial a^{(L)}}{\partial z^{(L)}}}\;\color{orange}{... \frac{\partial z^{(2)}}{\partial a^{(1)}} \frac{\partial a^{(1)}}{\partial z^{(1)}}}\;\color{black}{\frac{\partial z^{(1)}}{\partial W^{(1)}}}$$                                                                                                                  | $$\color{red}{\frac{\partial L}{\partial a^{(L)}} \frac{\partial a^{(L)}}{\partial z^{(L)}}}\;\color{orange}{... \frac{\partial z^{(2)}}{\partial a^{(1)}} \frac{\partial a^{(1)}}{\partial z^{(1)}}}\;\color{black}{\frac{\partial z^{(1)}}{\partial b^{(1)}}}$$                                                                                                                  |


By going backwards, gradients for preceding layers share terms with the gradients for the layers further on.  Long chain rule expansions can be reduced to simple recurrence. We *cache* these terms into the **error term** $\mathbf{\delta}^{(\ell)}$ that we can use to help compute each layer going backwards.

Notice that in the table, the colored terms that would end up being shared in the preceding layers are $\frac{\partial L}{\partial z^{(\ell)}}$. 

If we define

$$
{\delta^{(\ell)} = \frac{\partial L}{\partial z^{(\ell)}}}
$$


From this viewpoint, we can see the table from before as

| Layer ($\ell$) | $$\delta^{(\ell)}$$                                                                                                                                                                                                                                                                                               | $$\frac{\partial L}{\partial W^{(\ell)}}$$                                                       | $$\frac{\partial L}{\partial b^{(\ell)}}$$ |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| $$L$$          | $$\color{red}{\frac{\partial L}{\partial a^{(L)}} \frac{\partial a^{(L)}}{\partial z^{(L)}}}$$                                                                                                                                                                                                                    | $$\color{red}{\delta^{(L)}}\  \color{black}{\frac{\partial z^{(L)}}{\partial W^{(L)}}}$$         | $$\color{red}{\delta^{(L)}}$$              |
| $$L-1$$        | $$\color{red}{\frac{\partial L}{\partial a^{(L)}} \frac{\partial a^{(L)}}{\partial z^{(L)}}} \color{blue}{ \frac{\partial z^{(L)}}{\partial a^{(L-1)}} \frac{\partial a^{(L-1)}}{\partial z^{(L-1)}}}$$                                                                                                           | $$\color{blue}{\delta^{(L-1)}}\  \color{black}{\frac{\partial z^{(L-1)}}{\partial W^{(L-1)}}}$$  | $$\color{blue}{\delta^{(L-1)}}$$           |
| $$L-2$$        | $$\color{red}{\frac{\partial L}{\partial a^{(L)}} \frac{\partial a^{(L)}}{\partial z^{(L)}}} \color{blue}{ \frac{\partial z^{(L)}}{\partial a^{(L-1)}} \frac{\partial a^{(L-1)}}{\partial z^{(L-1)}}} \color{teal}{\frac{\partial z^{(L-1)}}{\partial a^{(L-2)}} \frac{\partial a^{(L-2)}}{\partial z^{(L-2)}}}$$ | $$\color{teal}{\delta^{(L-2)}}\  \color{black}{\frac{\partial z^{(L-2)}}{\partial W^{(L-2)}}} $$ | $$\color{teal}{\delta^{(L-2)}}$$           |
| $$\dots$$      | $$\dots$$                                                                                                                                                                                                                                                                                                         | $$\dots$$                                                                                        | $$\dots$$                                  |
| $$\ell=2$$     | $$\color{red}{\frac{\partial L}{\partial a^{(L)}} \frac{\partial a^{(L)}}{\partial z^{(L)}}} \color{purple}{\dots \frac{\partial z^{(3)}}{\partial a^{(2)}} \frac{\partial a^{(2)}}{\partial z^{(2)}}}$$                                                                                                          | $$\color{purple}{\delta^{(2)}}\ \color{black}{\frac{\partial z^{(2)}}{\partial W^{(2)}}}$$       | $$\color{purple}{\delta^{(2)}}$$           |
| $$\ell=1$$     | $$\color{red}{\frac{\partial L}{\partial a^{(L)}} \frac{\partial a^{(L)}}{\partial z^{(L)}}} \color{orange}{... \frac{\partial z^{(2)}}{\partial a^{(1)}} \frac{\partial a^{(1)}}{\partial z^{(1)}}}$$                                                                                                            | $$\color{orange}{\delta^{(1)}}\ \color{black}{\frac{\partial z^{(1)}}{\partial W^{(1)}}}$$       | $$\color{orange}{\delta^{(1)}}$$           |

#### Computing Gradients (i)

##### First Error Term

If $L(\hat{y}, y)$ is defined to be the cross entropy loss function, we find that our first partial terms come out nicely.

Recall $\hat{y}$ is the last activation output of the layer $L$, $\hat{y} = a^{(L)}$ .

$$
\begin{align}
	& {L} = - [y\log(a^{(L)}) + (1-{y})\log(1-a^{(L)})] & \text{Given} \\
	\\
	& \frac{\partial L}{\partial a^{(L)}} = - \left( \frac{y}{a^{(L)}} - \frac{1 - y}{1 - a^{(L)}} \right) & \frac{d}{dx}\ \log(x) = \frac{1}{x}
\end{align}
$$

We haven't covered this but $\sigma'(z) = \sigma(z)(1 - \sigma(z))$, which is a useful result in computations since $a^{(\ell)} = \sigma(z^{(\ell)})$ 

$$
\frac{\partial a^{(L)}}{\partial z^{(L)}} = \sigma(z^{(L)})(1 - \sigma(z^{(L)})) = a^{(L)}(1 - a^{(L)})
$$

Putting these two terms together,

$$
\begin{align}
	& \frac{\partial L}{\partial z^{(L)}} = \frac{\partial L}{\partial a^{(L)}} \frac{\partial a^{(L)}}{\partial z^{(L)}} \\
	\\
	&= - \left( \frac{y}{a^{(L)}} - \frac{1 - y}{1 - a^{(L)}} \right) \cdot \left( a^{(L)}(1 - a^{(L)}) \right) \\
	\\
	&= - \left( \frac{y (1 - a^{(L)}) - a^{(L)}(1 - y)}{a^{(L)}(1 - a^{(L)})} \right) \cdot \left( a^{(L)}(1 - a^{(L)}) \right) \\
	\\
	&= - (y (1 - a^{(L)}) - a^{(L)}(1 - y)) \\
	\\
	&= -(y - ya^{(L)} - a^{(L)} + ya^{(L)} ) \\
	\\
	&= (a^{(L)} - y)
\end{align}
$$

So we find that our first delta term at layer $\ell = L$ is

$$
\delta^{(L)} = {a}^{(L)} - y \quad \text{(scalar)}
$$

 ##### **The Linear Partials of** $z$

Recall 

$$
z^{(\ell)} = W^{(\ell)}a^{(\ell -1)} + b^{(\ell)}
$$


###### Derivatives of Tensors

Before we can differentiate a linear system such as the preactivation, we must establish a way we can take partials with respect to arrays, better known as **tensors**.

> [!info]
> In the context of machine learning, a *tensor* is a generalized term for any multi-dimensional array where it can refer to vectors (1-D), matrices (2-D) and other higher dimensional objects; this is distinct from rigorous definitions used in differential geometry or physics.

Taking from this [[Neural Network Shapes Guide#Gradient Dimension Consistency|rule]], we know that the partial of any (vector) function with respect to an array should have the same dimension (or vector space) as that array. When differentiating with respect to an tensor, we are differentiating element-wise, which organize together as an array structure.

Zooming in element-wise for the preactivation function $z^{(\ell)}$

$$
(z^{(\ell)})_{j} = \sum_{i}w_{jk}a_{k} + b_{j} 
$$


Hence,

$$
\begin{align}
	& \frac{\partial z^{(\ell)}}{\partial W^{(\ell)}} = a^{(\ell - 1)} \\
	\\
	& \frac{\partial z^{(\ell)}}{\partial a^{(\ell - 1)}} = W^{(\ell)} \\
	\\
	& \frac{\partial z^{(\ell)}}{\partial b^{(\ell)}} = 1 \quad \text{(vector)}
\end{align}
$$

> Please see [[Neural Network Shapes Guide#The Shape Problem]] for the rest of this section
### Summary of Neural Networks

So to build a neural network, given an architecture of layers and neuron counts for each layer, we initialize a list of arrays $W^{(\ell)}$ and vectors $b^{(\ell)}$ with random values, that is, 

$$
\begin{align}
& W^{(1)} \in (n_1, d), \quad W^{(2)} \in (n_2, n_1),\ \dots\ , \quad W^{(\ell)} \in (n_{\ell}, n_{\ell -1}),\ \dots\ , \quad W^{(L)} \in (n_L, n_{L-1}) \\
\\
& b^{(1)} \in (n_1, 1), \quad b^{(2)} \in (n_2, 1),\ \dots\ , \quad b^{(\ell)} \in (n_{\ell}, 1),\ \dots\ , \quad b^{(L)} \in (n_{L}, 1)
\end{align}
$$

Then we optimize parameters $[w_{ji}^{(\ell)}], [b_{j}^{(\ell)}]$ with the update rule from the gradient descent algorithm.

An intermediary step in gradient descent is the concept of backpropagation—computing gradients efficiently.

## Implementing a Neural Network

This is the step-by-step on how to implement above concepts into code including (1) initialization, (2) passing by batch, (3) stochastic gradient descent, and any other structures needed to implement a neural network in practice
### Initialization

Given an array `layers` that contains the number of neurons for each layer: 

```
[input_layer, hidden_layer1, ..., output_layer]
```

We need to initialize data structures $W^{(\ell)} \in (n_{\ell}, n_{\ell-1}), b^{(\ell)} \in (n_{\ell}, 1)$ for $\ell \ne 0$ where the information of $n_{\ell}$ is in `layers`. The way we will be navigate through each object at each layer is to initialize them inside an *iterable* structure such as an array.  We initialize `weights` and `biases` where `np.nandom.nandn()` creates an array of random values $\sim \mathcal{N}(0, 1)$ given a shape as its argument.

```python
import numpy as np

class NeuralNet():

	def __init__(self, layers, seed=None):

		if seed is not None:
			np.random.seed(seed)
		
		self.num_layers = len(layers)
		self.sizes = layers
		
		# Initialize parameters
		self.weights = [np.random.randn(y, x) * np.sqrt(1 / x) for x, y in
		zip(self.sizes[:-1], self.sizes[1:])] # Use xavier normal random init
		self.biases = [np.random.randn(x, 1) for x in self.sizes[1:]]
```

We scale `weights` differently using Xavier initialization to reduce the *vanishing/exploding gradient problem*  where $\text{Var}(W^{(\ell)}) = \frac{1}{n_{\ell-1}}$  is imposed as a way to stabilize gradients. This allows for the network to learn more patterns and properly tune parameters when computing gradients.  

> [!note]
> Vanishing and exploding gradients arise because backpropagation involves repeated multiplication by weight matrices and activation derivatives. If these factors are consistently smaller than 1, gradients shrink exponentially; if larger than 1, they grow uncontrollably.

### Passing by Batch

While during training, we could iterate through each example, passing in vector by vector, of some training array $X$ with shape $(m, d)$, but then time complexity approaches $\mathcal{O}(n^2)$ when using `for` loops. So we encourage *vectorization* by passing the array $X^T = A^{(0)} \in (d, m)$ instead of $a^{(0)} \in (d, 1)$. Conceptually, what we are doing is applying the current weights and biases to $m$ examples simultaneously; increasing computation efficiency to get the average gradient. 

For some layer $\ell = (1, 2, \dots, L)$

$$
\begin{align}
	& Z^{(\ell)} = W^{(\ell)}A^{(\ell - 1)} + B^{(\ell)} \\
	\\
	& A^{(\ell - 1)} = \sigma(Z^{(\ell - 1)})
\end{align}
$$

> The math has not changed, only the shapes. Please see [[Neural Network Shapes Guide]] for a more robust description.

To do backpropagation, we need to readily have access to $A^{(\ell)}$ for any $\ell$ which requires forward propagating with current parameters.

```python
def forwardPass(self, input_layer):
"""
Given `input_layer` with shape (m, d), returns an array `activations` of [A^(0), A^(1), ..., A^(L)]
"""

A0 = input_layer.T # transpose for shape (m, d) -> (d, m) 

activations = [A0] # initialize the activations array with the input layer A^(0)

for W, B in zip(self.weights, self.biases):
	Z = W @ activations[-1] + B # even though B has shape (n_1, 1), it's broadcasted to W @ A(l) with shape (n_1, m)
	activations.append(sigmoid(Z))

return activations
```

#### Defining the Bias Tensor

Mathematically, $B^{(\ell)}$ is an array of $m$ copies of $b^{(\ell)}$, that is $\forall i(b_{ji} = b_{j})$, so that we satisfy pre-activations for the $j$-th neuron at layer $\ell$ for example $i$


$$
[z_{ji}] = \sum_k w_{jk}a_{ki} + b_{ji}
$$

In the code above, I initialized `biases` to be an array of vectors with shape $(n_{\ell}, 1)$ but the addition to  $W^{(\ell)}A^{(\ell-1)}$ is a legal operation. This is because of NumPy broadcasting which recognizes what kind of operation I'm trying to perform and *broadcasts* the vector addition across each column vector of $A^{(\ell)}$ representing each example. 

$$
b^{(\ell)} = \left[ b_j^{(\ell)} \right] \in (n_{\ell}, 1) \stackrel{\text{broadcast}}{\longrightarrow} B^{(\ell)} = \left[ b_i^{(\ell)} \right] \in (n_{\ell}, m)
$$

> For notational consistency, I will use $B^{(\ell)}$ in tandem with the other array objects when discussing batch propagation.

### Backpropagation in Practice

#### Writing an Algorithm

Putting everything together from [[#Computing Gradients (i)]] and [[Neural Network Shapes Guide#Computing Gradients (ii)]], we should find the following (assuming batch propagation) 

Going backwards, for $\ell = (L, L-1, \dots, 1)$

$$
\begin{align}
& \delta^{(L)} = (A^{(L)} - \mathbf{\hat{y}})\\
\\
& \delta^{(\ell)} := W^{(\ell+1)T} \delta^{(\ell+1)} \odot A^{(\ell)}(1 - A^{(\ell)})  \quad \text{where}\ \ell \ne L \\
	\\
	& \frac{\partial L}{\partial W^{(\ell)}} := \delta^{(\ell)}A^{(\ell-1)T} \\
	\\
	& \frac{\partial L}{\partial B^{(\ell)}} := \delta^{(\ell)}
\end{align}
$$

If the cost function is the average loss across $m$ examples, this definition can be taken advantage of by computing $\displaystyle \sum_i \frac{\partial J}{\partial \theta}$ then applying the scalar $1/m$ to each tensor. We initialize a set of tensors that consist of all zeros with shapes given as placeholders for the parameter gradients. 

```python
def backPropagation(self, train_inputs, actual_outputs):

"""

Should return a tuple (delta_nabla_w, delta_nabla_b) where delta_nabla_* are layer-by-layer lists of numpy arrays

train_inputs: (m, d)
actual_outputs: (m,)

"""

m = train_inputs.shape[0] # m training examples
L = self.num_layers - 1 # count of layers excluding input layer

# Initalize empty tensors wrt. shapes of weight matrices and bias vectors

delta_nabla_w = [np.zeros_like(W) for W in self.weights]
delta_nabla_b = [np.zeros_like(B) for B in self.biases] # (n_l, 1)
```

Observe that, 

$$
\frac{\partial L}{\partial w_{ji}^{(\ell)}} = \sum_{k=1}^{m} \delta_{jk}a_{ki} \to \frac{\partial L}{\partial W^{(\ell)}} = \frac{1}{m} \delta^{(\ell)}A^{(\ell-1)T}
$$
For $\displaystyle \frac{\partial L}{\partial b_{ji}^{(\ell)}}$ , summing across each column would achieve the same effect of $\displaystyle \sum_{i=1}^{m} \frac{\partial L}{\partial B^{(\ell)}}$ .

Finishing the rest of `backPropagation`, we find the following recursive algorithm,

```python
activations = self.forwardPass(train_inputs) # pass entire train_inputs array

y = np.asarray(actual_outputs).reshape(1, -1) # Make y shape (m, 1) -> (1, m) for binary classification
delta = (activations[-1] - y) # Assume cross entropy loss instead of MSE

# Backprop through layers: weight index l = L-1 down to 0
for l in range(L-1, -1, -1):
	
	delta_nabla_w[l] = delta @ activations[l].T / m
	delta_nabla_b[l] = delta.sum(axis=1, keepdims=True) / m
	
	if (l > 0):
		sp = activations[l] - activations[l] ** 2 # sigmoid prime		
		delta = (self.weights[l].T @ delta) * sp # (n_l, m)

return (delta_nabla_w, delta_nabla_b)
```

#### Stochastic Gradient Descent

In our implementation of (vanilla) batch propagation, we've written code that tasks our computer to compute gradients of dimensions $(n_{\ell}, m)$ where it's assumed that we process every observation from the training set, <u>to make one update</u>. However, for very large $m$, there are diminishing returns in passing the entire training set for time complexity where passing a much smaller array with "sweet spot" sample sizes 32-512 is much better. 

This becomes the motivations to make approximations of the cost gradient for the efficiency of time to convergence.

Recall the cost function is the *average* loss over the entire training set of size $m$: 

$$
J(\hat{y}, y) = \frac{1}{m} \sum_{i=1}^{m} L_{i} (\hat{y}, y)
$$

We approximate the true gradient using a random subset called a **mini-batch** of size $k$ (where $k \ll m$) 

Let the estimated gradient be denoted as $\stackrel{\sim}{\nabla}_{\theta}$

$$
\begin{align}
	& \stackrel{\sim}{\nabla}_{W^{(\ell)}} = \frac{1}{k} \sum_{i=1}^{k} \frac{\partial L_i}{\partial W^{(\ell)}} \\
	\\
	& \stackrel{\sim}{\nabla}_{B^{(\ell)}} = \frac{1}{k} \sum_{i=1}^{k} \frac{\partial L_i}{\partial B^{(\ell)}}
\end{align}
$$

##### Central Limit Theorem

Individual gradients $\frac{\partial L}{\partial \theta}$ can be viewed as independent and identically distributed (i.i.d.) random variables drawn from the data distribution.

The *Central Limit Theorem* states that as the sample size $k$ increases, the distribution of the sample mean $\stackrel{\sim}{\nabla}_{\theta}$ approaches a normal distribution centered at the true mean ($\nabla_{\theta} J$) . That is, the expected value of stochastic gradient descent is the unbiased estimator of the full-batch gradient.

$$
\mathbb{E}[\stackrel{\sim}{\nabla}_{\theta}] = \nabla_{\theta} J
$$

So our update rule becomes, 

$$
\begin{align}
	& W^{(\ell)} := W^{(\ell)} - \eta \stackrel{\sim}{\nabla}_{W^{(\ell)}} J \\
	\\
	& B^{(\ell)} := B^{(\ell)} - \eta \stackrel{\sim}{\nabla}_{B^{(\ell)}} J
\end{align}
$$

Often, training the model on one round of mini-batches is not enough. We iteratively feed the model multiple **epochs** so there's more time for the model to explore relationships and minimize the cost function.


```python
def train(self, train_inputs, train_outputs, epochs, batch_size, learning_rate = 0.05, test_inputs=None, test_outputs=None, log_every=1):
	
	n = len(train_inputs)
	
	if len(test_inputs) != 0 and len(test_outputs) != 0: n_test = len(test_outputs)
	
	# Iterate through entire training set with each epoch
	for j in range(epochs):
	
		indices = np.random.permutation(n)
		shuffled_inputs = train_inputs[indices]
		shuffled_outputs = train_outputs[indices]
		
		# Go through each mini-batch
		for k in range(0, n, batch_size):
		
			batch = shuffled_inputs[k:k+batch_size]
			batch_outputs = shuffled_outputs[k:k+batch_size]
			
			# Get gradients of cost function wrt. weights and biases
			dW, dB = self.backPropagation(batch, batch_outputs)
			
			# Update weights and biases
			for l in range(self.num_layers - 1):
			
				self.weights[l] -= learning_rate * dW[l]
				self.biases[l] -= learning_rate * dB[l]
	
	# Computes loss function given a test set to measure against
	if len(test_inputs) != 0 and len(test_outputs) != 0:
	
		loss = self.loss(test_inputs, test_outputs)
		
		if (j==0 or (j+1) % log_every == 0):
			print(f"Epoch {j+1} | Loss: {loss:.6f}")
```


---

## Testing a Neural Network

Along with some other functions,  I built a `NeuralNet()` class that can be pieced together to create a model that can predict binary outcomes given a training set.   

Since my particular interest is in economics, I chose a [dataset](https://www.kaggle.com/datasets/nikhil1e9/loan-default/data) that dealt with financial loan defaults. This dataset contains contains 255,347 rows and 18 columns in total.

#### Dataset Columns

```
ID Column:  LoanID

Numeric Columns: 
Age
Income
LoanAmount
CreditScore
MonthsEmployed
NumCreditLines
InterestRate
LoanTerm
DTIRatio

Categorical Columns: 
Education
EmploymentType
MaritalStatus
HasMortgage
HasDependents
LoanPurpose
HasCoSigner

Target:  Default
```

#### Training Set 

We prepare the data to be passed to our model by transforming the categorical data into *one hot encodings* (useful for converting labelled data into numerical vectors). We keep 70% of the dataset as our training set, leaving the remaining 30% as our test set. 

Furthermore, numerical columns get *standardized* as to avoid over/under saturating activation values at the first layer while still maintaining the variance in the transformed dataset.

$$
x_{j} := \frac{x_j - \mu_j}{\sigma_j}
$$

```
 Train Inputs (d = 24): 
 ========== 

Age
Income
LoanAmount
CreditScore
MonthsEmployed
NumCreditLines
InterestRate
LoanTerm
DTIRatio
Education_High School
Education_Master's
Education_PhD
EmploymentType_Part-time
EmploymentType_Self-employed
EmploymentType_Unemployed
MaritalStatus_Married
MaritalStatus_Single
HasMortgage_Yes
HasDependents_Yes
LoanPurpose_Business
LoanPurpose_Education
LoanPurpose_Home
LoanPurpose_Other
HasCoSigner_Yes
```


This training set has 24 features. I've designed this neural network to have 4 layers (that's including the input layer) where each layer has successively fewer neurons and the final layer has one neuron. I chose a learning rate of $\eta = 0.05$. For this program run I chose to train over 50 epochs and then evaluated the overall model's loss with the test set. 

```
Layers:  [24, 15, 3, 1]
Starting training on 178742 samples and 50 epochs
Epoch 1: 0.360078
Epoch 10: 0.319614
Epoch 20: 0.318910
Epoch 30: 0.317797
Epoch 40: 0.316438
Epoch 50: 0.315524
Network trained in 0:00:38.426106 seconds
```

### Results

#### Class Imbalance Problem

Throughout this entire article, the output of interest was $a^{(L)}$, the final activation, but in order to make any predictions with this *probability* we pass it through a step function whose threshold is 0.50. 

```python
def predict(self, inputs, threshold = 0.5):
"""
inputs: (m, d)
"""
	
	activations = self.forwardPass(inputs)
	probabilities = activations[-1] # gets final probabilities from the last layer
	predictions = (probabilities >= threshold).astype(int)
	
	
	return predictions
```

However, when training on financial loan default data, often only 5-10% of the examples actually have defaulted; we call that a *class imbalance*. This can lead to the model being "too safe" in making predictions for default by outputting low probabilities. This is why we lower the **prediction threshold** to 0.2 which in real applications would mean even if a loan applicant has a 20% likelihood of defaulting, we classify them as a high-risk borrower. 

#### Evaluation Metrics

When evaluating a model's performance in classification tasks, we use five metrics that tell a more well-rounded story: 

* *Accuracy* tells overall how the model was able to truly predict outcomes across each observation; calculated as $\displaystyle\frac{TP + TN}{m}$ where $TP$ denotes true positives and $TN$ denotes true negatives. 

* *Sensitivity* is a really useful metric in this case where out of the very few examples that there are defaults, what percentage of them were predicted by the model? We calculate this as $\displaystyle \frac{TP}{TP + FN}$ where $FN$ denotes false negatives.

* *Specificity* states what percentage of negatives did the model predict which can show how "risky" the model is to call out a likely-default borrower when we see this metric dip as we decrease our prediction threshold; calculated as $\displaystyle \frac{TN}{TN + FP}$

* The *false negative rate* is the complement to specificity and tells us the model error predicting from the positive observations, that is, how many defaulters were flagged as safe borrowers.

* *False positive rate* is likewise the complement to specificity, indicating what proportion of negatives are falsely predicted to be true. 

At the end of our program run, we evaluate our model and find the following summary, also known as a **confusion matrix**

```
Evaluating model...
N = 76605 test observations
Accuracy: 0.821970
Sensitivity: 0.436135
Specificity: 0.873154
False Negative: 0.563865
False Positive Rate: 0.126846
```

### Conclusion

Building this network, it has shifted my perspective in motivating how neural networks function: Neural networks are not a static algorithm, but rather more like a bundle of functions that work together. This modularity is its greatest strength. We can swap out the "building blocks"—exchanging the sigmoid for [[ReLU activation]] to prevent vanishing gradients (a more modern approach), or replacing the binary output with a [[Softmax layer]] to handle multi-class problems. 

This article was jam-packed with a lot of information and there were many concepts uncovered or questions unanswered. For example, what exactly is a neuron doing to training data? While writing this article, I realized how rudimentary "probability" really is, rather than being inherently natural. Loosely speaking, it's a measure of how confident we are in a certain outcome; we use another measure, "entropy", to minimize our model's predicted distribution to the true probability distribution.

This article is the first step in a broader research project. Moving forward, I intend to apply these foundations to financial modeling. The ultimate goal is to evolve this architecture into a recurrent encoder capable of compressing the volatile patterns of market data into a latent space. By doing so, we can move beyond simple classification and begin to mathematically decouple the hidden components that define a "market regime."

---
## Topics Not Discussed Here

* [[ReLU activation]]
* [[Softmax layer]]
* [[vanishing & exploding gradient problem]]
* [[linear separability]]
* [[Adam optimizer]]

Questions
* What is the difference between probability and entropy?
* Why not set $f'(x) = 0$ and then solve? 
