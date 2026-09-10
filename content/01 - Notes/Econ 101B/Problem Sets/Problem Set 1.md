
# Short Answers

1. Why can we assume that one price in a general equilibrium model is the numeraire?

The reason why we can assume one price to be the numeraire is because in a general equilibrium model only relative pricing matters where rational agents make decisions based on trade-offs rather than nominal prices. Suppose an economy has $k$ markets and we take the goods market as the numeraire, then that leaves us with $(k-1)$ equations to solve for. Since the input prices were in terms of units of goods, the production output will also be denoted in units of goods. After finding the quantities that meet supply and demand for $k-1$ markets, the production output $Y$ is guaranteed by Walras' law to be the quantity which meets the supply and demand for the goods market. 

2. What is the replication argument?

The replication argument states that if an economy were to add a copy of itself, such as by building copies of all current factories, then the added output would (roughly) be the current economic output. Its implication can be found as the *constant scale to returns* feature in the Cobb-Douglas and CES models where doubling all production inputs leads to doubling the output. Despite the fact that an individual factory faces diminishing returns (e.g., labor redundancy, physical capacity), the replication argument says that total economic production grows proportional to the sizing of all inputs. That's because replicating all inputs to production means creating a completely separate but identical plant which produces up to the optimal capacity of the original factory.

3. With a Cobb-Douglas production function in the labor demand curve is $(1-\alpha)AK^{\alpha}L^{-\alpha} = w$. Explain intuitively why the right-hand side should equal the left-hand side when the firm chooses labor optimally.

Another way to interpret the labor demand curve is all points in $(L, w)$ space which satisfy the condition ${\partial F}/{\partial L} = w$ where ${\partial F}/{\partial L}$ is the *marginal product of labor* (MPL). When a firm chooses labor optimally, they will hire at exactly how much value is added by bringing the next worker. If a firm hires an extra worker crossing beyond the MPL, diminishing returns gives that this extra worker's contribution (to production) will be worth less than what their wage costs—the firm is losing out. The firm is also missing out if they don't take advantage of gains when the MPL exceeds the current wage (e.g., a firm makes a lot of initial gains in production via specialization).

4. How does competition in the labor market prevent firms from exploiting workers?

Assuming the competition in the labor market follows *perfect competition*: Firms cannot exploit workers by paying them below their marginal product because they are price takers and setting their own wage below what is the 'fair price' will cause another firm to 'hire away' the rest of their workers by paying them higher. 

5. What is the simultaneous equations problem?

Recall that the slope of the relative demand curve, the demand curve in $({r}/{w}, {K}/{L})$ space, is $-\sigma$.  If there are shifts in the supply curve alone, we can plot the relative price points (different equilibriums) and trace the relative demand curve—the rate of change between points estimates $\sigma$. Conversely, shifts in the relative demand curve can trace out the relative supply curve. But because there are movements by both curves in real-world data all the time, one cannot simply trace out the relative demand curve and get $\sigma$ nor trace out the relative supply curve.
# General Equilibrium Model

Consider an economy with the following linear production function:

$$
Y = aL + bK
$$

Let $w$ denote the wage in this economy and $r$ the rental rate of capital. Assume that the price of goods is the numeraire. Suppose the labor supply curve in this economy is $L = \overline{L}$ and the capital supply curve is $K = \overline{K}$, i.e., both labor and capital are supplied inelastically.

1. Is the production function in this economy constant returns to scale?

Yes, because for some constant $\gamma > 0$, 

$$
\begin{align}
Y &  = F(\gamma K, \gamma L) \\ \\
 & = a(\gamma L) + b(\gamma K) \\ \\
 & = \gamma(aL + bK) \\ \\
 & = \gamma F(K, L)
\end{align}
$$

so the production function is homogeneous of degree $1$. 

2. Write down the profit maximization problem of a firm in this economy. Use the profit maximization problem to derive the labor and capital demand curves in this economy. Be sure to discuss the demand for labor and capital at all levels of the wage and rental rate for capital.

The profit maximization problem of a firm in this economy can be written as

$$
\max_{K, L}\ \underbrace{ aL + bK - rK - wL }_{ P }
$$

We can try to take first-order conditions to find the set of points in the spaces $(K, r)$ and $(L, w)$ that represent a firm's decisions to maximize profits

$$
\begin{align}
 & \frac{ \partial P }{ \partial K } = 0 \implies  b = r \quad \text{or} \quad \frac{ \partial F }{ \partial K } = r \\ \\
 & \frac{ \partial P }{ \partial L } = 0 \implies a = w \quad \text{or} \quad \frac{ \partial F }{ \partial L } = w
\end{align}
$$

but quickly realize that there is no single point  $(K^{*}, L^{*})$ that solves these equations. The production function is linear so its marginal products of labor and capital are constant. Therefore, there is no maximum.

We can consider the various levels of wages in the labor market (we assume that the marginal product of labor is positive): 

