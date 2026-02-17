---
created: 2026-01-23 00:19
reviewed: 2026-01-30
tags:
  - math/definition
---

> [!definition]
> The **floor function** assigns to the real number $x$ the largest number that is less than or equal to $x$. The value of the floor function at $x$ is denoted by  $\lfloor x \rfloor$
> 
> The **ceiling function** assigns to the real number $x$ the smallest integer that is greater than or equal to $x$. The value of the ceiling function at $x$ is denoted by $\lceil x \rceil$. 

![[Pasted image 20260122234748.png|500]]

### Useful Properties of the Floor and Ceiling Functions

If $n$ is an integer and $x$ is a real number, then

1. 

| Identity                      | If and Only If Condition |
| ----------------------------- | ------------------------ |
| $$\lfloor x \rfloor = n$$<br> | $$n \leq x < n+1$$<br>   |
| $$\lceil x \rceil  = n$$<br>  | $$n - 1 < x \leq n$$     |
| $$\lfloor x \rfloor = n$$<br> | $$x - 1 < n \leq x$$<br> |
| $$\lceil  x \rceil = n$$<br>  | $$x \leq n < x +1$$<br>  |

2.  

$$
x - 1 < \lfloor  x \rfloor \leq x \leq \lceil x \rceil < x+1
$$

3.  

$$
\begin{align}
 & \lfloor -x \rfloor = - \lceil  x \rceil \\ \\
 & \lceil -x \rceil = - \lfloor x \rfloor 
\end{align}
$$

4. 

$$
\begin{align}
 & \lfloor x + n \rfloor = \lfloor x \rfloor + n \\ \\
 & \lceil x+n \rceil = \lceil x \rceil + n
\end{align}
$$


