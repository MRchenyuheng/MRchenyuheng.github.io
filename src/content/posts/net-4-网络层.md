---
title: 网络层
published: 2025-03-19
updated: 2025-03-19
description: ''
image: ''
tags: [408统考]
category: '计算机网络'
draft: false 
lang: ''
---

> 大纲
> 1 网络层的功能 1.1 异构网络互连 1.2 路由与转发 1.3 SDN基本概念 1.4 拥塞控制
> 2 路由算法 2.1 静态路由与动态路由

# 1 网络层的功能

数据链路层解决了同一局域网(直连网络)计算机间帧的传输问题,没有解决以下问题

+ 1 异构网络互联,即跨局域网连接和资源共享; 
+ 2 互联网络中主机标识问题;
+ 3 互联网中主机间路由选择问题(最佳路径);
+ 4 互联网中数据转发的问题(分组转发)。


## 1.1 异构网络互连

|  虚电路   |   数据报   |
| ---- | ---- |
|  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/20250319220642031.png"/>    | <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/20250319220710355.png"/>      |

> 对比如下

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/20250319215944539.png"/>

> 网络层两层面

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/20250319220905229.png"/>

|  数据层面   |   控制层面   |
| ---- | ---- |
| 每个路由器独立工作                            |   路由器间需要相互协作   |
| 根据收到IP分组目的地址,按转发表转发至下一跳路由器  |  交换路由信息           |
| 采用硬件转发,速度快(纳秒数量级,10−9秒)          |    运行路由选择协议(软件),生成路由表(耗时⻓,秒级);    |


## 1.2 路由与转发

## 1.3 SDN基本概念

## 1.4 拥塞控制

# 2 路由算法

## 2.1 静态路由与动态路由


# 参考资料

> 计算机网络/谢希仁编著.—8版.一北京:电子工业出版社,2021.6 ISBN 978-7-121-41174-8

> 深入浅出计算机网络(微课视频版) 高军