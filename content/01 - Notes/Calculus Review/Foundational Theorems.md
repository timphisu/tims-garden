---
created: 2026-06-17 17:46
reviewed: 2026-06-17 17:46
tags:
  - math/building-blocks
  - math/subject/calculus
---
# Intermediate Value Theorem

> [!theorem]
> If a function $f$ is continuous on the closed interval $[a, b]$, then for every $L$ that's between $f(a)$ and $f(b)$, that is $f(a) \leq L \leq f(b)$,  there exists a value $c \in (a, b)$ such that $f(c) = L$. 

In other words, for a function that's continuous, every value $L$ in between $f(a)$ and $f(b)$ guarantees the value $c$ is bounded between $a$ and $b$, where $f(c) = L$. Note that the logic does not go the other way: Every $c$ between $a$ and $b$ does not guarantee an $L$ that's between $f(a)$ and $f(b)$. 

A graphical representation can probably help:

![[Pasted image 20260620150831.png]]

Looking at the left-side graph, if we know that $f(c) = L$ is bounded between $f(a)$ and $f(b)$, we can trace down to the $x$-axis and find $c$ is also bounded between $a$ and $b$; however looking at the right-side, if we know that $c$ is bounded between $a$ and $b$, tracing up to $f(c)$ will not guarantee it's bounded between $f(a)$ and $f(b)$. 

## Implications: Guarantee a Solution/Root Exists

Consider the equation

$$
g(x) = k
$$

Let $f(x) = g(x) - k$, so we are interested when $f(x) = 0$. 

Let's assume for this conversation, $f$ is continuous on $[a, b]$. 

Despite not being able to explicitly solve every equation handed, for example a higher-order polynomial with degree $n \geq 5$, we know that there *does exist* a solution for $f(x) = 0$ if we observe a sign change between two points $(a, f(a))$ and $(b, f(b))$. 

