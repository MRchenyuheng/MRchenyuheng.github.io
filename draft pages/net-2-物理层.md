---
title: 物理层
published: 2025-04-06
updated: 2025-04-07
description: '计算机网络物理层'
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

传输媒体是计算机网络设备之间的物理通路,也称为传输介质或传输媒介。
传输媒体并不包含在计算机网络体系结构中。

信道是传输系统的逻辑通路。 
传输介质也称传输媒体/传输媒介，是数据传输系统中在发送设备和接收设备之间的物理通路 

传输介质可认为是第0层，它传输的是信号，但不知道信号是什么意思，根据规定的电⽓特性来识别⽐特。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407122515555.png"/>

## 2.1 双绞线、同轴电缆、光纤与无线传输介质

> 双绞线

把两根互相绝缘的铜导线并排放在一起,然后用规则的方法绞合(twist)起来就构成了双绞线。

通常将一定数量的这种双绞线捆成电缆,在其外面包上护套。现在的以太网(主流的计算机局域网)基本上也是使用各种类型的双绞线电缆进行连接的。

更好的办法是给电缆中的每一对双绞线都加上铝箔屏蔽层(记为FTP或U/FTP,U表明对整条电缆不另增加屏蔽层)。如果在此基础上再对整条电缆添加屏蔽层, 则有F/FTP(整条电缆再加上铝箔屏蔽层)或S/FTP(整条电缆再加上金属编织层进行屏蔽)。所有的屏蔽双绞线都必须有接地线

绞合度越高的双绞线能够用越高的数据率传送数据。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407133532308.png"/>

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407133838037.png"/>

> 同轴电缆

同轴电缆由内导体铜质芯线(单股实心线或多股绞合线)、绝缘层、网状编织的外导体屏蔽层(也可以是单股的)以及绝缘保护套层所组成。由于外导体屏蔽层的作用,同轴电缆具有很好的抗干扰特性,被广泛用于传输较高速率的数据。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407134332353.png"/>

> 光纤

光纤通信利用光脉冲在光纤中的传递来进行通信。由于可见光的频率非常高(约为108MHz量级), 因此一个光纤通信系统的传输带宽远大于目前其他各种传输媒体的带宽。

因此,可以存在多条不同角度入射的光线在一条光纤中传输。这种光纤就称为多模光纤。

若光纤的直径减小到只有一个光的波长,则光纤就像一根波导那样,可使光线一直向前传播,而不会产生多次反射。这样的光纤称为单模光纤。


<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407134822293.png"/>

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407134844810.png" width="80%" height="80%"/>

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407134805866.png"/>

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407135235125.png"/>

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407135313964.png"/>

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407135620238.png"/>

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407135915368.png"/>

> 无线电波

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407135508919.png"/>

> 微波

为实现远距离通信必须在一条微波通信信道的两个终端之间建立若干个中继站。

中继站把前一站送来的信号经过放大后再发送到下一站,这种通信方式称为“微波接力”。大多数长途电话业务使用4GHz~6 GHz的频率范围。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407141422414.png"/>

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407141504066.png"/>

优点

1. 微波波段频率很高,其频段范围也很宽,因此其通信信道的容量很大。
2. 因为工业干扰和天电干扰的主要频谱成分比微波频率低得多,对微波通信的危害比对短波和米波(即甚高频)通信小得多,因而微波传输质量较高。
3. 与相同容量和长度的电缆载波通信比较,微波接力通信建设投资少,见效快,易于跨越山区、江河。

缺点

1. 相邻站之间必须直视(常称为视距LOS(Line Of Sight)),不能有障碍物。有时一个天线发射出的信号也会分成几条略有差别的路径到达接收天线,因而造成失真。
2. 微波的传播有时也会受到恶劣气候的影响。
3. 与电缆通信系统比较,微波通信的隐蔽性和保密性较差。
4. 对大量中继站的使用和维护要耗费较多的人力和物力。

> 红外线

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250407141737317.png"/>
> 激光

> 可见光



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
