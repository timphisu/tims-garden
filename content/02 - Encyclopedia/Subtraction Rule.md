---
created: 202602031357
reviewed: 2026-02-03
tags:
  - math/theorem
  - math/concept
  - math/topic/counting
---
# Subtraction Rule

## Definition

> [!definition]
> **Subtraction Rule**
> If a task can be done in either $n_{1}$ ways or $n_{2}$ ways, then number of ways to do the task is $n_{1} + n_{2}$ minus the number of ways to do the task that are common to two the different ways

We've seen this rule in [[2.2 - Set Operations#Principle of Inclusion-Exclusion]] when looking to count the elements in a union of two sets is remove repeat elements where elements are shared between both sets. 

> We should always invoke this rule when approaching an *either or* problem as we are often interested in different ways and not any repeats.
## Examples of Subtraction Rule

1. A computer company receives 350 applications from college graduates for a job planning a line of new web servers. Suppose that 220 of these applicants majored in computer science, 147 majored in business, and 51 majored both in computer science and in business. How many of these applicants majored neither in computer science nor in business?

	To find the number of these applicants who majored neither in computer science nor in business, we can subtract the number of students who majored either in computer science or in business (or both) from the total number of applications, that is, the union. Let $A_{1}$ be the set of CS majors and $A_{2}$ the set of business majors. Then $A_{1} \cup A_{2}$ is the set of students who majored in CS or business (or both), and $A_{1} \cap A_{2}$ is the set of students who majored both in science and in business.
	$$| A_{1} \cup A_{2} | = |A_{1}| + | A_{2}  | - | A_{1} \cap A_{2} | = 220 +147 - 51 = 316$$
	We conclude that $350 - 316 - 34$ of the applicants majored neither in computer science nor in business.

### Counting Bit Strings with Pre-Determined Places

**Problem:** How many strings of length 10 either start with 000 or end with 1111?

**Approach:** We know that by the *Subtraction Rule* our strategy is the add the count of 10-character-long strings that start with 000 and the strings that end with 1111, then, subtract the strings that are common to both (that is, strings that start with 000 and end with 1111)

$$
(\text{bit strings that start 000} + \text{bit strings that end 1111}) - \text{bit strings starting 000 and end 1111}
$$

While strings with length 10 that start with 000 have their first three places determined, the other 7 can form various permutations. Likewise for strings that end with 1111, the other 6 places can form permutations. By [[Product Rule]], we find that there are $2^7=128$ 10-length bit strings that start with 000 and $2^6=64$ that end with 1111. By the [[Sum Rule]], we have $128+64=192$ ways to do *either or* method.

We must exclude any repeats common to both.  Now for 10-character-long bit strings that start with 000 and end with 1111, their beginning and ending are predetermined. But note that there are 3 places remaining in the 10-character-long string that are free to vary. That means there are $2^3=8$ different strings that are 10-characters-long and are common to both sets of interest.

In total, there are 

$$
128+64-8=184
$$

strings that either start with 000 or end with 1111