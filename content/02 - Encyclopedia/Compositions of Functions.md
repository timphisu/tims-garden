---
created: 2026-01-23 00:24
reviewed: 2026-02-02
tags:
  - math/building-blocks
  - math/topic/algebra
---



>[!definition]
 Let $g$ be a function from the set $A$ to the set $B$ and let $f$ be a function from the set $B$ to the set $C$. The *composition* of the functions $f$ and $g$, denoted for all $a \in A$ by $f \circ g$, is the function from $A$ to $C$ defined by 
>
> $$(f \circ g)(a) = f(g(a))$$

#### Examples of Function Compositions

1. Let $f$ and $g$ be the functions defined by $f : \mathbb{R} \to \mathbb{R}^+ \cup \{ 0 \}$ with $f(x) = x^2$ and $g : \mathbb{R}^+ \cup \{ 0 \} \to \mathbb{R}$ with $g(x) = \sqrt{ x }$ (non-negative part). What is the function $(f \circ g)(x)$?

	The domain of $(f \circ g)(x)$ is the domain of $g$, which is $\mathbb{R}^+ \cup \{ 0 \}$, or the set of nonnegative real numbers. If $x$ is a nonnegative real number, we have $(f \circ g)(x) = f(g(x)) = f(\sqrt{ x }) = (\sqrt{ x })^2 = x$ . The range of $f \circ g$ is the image of the range of $g$ with respect to the function $f$ . This is the set $\mathbb{R}^+ \cup \{ 0 \}$, the set of nonnegative real numbers. In summary, $f : \mathbb{R}^+ \cup \{  0 \} \to \mathbb{R}^+ \cup \{  0 \}$ and $f(g(x)) = x$ for all $x$ .