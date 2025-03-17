---
title: 操作系统基础
published: 2025-03-15
description: ''
image: ''
tags: []
category: '操作系统'
draft: false 
lang: ''
---

# 操作系统的基本概念

操作系统(operating system,OS)是配置在计算机硬件上的第一层软件,是对硬件系统的首次扩充,其主要作用是管理硬件设备,提高它们的利用率和系统吞吐量,并为用户和应用程序提供一个简单的接口,以便于用户和应用程序使用硬件设备。OS是现代计算机系统中最基本和最重要的系统软件,而其他的诸如编译软件、数据库管理软件等系统软件以及大量的应用软件,都直接依赖于OS的支持,并须取得OS所提供的服务。事实上OS已成为现代计算机系统、多处理机系统、计算机网络等都必须配置的系统软件。

在计算机系统上配置OS,其主要目标是实现:方便性、有效性、可扩充性、开放性。

> OS 作为用户与计算机硬件系统之间的接口

OS作为用户与计算机硬件系统之间的接口,其含义是:OS处于用户与计算机硬件系统之间,用户通过OS来使用计算机硬件系统;或者说,用户在OS的帮助下能够方便、快捷、可靠地操纵计算机硬件和运行自己的程序。

![](https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/os-1.png)

# 操作系统的发展历程

> 未配置OS的计算机系统

人工操作。缺点，用户独占全机，CPU等待人工操作。

脱机操作。优点，减少CPU空闲时间。提高I/O。

![](https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/%E6%88%AA%E5%B1%8F2025-03-17%2021.45.54.png)

> 单道批处理系统

脱机I/O后处理。
处理过程:首先由监督程序将磁带上的第一个作业装入内存,并把运行控制权交给该作业;当该作业处理完成时,又把运行控制权交还给监督程序

内存中始终只保持一道作业,故称之为单道批处理系统。

![](https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/%E6%88%AA%E5%B1%8F2025-03-17%2021.51.56.png)

从图中可以看出,在$t_2 \to t_3$ 、$t_6 \to t_7$ 时间间隔内CPU空闲。

> 多道批处理系统

在该系统中,用户所提交的作业会被先存放在外存上,并排成一个队列,称为“后备队列”。然后由作业调度程序按一定的算法从后备队列中选择若干个作业调入内存,使它们共享CPU和系统中的各种资源。

![](https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/%E6%88%AA%E5%B1%8F2025-03-17%2022.03.41.png)

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/%E6%88%AA%E5%B1%8F2025-03-17%2022.03.41.png"/>

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/%E6%88%AA%E5%B1%8F2025-03-17%2022.03.41.png" height="60%" width="60%" />

资源利用率高。系统吞吐量大。平均周转时间长。无交互能力。

问题

争用处理机问题，内存分配与保护问题，I/O设备分配问题，文件的组织与管理问题，作业管理问题，用户与系统的接口问题

# 程序运行环境

> 计算机操作系统慕课版 汤小丹 王红玲 姜华 汤子瀛  编著