---
title: LaTeX公式书写范例
aliases: []
tags: [教程, LaTeX]
date: 2022-08-03T22:45:08+08:00
lastmod: 2022-11-21T22:02:47+08:00
from: 
url: /notes/2022/08/29/223905
---
# 行内公式与行间公式

```markdown
$l = x+y$  
$$l = x+ y$$
```

$l = x+y$  
$$l = x+ y$$

# 成组

```markdown
$x^{y_z}$ $x^y_z$
```

$x^{y_z}$ $x^y_z$

>[!tip]  
>单独显示大括号 {}，需要加反斜线`$\{…\}$`

# 常用字符

## 希腊字母

```markdown
|            |  希腊字母  |               |
|:----------:|:----------:|:-------------:|
|    小写    |    大写    |     斜体      |
|  $\alpha$  |    $A$     |               |
|  $\beta$   |    $B$     |               |
|  $\gamma$  |  $\Gamma$  |  $\varGamma$  |
|  $\delta$  |  $\Delta$  |  $\varDelta$  |
| $\epsilon$ |    $E$     |               |
|  $\zeta$   |    $Z$     |               |
|   $\eta$   |    $H$     |               |
|  $\theta$  |  $\Theta$  |  $\varTheta$  |
|  $\iota$   |    $I$     |               |
|  $\kappa$  |    $K$     |               |
| $\lambda$  | $\Lambda$  | $\varLambda$  |
|   $\mu$    |    $M$     |               |
|   $\nu$    |    $N$     |               |
|   $\xi$    |   $\Xi$    |   $\varXi$    |
|   $\pi$    |   $\Pi$    |   $\varPi$    |
|   $\rho$   |    $O$     |               |
|  $\sigma$  |  $\Sigma$  |  $\varSigma$  |
|   $\tau$   |    $T$     |               |
| $\upsilon$ | $\Upsilon$ | $\varUpsilon$ |
|   $\phi$   |   $\Phi$   |   $\varPhi$   |
|   $\chi$   |    $X$     |               |
|   $\psi$   |   $\Psi$   |   $\varPsi$   |
|  $\omega$  |  $\Omega$  |  $\varOmega$  |
```

|            |  希腊字母  |               |
|:----------:|:----------:|:-------------:|
|    小写    |    大写    |     斜体      |
|  $\alpha$  |    $A$     |               |
|  $\beta$   |    $B$     |               |
|  $\gamma$  |  $\Gamma$  |  $\varGamma$  |
|  $\delta$  |  $\Delta$  |  $\varDelta$  |
| $\epsilon$ |    $E$     |               |
|  $\zeta$   |    $Z$     |               |
|   $\eta$   |    $H$     |               |
|  $\theta$  |  $\Theta$  |  $\varTheta$  |
|  $\iota$   |    $I$     |               |
|  $\kappa$  |    $K$     |               |
| $\lambda$  | $\Lambda$  | $\varLambda$  |
|   $\mu$    |    $M$     |               |
|   $\nu$    |    $N$     |               |
|   $\xi$    |   $\Xi$    |   $\varXi$    |
|   $\pi$    |   $\Pi$    |   $\varPi$    |
|   $\rho$   |    $O$     |               |
|  $\sigma$  |  $\Sigma$  |  $\varSigma$  |
|   $\tau$   |    $T$     |               |
| $\upsilon$ | $\Upsilon$ | $\varUpsilon$ |
|   $\phi$   |   $\Phi$   |   $\varPhi$   |
|   $\chi$   |    $X$     |               |
|   $\psi$   |   $\Psi$   |   $\varPsi$   |
|  $\omega$  |  $\Omega$  |  $\varOmega$  |

## 数学符号

```markdown
|                   |   数学符号    |                 |                                            |
|:-----------------:|:-------------:|:---------------:|:------------------------------------------:|
|       $x+y$       |     $x-y$     |   $x\times y$   |                 $x\cdot y$                 |
| $x \ast y(x * y)$ |  $x \div y$   |    $x \pm y$    |                 $x \mp y$                  |
|       $x=y$       |   $x\neq y$   |   $x \leq y$    |                 $x \geq y$                 |
|   $x \approx y$   | $x \equiv y$  | $x \bigodot y$  |              $x \bigotimes y$              |
|     $x \in y$     | $x \subset y$ | $x \subseteq y$ |               $x \supset y$                |
|  $x \supseteq y$  | $\varnothing$ |   $x \cup y$  $x \cap y$  | $\lfloor x \rfloor$      $\lceil y \rceil$ |
```

