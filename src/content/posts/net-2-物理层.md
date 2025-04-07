---
title: 物理层
published: 2025-03-26
updated: 2025-03-26
description: ''
image: ''
tags: [408统考]
category: '计算机网络'
draft: false 
lang: ''
---

# 1 通信基础

## 1.0 数据通信基础模型

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250406163425190.png"/>

## 1.1 信道、信号、带宽、码元、波特、速率、信源与信宿等基本概念

> 信道

信道一般都是用来表示向`某一个方向`传送信息的媒体。因此,一条通信电路往往包含一条发送信道和一条接收信道。

(1)单向通信   
又称为单工通信,即只能有一个方向的通信而没有反方向的交互。无线电广播或有线电广播以及电视广播就属于这种类型。

(2)双向交替通信   
又称为半双工通信,即通信的双方都可以发送信息,但不能双方同时发送(当然也就不能同时接收)。这种通信方式是一方发送另一方接收,过一段时间后可以再反过来。

(3)双向同时通信   
又称为全双工通信,即通信的双方可以同时发送和接收信息。

单向通信只需要一条信道,而双向交替通信或双向同时通信则都需要两条信道(每个方向各一条)。显然,双向同时通信的传输效率最高。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250406163643433.png"/>

> 信号

通信的目的是传送消息(message)。话音、文字、图像、视频等都是消息。

数据(data)是运送消息的实体。根据RFC4949给出的定义,数据是使用特定方式表示的信息,通常是有意义的符号序列。这种信息的表示可用计算机或其他机器(或人)处理或产生。

信号(signal) 则是数据的电气或电磁的表现。

(1)模拟信号,或连续信号——代表消息的参数的取值是连续的。

(2)数字信号,或离散信号——代表消息的参数的取值是离散的。

在使用时间域(或简称为时域)的波形表示数字信号时,代表不同离散数值的基本波形就称为码元。在使用二进制编码时,只有两种不同的码元,一种代表0状态而另一种代表1状态。



> 带宽

> 码元

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250406164413087.png"/>

> 波特

> 速率

> 信源

信源：产⽣和发送数据的源头；

> 信宿

信宿：接收数据的终点；
 
## 1.2 奈奎斯特定理与香农定理

## 1.3 编码与调制

来自信源的信号常称为基带信号(即基本频带信号)。像计算机输出的代表各种文字或图像文件的数据信号都属于基带信号。基带信号往往包含较多的低频分量,甚至有直流分量, 而许多信道并不能传输这种低频分量或直流分量。为了解决这一问题,就必须对基带信号进行调制(modulation)。

调制可分为两大类。

1. 一类是仅仅对基带信号的波形进行变换,使它能够与信道特性相适应。变换后的信号仍然是基带信号。这类调制称为基带调制。由于这种基带调制是把数字信号转换为另一种形式的数字信号,因此大家更愿意把这种过程称为编码(coding)。

2. 另一类调制则需要使用载波(carrier)进行调制,把基带信号的频率范围搬移到较高的频段,并转换为模拟信号,这样就能够更好地在模拟信道中传输。经过载波调制后的信号称为带通信号(即仅在一段频率范围内能够通过信道),而使用载波的调制称为`带通调制`。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250406161751536.png"/>

(1) 常用编码方式

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250406231236786.png"/>

不归零制:正电平代表1,负电平代表0。

归零制:正脉冲代表1,负脉冲代表0。

曼彻斯特编码:位周期中心的向上跳变代表0,位周期中心的向下跳变代表1。但也可反过来定义。

差分曼彻斯特编码:在每一位的中心处始终都有跳变。位开始边界有跳变代表0, 而位开始边界没有跳变代表1。

从自同步能力来看,不归零制不能从信号波形本身中提取信号时钟频率(这叫作没有自同步能力),而曼彻斯特编码具有自同步能力。

(2)基本的带通调制方法

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250406231320613.png"/>

调幅(AM),即载波的振幅随基带数字信号而变化。例如,0或1分别对应于无载波或有载波输出。

调频(FM),即载波的频率随基带数字信号而变化。例如,0或1分别对应于频率$f_1$或$f_2$。

调相(PM),即载波的初始相位随基带数字信号而变化。例如,0或1分别对应于相位0度或180度。

## 1.4 电路交换、报文交换与分组交换

## 1.5 数据报与虚电路

# 2 传输介质

## 2.1 双绞线、同轴电缆、光纤与无线传输介质

## 2.2 物理层接口的特性

1. 机械特性：接⼝所⽤接线器的⼀些物理属性如接⼝形状，接⼝尺
⼨，引线数⽬及排列；
2. 电⽓特性：接⼝电缆的各条线上出现的电压的范围，阻抗匹配，
传输速率，距离等；
3. 功能特性：某条线上出现的某⼀电平的电压的意义，接⼝部件信
号线的⽤途；
4. 过程特性：对于不同功能的各种可能事件的出现顺序，定义各条
物理线路的⼯作规程和时序关系。

<details style="color: darkred;">
  <summary style="cursor: pointer; color:rgb(247, 82, 6);"> 机械特性举例 </summary>
  <div style="padding: 10px; border: 1px solid #ccc; margin-top: 5px;">
  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407120828573.png"/>
  </div>
</details>

<details style="color: darkred;">
  <summary style="cursor: pointer; color:rgb(247, 82, 6);"> 电气特性举例 </summary>
  <div style="padding: 10px; border: 1px solid #ccc; margin-top: 5px;">
   <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407121152590.png"/>
  </div>
</details>

<details style="color: darkred;">
  <summary style="cursor: pointer; color:rgb(247, 82, 6);"> 功能特性举例 </summary>
  <div style="padding: 10px; border: 1px solid #ccc; margin-top: 5px;">
  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407121214574.png"/>
  </div>
</details>

<details style="color: darkred;">
  <summary style="cursor: pointer; color:rgb(247, 82, 6);"> 过程特性举例 </summary>
  <div style="padding: 10px; border: 1px solid #ccc; margin-top: 5px;">
  </div>
</details>


<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407120553380.png"/>



# 3 物理层设备

## 3.1 中继器

## 3.2 集线器
