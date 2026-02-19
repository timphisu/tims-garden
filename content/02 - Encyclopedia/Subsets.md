---
created: 202602031635
reviewed: 2026-02-03
tags:
  - math/definition
---

> [!definition]
> The set $A$ is a *subset* of $B$, and $B$ is a *superset* of $A$, <u>if and only if every element of $A$ is also an element of $B$. </u>
> 
> We denote $A \subseteq B$ to indicate that $A$ is a subset of the set $B$. 
> 
> If we want to stress $B$ is a superset of $A$, then equivalently, $B \supseteq A$.

Written as a quantification,

$$
A \subseteq B \iff \forall x(x \in A \to x \in B)
$$

To show that $A$ is not a subset of $B$, all we need is one counterexample where $x \in A$ but $x \notin B$  which breaks the claim. 

![[Pasted image 20260114191352.png|400]]

### Examples

* The set of all odd positive integers $< 10$ is the subset of the set of all positive integers $< 10$

$$
\{ x \in \mathbb{Z}^+ \ | \ \text{mod}(x, 2) = 0 \land x < 10 \} \subseteq \{ x \in \mathbb{Z}^+ \ | \ x < 10 \} \}
$$

* The set of rational numbers is a subset of the set of real numbers

$$
\mathbb{Q} \subseteq \mathbb{R}
$$

* The set of all computer science students majors at your school is a subset of all students at your school

### Guaranteed Subsets for all Sets

> [!theorem]
> For every set $S$, the following are true
> 
> $$(i) \quad \varnothing \subseteq S$$
> $$(ii) \quad S \subseteq S$$

#### Proof for $(i)$

Let $S$ be a set. 

To show $\varnothing \subseteq S$, we must show that $\forall x(x \in \varnothing \to x \in S)$ is true.

Because the empty set contains no elements, it follows $x \in \varnothing$ is false. It follows that the conditional statement $x \in \varnothing \to x \in S$ will always be true since the hypothesis is false and any conditional statement with a false hypothesis will be true (See [[1.1 - Propositional Logic#Conditional Statements]]).

Therefore, $\forall x(x \in \varnothing \to x \in S)$ is true. 

### Proper Subsets

To emphasize that a set $A$ is a subset of a set $B$ but that $A \ne B$, we write $A \subset B$ and say A is a *proper subset* of B. 

For $A \subset B$ to be true, it must be the case that $A \subseteq B$ and there's an element $x \in B$ that $x \in A$. That is,

$$
\forall x(x \in A \to x \in B) \land \exists x(x \in B \land x \in A)
$$