1. When the wage $w$ exceeds the marginal product of labor $a$, that is $w > a$, every worker brings in $a$ value to production but costs $w$. Since the firm loses out for even hiring one worker, they don't hire at all and the quantity of labor demanded is zero. 
2. When the marginal product of labor exceeds the wage, the net profit every worker adds is $(a - w)$. Since there are no diminishing returns, a firm would hire an infinite amount of workers to capture as much profit as possible. 
3. But when the wage is exactly at the marginal product of labor, the firm is guaranteed to break even with every worker they hire and so the firm could hire as much as they want—that means $L$ can be $(0, \infty)$. 

The labor demand is said to be perfectly elastic. A similar case can be made for the demand of capital; hence, capital demand is also perfectly elastic. In $(L, w)$ and $(K, r)$ space, we can visualize their respective demand curves, $L_{D}$ and $K_{D}$.

![[Pasted image 20260907191213.png]]

3. Solve for the equilibrium in this economy. 

This model's endogenous variables were $L, K, r, w$ and $Y$. We found that when $w = a$ and $r = b$, the labor and capital demand was free to vary, that is $L_{D}, K_{D} : (0, \infty)$. But since labor and capital are supplied inelastically at some finite quantity $L_{S} = \overline{L}$ and $K_{S} = \overline{K}$, the only attainable solution for these markets to clear is exactly at those wage and rental rate levels when the firm hires (and borrows) exactly at where supply is. The equilibrium for the labor and capital market becomes $L_{D} = L_{S} = \overline{L}$ and $K_{D} = K_{S} = \overline{K}$ respectively.  After those two markets clear, by Walras' law, the last remaining market, the goods market, is guaranteed to clear. The goods market is also the numeraire, so because we denoted all prices in terms of units of goods, the production function's output $Y$ is denoted in units of goods. Inputting the necessary quantities we calculated before into $Y = F(K, L)$, we can find the quantity of goods produced that meets supply-and-demand, clearing the goods market. 

Summarizing all that information above,

$$
\boxed{ \begin{align}
 & L_{D} = L_{S} = \overline{L} & (1) \\ \\
 & K_{D} = K_{S} = \overline{K} & (2) \\ \\
 & w = a & (3) \\ \\
 & r = b & (4) \\ \\
 & Y = aL + bK & (5)
\end{align} } 
$$

4. Solve for the labor share in this economy.

Labor share is the proportion of production (an economy's total income) that goes to workers' compensation; that can be written as ${wL}/{Y}$. The labor market clears if and only if $w = a$, so when it clears the labor share is its factor share of production ${aL}/{Y}$. Substituting our definition of the production function, we can rearrange to find

$$
\begin{align}
\frac{wL}{Y} &  = \frac{aL}{Y} \\ \\
 & = \frac{aL}{aL + bK} \\ \\
 & = \frac{\frac{aL}{bK}}{1 + \frac{aL}{bK}} \\ \\
 & = \frac{1 + \frac{aL}{bK}- 1}{1 + \frac{aL}{bK}} \\ \\
 & = 1 - \frac{1}{1 + \frac{aL}{bK}}
\end{align}
$$

If we hold capital fixed at $K = \overline{K}$ but keep inputting into labor $L \uparrow$,  then the term on the right converges to zero and the labor share becomes the total share of production ${wL}/{Y} \to 1$. 

5. How does the labor share change if there is an influx of immigrants in this economy? I.e., the supply of labor increases to $L = \hat{L} > \overline{L}$. Briefly discuss the intuition for this result.

At the starting equilibrium, we have that $L_{D} = L_{S} = \overline{L}$ as well as $K_{D} = K_{S} = \overline{K}$. If an influx of immigrants come into our economy such that the labor supplies becomes $L_{S} = \hat{L} > \overline{L}$, the wage remains the same regardless of labor supply and a firm hires these new workers at the wage $w=a$. Recall that at $w=a$ or $w = {\partial F}/{\partial L}$, labor demand is indifferent to the amount of labor supplied because they are guaranteed to maximize their profits—breaking even with every worker that they hire. We assume that these new hires have the same marginal product as the current workers (i.e., similar-to-same talents, skills, and education). 

Differentiating the labor share function at its equilibrium with respect to $L$ while holding $K$ fixed at $K = \overline{K}$ gives us

$$
\frac{ d  }{ d L } \left[ \frac{wL}{Y} \right] = \frac{ d  }{ d L } \left[ \frac{aL}{aL + b\overline{K}} \right] = \underbrace{ \frac{a(aL + b\overline{K}) - a(aL)}{(aL + b \overline{K})^{2}} }_{ \text{Quotient Rule} } = \frac{ab \overline{K}}{Y^{2}} > 0

$$

Unlike the Cobb-Douglas function where the labor share is constant, this labor share depends on the input $L$. Because all new workers are paid their full marginal product, workers capture every margin of output they produce, leading to a strictly increasing labor share. This means that any additions to labor supply through say an influx of immigration leads to positive returns for the labor share. While the production function is linear, the returns to labor share from labor input are inversely square proportional to $Y(L)$. The economy's output can grow without any end but the additions to labor share for every added worker get smaller because any proportional share that's growing is bounded by $1$.  









