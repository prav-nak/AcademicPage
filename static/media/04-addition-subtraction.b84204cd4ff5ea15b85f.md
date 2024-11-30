# Addition of vectors 

```{definition}
**Definition 1.**
Given two vectors $\mathbf{a}$ and $\mathbf{b}$, the dot product between them, denoted by $\mathbf{a} \cdot \mathbf{b}$, is defined as follows:
\begin{align}
  \mathbf{a} \cdot \mathbf{b} = a_x \\, b_x + a_y \\, b_y + a_z \\, b_z 
  \label{eq:DotProduct}
\end{align}
```

First notice that the dot between two vectors is a scalar. This is the reason why dot product is also referred to as the **scalar product**. We will now do several examples to master how to calculate the dot product. 

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
Thus, using Eq. \ref{eq:DotProduct} the summation amounts to
\begin{align}
\mathbf{a}\cdot\mathbf{b} = (2 + 1) \\, \widehat{\mathbf{i}} + (-1 + 2) \\, \widehat{\mathbf{j}} + (0 -1) \\, \widehat{\mathbf{k}} 
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