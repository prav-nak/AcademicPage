# Addition of vectors 

```{definition}
**Definition 1.**
The sum of two $\mathbf{a}$ and $\mathbf{b}$, denoted by $\mathbf{a} + \mathbf{b}$, is defined as follows:
\begin{align}
  \mathbf{a} + \mathbf{b} = (a_x + b_x) 
  \label{eq:Sum_of_two_vectors}
\end{align}
```

The summation of two vectors is a vector. It is now to practice the summation of two vectors using several examples. 

```{example}
**Example 1.**
Add the following two vectors: 
  \begin{align}
\mathbf{a} &= 2 \\, \widehat{\mathbf{i}} - \widehat{\mathbf{j}} \\\  
\mathbf{b} &= \widehat{\mathbf{i}} + 2 \\, \widehat{\mathbf{j}} - \widehat{\mathbf{k}}
\end{align}

**Solution.** In this example, the components of the vector $\mathbf{a}$ are
\begin{align}
&a_x = 2, a_y = -1, a_z = 0 
\end{align}
Likewise, the components of the vector $\mathbf{b}$ are
\begin{align}
&b_x = 1, b_y = 2, b_z = -1
\end{align}
Thus, using Eq. \ref{eq:SumVectors} the summation amounts to
\begin{align}
\mathbf{a} + \mathbf{b} = (2 + 1) \\, \widehat{\mathbf{i}} + (-1 + 2) \\, \widehat{\mathbf{j}} + (0 -1) \\, \widehat{\mathbf{k}} 
= 3 \\, \widehat{\mathbf{i}} + \widehat{\mathbf{j}} - \widehat{\mathbf{k}} 
\end{align}
```

## 2. Subtraction of vectors 
```{example}
**Example 2.**
Find the dot product between the following two vectors:
  \begin{align}
\mathbf{a} &= 2 \, \widehat{\mathbf{i}} - \widehat{\mathbf{j}} \\\ 
\mathbf{b} &= \widehat{\mathbf{i}} + \widehat{\mathbf{j}} - \widehat{\mathbf{k}}
\end{align}

**Solution.** The components of the vector $\mathbf{a}$ remain the same as the previous example: 
\begin{align}
&a_x = 2, a_y = -1, a_z = 0 
\end{align}
However, the components of $\mathbf{b}$ differ from the previous example and are 
\begin{align}
&b_x = 1, b_y = 1, b_z = -1
\end{align}
Using the definition Eq. \ref{eq:DotProduct} the dot product is
\begin{align}
\mathbf{a}\cdot\mathbf{b} = (2) \\, (1) + (-1) \\, (1) + (0) \\, (-1) = 2 - 1 + 0 = 1
\end{align}
which is a positive number.
```

```{example}
**Example 3.**
This example illustrates that a dot product can be negative. Consider the following two vectors:
  \begin{align}
\mathbf{a} &= -\widehat{\mathbf{i}} \\\ 
\mathbf{b} &= \widehat{\mathbf{i}} + \widehat{\mathbf{j}} + \widehat{\mathbf{k}}
\end{align}
Find $\mathbf{a} \cdot \mathbf{b}$. 

**Solution.** The components of the vectors $\mathbf{a}$ and $\mathbf{b}$ are
\begin{align}
&a_x = -1, a_y = 0, a_z = 0 \\
&b_x = 1, b_y = 1, b_z = 1
\end{align}
Again using the definition Eq. \ref{eq:DotProduct} the dot product is
\begin{align}
\mathbf{a}\cdot\mathbf{b} = (-1) \\, (1) + (0) \\, (1) + (0) \\, (1) = -1 + 0 + 0 = -1
\end{align}
```

## Properties of dot products

The dot product is symmetric. Put it differently, dot product satisfies commutative property. Mathematically, 
\begin{align}
\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}
\end{align}

```{exercise}
Using the following two vectors, verify that the dot product is symmmetric (i.e., commutative). 
\begin{align}
\mathbf{a} &= 2 \, \widehat{\mathbf{i}} - \widehat{\mathbf{j}} \\  
\mathbf{b} &= \widehat{\mathbf{i}} + 2 \, \widehat{\mathbf{j}} - \widehat{\mathbf{k}}
\end{align}
```

```{exercise}
Is the following math operation valid: $\mathbf{a} \cdot b \cdot c$.
```
