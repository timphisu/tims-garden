This test is designed to be **challenging**. It aggregates the logic and proofs from Exam 1, the functions and number theory from Exam 2, and the combinatorics from Exam 3.

**Time Limit:** 120 Minutes

**Instructions:** Show all work. No credit will be given for correct answers without accurate supporting steps.

---

### **Math 22: Comprehensive Semester Practice Final**

#### **Part I: Logic and Proofs**

**1. Logical Translation & Equivalences**

Let $p$ be the proposition "I study every day" and $q$ be the proposition "I pass the class." Express the following sentences symbolically:

a. I pass the class only if I study every day.

A simplified statement of this would be "$q$ only if $p$" where if I pass the class, then I study every day.

$$
q \to p
$$


b. Studying every day is a necessary condition for passing the class.

$$p \to q$$
c. I do not study every day, but I still pass the class.

$$
\neg p \land q
$$

d. Construct the truth table for the compound proposition: $(p \oplus q) \rightarrow (\neg p \land q)$.

> We need to review XOR

| $$p$$ | $$q$$ | $$p \oplus q$$ | $$\neg p$$ | $$\neg p \land q$$ | $$p \oplus q \to \neg p \land q$$ |
| ----- | ----- | -------------- | ---------- | ------------------ | --------------------------------- |
| T     | T     | F              | F          | F                  | T                                 |
| T     | F     | T              | F          | T                  | T                                 |
| F     | T     | T              | T          | T                  | T                                 |
| F     | F     | F              | T          | F                  | T                                 |

The statement $p \oplus q \to \neg p \land q$ is a tautology

**2. Conditional Statements**

Consider the statement: _"If the integer $n$ is a multiple of 6, then $n$ is even."_

a. Write the **converse** of the statement.

The converse is the contrapositive of the inverse which is just $q \to p$ where the above statement can be conversely written as

If $n$ is even, then the integer $n$ is a multiple of 6

b. Write the **contrapositive** of the statement.

The contrapositive will always be logically equivalent to the original statement. If $q$ only happens when $p$ happens, then the contrapositive would state that when $q$ doesn't happen, then $p$ didn't happen. 

If $n$ is not even, then the integer $n$ is not a multiple of 6.

c. Write the **inverse** of the statement.

Often just because $p \to q$ is true, does not mean that $\neg p \to \neg q$ is also true—that is the inverse. The inverse could be stated as

If the integer $n$ is not a multiple of $6$, then $n$ is not even.

d. Find the negation of the statement: "Every student in this room has taken Calculus."

The negation of a universal quantifier is the existential statement of the opposite of the propositional function, that is, $\neg \forall xP(x) \equiv \exists x(\neg P(x))$, which for this statement can be written as

