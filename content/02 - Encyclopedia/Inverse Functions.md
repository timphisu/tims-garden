---
created: 2026-01-23 00:26
reviewed: 2026-01-23 00:26
tags:
  - math/building-blocks
  - math/topic/set-theory
  - math/topic/algebra
---
> [!definition]
Let $f$ be a one-to-one correspondence from the set $A$ to the set $B$. The **inverse** function of $f$ is the function that assigns to an element $b$ belonging to $B$ the unique element $a$ in $A$ such that $f(a) = b$ The inverse function of $f$ is denoted $f^{-1}$. Hence, $f^{-1}(b) = a$ when $f(a) = b$.

![[Pasted image 20260122214535.png|300]]


> If a function does not have one-to-one correspondence, then the function is not invertible.
#### Examples of Inverse Functions

1. Let $f$ be the function from $\{ a, b, c \}$ to $\{  1, 2, 3 \}$ such that $f(a) = 2$, $f(b) = 3$, $f(c) =1$. Is $f$ invertible, and if it is, what is its inverse?

	The function $f$ is invertible because it is a one-to-one correspondence. The inverse function $f^{-1}$ reverses the correspondence given by $f$, so $f^{-1}(1) = c$, $f^{-1}(2) = a$, $f^{-1}(3) = b$

2. Let $f : \mathbb{Z} \to \mathbb{Z}$ be such that $f(x) = x+1$. Is $f$ invertible, and if it is, what is its inverse?

	The function $f$ has an inverse because it is a one-to-one correspondence. To reverse the correspondence, suppose that $y$ is the image of $x$, so that $y = x+1$. Then $x = y-1$. This means that $y-1$ is the unique element of $\mathbb{Z}$ that is sent to $y$ by $f$. Consequently, $f^{-1}(y) = y - 1$ .