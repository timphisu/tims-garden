# Linearization

The parameterization of the tangent plane $\mathcal{P}$ throughout the point $\vec{p}$ on the graph of $(x, y, F(x,y))$ is 

$$
\mathcal{P} : \{ {\vec{x} = \vec{p} + s\vec{u} + t\vec{v} } \ | \ {s, t \in \mathbb{R}}\}
$$

where $\vec{u}$ and $\vec{v}$ are *linearly independent* vectors. 

Assuming we are evaluating at $x = x^{*}$ and $y = y^{*}$, it is evident that the pair of vectors $(1, 0, {\partial F}/{\partial x})$ and $(0,1, {\partial F}/{\partial y})$ are linearly independent , so we can write the parameterization of $\mathcal{P}$ as

$$
\begin{align}
\vec{x} &  = \vec{p} + \left( 1, 0, \frac{ \partial F }{ \partial x } \right) s + \left( 0, 1, \frac{ \partial F }{ \partial y }  \right) t \\ \\
 & = (x^{*}, y^{*}, F(x^{*}, y^{*})) + \left( s, 0, \frac{ \partial F }{ \partial x } \cdot s \right) + \left( 0,t , \frac{ \partial F }{ \partial y } \cdot t \right) 
\end{align}
$$

Letting $s = \Delta x$ and $t = \Delta y$, 

$$
\vec{x} = \left( x^{*} + \Delta x, y^{*} + \Delta y, F(x^{*}, y^{*}) + \underbrace{ \frac{ \partial F }{ \partial x } \Delta x + \frac{ \partial F }{ \partial y } \Delta y }_{ \Delta F } \right) 
$$

When working on the tangent plane, the following notation is used: $dx = \Delta x$, $dy = \Delta y$, and $dF = \Delta F$.

The tangent plane $\mathcal{P}$ is considered the graph of the **affine mapping**

$$
(s, t) \mapsto F(x^{*}, y^{*}) + \frac{ \partial F }{ \partial x } s + \frac{ \partial F }{ \partial y } t
$$

Recall that a matrix transformation by $A : m \times n$ maps a vector from $R^{n}$ to $R^{m}$ while preserving the origin in place, having the form $T_{A}(\vec{x}) = A\vec{x}$. However, an *affine transformation* still maps a vector from $R^{n} \to R^{m}$ but has the form $T(\vec{x}) = A\vec{x} + \vec{b}$ where $\vec{b} \in R^{m}$. So under an affine transformation, the origin does not stay in place and is shifted. 

The linearization of the two-variable function $F$ is 

$$
F(x^{ *} + \Delta x, y^{*} + \Delta y) \approx F(x^{*}, y^{*}) + \frac{ \partial F }{ \partial x } (x^{*}, y^{*}) \Delta x + \frac{ \partial F }{ \partial y } (x^{*}, y^{*}) \Delta y
$$

To generalize, we can approximate the scalar function $F$ of $n$ variables $x_{1}, ..., x_{n}$ in the neighborhood of some point $\vec{x}^{*} = (x_{1}^{*}, ..., x_{n}^{*})$ by writing

$$
\begin{align}
F(x_{1}^{*} + \Delta x_{1}, ..., x_{n}^{*} + \Delta x_{n}) &  \approx F(\vec{x}^{*}) + \frac{ \partial F }{ \partial x_{1} }(x_{1}^{*}, ..., x_{n}^{*}) \Delta x_{1} + \cdots  + \frac{ \partial F }{ \partial x_{n} } (x_{1}^{*}, ..., x_{n}^{*}) \Delta x_{n} \\ \\
 & \approx F(\vec{x}^{*}) + \nabla F(\vec{x}^{*}) \cdot \Delta \vec{x}
\end{align}
$$

where the RHS is the parameterized representation of the $n$-dimensional tangent *hyperplane* $\mathcal{H}$ to the $n$-dimensional graph of $F$ in $R^{n+1}$. 

The differentials $dF, dx_{1}, ..., dx_{n}$ denote the changes on the hyperplane $\mathcal{H}$. In the vicinity of $\vec{x}^{*}$, $\mathcal{H}$ is a good approximation to the graph of $F$ because the actual change $\Delta F = F(x^{*} + \Delta x, y^{*} + \Delta y) - F(x^{*}, y^{*})$ is well approximated by the **total differential** of $F$

$$
dF = \frac{ \partial F }{ \partial x_{1} } (\vec{x}^{*})dx_{1} + \cdots + \frac{ \partial F }{ \partial x_{n} } (\vec{x}^{*})dx_{n}
$$

on the tangent hyperplane where $\Delta x_{i} = dx_{i}$ for $i = 1, ..., n$.

Since the tangent hyperplane $\mathcal{H}$ is the graph of the affine function

$$
(h_{1}, ..., h_{n}) \mapsto F(\vec{x}^{*}) + \nabla F(\vec{x}^{*}) \cdot (h_{1}, ..., h_{n})
$$

where $\nabla F$ is the **directional derivative** or the **Jacobian derivative** of $F$.

The total differential gives that the mapping $\vec{h} \mapsto \nabla F(\vec{x}^{*}) \cdot \vec{h}$ is a good approximation to the actual change in $F$.

## Approximation of Rn to Rm Functions

