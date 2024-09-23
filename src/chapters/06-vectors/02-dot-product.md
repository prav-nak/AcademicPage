# Dot product

```{definition}
**Example 1**
Given two vectors $\mathbf{a}$ and $\mathbf{b}$, the dot product between them, denoted by $\mathbf{a} \cdot \mathbf{b}$, is defined as follows:
\begin{align}
  \mathbf{a} \cdot \mathbf{b} = a_x \, b_x + a_y \, b_y + a_z \, b_z 
  \label{eq:DotProduct}
\end{align}
```

First notice that the dot between two vectors is a scalar. We will now do several examples to master how to calculate the dot product. 

```{example}
Find the dot product between the following two vectors:
  \begin{align}
\mathbf{a} &= 2 \, \widehat{\mathbf{i}} - \widehat{\mathbf{j}} \\  
\mathbf{b} &= \widehat{\mathbf{i}} + 2 \, \widehat{\mathbf{j}} - \widehat{\mathbf{k}}
\end{align}

**Solution.** In this example, the components of the vector $\mathbf{a}$ are
\begin{align}
&a_x = 2, a_y = -1, a_z = 0 
\end{align}
Likewise, the components of the vector $\mathbf{b}$ are
\begin{align}
&b_x = 1, b_y = 2, b_z = -1
\end{align}
Thus, using Eq. \ref{eq:DotProduct} the dot product amounts to
\begin{align}
\mathbf{a}\cdot\mathbf{b} = (2) \, (1) + (-1) \, (2) + (0)\, (-1) = 2 - 2 + 0 = 0
\end{align}
```

In the above example, it so happened that the dot product is zero. However, in general, a dot product can be zero, positive, or negative. The next two examples illustrate the possibility of the latter two cases. 

```{example}
Find the dot product between the following two vectors:
  \begin{align}
\mathbf{a} &= 2 \, \widehat{\mathbf{i}} - \widehat{\mathbf{j}} \\  
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
\mathbf{a}\cdot\mathbf{b} = (2) \, (1) + (-1) \, (1) + (0)\, (-1) = 2 - 1 + 0 = 1
\end{align}
which is a positive number.
```

```{example}
This example illustrates that a dot product can be negative. Consider the following two vectors:
  \begin{align}
\mathbf{a} &= -\widehat{\mathbf{i}} \\  
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
\mathbf{a}\cdot\mathbf{b} = (-1) \, (1) + (0) \, (1) + (0)\, (1) = -1 + 0 + 0 = -1
\end{align}
```

## Properties of dot products

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


