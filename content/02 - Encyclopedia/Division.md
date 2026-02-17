---
created: 202601300916
reviewed: 2026-01-30
tags:
  - math/concept
draft:
---

> [!definition]
For integers $a$ and $b$ where $a \ne 0$, if $c = \frac{b}{a}$ is an integer, then we say $a$ *divides* $b$, denoted $a \ |\ b$.  When $a$ divides $b$, $a$ is said to be a *factor* or *divisor* of $b$, and $b$ is a *multiple* of $a$. We say $a \not{|} \ \ b$ when $a$ does not divide $b$

### Basic Properties of Integer Divisibility

> [!theorem]
> Let $a, b, c$  be integers, where $a \ne 0$. Then
> 
> 1. If ${a} \ | \ {b}$ and ${a} \ | \ {c}$, then ${a} \ | \ {(b+c)}$
> 
> 2. If ${a} \ | \ {b}$, then ${a} \ | \ {bc}$ for all integers $c$
> 
> 3. If ${a} \ | \ {b}$  and ${b} \ | \ {c}$, then ${a} \ | \ {c}$

#### Proof for (i)

Suppose that ${a} \ | \ {b}$ and ${a} \ | \ {c}$. Then, from the definition of divisibility, it follows that there are integers $s$ and $t$ with $b = as$ and $c = at$. 

Hence,

$$
b + c = as + at = a(s+t)
$$

Therefore, $a$ divides $b+c$

#### Corollary

If $a, b, c$ are integers, where $a \ne 0$, such that ${a} \ | \ {b}$ and ${a} \ | \ {c}$ then ${a} \ | \ {mb+nc}$ when $m$ and $n$ are integers

> I like to think about this as the motivation for allowing us to combine fractions (ratios) together 

### Division Algorithm

> Although it's called an algorithm, it's more of how we mathematically define dividing numbers into quotients and remainders

> [!theorem]
> Let $a$ be an integer and $d$ a positive integer. Then there are unique integers $q$ and $r$, with $0 \leq r < d$, such that $a = dq + r$ . 

Note that a remainder cannot be negative, which is a useful to consider when $a$ or $d$ are negative. Evidently, $a$ is divisible by $d$ if and only if $r = 0$.

From this definition of division, we get the following functions on the set of integers:

$$
\begin{align}
 & q = a \ \mathbf{div} \ q = \lfloor a / d \rfloor  \\
 \\
 & r = a \ \mathbf{mod} \ q = a - dq 
\end{align}
$$

where

* a is the *divisor*
* $d$ is the *dividend*
* $q$ is the *quotient*
* $r$ is the *remainder*

#### Examples of Division

1. Does $3$ divide $-11$?

	We see that $-11 = 3(-4) + 1$ where $d = -4$ and $r=1$
	And even though $-11 = 3(-3) -2$ is also an equivalent result, we know that $0 \leq r < d$ but $-2 < 0$ so this wouldn't work.