Consider the function $F$ which transforms the $n$ variables $x_{1}, ..., x_{n}$ to $m$ variables $f_{1}, ..., f_{m}$. 

$$
\begin{align}
F(x_{1}, ..., x_{n}) = (f_{1}, ..., f_{m})
\end{align}
$$

For $i = 1, 2, ..., m$, we can approximate the values of each component $f_{i}$ of $F$ about some point $\vec{x}^{*} \in R^{n}$ using the differentials in that ${\Delta F}/{\Delta x_{i}} \approx {\partial F}/{\partial x_{i}}$, so the change of $F$, which is defined as $\Delta F = F(\vec{x}^{*} + \Delta \vec{x}) - F(\vec{x}^{*})$, is roughly

$$
\begin{align}
f_{1}(x_{1}^{*} + \Delta x_{1}, ..., x_{n}^{*} + \Delta x_{n}) - f_{1}(x_{1}^{*}, ..., x_{n}^{*}) &  \approx \frac{ \partial f_{1} }{ \partial x_{1} }(x_{1}^{*}, ..., x_{n}^{*}) \Delta x_{1} + \cdots + \frac{ \partial f_{1} }{ \partial x_{n} }(x_{1}^{*}, ..., x_{n}^{*}) \Delta x_{n} \\ \\
f_{2}(x_{1}^{*} + \Delta x_{1}, ..., x_{n}^{*} + \Delta x_{n}) - f_{2}(x_{1}^{*}, ..., x_{n}^{*}) &  \approx \frac{ \partial f_{2} }{ \partial x_{1} }(x_{1}^{*}, ..., x_{n}^{*}) \Delta x_{1} + \cdots + \frac{ \partial f_{2} }{ \partial x_{n} }(x_{1}^{*}, ..., x_{n}^{*}) \Delta x_{n} \\ \\
\vdots \hspace{120pt} \hspace{20pt} \vdots  \\ \\
f_{m}(x_{1}^{*} + \Delta x_{1}, ..., x_{n}^{*} + \Delta x_{n}) - f_{m}(x_{1}^{*}, ..., x_{n}^{*}) &  \approx \frac{ \partial f_{m} }{ \partial x_{1} }(x_{1}^{*}, ..., x_{n}^{*}) \Delta x_{1} + \cdots + \frac{ \partial f_{m} }{ \partial x_{n} }(x_{1}^{*}, ..., x_{n}^{*}) \Delta x_{n} 
\end{align}
$$

which in matrix notation can be written as

$$
F(\vec{x}^{*} + \Delta \vec{x}) - F(\vec{x}^{*}) \approx \begin{pmatrix}\frac{ \partial f_{1} }{ \partial x_{1} }  & \frac{ \partial f_{1} }{ \partial x_{2} }  & \cdots  & \frac{ \partial f_{1} }{ \partial x_{n} } \\ \frac{ \partial f_{2} }{ \partial x_{1} } & \frac{ \partial f_{2} }{ \partial x_{2} } & \cdots & \frac{ \partial f_{2} }{ \partial x_{n} } \\ \vdots & \vdots & \ddots & \vdots \\ \frac{ \partial f_{m} }{ \partial x_{1} }  & \frac{ \partial f_{m} }{ \partial x_{2} } & \cdots & \frac{ \partial f_{m} }{ \partial x_{n} }   \end{pmatrix} \begin{pmatrix} \Delta x_{1} \\ \Delta x_{2} \\ \vdots \\ \Delta x_{n}\end{pmatrix}
$$

The matrix that's formed from this system contains all the first-order partial derivatives of $F$. This matrix is called the **Jacobian matrix** and is denoted $J_{F}(\vec{x}^{*})$

$$
J_{F}(\vec{x}^{*}) = \begin{pmatrix}\frac{ \partial f_{1} }{ \partial x_{1} }(\vec{x}^{*})  & \frac{ \partial f_{1} }{ \partial x_{2} }(\vec{x}^{*})  & \cdots  & \frac{ \partial f_{1} }{ \partial x_{n} }(\vec{x}^{*}) \\ \frac{ \partial f_{2} }{ \partial x_{1} }(\vec{x}^{*}) & \frac{ \partial f_{2} }{ \partial x_{2} }(\vec{x}^{*}) & \cdots & \frac{ \partial f_{2} }{ \partial x_{n} }(\vec{x}^{*}) \\ \vdots & \vdots & \ddots & \vdots \\ \frac{ \partial f_{m} }{ \partial x_{1} }(\vec{x}^{*})  & \frac{ \partial f_{m} }{ \partial x_{2} }(\vec{x}^{*}) & \cdots & \frac{ \partial f_{m} }{ \partial x_{n} }(\vec{x}^{*})   \end{pmatrix}
$$

> [!excerpt]
> But more is happening here! The expression before this one stated that the linear map which this matrix represents is the effective linear approximation of $F$ around $\vec{x}^{*}$. 

## Production

Consider the production function 

$$Q = F(K, L)$$

where $Q$ is the amount of a firm's output in terms of capital input $K$ and labor input $L$. One way to interpret the notation is for an ice cream truck: "How many $Q$ scoops of ice cream can I produce with $K$ dollars of capital and $L$ workers?" 
Jacobian derivative
If a firm is currently producing at $K^{*}$ units of capital and $L^{*}$ units of labor, then  