If $f(a) < 0$ and $f(b) > 0$, (then for the value 0 that's between the positive and negative) by Intermediate Value Theorem, there exists a number $c$ such that $f(c) = 0$ where $a < c < b$. 

Essentially, if we are in the search of a solution but yet can't easily find it, the first step may be to observe if there's any sign changes in $f(x)$ and then conclude that a solution exists between that interval. 

---

**Problem:** Let $f : [0, 1] \to [0, 1]$ be continuous on $[0, 1]$. Prove that there exists at least one number $c \in [0, 1]$ such that $f(c) = c$. 

**Solution:** Let $g(x) = f(x) - x$. Since $f(x)$ is continuous on $[0, 1]$ and $x$ is continuous (it's a first-degree polynomial), $g(x)$ is also continuous on $[0, 1]$.

We begin by evaluating $g(x)$ at the endpoints of the interval:

1. At $x = 0$: $g(0) = f(0) - 0 = f(0)$. Since the outputs of $f$ must fall between $[0, 1]$, we know that $f(0) \geq 0$. Therefore, $g(0) \geq 0$.
2. At $x = 1$: $g(1) = f(1) - 1$. Since the outputs of $f$ must fall between $[0, 1]$, we know that $f(1) \leq 1$. Therefore $g(1) \leq 0$. 

The values of $g(0)$ and $g(1)$ reveal two cases:

* Case 1: If $g(0) = 0$ then $c = 0$ or $g(1) = 1$ then $c = 1$. Either way, a solution exists.
* Case 2: If $g(0) \ne 0$ and $g(1) \ne 0$, then it must be true that $g(0) > 0$ and $g(1) < 0$. 

Because $g(x)$ is continuous on $[0, 1]$ and $0$ is strictly between $g(0)$ and $g(1)$, the Intermediate Value Theorem guarantees there exists some number $c \in (0, 1)$ such that $g(c) = 0$. 

$$
g(c) = f(c) - c = 0 \implies f(c) = c
$$


# Extreme Value Theorem

> [!theorem]
> If $f$ is continuous on the closed interval $[a, b]$, then $f$ has an absolute minimum value $f(c)$ and absolute maximum value $f(d)$ at some numbers $c, d \in [a, b]$. 

# Fermat's Theorem

> [!theorem]
> If $f$ has a local maximum or minimum at $c$ and $f'(c)$ exists, then $f'(c) = 0$.
> 

In other words, if we're in search of a maximum or minimum, and we know the function's derivative isn't tricky, finding its location is a matter of finding at what point the derivative equals zero. 

## Proof

Suppose $f$ has a local maximum at $c$, then by definition of what a local maximum is, $f(c) \geq f(x)$ for $x$ that's sufficiently close to $c$. We can also say that $f(c) \geq f(c+h)$ where $h$ is sufficiently small, regardless of $h$ being positive or negative. 

$$
\begin{align}
 & f(c+h) \leq f(c) & \text{Inequality rewritten} \\ \\
 & f(c+h) - f(c) \leq 0 \\
\end{align}
$$

Dividing both sides of the inequality by $h$ where $h > 0$ and then taking the right-hand limit, we get

$$
\begin{align}
\lim_{ h \to 0^{+} } \left[ \frac{f(c+h) - f(c)}{h} \right] \leq \lim_{ h \to 0^{+} }  0
\end{align}
$$

Since $f'(c)$ exists, we can use the limit definition of a derivative and the fact that the left-hand and right-hand limits will always agree with the general limit to show:

$$
f'(c) = \lim_{ h \to 0 } \frac{f(c+h) - f(c)}{h} = \lim_{ h \to 0^{+} } \frac{f(c+h) - f(c)}{h} = \lim_{ h \to 0^{-} } \frac{f(c+h) - f(c)}{h}
$$

We can substitute that into our inequality to find

$$
\begin{align}
 & f'(c) \leq \lim_{ h \to 0^{+} } 0 \\ \\
 & f'(c) \leq 0 & \lim_{ h \to 0^{+} } 0 = 0
\end{align}
$$

If $h < 0$, then dividing the inequality by $h$ would yield a reversed inequality

$$
\begin{align}
 & \frac{f(c+h) - f(c)}{h} \geq 0 \\ \\
 & \lim_{ h \to 0^{-} } \left[ \frac{f(c+h) - f(c)}{h} \right] \geq \lim_{ h \to 0^{-} } 0 & \text{Take left-hand limit} \\ \\
 & f'(c) \geq 0 & \text{Substitute previous results}
\end{align}
$$

Since we've shown that $f'(c) \leq 0$ and $f'(c) \geq 0$ and those are both true, then it must be that $f'(c) = 0$. 

# Rolle's Theorem

> [!theorem]
> Let $f$ be a function that satisfies the following conditions:
> 
> 1. $f$ is continuous on the closed interval $[a, b]$
> 2. $f$ is differentiable on the open interval $(a, b)$
> 3. $f(a) = f(b)$
> 
> Then there exists some number $c \in (a, b)$ such that $f'(c) = 0$.

## Proof

### Case I: $f(x) = k$

If $f(x) = k$, a constant, then any number $c \in (a, b)$ satisfies $f'(c) = 0$, granted that $f$ is continuous and differentiable on the respective interval. 

### Case II: $f(x) > f(a)$ for some $x$ in $(a, b)$

By the Extreme Value Theorem, due to condition (1) being satisfied, there exists a maximum value somewhere in $[a, b]$. But since $f(a) = f(b)$, the max has to be at some number $c \in (a, b)$. If $f$ is differentiable on the open interval $(a, b)$ and $c \in (a, b)$, then $f'(c)$ exists. We know that $f$ is continuous on $[a, b]$ and $f'(c)$ exists, then $f'(c) = 0$ by Fermat's Theorem.

### Case III: $f(x) < f(a)$ for some $x$ in $(a, b)$

Similarly to Case II, by the EVT from (1), there exists a minimum value somewhere in $[a, b]$, but $f(a) = f(b)$ tells us that some number $c \in (a, b)$ must be where the minima lives. By differentiability, $f'(c)$ exists and hence $f'(c) = 0$ by Fermat's Theorem. 

# Mean Value Theorem

> [!theorem]
> Let $f$ be a function that satisfies the following: 
> 
> 1. $f$ is continuous on the closed interval $[a, b]$
> 2. $f$ is differentiable on the open interval $(a, b)$
> 
> Then there exists a number $c \in (a, b)$ such that $$ f'(c) = \frac{f(b) - f(a)}{b-a} $$


## Cauchy's Mean Value Theorem

> [!theorem]
> Suppose $f$ and $g$ are functions which are continuous on $[a, b]$ and differentiable on $(a, b)$, and also $g'(x) \ne 0$ for all $x \in (a, b)$. Then there exists a number $c \in (a, b)$ such that
> 
> $$\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}$$

### Proof of L'Hospital's Rule

Assume that $\lim_{ x \to a } f(x) = 0$ and $\lim_{ x \to a } g(x) = 0$.

Our goal is to prove that $\displaystyle \lim_{ x \to a } \frac{f(x)}{g(x)} = \lim_{ x \to a } \frac{f'(x)}{g'(x)}$. In that case, let

$$
L = \lim_{ x \to a } \frac{f'(x)}{g'(x)}
$$

Define the following functions:

$$
F(x) = \begin{cases}
0, & x = a \\ f(x), & x \ne a
\end{cases} \quad G(x) = \begin{cases}
0, & x = a \\ g(x), & x \ne a
\end{cases}
$$

And let $I$ be an open interval containing $a$. Then $F$ is continuous on the interval $I$ since $f$ is continuous on $\{ {x \in I} \ | \ {x \ne a} \}$; likewise, the same holds for $G$. 

$$
\lim_{ x \to a } F(x) = \lim_{ x \to a } f(x) = 0 = F(a)
$$

> The above result also holds similarly for $G$

Let $x \in I$ and $x > a$, then $F$ and $G$ are continuous on $[a, x]$. Since $F' = f'$ and $G' = g'$, then they're differentiable on $(a, x)$ and $G' \ne 0$ (since one of the assumptions is that $g'(x) \ne 0\  \forall x \in I$). Therefore, by Cauchy's Mean Value Theorem, there exists a number $y$ where $a < y < x$ such that

$$
\frac{F'(y)}{G'(y)} = \underbrace{ \frac{F(x) - F(a)}{G(x) - G(a)} }_{ F(a) = G(a) = 0 } = \frac{F(x)}{G(x)} \quad 
$$

If we let $x \to a^{+}$ then $y \to a^{+}$ since $a < y < x$, which gives 

$$
\lim_{ x \to a^{+} } \frac{f(x)}{g(x)} = \lim_{ x \to a^{+} } \frac{F(x)}{G(x)} = \lim_{ y \to a^{+} } \frac{F'(y)}{G'(y)} = \lim_{ y \to a^{+} } \frac{f'(y)}{g'(y)} = L
$$

> If we began by saying let $x < a$, then the logic would follow that the limit holds also coming from the left-side. 

Hence, we've proven L'Hospital's rule (for when $a$ is finite) in the case that the indefinite form is $\frac{0}{0}$, that is,

$$
\lim_{ x \to a } \frac{f(x)}{g(x)} = L
$$




