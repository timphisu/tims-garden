
We will study the three exams as they will be on the final 

## 3. Chapter 6
 
 ![[Subtraction Rule#Counting Bit Strings with Pre-Determined Places]]
 
 ---

![[20260211_091910_-90deg.png|500]]

My issue in this problem was that the formula for combinations where repetition is allowed is $C(n + r  - 1, r)$ but I misidentified which $r$ was while $n=6$ so good practice may include problems that require me to figure out which formula I need (permutations, combinations, permutations with repetition, combinations with repetition), and then correctly identify what $r$ and $n$ are in the problem, then compute. 

> Also look to write and review generalizations of counting

---

![[Counting with Disjoint Subsets#Examples of Counting with Disjoint Sets]]

---

### Exam 3 Practice

**1. Counting Bit Strings (Inclusion-Exclusion)** How many bit strings of length 8 **either** start with `11` **or** end with `000`?

Bit strings that start with `11` : $2^6=64$
Bit strings that end with `000` : $2^5=32$
Bit strings that start with `11` or end with `000`: $2^3=8$

So there are $(64+32)-8=88$ bit strings that either start with `11` or end with `000`

**2. Combinations with Repetition (The "Bagel" Problem)** A bakery sells 5 distinct kinds of bagels (Plain, Sesame, Poppy, Onion, Everything). You want to buy a box of 12 bagels. 

**a.** Does the order in which you place the bagels in the box matter? 

The order does not matter, only *which* bagels are picked in the box. And repetition is allowed, as for example you can pick 2 sesame bagels in a box of dozen.

**b.** Explicitly identify $n$ (the number of categories) and $r$ (the number of items to choose). 

The distinguishable objects are $n=5$
We are choosing $r = 12$ bagels to put in our box

**c.** How many different ways can you select the bagels?

There are 

$$
C(5+12-1, 12) = C(16, 12) = \frac{16!}{12!4!} = 1820
$$

different ways to select 12 bagels with 5 types

**3. Committee Selection (Disjoint Cases)** A student club has 8 Computer Science majors and 6 Mathematics majors. You need to form a committee of 5 students. How many ways can this committee be formed if it must contain **more** Computer Science majors than Mathematics majors? 

Let $k$ represent the number of computer science majors in a group. For there to be more CS majors than math majors in a group of 5, there must be 3 computer science majors or more, that is, $3 \leq k \leq 5$. For each group of 5 that contain $k$ computer science majors, there are $\binom{8}{k}$ ways to choose different computer science majors. Moreover, for the $5-k$ remaining slots for this committee, there are $\binom{6}{5-k}$ ways to choose different mathematics majors. Hence, there are

$$
\begin{align}
\sum_{k=3}^{5} \binom{8}{k} \binom{6}{5-k}  & = \binom{8}{3}\binom{6}{2} + \binom{8}{4}\binom{6}{1} + \binom{8}{5}\binom{6}{0} \\ \\
&= \frac{8!}{3!5!} \frac{6!}{2!4!} + \frac{8!}{4!4!} \frac{6!}{1!5!} + \frac{8!}{5!3!} \frac{6!}{0!6!} \\ \\
& = 56 \cdot 15 + 70 \cdot 6 + 56 \cdot 1 \\ \\
 & = 840 + 420 + 56 \\ \\
 & = 1316
\end{align} 
$$

ways to from committees of 5 where there are more computer science majors than math majors.

**4. Product Rule with Constraints** A license plate consists of 3 uppercase letters followed by 3 digits. How many license plates are possible if:

**a.** No repetition is allowed for letters or digits? 

We begin by knowing there are 26 possible uppercase letters and 10 digits. For permutations where repetition is not allowed, there should be $P(26, 3)=15,600$ ways to get the first three characters, and there should also be $P(10, 3) = 720$ ways to arrange number for the last 3 characters. Since there are 15,600 ways to get the first three characters then out of that sequence there's 720 ways to arrange the last three characters, by the Product Rule, there are $P(26, 3) \cdot P(10, 3) = 15600 \cdot 720 = 11,232,000$ possible license plates.   

**b.** The first letter cannot be a vowel (A, E, I, O, U) and the last digit must be even? (Repetition is allowed here).

By excluding vowels, there are $26-5=21$ ways to pick the first letter. But for the other 2 letters, we can choose 26 letters with repetition. So by the product rule, there are $21 \cdot 26^2 = 14,196$ ways to arrange the first 3 letters. For the next three characters that are digits, there are only 4 possible ways to pick the last digit as the last digit must be even, and the remaining 2 other digits have 10 ways with repetition allowed to arrange their order—which means there are $10^2 \cdot 4=400$ ways to arrange the last 3 digits of the license plate. In total, there are $14,196 \cdot 400 = 5,678,400$ possible license plates.