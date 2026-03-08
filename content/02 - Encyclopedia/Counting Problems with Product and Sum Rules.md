---
created: 202602102047
reviewed: 2026-02-10
tags:
  - math/problems
  - math/topic/counting
---
## Counting Multiple Sequences that Satisfy a Condition

**Problem:** In a version of the computer language BASIC, the name of a variable is a string of one or two alphanumeric characters (either a letter or digit), where letter case does not matter. Moreover, a variable name must begin with a letter and must be different from the five strings of two characters that are reserved for programming use. How many different variable names are there in this version of BASIC?

**Approach:** Let $V$ equal the number of different variable names in this version of BASIC. Let $V_{1}$ be the number of these that are one character long and $V_{2}$ be the number of these that are two characters long. Then by the sum rule, $V = V_{1} + V_{2}$. Not that $V_{1} = 26$ because a one-character variable name must be a letter. Furthermore, by the product rule there are $26 \cdot 36$ strings of length two that begin with a letter and end with an alphanumeric character. However, five of these are excluded, so $V_{2} = 26 \cdot 36 - 5 = 931$. Hence, there are $V = V_{1} + V_{2} = 26 + 931 = 957$ different names for variables in this version of BASIC.

**Problem:** Each user on a computer system has a password, which is six to eight characters long, where each character is an uppercase letter or a digit. Each password must contain at least one digit. How many possible passwords are there?

**Approach:** Let $P$ be the total number of possible passwords, and let $P_{6}$, $P_{7}$, and $P_{8}$ denote the number of possible passwords of length 6, 7, and 8 respectively. By the sum rule, $P = P_{6} + P_{7} + P_{8}$ . We will now find $P_{6}$, $P_{7}$, and $P_{8}$ . Finding $P_{6}$ directly is difficult. To find $P_{6}$ it is easier to find the number of strings of uppercase letters and six characters long, including those with no digits, and subtract from this the number of string with no digits. By the product rule, the number of strings of six characters is $36^6$, and the number of strings with no digits is $26^6$. 

---
## [[Counting with Disjoint Subsets]]

We also use the Product Rule and Sum Rule to build the intuition for summing over various combinations.
