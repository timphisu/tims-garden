---
created: 202602261409
reviewed: 202602261409
tags:
  - math/building-blocks
  - math/topic/odes
aliases:
---

# Interval of Solution

> [!definition]
> The **interval of definition**, **interval of validity**, or **domain of solution**, denoted as $I$, is the specific set of independent variable values for which a differential equation is valid.

## Core Requirements for $I$

For a function $\phi(x)$ to be considered a solution on an interval $I$, it must satisfy three formal criteria:

1. *Differentiability*: The solution $\phi$ must be differentiable at every point within the interval $I$.

2. *Continuity*: The interval $I$ must be a **single continuous interval** (e.g. $(a, b)$, $[a, \infty)$). It cannot be a [[Union|union]] of disjoint intervals, such as $[a, b) \cup (b, c]$.

3. *Initial Condition*: In the context of an [[Initial Value Problems|initial value problem]] where $\phi(x_{0}) = y_{0}$, the interval $I$ **must contain** $x_{0}$.

### Domain vs. Interval of Validity

It is crucial to distinguish the mathematical domain of the function and its validity as an ODE solution: 

* The **mathematical domain** is all values where the expression for $\phi(x)$ is defined 

* The **interval of validity** is generally a [[Subsets|subset]] of the mathematical domain, restricted to a single continuous piece that contains the initial point and maintains differentiability.

## Steps for Finding the Interval of Solution

When solving an IVP, follow these steps to formalize your interval:

1. Identify points where the solution $\phi(x)$ or its derivative $\phi'(x)$ are undefined (e.g., vertical asymptotes, zeros in the denominator).

2. Locate the initial value $x_{0}$.

3. Define $I$ as the largest continuous interval containing $x_{0}$ that does not include any of the "undefined" points identified in Step 1.