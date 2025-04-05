---
title: 计算机网络概述
published: 2025-03-26
updated: 2025-03-26
description: ''
image: ''
tags: [408统考]
category: '计算机网络'
draft: false 
lang: ''
---

# 1 计算机网络基本概念

### 1.1.1 计算机网络的定义

计算机网络主要是由一些通用的、可编程的硬件互连而成的,而这些硬件并非专门用来实现某一特定目的(例如,传送数据或视频信号)。这些可编程的硬件能够用来传送多种不同类型的数据,并能支持广泛的和日益增长的应用。

根据这个定义:(1)计算机网络所连接的硬件,并不限于一般的计算机,而是包括了智能手机或智能电视机;(2)计算机网络并非专门用来传送数据,而是能够支持很多种应用(包括今后可能出现的各种应用)。当然,没有数据的传送,这些应用是无法实现的。
请注意,上述的“可编程的硬件”表明这种硬件一定包含有中央处理器CPU。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405183719833.png"/>

### 1.1.2 计算机网络的组成

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250326111023294.png" height="60%" width="60%" />

(1)边缘部分由所有连接在互联网上的主机组成。这部分是用户直接使用的,用来进行通信(传送数据、音频或视频)和资源共享。

(2)核心部分由大量网络和连接这些网络的路由器组成。这部分是为边缘部分提供服务的(提供连通性和交换)。

> 网络的核心部分

网络核心部分是互联网中最复杂的部分,因为网络中的核心部分要向网络边缘部分中的大量主机提供连通性,使边缘部分中的任何一台主机都能够与其他主机通信。

电路交换——整个报文的比特流连续地从源点直达终点,好像在一个管道中传送。
报文交换——整个报文先传送到相邻节点,全部存储下来后查找转发表,转发到下一个节点。
分组交换——单个分组(这只是整个报文的一部分)传送到相邻节点,存储下来后查找转发表,转发到下一个节点。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405134308536.png"/>


## 1.1.3 计算机网络的功能

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405183317942.png"/>

## 1.2 计算机网络的分类

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405155248610.png"/>

> 覆盖范围

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405132130164.png"/>

个人区域网就是在个人工作的地方把属于个人使用的电子设备(如便携式电脑等)用无线技术连接起来的网络,因此也常称为无线个人区域网WPAN(Wireless PAN),

局域网一般用微型计算机或工作站通过高速通信线路相连(速率通常在10 Mbit/s以上),但地理上则局限在较小的范围(如lkm左右)。

城域网的作用范围一般是一个城市, 可跨越几个街区甚至整个城市,其作用距离约为5~50 km。城域网可以为一个或几个单位所拥有,也可以是一种公用设施,用来将多个局域网进行互连。

广域网是互联网的核心部分,其任务是长距离(例如,跨越不同的国家)运送主机所发送的数据。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405155317266.png"/>

> 拓扑结构

|      |      |
| ---- | ---- |
|  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405132415518.png"/>    |  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405132528948.png"/>     |
| <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405132509261.png"/>     |    <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405132444269.png"/>   |

> 使用者

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405134431321.png"/>

## 1.3 计算机网络的主要性能指标

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405140533735.png"/>

> 速率

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405140734711.png"/>

> 带宽

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405143517198.png"/>

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405155430669.png"/>

> 吞吐量

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405151043753.png"/>

> 时延

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405151532470.png"/>

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405151717601.png"/>

> 时延带宽积

时延带宽积是传播时延和带宽的乘积。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405152327855.png"/>

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405152539347.png"/>

> 往返时间 RTT

往返时间(Round-Trip Time,RTT)是指从发送端发送数据分组开始,到发送端收到接收端发来的相应确认分组为止,总共耗费的时间。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405153229745.png"/>

> 利用率

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405153804352.png"/>

> 丢包率

丢包率是指在一定的时间范围内,传输过程中丢失的分组数量与总分组数量的比率。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405154308833.png" height="40%" width="40%"/>

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405154417409.png"/>

# 2 计算机网络体系结构

## 2.1 计算机网络分层结构

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405160639992.png"/>

## 2.2 计算机网络协议、接口、服务等概念

当研究开放系统中的信息交换时,往往使用实体(entity)这一较为抽象的名词表示任何可发送或接收信息的硬件或软件进程。

协议是控制两个对等实体(或多个实体)进行通信的规则的集合。协议的语法方面的规则定义了所交换的信息的格式,而协议的语义方面的规则就定义了发送者或接收者所要完成的操作,例如,在何种条件下,数据必须重传或丢弃。

在协议的控制下,两个对等实体间的通信使得本层能够向上一层提供服务。要实现本层协议,还需要使用下面一层所提供的服务。
一定要弄清楚,协议和服务在概念上是很不一样的。
首先,协议的实现保证了能够向上一层提供服务。使用本层服务的实体只能看见服务而无法看见下面的协议。也就是说,下面的协议对上面的实体是透明的。
其次,协议是“水平的”,即协议是控制对等实体之间通信的规则。但服务是“垂直的”,即服务是由下层向上层通过层间接口提供的。另外,并非在一个层内完成的全部功能都称为服务。只有那些能够被高一层实体“看得见”的功能才能称之为“服务”。上层使用下层所提供的服务必须通过与下层交换一些命令,这些命令在OSI中称为服务原语。


<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405170223471.png"/>

在同一系统中相邻两层的实体进行交互(即交换信息)的地方,通常称为服务访问点SAP(Service Access Point)。

服务访问点SAP是一个抽象的概念,它实际上就是一个逻辑接口,有点像邮政信箱(可以把邮件放入信箱和从信箱中取走邮件),但这种层间接口和两个设备之间的硬件接口(并行的或串行的)并不一样。

> SDU

OSI把层与层之间交换的数据的单位称为服务数据单元SDU(Service Data Unit),它可以与PDU不一样。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405173206277.png"/>

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405173434255.png"/>

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405172820169.png"/>



## 2.3 ISO/OSI参考模型和TCP/IP参考模型

> ISO/OSI

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405175550393.png" alt="出自TCPIP 详解"/>

> TCP/IP

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405182854437.png"/>

> 对比

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405182926043.png"/>