$$
\frac{ \partial F }{ \partial K } (K^{*}, L^{*}) 
$$

is the rate at which output changes with respect to capital, holding $L$ fixed at $L^{*}$. 

If $L$ is fixed at $L = L^{*}$, then we can approximate small changes to output with

$$
\Delta Q \approx \frac{ \partial F }{ \partial K } \cdot \Delta K 
$$

Setting $\Delta K = 1$, the partial *differential* $\Delta Q \approx {\partial F}/{\partial K}$ describes the added output for a one unit increase in capital. This is called the **marginal production of capital** or (or MPK). Down a similar path of logic, the differential

$$
\Delta Q \approx \frac{ \partial F }{ \partial L } \cdot \Delta L
$$

is the added output for a single unit increase in labor (where $K$ is fixed) and is said to be the **marginal production of labor** (or MPL). 

Together, they form the *linearization* of $Q$ where for sufficiently small $K$ and $L$,

$$
Q \approx F(K^{*}, L^{*}) + \underbrace{ \frac{ \partial F }{ \partial K } (K^{*}, L^{*}) \cdot \Delta K +  \frac{ \partial F }{ \partial L } (K^{*}, L^{*}) \cdot \Delta L }_{ \Delta Q }
$$

---

## Elasticity

Consider $Q_{1}(P_{1}, P_{2}, I)$ which represents the demand of good $1$ in terms of the prices of goods $1$ and $2$ and income. The partial derivative ${\partial Q_{1}}/{\partial P_{1}}$ is the rate of change of demand with respect to *own price*. If the price of good $1$ rises by $\Delta P_{1}$ (some small amount) then the demand for good $1$ changes roughly by 

$$
\Delta Q_{1} = \frac{ \partial Q_{1} }{ \partial P_{1} } \cdot \Delta P_{1}
$$

where $P_{2}$ is fixed at $P_{2}^{*}$ and $I$ is fixed at $I^{*}$. 

Since an increase in $P$ should correspond to lesser demand, we expect ${\partial  Q_{1}}/{\partial P_{1}}$ to be negative. However, this derivative fails to be a good measure for price sensitivity because its value depends on the units of quantity and units of price which makes cross-product price comparison impossible. 

$$
\text{units of price sensitivity} = \frac{\text{units of quantity demanded}}{\text{units of price}}
$$

We can circumvent this issue by only considering percentage changes which normalizes the change—getting rid of the units for both quantity and price. The **own price elasticity of demand** is defined as

$$
\epsilon_{1} = \frac{\%\ \text{change in demand}}{\%\ \text{change in price}} = \frac{{\Delta Q_{1}}/{Q_{1}}}{{\Delta P_{1}}/{P_{1}}} = \frac{P_{1}}{Q_{1}} \cdot \frac{\Delta Q_{1}}{\Delta P_{1}}
$$

Since $\displaystyle \frac{\Delta Q_{1}}{\Delta P_{1}} \approx \frac{ \partial Q_{1} }{ \partial P_{1} }$ for small $\Delta P_{1}$, the own price elasticity of demand is 

$$
\epsilon_{1} = \frac{P_{1}^{*} \cdot \frac{ \partial Q_{1} }{ \partial P_{1} }(P_{1}^{*}, P_{2}^{*}, I^{*})  }{Q_{1}(P_{1}^{*}, P_{2}^{*}, I^{*})}
$$

Elasticity of demand is usually negative. If $|\epsilon_{1}| < 1$ then good $1$ is said to be **inelastic**. If $|\epsilon_{1}| > 1$, then good $1$ is said to be **elastic**.

**Cross-price elasticity of demand** is the price sensitivity of one good with respect to the price of another good and is defined as

$$
\begin{align}
\epsilon_{Q_{1}, P_{2}} &  = \frac{\%\ \text{change in quantity for good 1}}{\%\ \text{change in price for good 2}} \\ \\
 & = \frac{{\Delta Q_{1}}/{Q_{1}}}{{\Delta P_{2}}/{P_{2}}} = \frac{P_{2}}{Q_{1}} \cdot \frac{\Delta Q_{1}}{\Delta P_{2}} \\ \\
 & = \frac{P_{2}^{*} \cdot \frac{ \partial Q_{1} }{ \partial P_{2} } (P_{1}^{*}, P_{2}^{*}, I^{*})}{Q_{1}(P_{1}^{*}, P_{2}^{*}, I^{*})}
\end{align}
$$

Cross-price elasticities can be either sign:

* If $\epsilon_{Q_{1}, P_{2}}$ and $\epsilon_{Q_{2}, P_{1}}$ are both positive then goods $1$ and $2$ are called **substitutes**. 

* If both $\epsilon_{Q_{1}, P_{2}}$ and $\epsilon_{Q_{2}, P_{1}}$ are negative then goods $1$ and $2$ are called **complements**. 

To interpret a *substitute* is that if the price increases in one good then the demand will go to some alternative like good $2$ and you'll see the demand for good $2$ rise; likewise for *complements*, if the price increases for good $1$ and you typically expect goods $1$ and $2$ to be bought together, then the demand for good $2$ will also decrease.  

