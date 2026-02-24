---
title: latex 工具 学习笔记
published: 2026-02-24
updated: 2026-02-24
description: '介绍latex工具的学习笔记'
image: ''
tags: [工具]
category: ''
draft: false 
lang: ''
---

# 记数学笔记配置

```latex
%!TEX program = xelatex

\documentclass[UTF8]{ctexart}
\usepackage{geometry}
\usepackage{amsmath,mathtools,mathdots,extarrows,psfrag,lipsum,array}
\usepackage{xcolor}
\usepackage{tikz,pgfplots,tcolorbox,graphicx}
\usepackage{caption,subcaption}
\usepackage{amssymb}
\usepackage{booktabs}
\usepackage{bm}
\usepackage{enumitem}
\usepackage{multicol,multirow}
%符合国标gbt7714的引用范式
\usepackage{gbt7714}
%目录的链接
\usepackage[hidelinks]{hyperref}
%常用的图案，用于区分定理、例题结束的标记
\usepackage{typicons}
%宏包{breqn}和tikz包{tikzmark}相互冲突，使用前者后会在后者的命令下反复报错'pgf cannot find shape a'之类.
%%%%%%%%%%%%%%new command/environment%%%%%%%%%%%%
\allowdisplaybreaks

\newcommand*\enumlabel[1]{
    \tikz[baseline=(char.base)]{\node[shape=rectangle,inner sep=2pt,fill=Blue] (char) {{\textcolor{white}{#1}}};
    }
}

\newcommand*\enulabel[1]{
    \tikz[baseline=(char.base)]{\node[shape=rectangle,inner sep=2pt] (char) {{\textcolor{Blue}{#1}}};
    }
}

\newcommand*\zheng{
    \tikz[baseline=(char.base)]{\node[shape=rectangle,inner sep=0pt] (char) {{\bfseries\heiti\textcolor{Light_Yellow}{证明:}}};
    }
}

\newcommand*\jie{
    \tikz[baseline=(char.base)]{\node[shape=rectangle,inner sep=0pt] (char) {{\bfseries\heiti\textcolor{Blue}{解:}}};
    }
}
%%%%%%%%%%%%%%%%%%graphic settings%%%%%%%%%%%%%%%%
\tcbuselibrary{external,breakable,skins}
\usetikzlibrary{decorations.pathreplacing,positioning,shapes.misc,decorations.markings,calc,intersections,arrows.meta,graphs,shapes.misc,decorations.pathmorphing,decorations.shapes,tikzmark,angles,quotes}
\geometry{b5paper,centering,scale=0.8,left=2cm,right=2cm,bottom=2cm,top=2.5cm}
\tikzset{every picture/.style={>=Latex}}
%%%%%%%%%%%%%%%%%%%fonts settings%%%%%%%%%%%%%%%%%
\setmainfont{Times New Roman}
\setsansfont{Georgia}
\setmonofont{Arial}
%%%%%%%%%%%%%%%%%%chapter settings%%%%%%%%%%%%%%%%
\ctexset{
    section={
    format+=\sectionFormat,
    titleformat=\tcblower,
    aftertitle=\end{tcolorbox}
    },
    subsection={
    format+=\sectionFormatt,
    titleformat=\tcblower,
    aftertitle=\end{tcolorbox}
    },
    subsubsection={
    format+=\sectionFormattt,
    titleformat=\tcblower,
    aftertitle=\end{tcolorbox}    
    }
    }
\newcommand\sectionFormat[1]{
\begin{tcolorbox}[colback=Cream_4!10,
    colframe=white,leftrule=0mm,sharp corners,toprule=0mm,bottomrule=0mm,rightrule=0mm,sidebyside,lefthand ratio=0.1,colupper=Blue,collower=Blue,fontupper=\LARGE,fontlower=\LARGE,lower separated=false]
#1
}
\newcommand\sectionFormatt[1]{
\begin{tcolorbox}[colback=white,
    colframe=white,leftrule=0mm,sharp corners,toprule=0mm,bottomrule=0mm,rightrule=0mm,sidebyside,lefthand ratio=0.05,colupper=Blue,collower=Blue,fontupper=\Large,fontlower=\Large,lower separated=false,size=minimal,beforeafter skip=1em]
#1
}
\newcommand\sectionFormattt[1]{
\begin{tcolorbox}[colback=white,
    colframe=white,sharp corners,leftrule=0mm,toprule=0mm,bottomrule=0mm,rightrule=0mm,sidebyside,lefthand ratio=0.05,colupper=Blue,collower=Blue,fontupper=\large,fontlower=\large,lower separated=false,size=minimal,beforeafter skip=1em]
#1
}
%%%%%%%%%%%%%%%%%tcolorbox settings%%%%%%%%%%%%%%%

\newtcolorbox{prf}[1][]{fonttitle=\bfseries\heiti,colback=white,coltitle=white,breakable,enhanced,attach boxed title to top left={xshift=10mm},sharp corners,title={证明},after title={#1},size=fbox,after upper=\hfill$\blacksquare $,frame hidden,boxed title style={colback=Vintage_3,colframe=Vintage_3,sharp corners},
overlay unbroken={
    \draw[Vintage_3,line width=0.5mm] (title.west) -- ([yshift=\tcboxedtitleheight/2]frame.north west) -- (frame.south west) -- (frame.south east);},
overlay first={
    \draw[Vintage_3,line width=0.5mm] (title.west) -- ([yshift=\tcboxedtitleheight/2]frame.north west) -- (frame.south west);},
overlay middle={
    \draw[Vintage_3,line width=0.5mm] (frame.north west)--(frame.south west);},
overlay last={
    \draw[Vintage_3,line width=0.5mm] (frame.north west)--(frame.south west)--(frame.south east);}
}

\newtcolorbox{theorem}[1][]{fonttitle=\bfseries\heiti,colback=white,frame hidden,breakable,title=#1,enhanced,attach boxed title to top left={xshift=10mm},sharp corners,
boxed title style={coltitle=white,colback=Blue,colframe=Blue,sharp corners},
overlay unbroken={
    \draw[Blue,line width=0.5mm] (title.west) -- ([yshift=\tcboxedtitleheight/2]frame.north west) -- (frame.south west) -- (frame.south east);},
overlay first={
    \draw[Blue,line width=0.5mm] (title.west) -- ([yshift=\tcboxedtitleheight/2]frame.north west) -- (frame.south west);},
overlay middle={
    \draw[Blue,line width=0.5mm] (frame.north west)--(frame.south west);},
overlay last={
    \draw[Blue,line width=0.5mm] (frame.north west)--(frame.south west)--(frame.south east);}
}

\newtcolorbox[auto counter,number within=section]{definition}[1][]{enhanced,frame hidden,colback=white,coltitle=Blue,fonttitle=\bfseries,title={定义~\thetcbcounter},detach title,before upper={\tcbtitle\quad},after title={\quad#1},breakable,sharp corners,borderline west={1mm}{0mm}{Cream_3}}

\newtcolorbox{case}{enhanced,colframe=Lake_Blue!10,colback=Lake_Blue!10,sharp corners,breakable,borderline west={1mm}{0mm}{Lake_Blue}}

\newtcolorbox[auto counter,number within=section]{liti}[1][]{colback=white,coltitle=Blue,frame hidden,breakable,before skip=1cm,title=错题回顾 \thetcbcounter,enhanced,attach boxed title to top left,sharp corners,fonttitle=\LARGE\heiti,
boxed title style={empty,colframe=Blue,size=minimal,overlay={\draw[Blue,line width=2pt]([yshift=2pt]frame.north west)--([yshift=2pt]frame.north east);}},
overlay unbroken={
    \draw[Blue,line width=1pt] ([yshift=2pt]title.north west) -- ([yshift=\tcboxedtitleheight+2pt]frame.north east);
    \draw[Blue,line width=1pt] (frame.south west)--(frame.south east);},
overlay first={
    \draw[Blue,line width=1pt] ([yshift=2pt]title.north west) -- ([yshift=\tcboxedtitleheight+2pt]frame.north east);},
overlay last={
    \draw[Blue,line width=1pt] (frame.south west)--(frame.south east);}
}

\newtcbox{\txe}[1][]{on line,arc=1pt,colback=#1!30,colframe=white,colupper=black,boxrule=0pt,boxsep=0pt,left=0pt,right=3pt,top=0pt,bottom=0pt}

\newtcolorbox[auto counter]{examp}[1][]{enhanced,frame hidden,colback=white,coltitle=Blue,fonttitle=\bfseries,title={例~\thetcbcounter},detach title,before upper={\tcbtitle},after title={\quad#1},breakable,sharp corners,size=minimal,
overlay unbroken={
    \node [yshift=0.5em] at (frame.south east) {\Large\color{Blue}\tiPinOutline};},
overlay last={
    \node [yshift=0.5em] at (frame.south east) {\Large\color{Blue}\tiPinOutline};}}

\newtcolorbox[auto counter]{ttheorem}[1][]{enhanced,frame hidden,colback=white,coltitle=Blue,title={\bfseries 定理~\thetcbcounter},detach title,before upper={\tcbtitle},after title={\heiti#1\quad},breakable,sharp corners,beforeafter skip=0.5em,size=minimal,
overlay unbroken={
    \node [yshift=0.5em] at (frame.south east) {\Large\color{Blue}\tiLightbulb};},
overlay last={
    \node [yshift=0.5em] at (frame.south east) {\Large\color{Blue}\tiLightbulb};}}

%%%%%%%%%%%%%%%%%%Color Definition%%%%%%%%%%%%%%%%
\definecolor{Light_Yellow}{HTML}{CF7F19}
\definecolor{Light_Green}{HTML}{007C63}
\definecolor{Lake_Blue}{HTML}{7192C5}
\definecolor{Blue}{HTML}{2e9ce9}
%Nature
\definecolor{Nature_1}{HTML}{F4FCD9}
\definecolor{Nature_2}{HTML}{C5D8A4}
\definecolor{Nature_3}{HTML}{BB9981}
\definecolor{Nature_4}{HTML}{534340}
%Vintage
\definecolor{Vintage_1}{HTML}{E5E3C9}
\definecolor{Vintage_2}{HTML}{B4CFB0}
\definecolor{Vintage_3}{HTML}{94B49F}
\definecolor{Vintage_4}{HTML}{789395}
%Cream
\definecolor{Cream_1}{HTML}{F7FBFC}
\definecolor{Cream_2}{HTML}{D6E6F2}
\definecolor{Cream_3}{HTML}{B9D7EA}
\definecolor{Cream_4}{HTML}{769FCD}

\title{\LaTeX{} Notes}
\author{知乎@可达可达}
\date{}

\begin{document}
\maketitle
\tableofcontents
\clearpage
\section{特殊环境}
\subsection{定理}
\subsubsection{中心极限定理}
\begin{theorem}[De Moivre-Laplace中心极限定理]
    设$\mu_n$为$n$重Bernoulli实验中事件$A$发生的次数,$p$为每次实验中$A$发生的概率,则对任意的$x\in \mathbb{R}$,有
\begin{equation*}
        \lim_{n \to \infty}P\left(\frac{\mu_n-np}{\sqrt{np(1-p)}}\leqslant x \right)=\int_{-\infty}^{x}\frac{1}{\sqrt{2\pi}}e^{-\frac{t^2}{2}}  \,dt 
\end{equation*}
\end{theorem}

\subsubsection{向量组的线性相关}
\begin{ttheorem}
    向量组$\alpha_1,\alpha_2,\dots,\alpha_s,(s \geqslant 2)$线性无关的充分必要条件是向量组中的每个向量都不能由其余向量线性表示.
\end{ttheorem}

\begin{ttheorem}
    如果向量组$\alpha_1,\alpha_2,\dots,\alpha_s$线性无关,而向量组$\alpha_1,\alpha_2,\dots,\alpha_s,\beta$线性相关,则向量$\beta$可由向量组$\alpha_1,\alpha_2,\dots,\alpha_s,(s \geqslant 2)$线性表示,并且表达式唯一.
\end{ttheorem}

\begin{ttheorem}
    如果向量$\beta$可由向量组$\alpha_1,\alpha_2,\dots,\alpha_s$线性表示,则$r(\alpha_1,\alpha_2,\dots,\alpha_s)=r(\alpha_1,\alpha_2,\dots,\alpha_s,\beta)$
\end{ttheorem}

\begin{ttheorem}[（积分判别法）]
    设$f(x)$是$[1,+\infty]$上连续、递减的正值函数,又$u_n=f(n)$,则$\sum^{\infty}_{n=1} u_n$和广义积分$\int_{1}^{+\infty} f(x) \,\mathrm{d}x $同时收敛或同时发散.
\end{ttheorem}

\begin{ttheorem}[（Leibniz定理）]
    如果交错级数$\sum^{\infty}_{n=1} (-1)^{n-1}u_n$满足$u_n \geqslant u_{n+1}$且$\lim_{n \to +\infty} =0$.则级数收敛,且其和$S \leqslant u_1$,其余项$\left\lvert r_n\right\rvert \leqslant u_{n+1}$.
\end{ttheorem}
\subsection{定义}
\begin{definition}
    设$(X,Y)$为二维随机向量,且$X,Y$的方差均为正,则称$\frac{Cov(X,Y)}{\sigma_X\sigma_Y}$为$X$与$Y$的相关系数,记为$\rho _{XY}$或简记为$\rho $,即\[
    \rho _{XY}=\frac{Cov(X,Y)}{\sigma_X\sigma_Y}=\frac{E[(X-\mu_X)(Y-\mu_Y)]}{\sigma_X\sigma_Y}.
    \]    
\end{definition}

\clearpage
\subsection{证明}
\begin{prf}[$\sum^{n}_{i=1}(x_i-\bar{x})(y_i-\bar{y})=\sum^{n}_{i=1}x_i(y_i-\bar{y})$]
    \begin{align*}
    \sum^{n}_{i=1}(x_i-\bar{x})(y_i-\bar{y})&=\sum^{n}_{i=1}(x_iy_i-\bar{y}x_i-\bar{x}y_i+\bar{x}\bar{y}) \\
    &=\sum^{n}_{i=1}x_iy_i-\bar{y}\sum^{n}_{i=1}x_i-\bar{x}\sum^{n}_{i=1}y_i+n\bar{x}\bar{y}=\sum^{n}_{i=1}x_iy_i-n\bar{x}\bar{y} \\
    &=\sum^{n}_{i=1}x_i(y_i-\bar{y}).
    \end{align*}
\end{prf}

\subsection{习题}

\begin{liti}    
    \begin{enumerate}[label=\protect\enumlabel{\thetcbcounter-\arabic*}, leftmargin=2em]
        \item 1+1=
        \item 1+2=
        \item 1+3=
        
        $\dotsb$
    \end{enumerate}
\end{liti}

\subsection{例题}
\begin{examp}{设$0<a<b<1,$证明:$\arctan b-\arctan a<\frac{b-a}{2ab}.$}
    \par \jie 构造$f(x)=\arctan x.$由拉格朗日中值定理,存在$\xi \in (a,b),f'(\xi)=\frac{f(b)-f(a)}{b-a}\implies \frac{1}{1+\xi^2}=\frac{\arctan b-\arctan a}{b-a},\frac{1}{1+\xi^2}<\frac{1}{1+a^2}<\frac{1}{b^2+a^2}<\frac{1}{2ab}\implies \arctan b-\arctan a<\frac{b-a}{2ab}.$
\end{examp}
\begin{examp}{设$f(x)$在$(a,b)$内二阶可导,且$f''(x)>0$,证明对于任意的$x_1,x_2 \in (a,b)$,且$x_1\neq x_2$且及$\lambda(0<\lambda<1)$,恒有$f[\lambda x_1+(1-\lambda)x_2]<\lambda f(x_1)+(1-\lambda)f(x_2).$}
    \par \zheng 不妨设$x_1<x_2$,令$\mu=\lambda x_1+(1-\lambda)x_2=\lambda(x_1-x_2)+x_2,$故$x_1<\mu<x_2.$存在$\xi_1 \in (x_1,\mu),f'(\xi_1)=\frac{f(\mu)-f(x_1)}{(\lambda-1)(x_1-x_2)},\xi_2 \in (\mu,x_2),f'(\xi_2)=\frac{f(x_2)-f(\mu)}{\lambda(x_2-x_1)}.$由$f''(x)>0\implies f'(\xi_2)>f'(\xi_1).$整理得$f[\lambda x_1+(1-\lambda)x_2]<\lambda f(x_1)+(1-\lambda)f(x_2).$
\end{examp}
\clearpage
\section{常用命令}
\subsection{公式标注}
\begin{equation}
    \tikzmarknode[fill=Blue!20]{d1}{f'(x)}+f(x) \tikzmarknode[fill=Blue!20]{d2}{\varphi '(x)} \xrightarrow{\text{构造}} f(x)\tikzmarknode[fill=Blue!20]{d8}{e^{\varphi (x)}}
\end{equation}
\tikz[remember picture,overlay]{\draw[thick,Blue] (d2.south) --++(0,-1em) --++(2cm,0) node[right](){$\bigstar $化简后出现一个共同的系数};}
\subsection{自定义序号列表}
常用的几个积分公式：
\begin{align*}
    \enulabel{1.} &\int k \,\mathrm{d}x=kx+C&
    \enulabel{2.} &\int x^\alpha\,\mathrm{d}x=\frac{x^{\alpha+1}}{\alpha+1}+C (\alpha\neq -1)\\
    \enumlabel{3.} &\int\frac{1}{x}\,\mathrm{d}x=\ln\left\lvert x\right\rvert +C&
    \enumlabel{4.} &\int a^x\,\mathrm{d}x=\frac{a^x}{\ln a}+C\\
\end{align*}
\subsection{文字标签}
\begin{table}[]
    \begin{tabular}{@{}cccc@{}}
    \toprule
    \textbf{书名} & \textbf{作者}   & \textbf{出版社}                                                               & \textbf{出版时间} \\ \midrule
    微观经济学：现代观点  & 哈尔·R.范里安      & \begin{tabular}[c]{@{}c@{}}\txe[Nature_1]{上海三联书店}\\      \txe[Nature_2]{上海人民出版社}\\      \txe[Nature_3]{格致出版社}\end{tabular} & 2015          \\
    宏观经济学       & N·格里高利·曼昆     & \txe[Vintage_4]{中国人民大学出版社}                                                                  & 2020          \\
    经济增长        & 罗伯特.J.巴罗      & \txe[Nature_3]{格致出版社}                                                                      & 2010          \\
    投资学         & 滋维·博迪         & \txe[Vintage_2]{机械工业出版社}                                                                    & 2017          \\
    线性代数应该这样学   & Sheldon Axler & \txe[Vintage_3]{人民邮电出版社}                                                                    & 2016          \\ \bottomrule
    \end{tabular}
\end{table}
\section{Tikz绘图示例}
\begin{figure}[htp]
    \centering
    \begin{tikzpicture}
        \draw[->] (0,0) -- (5,0);
        \draw[thick,Vintage_4,domain=1:4,name path=func] (0.5,2) .. controls (2.5,0) and (3,5) .. (4.5,3);
        \draw[Vintage_4] (0.5,0) node[below] {$a$} -- (0.5,2) (4.5,0) node[below] {$b$} -- (4.5,3);
        \foreach \min in {0.75,1,1.25,1.5,...,4.5}
            {\path[name path=agg] (\min,0) -- (\min,5);
            \path[name path=ag] (\min-0.25,0) -- (\min-0.25,5);
            \draw[Vintage_4,name intersections={of=agg and func, by=point},name intersections={of=ag and func, by=pnt},Vintage_4] let \p1 = (point), \p2=(pnt) in (\min,0) -- (point) -- (\x2,\y1) -- (pnt);
            }
        \path[name path=ab] (3.5,0) node[Vintage_4,below] {$i$} -- (3.5,5);
        \draw[name intersections={of=ab and func, by=point},decorate,decoration={brace,amplitude=3pt,mirror,raise=2pt}] (3.5,0) --node[xshift=5pt,right]{$f(a+\frac{b-a}{n}\cdot i)$} (point);
        \draw[Vintage_4,name intersections={of=ab and func, by=point},decorate,decoration={brace,amplitude=3pt,mirror,raise=2pt}] (2.5,0) --node[below,yshift=-2pt]{$\frac{b-a}{n}$} (2.75,0);
        \fill[Vintage_4,opacity=0.2](3.5,0) circle (1pt);
    \end{tikzpicture}
    \caption{黎曼积分的示意图}\label{riemann}
\end{figure}
\begin{figure}[htp]
\centering
\begin{tikzpicture}[baseline=(char.base)]
    \node(char) at (0,0) {};
    \draw(0.5,-0.8) coordinate (A)--(3.5,-0.8) coordinate (B)--(3.5,0.8) coordinate (C)--cycle pic ["$t$",draw,angle radius=0.5cm,angle eccentricity=1.5] {angle = B--A--C};
    \node (cha) at ($(0.5,-1)!0.5!(3.5,-1)$) [below] {$\sqrt{a^2-x^2}$};
    \node (cha) at ($(3.5,-0.8)!0.5!(3.5,0.8)$) [right] {$x$};
    \node (cha) at ($(0.5,-1)!0.5!(3.5,0.8)$) [above] {$a$};
    \node (cha) at (0.5,0) [align=left,above] {$\sin t=\frac{x}{a}$\\$\tan t=\frac{x}{\sqrt{a^2-x^2}}$\\$\cos t=\frac{\sqrt{a^2-x^2}}{a}$};
\end{tikzpicture}
\end{figure}

\begin{tikzpicture}
    \fill [fill = Vintage_4,fill opacity=0.5] (0.5,2) .. controls (1,0) and (1.5,3) .. (2.5,2) -- (2.5,0.5) -- (2.5,0.5) .. controls (1.5,1) and (1,0) .. (0.5,0.5) -- (0.5,2);
    \draw [->] (0,-0.5) -- (0,3) node[left] {$Y$};
    \draw [->] (-0.5,0) -- (3,0) node[below] {$X$};
    \draw [Vintage_4,thick] (0.5,2) .. controls (1,0) and (1.5,3) .. (2.5,2);
    \draw [Vintage_4,thick] (0.5,0.5) .. controls (1,0) and (1.5,1) .. (2.5,0.5);
    \draw [dashed] (0.5,0) node[below] {$a$} -- (0.5,2) (2.5,0) node[below] {$b$} -- (2.5,2); 
\end{tikzpicture}
\begin{tikzpicture}
    \fill [fill = Vintage_4,fill opacity=0.5] [domain=0.2:1,smooth] plot(\x,{ln(\x)}) -- (0.2,0) -- cycle;
    \fill [fill = Vintage_4,fill opacity=0.5] [domain=1:2.5,smooth] plot(\x,{ln(\x)}) -- (2.5,0) -- cycle;
    \draw [->] (0,-1.75) -- (0,1.75) node[left] {$Y$};
    \draw [->] (-0.5,0) -- (3,0) node[below] {$X$};
    \draw [Vintage_4,domain=0.2:2.5,smooth] plot(\x,{ln(\x)});
    \draw [Vintage_4,domain=0.2:1,smooth,dashed] plot(\x,{-ln(\x)});
\end{tikzpicture}
\begin{tikzpicture}
    \fill [fill = Vintage_4,fill opacity=0.5] [domain=0.2:2.5,smooth] plot(\x,{-0.35*(\x-0.5)^2+1.5}) -- (2.5,{-0.1*(2.5-0.5)^2+1}) [domain=2.5:0.2,smooth] -- plot(\x,{-0.1*(\x-0.5)^2+1}) -- cycle;
    \fill [fill = Vintage_4,fill opacity=0.3] [domain=0.2:2.5,smooth] plot(\x,{0.35*(\x-0.5)^2-1.5}) -- (2.5,{0.1*(2.5-0.5)^2-1}) [domain=2.5:0.2,smooth] -- plot(\x,{0.1*(\x-0.5)^2-1}) -- cycle;
    \draw [->] (0,-1.75) -- (0,1.75) node[left] {$Y$};
    \draw [->] (-0.5,0) -- (3,0) node[below] {$X$};
    \draw [Vintage_4,domain=0.2:2.5,smooth] plot(\x,{-0.35*(\x-0.5)^2+1.5});
    \draw [Vintage_4,domain=0.2:2.5,smooth] plot(\x,{-0.1*(\x-0.5)^2+1});
    \draw [Vintage_4,domain=0.2:2.5,smooth,dashed] plot(\x,{0.35*(\x-0.5)^2-1.5});
    \draw [Vintage_4,domain=0.2:2.5,smooth,dashed] plot(\x,{0.1*(\x-0.5)^2-1});
    \draw [dashed] (0.2,{0.35*(0.2-0.5)^2-1.5}) -- (0.2,0) node[below] {$a$} -- (0.2,{-0.35*(0.2-0.5)^2+1.5}) (2.5,{0.35*(0.2-0.5)^2-1.5}) -- (2.5,0) node[below] {$b$} -- (2.5,{-0.35*(0.2-0.5)^2+1.5}); 
\end{tikzpicture}
\end{document}
```

<!-- 基础版（适配Markdown渲染环境） -->
<div style="
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    padding: 16px;
    margin: 10px 0;
    background: #f6f8fa;
    transition: all 0.2s;
">
  <a href="https://www.zhihu.com/question/362654946" target="_blank" style="
      text-decoration: none;
      color: inherit;
      display: block;
  ">
    <h3 style="
        margin: 0 0 8px 0;
        color:rgb(14, 54, 233);
        font-size: 1.1em;
    "> latex 工具 参考资料</h3>
    <p style="
        margin: 0;
        color: #586069;
        font-size: 0.9em;
    ">本链接链接至latex 工具 参考资料</p>
  </a>
</div>

## 将笔记导出为pdf添加至博客系统

```html
<!-- 内嵌 PDF 预览框，设置宽高和样式 -->
<div style="width: 100%; height: 800px; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
  <embed
    src="/pdfs/a.pdf"
    type="application/pdf"
    width="100%"
    height="100%"
  />
</div>
```

<!-- 内嵌 PDF 预览框，设置宽高和样式 -->
<div style="width: 100%; height: 800px; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
  <embed
    src="/pdfs/b.pdf"
    type="application/pdf"
    width="100%"
    height="100%"
  />
</div>