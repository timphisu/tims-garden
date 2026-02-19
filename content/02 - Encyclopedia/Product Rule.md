---
created: 202602031356
reviewed: 2026-02-05
tags:
  - math/definition
---

> [!definition]
> Suppose those a procedure can be broken down into a sequence of two tasks. If there are $n_{1}$ ways to do the first task and for each of these ways of doing the first task, there are $n_{2}$ ways to do the second task, then there are $n_{1}n_{2}$ ways to do the procedure

#### Examples of Product Rule

1. A new company with just two employees, Sanchez and Patel, rents a floor of a building with 12 offices. How many ways are there to assign different offices to these two employees?

	The procedure of assigning offices to these employees consists of assigning an office to Sanchez, which can be done in 12 ways, then assigning an office to Patel different from the office assigned to Sanchez, which can be done in 11 ways. Then by the *Product Rule*, there are $12 \cdot 11 = 132$ ways to assign offices to these two employees

2. The chairs of an auditorium are to be labeled with an uppercase English letter followed by a positive integer not exceeding 100. What is the largest number of chairs that can be labeled differently

	The procedure of labeling a chair consists of two tasks, namely, assigning to the seat one of the 26 uppercase letters, and then assigning it to one of the 100 possible integers. The product rule shows that there are $26 \cdot 100 = 2600$ different ways that a chair can be labeled. Therefore, the largest number of chairs that can be labeled differently is 2600.

3. There are 32 computers in a data center in the cloud. Each of these computers has 24 ports. How many different computer parts are there in this data center. 

	The procedure of choosing a port consists of two tasks, first picking a computer and then picking a port on this computer. Because there are 32 ways to choose the computer and 24 ways to choose the port no matter which computer has been selected, the product rule shows that there are $32 \cdot 24 = 768$ ports.

4. How many different license plates can be made if each plate contains a sequence of 3 uppercase English letters followed by 3 digits (where there's no restriction on the sequences of letters)?

	There are 26 choices for each of three uppercase English letters and 10 choices for each of the three digits. Hence, by the product rule there are a total of $26 \cdot 26 \cdot 26 \cdot 10 \cdot 10 \cdot 10 = 26^3 \cdot 10^3 = 17,576,000$ possible license plates. 
 
##### Counting Functions Problem

**Problem:** How many functions are there from a set with $m$ elements to a set with $n$ elements?

**Solution:** For $f : A \to B$ where $A$ contains $m$ elements and $B$ contains $n$ elements then there are $n$ ways to assign a mapping to some element in $A$. But every element in $A$ needs an assignment, and since every assignment is independent of one another, then there are $n^m$ unique functions which map every element of $A$ onto some element of $B$

##### Counting Integers within a Range

**Problem:** How many positive integers between $a$ and $b$ are divisible by $k$?

**Approach:** We know that there are $b\ \mathbf{div}\ k$ many integers between the range $[0, b]$ but the range of interest is $[a, b]$ so we must exclude the integers divisible by $k$ within the range $[0, a]$. That is, there are $$(b \ \mathbf{div} \ k) - (a \ \mathbf{div} \ k)$$ many integers that are divisible by $k$ in the range $[a, b]$ 

#### Working with Sequences of Tasks

> [!info]
> **Extended Version of Product Rule**
> 
> Suppose that a procedure is carried out by performing the tasks $T_{1}, T_{2}, \dots, T_{m}$ in sequence. If each task $T_{i}, i = 1, 2, \dots, n$ can be done in $n_{i}$ ways, regardless of how the previous tasks were done, then there are $n_{1} \cdot n_{2} \cdot \dots \cdot n_{m}$ ways to carry out the procedure.