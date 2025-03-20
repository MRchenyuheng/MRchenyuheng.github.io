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

|  虚电路   |   数据报   |
| ---- | ---- |
|  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/20250319220642031.png"/>    | <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/20250319220710355.png"/>      |



<details style="color: darkred;">
  <summary style="cursor: pointer; color:rgb(238, 7, 173);"> 对比表格 </summary>
  <div style="padding: 10px; border: 1px solid #ccc; margin-top: 5px;">
  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/20250319215944539.png"/>
  </div>
</details>


## 1.1 异构网络互连

当中间设备是转发器或网桥时,这仅仅是把一个网络扩大了,而从网络层的角度看, 这仍然是一个网络,一般并不称之为网络互连。网关由于比较复杂,目前使用得较少。因此现在我们讨论网络互连时,都是指用路由器进行网络互连和路由选择。路由器其实就是一台专用计算机,用来在互联网中进行路由选择。

所谓虚拟互连网络也就是逻辑互连网络,它的意思就是互连起来的各种物理网络的异构性本来是客观存在的,但是我们利用协议IP就可以使这些性能各异的网络在网络层上看起来好像是一个统一的网络。这种使用协议IP的虚拟互连网络可简称为IP网.

使用IP网的好处是:当IP网上的主机进行通信时,就好像在一个单个网络上通信一样,它们看不见互连的各网络的具体异构细节(如具体的编址方案、路由选择协议,等等)。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/20250319222515931.png" height="60%" width="60%"/>

> 直接交付和间接交付

分组从源节点A发送到目的节点B,若中间必须经过一个或几个路由器(这表示A和B不在同一个网络上),则是间接交付。但若不需要经过路由器(这表示A和B在同一个网络上),则是直接交付。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/20250319223417696.png" height="60%" width="60%"/>

互联网可以由多种异构网络互连组成。

我们可以想象IP数据报就在网络层中传送,传输路径可省略路由器之间的网络以及连接在这些网络上的许多无关主机。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/20250319223547167.png" height="60%" width="60%" />




## 1.2 路由与转发

## 1.3 SDN基本概念

<details style="color: darkred;">
  <summary style="cursor: pointer; color:rgb(238, 7, 173);"> 网络层两个层面 </summary>
  <div style="padding: 10px; border: 1px solid #ccc; margin-top: 5px;">
  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/20250319220905229.png" height="70%" width="70%" />
  </div>
</details>


|  数据层面   |   控制层面   |
| ---- | ---- |
| 每个路由器独立工作                            |   路由器间需要相互协作   |
| 根据收到IP分组目的地址,按转发表转发至下一跳路由器  |  交换路由信息           |
| 采用硬件转发,速度快(纳秒数量级,10−9秒)          |    运行路由选择协议(软件),生成路由表(耗时⻓,秒级);    |

路由器之间传送的信息有以下两大类: 

第一类是转发源主机和目的主机之间所传送的数据,把源主机所发送的分组,像接力赛跑那样从一个路由器转发到下一个路由器,最后把分组传送到目的主机。

第二类则是传送路由信息,是根据路由选择协议所使用的路由算法,彼此不断地交换路由信息分组,目的是为了在路由器中创建路由表,并由此导出为转发分组而用的转发表。这一类信息的传送是为第一类数据的传送服务的。

把网络层抽象地划分为数据层面(或转发层面)和控制层面。

在数据层面中,每一个路由器根据本路由器生成的转发表,把收到的分组,从查找到的对应接口转发出去。为了加快转发的速率,现在的路由器通常都采用硬件进行转发,转发一个分组的时间为纳秒(10°秒)数量级。

但在控制层面中的情况则不同。一个路由器不可能独自创建出路由表。路由器必须和相邻的路由器经常交换路由信息,然后才能创建出本路由器的路由表。根据路由选择协议所用的路由算法计算路由要使用软件,这就慢多了,一般是秒的数量级。

最近在网络界提出的软件定义网络SDN(Software Defined Network),正在对这两个层面的结构进行了重大的改变。

## 1.4 拥塞控制

# 2 路由算法

## 2.1 静态路由与动态路由

## 2.2 距离-向量路由算法

## 2.3 链路状态路由算法

## 2.4 层次路由

# 3 IPv4

由于网际协议IP是用来使互连起来的许多计算机网络能够进行通信的,因此TCP/IP体系中的网络层常常被称为网际层(internet),或IP层。

IP地址就是给连接到互联网上的每一台主机(或路由器)的每一个接口,分配一个在全世界范围内是唯一的32位的标识符。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/OS/20250320103147081.png" height="70%" width="70%"/>

IP地址中的前n位是主机所连接的网络号,而IP地址中后面的(32 -n)位是主机号。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320110416022.png" height="60%" width="60%" />

> 分类IP

分类的方法非常简单。

这里A类(n=8)、B类(n=16)和C类(n=24)地址都是单播地址(一对一通信),是最常用的。D类是多播地址。