|                   |   数学符号    |                       |                                            |
|:-----------------:|:-------------:|:---------------------:|:------------------------------------------:|
|       $x+y$       |     $x-y$     |      $x\times y$      |                 $x\cdot y$                 |
| $x \ast y(x * y)$ |  $x \div y$   |       $x \pm y$       |                 $x \mp y$                  |
|       $x=y$       |   $x\neq y$   |      $x \leq y$       |                 $x \geq y$                 |
|   $x \approx y$   | $x \equiv y$  |    $x \bigodot y$     |              $x \bigotimes y$              |
|     $x \in y$     | $x \subset y$ |    $x \subseteq y$    |               $x \supset y$                |
|  $x \supseteq y$  | $\varnothing$ | $x \cup y$ $x \cap y$ | $\lfloor x \rfloor$      $\lceil y \rceil$ |

## 常用形式

```

|               |                       |             常用形式              |                                                     |
|:-------------:|:---------------------:|:---------------------------------:|:---------------------------------------------------:|
|    $C_n^2$    |       $\vec a$        |        $\overrightarrow a$        |                      $\hat a$                       |
| $\overline a$ |    $\underline a$     |      $\overbrace{a+b}^{2.0}$      |              $\underbrace{a+b}_{2.0}$               |
|  $\uparrow$   |      $\Uparrow$       |           $\downarrow$            |                    $\Downarrow$                     |
| $\leftarrow$  |     $\Leftarrow$      |           $\rightarrow$           |                    $\Rightarrow$                    |
| $a\ b$(空格)  | $a\quad b$ (四个空格) | $1,2,\ldots,n$ (底端对齐的省略号) | $x_1^2 + x_2^2 + \cdots + x_n^2$ (中线对齐的省略号) |
```

|               |                       |             常用形式              |                                                     |
|:-------------:|:---------------------:|:---------------------------------:|:---------------------------------------------------:|
|    $C_n^2$    |       $\vec a$        |        $\overrightarrow a$        |                      $\hat a$                       |
| $\overline a$ |    $\underline a$     |      $\overbrace{a+b}^{2.0}$      |              $\underbrace{a+b}_{2.0}$               |
|  $\uparrow$   |      $\Uparrow$       |           $\downarrow$            |                    $\Downarrow$                     |
| $\leftarrow$  |     $\Leftarrow$      |           $\rightarrow$           |                    $\Rightarrow$                    |
| $a\ b$(空格)  | $a\quad b$ (四个空格) | $1,2,\ldots,n$ (底端对齐的省略号) | $x_1^2 + x_2^2 + \cdots + x_n^2$ (中线对齐的省略号) |


## 括号

```
 $(…)$ $[…]$ $\{…\}$ $\langle…\rangle$ $\vert…\vert$ $\Vert…\Vert$
```

 $(…)$ $[…]$ $\{…\}$ $\langle…\rangle$ $\vert…\vert$ $\Vert…\Vert$

# 常用公式

## 特殊符号

```
|            |          |          |  特殊符号   |           |           |         |
|:----------:|:--------:|:--------:|:-----------:|:---------:| --------- |:-------:|
| $\partial$ | $\infty$ | $\nabla$ | $\triangle$ | $\forall$ | $\exists$ | $\lnot$ |
```

|            |          |          |  特殊符号   |           |           |         |
|:----------:|:--------:|:--------:|:-----------:|:---------:| --------- |:-------:|
| $\partial$ | $\infty$ | $\nabla$ | $\triangle$ | $\forall$ | $\exists$ | $\lnot$ |

## 函数符

```

|                                 | 函数符                   |                                     |
| ------------------------------- | ------------------------ | ----------------------------------- |
| $\frac{x}{y}$                   | $\sqrt[x]{y}$            | $\log_n^2 5$                        |
| $\frac{\partial z}{\partial x}$ | $\max(A,B,C)$            | $sum_{i=0}^n$                       |
| $\displaystyle\sum_{i=0}^n$     | $\lim_{x\to\infty}$      | $\displaystyle\lim_{x\to\infty}$    |
| $\int_0^\infty{fxdx}$           | $\oint$ $\iint$ $\iiint$ | $\sin x$          $\cos x$ $\tan x$ |
```

