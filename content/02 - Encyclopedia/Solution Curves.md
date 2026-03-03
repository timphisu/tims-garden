---
created: 202603022114
reviewed: 202603022114
tags:
  - math/concept
---

#### Intuition

Imagine dropping a paper boat in a body of water where there are currents going in different kinds of directions. The boat, however, follows the direction of the current it was first placed in and follows a (curved) path as long as the stream pushes it. Now, if you dropped the boat in a different starting position, its path would be unique from the path taken from the previous starting position (assuming the directions of the currents don't change).

### Tracing Solution Curves

Similarly, a **solution curve**, the path traced by lineal elements is unique given by its [[Initial Value Problems|initial condition]]. Only a single solution curve can pass through any point $(x_{0}, y_{0})$ in some region $R$.

Here's what tracing a solution curve in a direction field looks like

![[Pasted image 20260226223501.png|400]]

Tracing solution curves often can be a graphical approach to finding solutions to differential equations where the analytical complexity is too difficult to find an explicit solution.

#### Examples of Solution Curves

Consider the following [[Autonomous Equations|autonomous differential equation]]

$$
\frac{dy}{dx} = y^{2} - y^{4}
$$

Note that this DE is not [[Separable Equations|separable]] nor [[Linear Differential Equations|linear]], so as of now (2/26/26), there are no tools under our belt that could possibly arrive us at an explicit solution. But let us factor $y^{2} - y^{4} = y^{2}(1+y)(1-y)$ which tells us $\frac{dy}{dx}=0$ when $y = -1, 0, 1$. Those are equilibrium (and [[Solving Separable Equations#Finding Singular Solutions|singular]]) solutions for our DE which divides the the interval of $y$ into 4 subintervals. 

We can make a "table of slopes" which depends on which subinterval $y$ is in. For example, if $y>1$, that is, $y \in (1, \infty)$ then $\frac{dy}{dx}>0$ which means the function is strictly increasing (since $x$ doesn't have a say in it's derivative). 

| Subinterval    | Slope                | Solution Curve |
| -------------- | -------------------- | -------------- |
| $$y < -1$$     | $$\frac{dy}{dx}<0$$  | decreasing     |
| $$y=-1$$       | $$\frac{dy}{dx}=0$$  | flat           |
| $$-1 < y < 0$$ | $$\frac{dy}{dx}>0$$  | increasing     |
| $$y=0$$        | $$\frac{dy}{dx}=0$$  | flat           |
| $$0 < y < 1$$  | $$\frac{dy}{dx}>0$$  | increasing     |
| $$y=1$$        | $$\frac{dy}{dx}=0$$  | flat           |
| $$y > 1$$      | $$\frac{dy}{dx}< 0$$ | decreasing     |
We can use this information to trace what the solution curves might look like on the $xy$-plane. 

![[Pasted image 20260226235147.png|500]]

> Note that solution curves should never touch; otherwise, that would violate the [[Existence of a Unique Solution|Uniqueness Theorem]]. Hence why we have asymptotic behavior for solution curves of autonomous differential equations.

#### Phase Portraits

Another way of representing this information is by collapsing the graph into a 1-D diagram called a **phase portrait**. 

![[Pasted image 20260227000003.png|100]]

In this diagram, arrows are used to indicate if the derivative is increasing or decreasing on a subinterval and tick-marks are used for constant solutions. The constant solution $y=1$, known as an **attractor**, is asymptotically stable where solution curves both above and below are converging towards. For $y=0$, only one solution curve is converging towards this flat line which means this is semi-stable. And for $y=-1$, both solution curves above and below are diverging away from the constant solution; the constant solution $y=-1$ would be called a **repeller**.