把IP地址划分为A类、B类、C类三个类别,当初是这样考虑的:各种网络的差异很大,有的网络拥有很多主机,而有的网络上的主机则很少。把IP地址划分为A类、B类和C类是为了更好地满足不同用户的需求。

这种分类的IP地址由于网络号的位数是固定的,因此管理简单、使用方便、转发分组迅速,完全可以满足当时互联网在美国的科研需求。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320112722702.png" height="70%" width="70%"/>

> 一般不使用的特殊IP

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320112903926.png" height="70%" width="70%"/>




## 3.1 IPv4分组

## 3.2 IPv4地址与NAT

## 3.3 

### 3.3.1 子网划分

1985 年起, IP 地址中增加了“子网号字段”,使两级的 IP 地址变成为三级的 IP 地址。这种做法叫作划分子网 (subnetting) : 划分子网已成为互联网的正式标准协议; 
 
当没有划分子网时,IP 地址是两级结构; 
 
划分子网后 IP 地址就变成了三级结构。

划分子网纯属一个单位内部的事情。单位对外仍然表现为没有划分子网的网络。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320114140334.png" height="50%" width="50%"/>

### 3.3.2 路由聚合

通过取消分类结构的IP地址,能分配各种尺寸的IP地址块。但是,这样做没有解决问题列表中的第三个问题,它并没有帮助减少路由表条目数。一条路由表条目告诉一个路由器向哪里发送流量。从本质上来说,路由器检查每个到达的数据报中的目的IP地址,找到一条匹配的路由表条目,并从该条目中提取数据报的“下一跳”。

在Internet 环境中,可采用分层路由思想以一种特定方式减少 Internet 路由条目数。这通过一个称为路由聚合的过程来实现。通过将相邻的多个 IP 前缀合并成一个短前缀(称 一个聚合或汇聚),可以覆盖更多地址空间。

一个大的CIDR地址块中往往包含很多小地址块,所以在路由器的转发表中就利用较大的一个CIDR地址块来代替许多较小的地址块。这种方法称为路由聚合(route aggregation), 它使得转发表中只用一个项目就可以表示原来传统分类地址的很多个(例如上千个)路由项目,因而大大压缩了转发表所占的空间,减少了查找转发表所需的时间。



### 3.3.3 子网掩码

子网掩码是一个网络或一个子网的重要属性: 
 
+ 路由器在和相邻路由器交换路由信息时,必须把自己所在网络(或子网)的子网掩码告诉相邻路由器; 
+ 路由器的路由表中的每一个项目,除了要给出目的网络地址外,还必须同时给出该网络的子网掩码;
+ 若一个路由器连接在两个子网上就拥有两个网络地址和两个子网掩码。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320130947621.png" height="60%" width="60%"/>

### 3.3.4 CIDR

无分类编址CIDR，这种编址方法的全名是无分类域间路由选择CIDR(Classless Inter-Domain Routing,CIDR的读音是“sider”)[RFC 4632]

消除一个IP 地址中网络和主机号的预定义分隔,将使更细粒度的IP 地址分配范围成为可能。与分类寻址类似,地址空间分割成块最容易通过数值连续的地址来实现,以便用于某种类型或某些特殊用途。

网络号改成了“网络前缀”,n 位网络前缀可以是任意⻓度。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320131612552.png" height="60%" width="60%"/>

CIDR使用“斜线记法”(slash notation),或称为CIDR记法,即在IP地址后面加上斜线“/”,斜线后面是网络前缀所占的位数。

CIDR把网络前缀都相同的所有连续的IP地址组成一个“CIDR地址块”。一个CIDR 地址块包含的IP地址数目,取决于网络前缀的位数。我们只要知道CIDR地址块中的任何一个地址,就可以知道这个地址块的起始地址(即最小地址)和最大地址,以及地址块中的地址数。

地址掩码(常简称为掩码)由一连串1和接着的一连串0组成,而1的个数就是网络前缀的长度。地址掩码又称为子网掩码。在CIDR记法中,斜线后面的数字就是地址掩码中1的个数。

> 特殊地址块

+ 前缀 n = 32,即32位IP地址都是前缀,没有主机号。这其实就是一个IP地址。这个特殊地址用于主机路由; •
+ 前缀 n = 31,这个地址块中只有两个IP地址,其主机号分别为0 和1。这个地址块用于点对点链路;
+ 前缀 n = 0同时IP地址也是全0,即0.0.0.0/0。这用于默认路由。

## 3.4

### 3.4.0 IP地址与MAC地址

由于MAC地址已固化在网卡上的ROM中,因此常常将MAC地址称为硬件地址或物理地址。

从层次的角度看,MAC地址是数据链路层使用的地址,而IP地址是网络层和以上各层使用的地址,是一种逻辑地址(称IP地址为逻辑地址是因为IP地址是用软件实现的)。



<details style="color: darkred;">
  <summary style="cursor: pointer; color:rgb(246, 28, 28);">为什么不用硬件地址直接通信?</summary>
  <div style="padding: 10px; border: 1px solid #ccc; margin-top: 5px;">