**Income elasticity of demand** describes the sensitivity of demand to changes in income and is defined as

$$
\begin{align}
\epsilon_{Q_{1}, I} &  = \frac{\%\ \text{change in quantity demanded}}{\%\ \text{change in income}} \\ \\
 & = \frac{{\Delta Q_{1}}/{Q_{1}}}{{\Delta I}/{I}} = \frac{I}{Q_{1}} \cdot \frac{\Delta Q_{1}}{\Delta I} \\ \\
 & = \frac{I^{*} \cdot \frac{ \partial Q_{1} }{ \partial I } (P_{1}^{*}, P_{2}^{*}, I^{*})}{Q_{1}(P_{1}^{*}, P_{2}^{*}, I^{*})}
\end{align}
$$

# First Models

A simple *canonical* model of the economy could be

$$
\begin{align}
q_{t} & = ap_{t} + w_{t}  & (1)\\ 
q_{t} & = -bp_{t} + p_{t}^{xyz} & (2)
\end{align}
$$

Assuming that $a$ and $b$ are positive, we should be expect that the first equation is the *supply curve* as it's upward sloping which corresponds to an increase in quantity supplied when price increases; likewise, the second equation should be seen as the *demand curve* because the slope is negative corresponding to a decrease in quantity demanded when price increases. 

In this model, we have our **endogenous** variables $q_{t}$ and $p_{t}$, which are variables that are 'internal' to the system; these are the variables we solve for. There are **exogenous** variables $w_{t}$ and $p_{t}^{xyz}$ that are 'external' or 'outsize' to the system—these are given to us. Another type of variable that's given to us are **parameters** which in this case are $a$ and $b$; they can be thought of as 'inherent' to the system and determine its behavior. To *solve for a model*, we will have written the endogenous variables in terms of exogenous variables and parameters.

While there may be many markets to an economy, economists in macro are interested in the **general equilibrium** which models the whole economy. Suppose we are interested in an economy with a goods market, capital market, and labor market. That means we have 3 markets: 3 demand curves, 3 supply curves.

There are two caveats however:

1. Only relative prices matter. So to simplify the math of having to denominate in some unit of currency, we can set the price of one good to $1$ (that good would be called the **numeraire**) then denominate the other prices in terms of the price of that good. We are effectively writing our prices as the opportunity cost in terms of said good. 
2. **Walaras' law** states that because the economy will have some total demand (and supply), if there's an offset in demand within one market, there will be a corresponding shift in demand somewhere else in another market; it's said that <u>all markets clear</u>. So that allows us to only need to focus on two markets: If we solve the equilibrium for two markets, then in theory its guaranteed the third market will also be in equilibrium. 

## Firm's Problem

There are many firms in an economy, but we assume that these firms are optimizing their utility by <u>maximizing their profits</u> because often those are tied to the incentives of the owners, despite firms having complex incentive structures (i.e. employees are self-interested, regulations and creditor guidelines). 

The firm's problem is this: 

$$
\max_{K,L}\  P(K,L) \quad  \text{or} \quad \max_{K, L}\ \underbrace{ F(K, L }_{ \text{revenue} }) - \underbrace{ rK - wL }_{ \text{costs} }
$$

where $Y = F(K, L)$ is the production function and can be considered the 'revenue' component, $r$ is the rental rate for capital input $K$, and $w$ is the wage rate for labor input $L$. We have five endogenous variables: $L, w, K, r, Y$. Solving for this model demands that we have five equations: two demand and supply curves for each market (there are two), and an output equation. 

Firms take $r$ and $w$ as given because of perfect competition. That is one firm's actions (i.e. hiring and renting capital) do not affect the prices. This can have some conflict to those are on the left because often in reality we have *imperfect competition* where firms' actions do have an effect on the resulting prices such as Tech layoffs and huge investments in AI.   

## Properties of a Production Function

The general rules we should expect for our production function are: If we increase inputs, then outputs should increase, but there are diminishing returns. 

The following should then hold: 

$$
\begin{align}
\frac{ \partial F }{ \partial K } \geq 0 \quad \text{and} \quad \frac{ \partial F }{ \partial L } \geq 0 \\ \\
\frac{ \partial^{2} F }{ \partial K^{2} } \leq 0 \quad \text{and} \quad \frac{ \partial^{2} F }{ \partial L^{2} } \leq 0  
\end{align}
$$

The mixed partial $\displaystyle \frac{ \partial^{2} F }{ \partial K \partial L }$ is ambiguous and can go either way. However in general, we'd expect that the marginal product of labor to increase when we input more capital; that is, ${\partial^{2}F}/{\partial K \partial L} \geq 0$. 

### Cobb-Douglas 

A commonly used production function is the **Cobb-Douglas** production function which is given as

$$
Y = AK^{\alpha}L^{1 - \alpha}
$$

* where $A$ is called the **total factor productivity** and $\alpha \in (0, 1)$ is a parameter to the economy called the *capital share of production*, whereas the term $1- \alpha$ is called the *labor share of income*.

and its first- and second-order partial derivatives are