$$\text{There's atleast one student in this room who has not taken Calculus}$$

**3. Quantifiers**

Let $C(x)$ be "x is a cat", $D(x)$ be "x is a dog", and $F(x, y)$ be "x and y are friends." The domain for x and y is all animals. Translate the following into logical notation:

a. All cats and dogs are friends.

$$
\forall x \forall y (F(C(x), D(y))) \quad \text{where $x$ and $y$ are animals}
$$

or, 

$$
\forall x \forall y (C(x) \land D(y) \land F(x, y)) \quad \text{where $x$ and $y$ are animals}
$$

b. There is a cat that is friends with some dog.

$$
\exists x \exists y (C(x) \land D(y) \land F(x, y)) \quad \text{where $x$ and $y$ are animals}
$$

c. There is a dog that is not friends with any cat.

$$
\forall x \exists y (C(x) \land D(y) \land \neg F(x, y))
$$

#### **Part II: Sets and Functions**

**4. Set Identities**

Prove the following identity algebraically (do not use a membership table). Show every step.

$$A - (B \cap C) = (A - B) \cup (A - C)$$

$$
\begin{align}
 A - (B \cap C)  & = \{ {x} \ | \ {x \in A \land x \not\in (B \cap C)} \}  & \text{Set-Builder Notation} \\ \\
   & = \{  {x} \ | \ {x \in A \land \neg(x \in (B \cap C)} \}  & x \not\in S \equiv \neg(x \in S) \\ \\
    & = \{ {x} \ | \ {x \in A \land \neg(x \in B \land x \in C)} \}  & \text{Definition of}\ n \\ \\
     & = \{ {x} \ | \ {x \in A \land (\neg(x \in B) \lor \neg(x \in C)))} \} &  \text{De Morgan's Law} \\ \\
      & = \{ {x} \ | \ {x \in A \land (x \not\in B \lor x \not\in C)} \}  & \neg(x \in S) \equiv x \not\in S \\ \\
       & = \{ {x} \ | \ {(x \in A \land x \not\in B) \lor (x \in A \land x \not\in C)} \}  & \text{Distributive Property} \\ \\
        & = \{ {x } \ | \ {x \in A \land x \not\in B} \} \cup \{ {x} \ | \ {x \in A \land x \not\in C } \}  & \text{Definition of Union} \\ \\
         & = (A-B) \cup (A-C)  & \text{Set Notation for Difference}
\end{align}
$$

**5. Functions and Inverses**

Let $f(x) = \frac{2x - 5}{x + 4}$.

a. Show that $f(x)$ is one-to-one (injective).

One-to-one means there's no two outputs for a single input. 

Assuming this function maps $\mathbb{R} \to \mathbb{R}$, let $a$ and $b$ be real numbers where $a \ne b$ and $a, b \ne 4$. 

Consider $f(a)=f(b)$

$$
\begin{align}
 & f(a) = f(b) \\ \\
  & \frac{2a-5}{a+4} = \frac{2b-5}{b+4} & \text{Images of}\ f(a)\ \text{and} \ f(b) \\ \\
   & (2a-5)(b+4) = (a+4)(2b-5) & \text{Cross multiply} \\ \\
    & 2ab +8a-5b-20 = 2ab - 5a + 8b - 20  & \text{Expand products} \\ \\
     &  8a - 5b = 8b - 5a  & \text{Cancel out common terms} \\ \\
      & 13a = 13b  & \text{Isolating variables} \\ \\
       & a = b
\end{align}
$$

But $a \ne b$, which implies $f(a) \ne f(b)$. This function satisfies being one-to-one.

b. Find the inverse function $f^{-1}(x)$.

If we specify the domain of $f$ to be elements in the set of $\{ {x \in \mathbb{R}} \ | \ {x \ne 4} \}$, then $f$ is invertible. 

$$
\begin{align}
 & y = \frac{2x-5}{x-4}  & \text{Image of}\ f(x) \\ \\
  & x = \frac{2y-5}{y-4}  & \text{Inverting the image} \\ \\
   & x(y-4) = 2y-5 & \text{Solving for $y$} \\ \\
    & xy - 4x = 2y - 5  \\ \\
     & xy - 2y = 4x - 5 \\ \\
      & y(x-2) = 4x-5 \\ \\
       & y = \frac{4x-5}{x-2}
\end{align}
$$

Hence, $f^{-1}(x)= \displaystyle\frac{4x-5}{x-2}$ where $x \ne 2$

c. State the domain and range of $f^{-1}(x)$.

$$
\begin{align}
D: \{ {x \in \mathbb{R}} \ | \ {x \ne 4} \} \\ \\
R :  \{ {x \in \mathbb{R}} \ | \ {x \ne 2} \}
\end{align}
$$

**6. Sequence and Summation**

a. Find the formula for the $n$-th term of the sequence: $5, 11, 17, 23, 29...$

It looks like between each term, there's a common difference of $d=6$ with the initial term $a_{1}=5$. 

We can write a formula for the $n$-th term of the sequence using an arithmetic progression for $n=1, 2, 3, ...$

$$
a_{n} = -1 + 6n
$$


b. Compute the value of the sum (show your expansion):

$$\sum_{k=1}^{4} (3^k - 3^{k-1})$$

$$
\begin{align}
\sum_{k=1}^{4} (3^k - 3^{k-1})  & = (3^1 - 3^0) + (3^2 - 3^1) + (3^3 - 3^2) + (3^4 - 3^3) \\ \\
 & = (3-1) + (9-3) + (27 - 9) + (81 - 27) \\ \\
  & = 2 + 6 + 18 + 54 \\ \\
   & = 80
\end{align}
$$

#### **Part III: Number Theory and Matrices**

**7. Euclidean Algorithm**

a. Use the Euclidean Algorithm to find $GCD(1230, 456)$.

$$
GCD(1230, 456) = 3
$$

b. Using your result from part (a), find $LCM(1230, 456)$.

Since $GCD(1230, 456) \cdot LCM(1230, 456) = 1230 \cdot 456$, rearranging we find

$$
LCM(1230, 456) = \frac{1230 \cdot 456}{GCD(1230, 456)} = 186{,}960 
$$

**8. Base Expansions**

a. Convert the hexadecimal number $(2A.8)_{16}$ to decimal.

$$(2A.8)_{16} = 2 \cdot 16^{2} + 10 \cdot 16^{1} + 8 \cdot 16^{0} = 512 + 160 + 8 = 680$$

b. Convert the decimal number $950$ to octal notation.

$$
\begin{align}
950 = 118 \cdot 8 + 6 \\ \\
118 = 14 \cdot 8 + 6 \\ \\
14 = 1 \cdot 8 + 6 \\ \\
1 = 0 \cdot 8 + 1
\end{align}
$$

$$
(950)_{10} = (1666)_{8}
$$

**9. Matrix Operations**

Let $A$ be a $2 \times 3$ matrix, $B$ be a $3 \times 3$ matrix, and $C$ be a $3 \times 2$ matrix. Determine if the following operations are defined. If defined, state the dimensions of the resulting matrix.

a. $A \times B$

$A \times B : 2 \times 3$ is defined

b. $B \times A$

$B \times A$ is not defined

c. $B \times C$

$B \times C : 3 \times 2$ is defined

d. $C \times A$

$C \times A : 3 \times 3$ is defined

#### **Part IV: Combinatorics and Counting**

**10. Counting Principles**

A secure password must contain exactly 8 characters. The available characters are uppercase letters (26), lowercase letters (26), and digits (10).

a. How many total passwords are possible if repetition is allowed?

There are $26 + 26 + 10 = 62$ possible characters to choose from and there are 8 placements to arrange such characters. Thus there are $62^{8}$ possible passwords if repetition is allowed. 

b. How many passwords are possible if the first character must be an uppercase letter and the last character must be a digit?

There are 26 ways to choose the first character and 10 ways to choose the last character, the other 6 placements of an ordered arrangement are free to vary. 

Hence, there are 

$$
26 \cdot 62^{6} \cdot 10
$$

possible passwords where the first character is an uppercase letter and the last character is a digit.

c. How many passwords contain **no** digits?

Only choosing uppercase or lowercase letters, our available pool of characters to choose from becomes 52. With repetition allowed, there are $52^{8}$ ways to arrange various passwords with no digits. 

**11. Inclusion-Exclusion Principle**

How many bit strings of length 10 start with `11` **OR** end with `000`?

**12. Permutations and Committees**

A club has 12 men and 10 women.

a. In how many ways can a president, vice-president, and treasurer be elected if there are no gender restrictions?

If we don't "see" gender, there are $12 + 10 = 22$ different candidates to elect three positions. Then there are $\binom{22}{3} = 1540$ ways to choose a president, vice-president, and treasurer.


| Term | Value |
| ---- | ----- |
| a_0  | 1     |
| a_1  | 1     |
| a_2  | 2     |
| a_3  | 2     |
| a_4  | 1     |
| a_5  | 1     |
