---
title: IP组播
published: 2025-03-26
updated: 2025-03-26
description: ''
image: ''
tags: [408统考]
category: '计算机网络'
draft: false 
lang: ''
---

> 6 IP组播 6.1 组播的概念 6.2 IP组播的地址


能够运行多播协议的路由器称为多播路由器(multicast router)。

与单播相比,在一对多的通信中,多播可大大节约网络资源。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250326212932101.png"/>

在互联网上开始试验虚拟的多播主干网MBONE(Multicast Backbone On the InterNEt)。 MBONE可把分组传播给地点分散但属于一个组的许多台主机。现在多播主干网已经有了相当大的规模。

多播地址只能用于目的地址,而不能用于源地址。此外,对多播数据报不产生ICMP差错报文。

> 多播类型分类
<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250326213439028.png"/>

在局域网上进行硬件多播

以太网MAC地址字段中的第1字节的最低位为1时即为多播地址,这种多播地址数占IANA分配到的地址数的一半。但IANA只拿出$2^{23}$个地址,即`01-00-5E-0000-00`到`01-00-5E-7F-FF-FF`的地址作为以太网多播地址。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/20250326212348710.png"/>