$$
\begin{align}
\frac{ \partial Y }{ \partial K } &  = \alpha AK^{\alpha - 1}L^{\alpha - 1} \geq 0 \\ \\
\frac{ \partial Y }{ \partial L } &  = (1-\alpha)AK^{\alpha}L^{-\alpha} \geq 0 \\ \\
\hline \\
\frac{ \partial^{2} Y }{ \partial K^{2} }  & = -\alpha(1-\alpha)AK^{\alpha}L^{-\alpha-1} \leq 0 \\ \\
\frac{ \partial^{2} Y }{ \partial K^{2} } &  = -\alpha(1-\alpha)AK^{\alpha-2}L^{1-\alpha} \leq 0 \\ \\
\frac{ \partial^{2} Y }{ \partial K \partial L } &  = \alpha (1-\alpha)AK^{\alpha-1}L^{-\alpha} \geq 0
\end{align}
$$

which checks out with the requirements we stated before. 

#### Constant Returns to Scale

Observe that this production function in mathematical terms is a *homogeneous function* of degree $1$; that is if we considered doubling our inputs then for $Y = F(K, L)$,

$$
\begin{align}
F(2K, 2L) &  = A(2K)^{\alpha} (2L)^{1- \alpha} \\ \\
 & = 2^{\alpha} \cdot 2^{1-\alpha} A K^{\alpha}L^{1-\alpha} \\ \\
 & = 2 F(K, L)
\end{align}
$$

In economic terms, this production function has **constant returns to scale**. Doubling the economy's inputs of production proportionately doubles its outputs. Suppose we make a replica of the economy like building factories of the same size and machinery and expanding our land use by double, then attach this to our current economy: The new output would be double the size of the current output. 

> [!note]
> This is due to the fact that the exponents for $K$ and $L$ add up to $1$. Let $\alpha$ be the exponent for $K$ and $\beta$ for $L$: If $\alpha + \beta > 1$, then the production function would have increasing returns to scale. If $\alpha + \beta < 1$, then there is decreasing returns to scale.

Why should this hold true on the aggregate scale? That is, how does output grow proportionally to the sizing of inputs when for individual firms, there are diminishing returns and optimal sizes of input. Since we are considering the aggregate model, we can assume that overall, firms are inputting at their optimal level—making choices which maximize their utility (profits). If we were to add a copy of all our factories with the same capacity, all that it takes to achieve the same amount of output is for each of those factories to reach their optimal levels. So the new added output in total is roughly the current output levels; this is called the **replication argument** because we are effectively saying we can replicate the economy. 

> [!excerpt]
> One implication is that over the long run immigration neither increases nor decreases output per capita (as long as the immigrants assimilate in terms of, for example, levels of education).

If we add $5\%$ to the population by mass immigration, it follows that the capital stock of the economy will grow by $5\%$ because we expect that the capital stock per worker to not drop. That then gives total production will grow by $5\%$ as well. 

There are two reasons as to why the replication argument might not hold in reality. One of the inputs of production is land so to increase all factors of production by $X\%$ or even doubling will mean that we must expand our land by that amount.  Often for developed economies, that's not possible because the *usage of land* is already at its limits or expansion is very slow. Another reason is the notion that most economic activity clusters around cities, so to add that many factories most likely in a populated city leads to positive *externalities* by clustering; yet, there are also negative externalities like congestion. For the production levels to increase 1-for-1 with sizing of inputs, we must be assuming that both the positive and negative externality forces counteract each other such that they cancel out their effects—less likely to be true in reality.  

## Optimal Labor and Capital Allocation

Recall that to solve for the maximum profit, we look for critical points that satisfy the following equations 

$$
\begin{align}
\frac{ \partial P }{ \partial K } &  = 0 \\ \\
\frac{ \partial P }{ \partial L }  & = 0
\end{align}
$$

> The technical details of checking for second-order conditions (i.e. checking if the determinant of the $2 \times 2$ Hessian matrix $\mathcal{H}_{P}$ is positive) are omitted. 

which after deriving gives

$$
\begin{align}
\alpha AK^{\alpha - 1}L^{1-\alpha} &  = r \\ \\
(1-\alpha)AK^{\alpha}L^{-\alpha} &  = w
\end{align}
$$

but recall that the LHS matches with the first-order partials of $Y$ so the equations become

$$
\begin{align}
\frac{ \partial Y }{ \partial K } &  = r \\ \\
\frac{ \partial Y }{ \partial L } & = w 
\end{align}
$$

which can be interpreted as the marginal product of capital meeting at the rental price of taking capital and the marginal product of labor meeting at wage rate. 

This speaks to how a firm chooses labor optimally: Firms will hire a worker exactly based on how much value that next worker produces. If they were to hire an extra worker where the diminishing returns will give that their (contribution) output is less than what their wage is worth—the firm is losing out. 

> [!note]
> The reason the math works out is because of *constant returns to scale* and the assumption of <u>perfect competition</u>. Because of perfect competition, all agents (firms) are price-takers and choose to break even at the marginal value added by the next worker or unit of capital. Otherwise, if firms had some monopsy (control of the demand) in say the labor market, they would pay workers as least as possible. 

Another way to interpret these conditions is that substituting $Y = AK^{\alpha}L^{1 - \alpha}$ so that we get

$$
\begin{align}
\frac{\alpha Y}{K} &  = r \to \alpha Y = rK \\ \\
(1-\alpha)\frac{Y}{L} &  = w \to (1-\alpha)Y = wL
\end{align}
$$

