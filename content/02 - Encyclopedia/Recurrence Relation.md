---
created: 2026-01-28 19:36
reviewed: 2026-01-28 19:36
tags:
  - math/concept
---
>[!definition]
> A *recurrence relation* for the sequence $a_{n}$ is an equation that expresses $a_{n}$ in terms of one or more of the previous terms of the sequence, namely, $a_{0}, a_{1}, ..., a_{n-1}$ for all integers $n \geq n_{0}$, where $n_{0}$ is a nonnegative integer. 
> 
> A sequence is called a *solution* of a recurrence relation if its terms satisfy the recurrence relation. 

A recursive sequence needs two things: an *initial condition* $a_{0}$ and a recursive formula. We say that we have "solved" a sequence if we find a *closed formula*, that is, an explicit formula that can be used to compute the $n$-th term of a sequence directly without recursion. 
#### Examples of Recurrence

1. The most sequences of all mathematics is the *Fibonacci sequence*, $f_{0}, f_{1}, f_{2}, ...,$ is defined by the initial conditions $f_{0} = 0$, $f_{1} = 1$, and the recurrence relation
	
	$$
	f_{n} = f_{n-1} + f_{n-2} \quad \text{for}\ n = 2, 3, 4, ...
	$$
	
	Using that relation, we can compute the next terms $f_{2}, f_{3}, ..., f_{6}$
	
	![[Pasted image 20260128112053.png|200]]

1. Another example is the recursive formulas used to compute gradients in backpropagation (See [[04 - Articles/Neural Networks/Neural Network Report|Neural Network Report]]).

2. **Problem:** Determine whether the sequence $\{ a_{n} \}$, where $a_{n} = 3n$ for every nonnegative integer $n$, is a solution of the recurrence relation $a_{n} = 2a_{n-1} - a_{n-2}$ for $n=2, 3, 4, ...$ . 

	**Approach:** Assume $a_{n} = 3n$, then $a_{n-1} = 3(n-1)$ and $a_{n-2} = 3(n-2)$. Substituting, we find that $$a_{n} = 2 \cdot 3(n-1) - 3(n-2) = 6n - 6 - 3n + 6 = 3n$$Therefore, $a_{n}$ where $a_{n} = 3n$ is a solution of the recurrence solution

> To find if a closed form satisfies the sequence, assume true then substitute into recurrence relation to see if $a_{n}$ can be expressed your closed form solution

Moreover, we can iteratively take steps forward or backward to solve recurrence relations. We do this by not immediately computing a term but substituting its expanded form into the preceding terms until we recognize some pattern. But it is only by mathematical induction do we prove if our closed form solution satisfies $a_{n} \forall n$ 

4. By substituting forward....

	Let $\{ a_{n} \}$ be a sequence that satisfies the recurrence relation $a_{n} = a_{n-1} +3$ for $n=2, 3, 4, ...$ and suppose $a_{1} = 2$
	
	$$
	\begin{align}
	a_{2}  & = 2 + 3  \\
	 \\
	a_{3}  & = (2+3) + 3 = 2 + 3 \cdot 2  \\
	 \\
	a_{4}  & = (2 + 3 \cdot 2) + 3 = 2 + 3 \cdot 3  \\
	 \\
	 & \hspace{50pt} \vdots  \\
	 \\
	a_{n}  & = 2 + 3(n-1)
	\end{align}
	$$