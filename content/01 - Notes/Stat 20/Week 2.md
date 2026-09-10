
# Contingency Tables

While we know standard operations for making sense of numerical variables (i.e. mean, variance, etc.), but how do we ask questions about categorical variables in our data? For ordinal categorical variables, they're similar to numerical discrete in that there are 'discrete jumps' between levels. We can perform a *one-hot encoding* to convert ordinal data to discrete; for example, converting 'Yes/No' data into binary 1's and 0's.

![[Pasted image 20260902102918.png]]

To make sense of *nominal categorical variables* in our data, we form a **contingency table** (usually out of a dataframe) that shows the frequency of observations which occur in combination of levels between two categorical variables. This reveals the relationship between variables. 

Out of a contingency table, we can visualize the relationship with a **bar chart**. There are two common ways to lay a bar chart: *stacked*, and *dodged* (or side-by-side). Stacked bar charts are great for comparing the sizes between levels of one variable and dodged bar charts are good for comparing the relative sizes between intersecting levels of two variables. 

![[Pasted image 20260902103207.png]]

## Counts to Proportions

Counting observations captures the overall magnitude of which variable's level is present in the data but converting that count to proportions measures the *relative magnitude*.

![[Pasted image 20260902104914.png]]

There are 3 various proportions that can be taken from the second table:

1. **Joint proportion**: proportion of observations of multiple variables that appear in combination between every level of said variables
    * Example: The proportion of boys that were sick was $0.35$ 
2. **Marginal proportion**: proportion of observations in a variable $X$ that appear for a single level of a variable $Y$
    * Example: The proportion of all children (both boys and girls) that were healthy was $0.28 + 0.23 = 0.51$
3. **Conditional proportion**: proportion of observations in a level of one variable that appear in another level of a second variable
    * Example: The proportion of healthy children that are only boys is ${0.28}/{0.63} = 0.44$ 

A bar chart can be *normalized* which just means converting the frequencies to proportions in the presentation. However, we can use conditional proportions which reveals the relationships between variables; it just matters what variable you're *conditioning* on because it can yield wildly different numbers.