So the optimal capital and labor allocation choice is choosing a cost of borrowing capital or hiring labor such that they are equal to the share of the economy's production. 

This is where the shares of capital and labor come from, since the total labor compensation is defined as $wL$ and the proportion of production (or income) that goes to compensating labor is defined as ${wL}/{Y}$. Similarly, the proportion of production that goes to interest payments on capital is ${rK}/{Y}$. So,

$$
\alpha = \frac{rK}{Y}, \quad 1 - \alpha = \frac{wL}{Y}
$$

Because of perfect competition, there are zero profits for the firm (owners) so all of the 

> Factor shares

### Deriving Demand Curves and Supply Curves

Assuming the rest take on some set of values ($\alpha, A, L$), it is helpful to visualize the set of points that satisfy the optimal allocation choice in $(K, r)$ space. Before graphing, we can reason about what this curve might look like: A firm's capital input choice has no affect on $r$, but the converse is the true. If the rate to borrow capital $r$ goes down, then the firm will be influenced to borrow more capital—suggesting an inverse relationship. 

![[Pasted image 20260903010830.png]]

What we've derived is a firm's demand curve for capital, which is downwards sloping as expected.

Similarly, if we assumed the variables $\alpha, A, K$ took on some set of values, and visualized the curve in $(L, w)$ space. If the wage rate $w$ goes up, a firm may tighten their labor input $L$ by slowing hiring and/or letting go of workers. 

![[Pasted image 20260903011402.png]]


What has been derived is the demand curve in the labor market, also downwards sloping.

Suppose the quantity of labor and capital is supplied *inelastically*; that is, there is no effect on the supply of the respective markets by prices. We say the supply of capital is at some fixed constant $K = \overline{K}$ as well as labor $L = \overline{L}$. Visualizing this in their respective spaces looks like:

![[Pasted image 20260903013046.png]]

## Final Solution

The fifth and final equation of this model is the output equation which we can use the definition of our production function $Y = AK^{\alpha}L^{1-\alpha}$. 

Hence, altogether we have the five following equations which allows us to solve for price and quantity given a set of values. 

$$
\begin{align}
K &  = \overline{K}  & (1) \\ \\
L & = \overline{L}  & (2) \\ \\
r & = \alpha AK^{\alpha - 1}L^{1-\alpha} & (3) \\ \\
w & = (1-\alpha)AK^{\alpha}L^{-\alpha}  & (4) \\ \\
Y & = AK^{\alpha}L^{1 - \alpha} & (5)
\end{align}
$$

# Generalized Cobb-Douglas

We chose the *Cobb-Douglas* as our production function because the mathematics was easy laying the foundation for ideas we can build off of, and that the assumption of constant returns to scale yielded interesting results. However, one of the drawbacks from using the Cobb-Douglas to answer questions is assuming full employment—no unemployment at all. While we can consider how improvements in technology affect the labor share or influence real wages, the model has nothing to say about how technology might affect employment rates.

We need a more *generalized* model to describe the effects of displacement. The following model is called the **constant elasticity of substitution** (CES) production function and is given as

$$
Y_{t} = \left[ \alpha(A_{K, t}K_{t})^{\frac{\sigma - 1}{\sigma}} + (1 - \alpha) (A_{L, t}L_{t})^{ \frac{\sigma - 1}{\sigma}} \right]^{\frac{\sigma}{\sigma - 1}} 
$$

This function describes the production $Y_{t}$ at some time $t$ when inputted capital $K_{t}$ and labor $L_{t}$, alongside $A_{K, t}$ for capital-augmenting productivity and $A_{L, t}$ for labor-augmenting productivity (represents technology which makes labor/capital more productive). The parameters in this model are $\alpha$ and $\sigma$. 

The CES model has some similarities to the Cobb-Douglas. In fact, when $\sigma \to 1$, the production function converges to the Cobb-Douglas (proven via L'Hospital's rule).

Suppose the inputs labor and capital were scaled by some constant $\gamma$, then the output would be

$$
\begin{align}
Y_{t}  & = F(\gamma K_{t}, \gamma L_{t}) \\ \\
 & = \left\{ \alpha[A_{K, t} (\gamma K_{t})]^{\frac{\sigma - 1}{\sigma}} + (1 - \alpha) [A_{L, t} (\gamma L_{t})]^{ \frac{\sigma - 1}{\sigma}} \right\} ^{\frac{\sigma}{\sigma - 1}} \\ \\
 & = \left\{ \gamma ^{\frac{\sigma - 1}{\sigma}} \cdot\left[  \alpha(A_{K, t}K_{t})^{\frac{\sigma - 1}{\sigma}} + (1 - \alpha) (A_{L, t}L_{t})^{ \frac{\sigma - 1}{\sigma}} \right] \right\}^{\frac{\sigma}{\sigma - 1}} \\ \\
 & = \gamma F(K_{t}, L_{t})
\end{align}
$$

So this model also has constant returns to scale. 

To find the optimal allocation choice of firms with the profit function $P = Y_{t} - r_{t}K_{t} - w_{t}L_{t}$, we take first-order conditions,

