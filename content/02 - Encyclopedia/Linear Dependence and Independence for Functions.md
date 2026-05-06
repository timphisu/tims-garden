---
created: 202603302213,
reviewed: 202603302213
tags:
  - math/concept
  - math/topic/odes
---

# Linear Dependence and Independence for Functions

> [!definition]
> A set of functions $f_{1}(x), f_{2}(x), ..., f_{n(x)}$ is said to be **linearly dependent** on an interval $I$ if there exist constants $c_{1}, c_{2}, ..., c_{n}$ that are not all zero, such that
> 
> $$
> c_{1}f_{1}(x) + c_{2}f_{2}(x) + \cdots + c_{n}f_{n}(x) = 0
> $$
> 
> for every $x$ in the interval. If the set of functions is not linearly dependent on the interval, it is said to be **linearly independent**. 

A function $f_{r}$ in a linearly dependent set on an interval $I$ can be expressed as a linear combination of other functions within the set. A set of $n$ functions is linearly independent on $I$ if no single function is a linear combination of the other functions.
### Examples of Linear Independence/Dependence

If $f_{1}(x) = x$ and $f_{2}(x) = |x|$, then the set $\{ f_{1}, f_{2} \}$ is linearly independent on $(-\infty, \infty)$.

---

The set of functions $f_{1}(x) = \cos ^{2}(x)$, $f_{2}(x) = \sin ^{2}(x)$, $f_{3}(x) = \sec ^{2}(x)$, $f_{4}(x) = \tan ^{2}(x)$ is linearly dependent on the interval $\left(-{\pi}/{2}, {\pi}/{2}\right)$ because

$$
c_{1}\cos ^{2}x + c_{2}\sin ^{2}x + c_{3} \sec ^{2}x + c_{4}\tan ^{2}x = 0
$$

for every real number $x$ in the interval when $c_{1} = 1 = c_{2}$, $c_{3} = -1$, $c_{4} = 1$. You can use the identities $\sin ^{2}x + \cos ^{2}x = 1$ and $\sec ^{2}x = 1 + \tan ^{2}x$.

---

The set of functions $f_{1}(x) = \sqrt{ x } + 5$, $f_{2}(x) = \sqrt{ x } + 5x$, $f_{3}(x) = x-1$, $f_{4}(x) = x^{2}$ is linearly dependent on the interval $(0, \infty)$ because $f_{2}$ can be written as a linear combination of $f_{1}, f_{3}, f_{4}$, which symbolically is

$$
f_{2}(x) = 1 \cdot f_{1}(x) + 5 \cdot f_{2}(x) + 0 \cdot f_{4}(x)
$$

for every $x$ in the interval $(0, \infty)$.