1. 硬件地址用于直接相连的网络(同一个二层广播网络),用于找到局域网中的主机; 

2. 互联网中很多局域网是异构的,硬件地址不同,需要地址转换; 

3. IP地址是软件地址或逻辑地址,用于定位主机所处的网络(网络号不同的网络),连接到互联网上的主机都有一个唯一的IP地址。

4. 硬件地址与物理位置无关

5. IP地址(非保留IP地址,用于Internet中的地址),与“物理位置”相关
  </div>
</details>


<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320141540104.png"/>


<details style="color: darkred;">
  <summary style="cursor: pointer; color:rgb(246, 28, 28);">IP地址与物理地址详解</summary>
  <div style="padding: 10px; border: 1px solid #ccc; margin-top: 5px;">
  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320141801364.png" height="80%" width="80%" />
  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320141939308.png" height="80%" width="80%" />
  
  1. 在IP层抽象的互联网上只能看到IP数据报; 
  2. IP数据报首部有源站IP地址,但路由器只根据目的站的IP地址进行转发; 
  3. 在局域网的链路层,只能看⻅MAC帧;
  4. 互连在一起的网络的MAC地址体系各不相同,但IP层抽象的互联网屏蔽了下层这些很复杂的细节;
  5. 网络层使用统一的、抽象的IP地址研究主机和主机或路由器之间的通信。

  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320144451434.png" height="70%" width="70%" />

  </div>
</details>


### 3.4.1 ARP协议

在实际应用中,我们经常会遇到这样的问题:已经知道了一个机器(主机或路由器)的IP地址,需要找出其相应的MAC地址。地址解析协议ARP[RFC 826,STD37]就是用来解决这样的问题的。

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320133158417.png"/>

还有一个旧的协议叫作逆地址解析协议RARP,它的作用是使只知道自己MAC地址的主机能够通过协议RARP找出其IP地址。现在的协议DHCP已经包含了协议RARP的功能。

IP地址和下面链路层的MAC地址之间由于格式不同而不存在简单的映射关系，如，在一个网络上可能经常会有新的主机加入进来,或撤走一些主机。更换网络适配器也会使主机的MAC地址改变。

地址解析协议ARP解决这个问题的方法是在主机的ARP高速缓存中存放一个从IP地址到MAC 地址的映射表,并且这个映射表还经常动态更新(新增或超时删除)。

每一台主机都设有一个ARP高速缓存(ARP cache),里面存有本局域网上的各主机和路由器的IP地址到MAC地址的映射表,这些都是该主机目前知道的一些MAC地址。

<details style="color: darkred;">
  <summary style="cursor: pointer; color:rgb(27, 6, 247);"> ARP报文格式 </summary>
  <div style="padding: 10px; border: 1px solid #ccc; margin-top: 5px;">
  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320135202110.png" height="70%" width="70%"/>
  </div>
</details>

<div style="
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    padding: 16px;
    margin: 10px 0;
    background: #f6f8fa;
    transition: all 0.2s;
">
  <a href="https://www.baidu.com" target="_blank" style="
      text-decoration: none;
      color: inherit;
      display: block;
  ">
    <h3 style="
        margin: 0 0 8px 0;
        color:rgb(247, 60, 9);
        font-size: 1.1em;
    ">📘 ARP协议详解</h3>
    <p style="
        margin: 0;
        color: #586069;
        font-size: 0.9em;
    ">本链接链接至更详细的ARP讲解</p>
  </a>
</div>



### 3.4.2 DHCP协议

### 3.4.3 ICMP协议

<!-- 基础版（适配Markdown渲染环境） -->
<div style="
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    padding: 16px;
    margin: 10px 0;
    background: #f6f8fa;
    transition: all 0.2s;
">
  <a href="https://www.baidu.com" target="_blank" style="
      text-decoration: none;
      color: inherit;
      display: block;
  ">
    <h3 style="
        margin: 0 0 8px 0;
        color:rgb(247, 60, 9);
        font-size: 1.1em;
    ">📘 ICMP报文详解</h3>
    <p style="
        margin: 0;
        color: #586069;
        font-size: 0.9em;
    ">本链接链接至更详细的ICMP报文讲解</p>
  </a>
</div>

<details style="color: darkred;">
  <summary style="cursor: pointer; color:rgb(246, 28, 28);">icmp</summary>
  <div style="padding: 10px; border: 1px solid #ccc; margin-top: 5px;">

1
  </div>
</details>


# 参考资料

> 计算机网络/谢希仁编著.—8版.一北京:电子工业出版社,2021.6 ISBN 978-7-121-41174-8

> 深入浅出计算机网络(微课视频版) 高军

> TCP/P 详解 卷1:协议(原书第2版)/(美)福尔(Fall, K. R.),(美)史蒂文斯(Stevens, W. R.)著;吴英,张玉,许昱玮译,一北京:机械工业出版社,2016.6 (计算机科学丛书) 书名原文:TCP/IP Illustrated, Volume 1: The Protocols, Second Edition