|                                 | 函数符                   |                                     |
| ------------------------------- | ------------------------ | ----------------------------------- |
| $\frac{x}{y}$                   | $\sqrt[x]{y}$            | $\log_n^2 5$                        |
| $\frac{\partial z}{\partial x}$ | $\max(A,B,C)$            | $sum_{i=0}^n$                       |
| $\displaystyle\sum_{i=0}^n$     | $\lim_{x\to\infty}$      | $\displaystyle\lim_{x\to\infty}$    |
| $\int_0^\infty{fxdx}$           | $\oint$ $\iint$ $\iiint$ | $\sin x$          $\cos x$ $\tan x$ |


## 矩阵

|     起始标记     |    结束标记    | 行末标记 | 行间元素之间分隔 |
|:-----------------:|:---------------:|:---------:|:-----------------:|
| `\begin{matrix}` | `\end{matrix}` |   `\newline`   |       `&`        |


```
$$\begin{matrix}1&0&0\newline0&1&0\newline0&0&1\newline\end{matrix}$$  

$$\begin{bmatrix}1&0&0\newline0&1&0\newline0&0&1\newline\end{bmatrix}$$  

$$\begin{pmatrix}1&0&0\newline0&1&0\newline0&0&1\newline\end{pmatrix}$$  

$$\begin{Bmatrix}1&0&0\newline0&1&0\newline0&0&1\newline\end{Bmatrix}$$  

$$\begin{vmatrix}1&0&0\newline0&1&0\newline0&0&1\newline\end{vmatrix}$$  

$$\begin{Vmatrix}1&0&0\newline0&1&0\newline0&0&1\newline\end{Vmatrix}$$  
```

$$\begin{matrix}1&0&0\newline0&1&0\newline0&0&1\newline\end{matrix}$$  

$$\begin{bmatrix}1&0&0\newline0&1&0\newline0&0&1\newline\end{bmatrix}$$  

$$\begin{pmatrix}1&0&0\newline0&1&0\newline0&0&1\newline\end{pmatrix}$$  

$$\begin{Bmatrix}1&0&0\newline0&1&0\newline0&0&1\newline\end{Bmatrix}$$  

$$\begin{vmatrix}1&0&0\newline0&1&0\newline0&0&1\newline\end{vmatrix}$$  

$$\begin{Vmatrix}1&0&0\newline0&1&0\newline0&0&1\newline\end{Vmatrix}$$  

```
$\cdots$ 横省略号 $\vdots$ 竖省略号 $\ddots$斜省略号
```

$\cdots$ 横省略号 $\vdots$ 竖省略号 $\ddots$斜省略号

```
> [!example] 带省略号的矩阵  
> $$\begin{bmatrix} {a_{11}}&{a_{12}}&{\cdots}&{a_{1n}}\newline {a_{21}}&{a_{22}}&{\cdots}&{a_{2n}}\newline {\vdots}&{\vdots}&{\ddots}&{\vdots}\newline {a_{m1}}&{a_{m2}}&{\cdots}&{a_{mn}}\newline \end{bmatrix}$$
```

> [!example] 带省略号的矩阵  
> $$\begin{bmatrix} {a_{11}}&{a_{12}}&{\cdots}&{a_{1n}}\newline {a_{21}}&{a_{22}}&{\cdots}&{a_{2n}}\newline {\vdots}&{\vdots}&{\ddots}&{\vdots}\newline {a_{m1}}&{a_{m2}}&{\cdots}&{a_{mn}}\newline \end{bmatrix}$$

# 阵列

| 阵列起始、结束符 |                对齐方式                | 竖直线 |  水平线   |
|:----------------:|:--------------------------------------:|:------:|:---------:|
|    `{array}`     | `{}`声明(左对齐:l；居中：c；右对齐：r) |   \|   | `:\hline` |


```
> [!example] 阵列  
> $$\begin{array}{c|lll} {↓}&{a}&{b}&{c}\newline \hline {R_1}&{c}&{b}&{a}\newline {R_2}&{b}&{c}&{c}\newline \end{array}$$
```

> [!example] 阵列  
> $$\begin{array}{c|lll} {↓}&{a}&{b}&{c}\newline {R_1}&{c}&{b}&{a}\newline {R_2}&{b}&{c}&{c}\newline \end{array}$$

# 方程组

```
$$\begin{cases} a_1x+b_1y+c_1z=d_1\newline a_2x+b_2y+c_2z=d_2\newline a_3x+b_3y+c_3z=d_3 \end{cases} $$
```

$$\begin{cases} a_1x+b_1y+c_1z=d_1\newline a_2x+b_2y+c_2z=d_2\newline a_3x+b_3y+c_3z=d_3 \end{cases} $$
