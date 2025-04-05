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

## 1.1 计算机网络的定义

计算机网络主要是由一些通用的、可编程的硬件互连而成的,而这些硬件并非专门用来实现某一特定目的(例如,传送数据或视频信号)。这些可编程的硬件能够用来传送多种不同类型的数据,并能支持广泛的和日益增长的应用。

根据这个定义:(1)计算机网络所连接的硬件,并不限于一般的计算机,而是包括了智能手机或智能电视机;(2)计算机网络并非专门用来传送数据,而是能够支持很多种应用(包括今后可能出现的各种应用)。当然,没有数据的传送,这些应用是无法实现的。
请注意,上述的“可编程的硬件”表明这种硬件一定包含有中央处理器CPU。


## 1.2 计算机网络的组成

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250326111023294.png" height="60%" width="60%" />

(1)边缘部分由所有连接在互联网上的主机组成。这部分是用户直接使用的,用来进行通信(传送数据、音频或视频)和资源共享。

(2)核心部分由大量网络和连接这些网络的路由器组成。这部分是为边缘部分提供服务的(提供连通性和交换)。

> 网络的核心部分

网络核心部分是互联网中最复杂的部分,因为网络中的核心部分要向网络边缘部分中的大量主机提供连通性,使边缘部分中的任何一台主机都能够与其他主机通信。

电路交换——整个报文的比特流连续地从源点直达终点,好像在一个管道中传送。
报文交换——整个报文先传送到相邻节点,全部存储下来后查找转发表,转发到下一个节点。
分组交换——单个分组(这只是整个报文的一部分)传送到相邻节点,存储下来后查找转发表,转发到下一个节点。



## 1.3 计算机网络的功能

# 2 计算机网络的分类

> 覆盖范围

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405132130164.png"/>

> 拓扑结构

|      |      |
| ---- | ---- |
|  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405132415518.png"/>    |  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405132444269.png"/>    |
| <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405132509261.png"/>     |  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250405132528948.png"/>    |


