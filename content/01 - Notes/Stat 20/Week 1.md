
## Types of Claims 

1. **Summary**: A numerical, graphical, or verbal description of an *aspect* of given data.

    - *Example*: The sample mean of some data summarizes all the information into a single number and is one way to describe the *central tendency* of the distribution. Another example of a summary includes proportions or percentages since they describe the way the population breaks down among given categorical variables. 

2. **Generalization**: Similar to *summary* but instead takes that summary and applies that description across a broader set of units (variables at play don't change).

    - *Example*: A teacher at Berkeley collects data from his students on how long their commute is to class typically. Summarizing the data, the teacher finds out that 30% of his class has a commute of 20 minutes or longer. A statement could be made that 30% of all Berkeley students also commute to class for 20 minutes or longer. We're generalizing the statistic to a broader class of students (does *all* imply Berkeley students across all time or just a specific time horizon?). Whether the generalization is true or not is to be tested. 

> You could think of a generalization as a reformulation of the original summary. 

3. **Causal Claim**: A claim that the change in the value of one variable directly influences the value of another variable. 

    - *Example*: A researcher makes a randomized controlled study with two groups of students, Group A and Group B, where Group A has less than 7 hours of sleep and Group B is not told to do anything with their sleep. Both groups take a math exam with same problems and time took. On seeing that the average score of Group A was lower than Group B, the researcher concludes that shorter sleep causes worsened performance in exams.  


> [!note] Properties of Causal Claims
> While causal claims can hold true (or convincingly seem to be true) across all time such as a *general*(ized) rule in physics, other causal claims can also include a specific date or time horizon in their statement. In general, a causal claim is inherently time-dependent, local, and context-dependent.

4. **Prediction**: Makes a guess about the value of an unknown variable based on values of other known variables.

    - *Example*: An online auction platform is rolling out a new feature called "Price Genie". When a seller inputs all of the information bout the object they wish to sell, the site generates a dollar amount that is their suggested price that the seller start the bidding at. This dollar amount is calculated from data on past sales of similar items. While the initial bidding price is what's being set (the choice is arbitrary), the actual variable we're trying to predict is the highest price a buyer is willing to pay for this product, also known as the *maximum willingness to pay* or *reservation price*, but we could also be trying to predict the optimal starting bid which doesn't deter buyers. 


> [!note] Differences between a Causal Claim and a Prediction
> While a causal claim and a prediction may have the other underlying in its statement, it's not necessary for them to depend on each other. Here's what makes a causal claim different from a prediction: For a prediction we don't care if there's in fact a link between the independent and dependent variables—only that there's a relationship. For causal claims, we do care; formulating a causal claim involves ruling out *confounding variables*. 

### Relationship Between Types of Claims

Many scenarios imply a claim without stating it, and even underlying those claims have their own claims. 

1. To make a generalization, you needed a summary or statistic to begin with. So generalizations depend on summaries.

2. When an effect is observed on some sample and we make a causal claim about that effect, a generalization was made since we're applying the observed effect across the broader population. 

3. A prediction depends on a generalization since we only care about the relationship between given variables and the target variable (based on past observations) to the future. Causation isn't even necessary, just that there happens to be an association between such variables. 

Hence, we can visualize the dependence with the following graph:

![[Pasted image 20260826191017.png]]