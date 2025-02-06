# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The recursive part is will a sum because it's divided by 3 each recursive step. So we can find the pattern and turn that into the sum of the splitting and add n for the summing which will take n time. At the end of the recursive call.
```math
T(n) =
\begin{cases}
    3,  &\text{if $n < 3$} \\
    T(n/3) + 3, &\text{if $n > 3$}
\end{cases}
```

```math
T(n) = 3T(n/3) + 3 \\
= 3(3T(n/9)+1)+3 \\
= 9T(n/9) + 6 \\
... \\
= 3^i T(n/3^i)  + 3i 
```
for $i = log_3 n$
```math
nT(1) + 3 lg n = n + 3 lg n \in \Theta (n)
```

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

