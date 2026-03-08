---
created: 202602101319
reviewed: 2026-02-10
tags:
  - math/concept
  - math/building-blocks
  - math/topic/logic
---

A **proposition** is a declarative statement (asserts an idea rather than a command or interrogative) that has a single truth value such as $T$ or $F$. Propositions can be denoted in variables $p,r, s, t$ . A proposition which cannot be broken down any further is called an *atomic proposition*.

We use **logic operators** or *connectives* to combine simple propositions to make *compound statements*
#### Negation

The proposition $\neg p$ is read "not $p$" or "It is not the case that $p$". 

Here's a **truth table** for the negation of $p$ which shows the possible truth values of $p$ and what negating $p$ does to the truth values

| $$p$$ | $$\neg p$$ |
| ----- | ---------- |
| T     | F          |
| F     | T          |

#### Conjunction and Disjunction

The **conjunction** of $p$ and $q$ denoted $p \land q$ is read as "$p$ and $q$". The conjunction $p \land q$ is only true when both $p$ and $q$ are true. 

The **disjunction** (also called *inclusive "or"*), denoted $p \lor q$, is read as "$p$ or $q$". A disjunction is true when at least one of the two propositions are true. 

An example of this may be, "If you take algebra or trigonometry, you may take Calculus". Let's denote $p$ as taking algebra and $q$ as you taking trig, then the whole statement can be expressed $p \lor q$. If $p$ or $q$ is true, the whole "either or" statement to be true, which is *sufficient* enough for you to take calculus. 

We may also have the *exclusive "or"* of $p$ and $q$, also known as **XOR**, denoted as $p \oplus q$  where the truth value depends on if there's a difference of truth values between $p$ and $q$, that is, one is true and the other is false.

| $$p$$ | $$q$$ | $$p \land q$$ | $$p \lor q$$ | $$p \oplus q$$ |
| ----- | ----- | ------------- | ------------ | -------------- |
| T     | T     | T             | T            | F              |
| T     | F     | F             | T            | T              |
| F     | T     | F             | T            | T              |
| F     | F     | F             | F            | F              |