$$
\begin{align}
\frac{ \partial P }{ \partial K_{t} } = 0 &  \to \frac{\sigma}{\sigma - 1} \left[ \alpha(A_{K, t}K_{t})^{\frac{\sigma - 1}{\sigma}} + (1-\alpha)(A_{L, t}L_{t})^{\frac{\sigma - 1}{\sigma}}\right]^{\frac{\sigma}{\sigma - 1} - 1} \cdot \alpha (A_{K, t})^{\frac{\sigma - 1}{\sigma}}\cdot \frac{\sigma - 1}{\sigma}(K_{t})^{\frac{\sigma - 1}{\sigma} - 1} = r_{t} \\ \\
\frac{ \partial P }{ \partial L_{t} } = 0 & \to \frac{\sigma}{\sigma - 1} \left[ \alpha(A_{K, t}K_{t})^{\frac{\sigma - 1}{\sigma}} + (1-\alpha)(A_{L, t}L_{t})^{\frac{\sigma - 1}{\sigma}}\right]^{\frac{\sigma}{\sigma - 1} - 1} \cdot (1-\alpha) (A_{L, t})^{\frac{\sigma - 1}{\sigma}}\cdot \frac{\sigma - 1}{\sigma}(L_{t})^{\frac{\sigma - 1}{\sigma} - 1} = w_{t} \\ \\
\end{align}
$$

And since $\frac{\sigma}{\sigma - 1} - 1 = \frac{1}{\sigma - 1} = \left( \frac{\sigma}{\sigma - 1} \right) \left( \frac{1}{\sigma} \right)$, after some simplifications we find that

$$
\begin{align}
r_{t} &  = \alpha (A_{K, t})^{\frac{\sigma - 1}{\sigma}} \left( \frac{Y_{t}}{K_{t}} \right)^{\frac{1}{\sigma}} \\ \\
w_{t} & = (1-\alpha)(A_{L, t})^{\frac{\sigma - 1}{\sigma}} \left( \frac{Y_{t}}{L_{t}} \right)^{\frac{1}{\sigma}}
\end{align}
$$

These are the new demand curves which describe a proportionally inverse relationship between wages and labor input—same for interest rates and capital inputs. When $\sigma \ne 1$, the quantity of labor and quantity of capital demanded becomes not only a function of their respective prices, but also a function of their respective productivities $A_{K, t}$ or $A_{L, t}$ and production itself $Y_{t}$.  

Below shows the capital demand curve graphed with some random set of reasonable values for $\alpha, A_{K, t}, Y_{t}$ and $\sigma$. If there's a change in the rental price or capital supplied, all we have to do is trace along the curve to find the new equilibrium (i.e., the red points). However, when there's a change in values for variables that are not on the axes, the demand curve shifts (or bends). For example, suppose capital-augmenting productivity increases (e.g., machines get better at doing a task than humans can). Then the slope of the demand curve changes—the blue curve becomes the red curve; this new curve shifts inwards and we can see firms are hesitant to give up machines (capital) when the price for capital $r$ increases (the blue points). 

![[Pasted image 20260909175708.png|400x500]]

## Elasticity (Revisited)

From the previously derived demand curves, we were able to make sense of what $\alpha$ and $(1-\alpha)$ meant in the model, but how about for $\sigma$?

To make sense of this parameter, take the logarithm and rearrange both equations to yield

$$
\begin{align}
\ln(K_{t}) & = - \sigma \ln(r_{t}) + \sigma \ln(\alpha) + (\sigma - 1)\ln(A_{K, t}) + \ln(Y_{t}) \\ \\
\ln(L_{t}) & = - \sigma \ln(w_{t}) + \sigma \ln(1-\alpha) + (\sigma -1) \ln(A_{L, t}) + \ln(Y_{t})
\end{align}
$$

Differentiating the respective equations with respect to $\ln(r)$ and $\ln(w)$ gives that

$$
\begin{align}
\frac{ \partial \ln(K_{t}) }{ \partial \ln(r_{t}) } &  = -\sigma \\ \\
\frac{ \partial \ln(L_{t}) }{ \partial \ln(w_{t}) }  & = -\sigma
\end{align}
$$

Recall that a percentage increase of $x$ is approximately the logarithm of the growth multiplier, that is $\ln(1+x) \approx x$. So because the above equations are essentially ratios of percent changes, the parameter $\sigma$ represents the **elasticity of capital demand** and **elasticity of labor demand**. 

Moreover, if we divide the first-order conditions by one another, take the log on both sides, and rearrange, we find

$$
\begin{align}
 & \frac{r_{t}}{w_{t}} = \frac{\alpha}{1-\alpha} \left( \frac{A_{K, t}}{A_{L, t}} \right)^{\frac{\sigma-1}{\sigma}} \left( \frac{L_{t}}{K_{t}} \right)^{\frac{1}{\sigma}} \\ \\
 & \ln\left( \frac{r_{t}}{w_{t}} \right) =  \frac{1}{\sigma} \ln\left( \frac{L_{t}}{K_{t}} \right) + \frac{\sigma-1}{\sigma}\ln\left( \frac{A_{K, t}}{A_{L, t}} \right) + \ln\left( \frac{\alpha}{1-\alpha} \right) \\ \\
 & \ln \left( \frac{L_{t}}{K_{t}} \right) =  \sigma \ln\left( \frac{r_{t}}{w_{t}} \right) - (\sigma-1) \ln\left( \frac{A_{K, t}}{A_{L, t}} \right) - \sigma \ln\left( \frac{\alpha}{1-\alpha} \right) \\ \\
 & \ln \left( \frac{K_{t}}{L_{t}} \right) =  -\sigma \ln\left( \frac{r_{t}}{w_{t}} \right) + (\sigma-1) \ln\left( \frac{A_{K, t}}{A_{L, t}} \right) + \sigma \ln\left( \frac{\alpha}{1-\alpha} \right)
\end{align}
$$


Another way to understand percent changes with logarithms is that if the change of $x$ is $\Delta x = x - x_{0}$ then $\Delta x \approx \ln({\Delta x}/{x_{0}})$. Keeping that in mind, the first term on the RHS of the above equation gives that a percent increase in the price of capital $r_{t}$ relative to the price of labor $w_{t}$ leads to a $\sigma$-percent decrease in the quantity of capital used $K_{t}$ relative to the quantity of labor deployed $L_{t}$. So $\sigma$ also represents the (constant) **elasticity of substitution** between capital and labor. 

> [!excerpt]
> When $\sigma$ is small, a one-percent fall in the relative price of capital versus labor results in a small increase in capital used in production relative to labor. This means that capital and labor are not easily substituted in production. It takes a large change in their relative price to induce an appreciable shift in their use in production. Conversely, when $\sigma$ is large, a one-percent fall in the relative price of capital versus labor results in a large shift towards capital and away from labor in production. In this case, capital and labor are easily substituted, and even a small change in their relative price is enough to appreciably shift their use in production.
> 

The following equation

$$
\ln \left( \frac{K_{t}}{L_{t}} \right) = -\sigma \ln\left( \frac{r_{t}}{w_{t}} \right)
$$

is the demand for capital relative to labor dependent on the rental price of capital relative to the wage, or the **relative demand curve**—the demand curve in $\left( {r_{t}}/{w_{t}}, {K_{t}}/{L_{t}} \right)$ space. Note that the slope of this curve is the elasticity of substitution $\sigma$. 
### Labor Share (Revisited)

We can solve for labor share by first starting with the demand curve for capital:

$$
\begin{align}
r_{t} & = \alpha {A_{K, t}}^{\frac{\sigma-1}{\sigma}} \left( \frac{Y_{t}}{K_{t}} \right)^{\frac{1}{\sigma}} & \text{Given} \\ \\
{r_{t}}^{ \sigma} & = \alpha^{ \sigma} {A_{K, t}}^{\sigma-1} \frac{Y_{t}}{K_{t}} & \text{Raise to}\ \sigma \\ \\
r_{t} & =\alpha^{\sigma} \left( \frac{A_{K, t}}{r_{t}} \right)^{\sigma-1} \frac{Y_{t}}{K_{t}} & \text{Divide by}\ {r_{t}}^{\sigma-1} \\ \\
\frac{r_{t}K_{t}}{Y_{t}} & =\alpha^{\sigma} \left( \frac{A_{K, t}}{r_{t}} \right)^{\sigma-1} & \text{Multiply by}\ \frac{K_{t}}{Y_{t}}
\end{align}
$$

The left-hand side of this rearranged equation is the capital share, the share of production which goes to paying for capital. Since profits are zero, the only other share is the labor share; the labor share is one minus the capital share. Let $S_{L, t}$ denote the labor share so we can write

$$
S_{L, t} = 1 - \frac{r_{t}K_{t}}{Y_{t}} = 1 - \alpha^{\sigma} \left( \frac{A_{K, t}}{r_{t}} \right)^{\sigma-1}
$$

When $\sigma > 1$, the labor share becomes dependent on the rental price of capital and the capital-augmenting productivity, often shrinking when the values $r_{t}$ or $A_{K, t}$ change. In this case, labor and capital are said to be **gross substitutes**. 
### Estimating Elasticity

So it must be that finding what the elasticity of substitution $\sigma$ is can be very important for completing models of real economies. However, because of the effects by **aggregation**, our intuition from choices by individual firms will not inform us about how overall the economy swaps between labor and capital. A researcher named Houthakker found that even if there is technology not substitutable for workers, that is $\sigma = 0$, in aggregate the production function became Cobb-Douglas which is the case that $\sigma = 1$. This means we need empirical data to estimate $\sigma$.

Recall that the slope of the relative demand curve, the demand curve in $\left( {r}/{w}, {K}/{L} \right)$ space, is the elasticity of substitution between labor and capital $\sigma$. If there are shifts in the supply curve alone, we can plot the relative price points (different equilibriums) and trace the relative demand curve—the rate of change between points estimates $\sigma$. Conversely, shifts in the relative demand curve can trace out the relative supply curve. But because there are movements by both curves in real-world data all the time, one cannot simply trace out the relative demand curve and get $\sigma$. A researcher must isolate for a movement in supply through "natural experiments" where *instrumental variables* are used. Instrumental variables are variables where their change in values can be argued to have very little effect on the demand curve but much effect on the supply curve: For example, we can be looking for variations in Brazil's weather and temperature which affect the world's supply of coffee but does very little on America's coffee demand to trace out the demand curve for the coffee market.
