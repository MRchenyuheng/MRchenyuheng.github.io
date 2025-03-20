---
title: 湖科大计网24每日一题
published: 2025-03-19
updated: 2025-03-19
description: ''
image: ''
tags: [408统考]
category: '计算机网络'
draft: false 
lang: ''
---

<!-- 基础版（适配Markdown渲染环境） -->
<div style="
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    padding: 16px;
    margin: 10px 0;
    background: #f6f8fa;
    transition: all 0.2s;
">
  <a href="https://space.bilibili.com/360996402/lists/3912452?type=season" target="_blank" style="
      text-decoration: none;
      color: inherit;
      display: block;
  ">
    <h3 style="
        margin: 0 0 8px 0;
        color:rgb(245, 151, 9);
        font-size: 1.1em;
    ">📙 湖科大计网24每日一题</h3>
    <p style="
        margin: 0;
        color: #586069;
        font-size: 0.9em;
    ">本链接链接至湖科大教书匠原始计网24每日一题合集链接</p>
  </a>
</div>

# 1

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320173812873.png"/>

<details style="color: darkred;">
  <summary style="cursor: pointer; color:rgb(27, 6, 247);"> 解析 </summary>
  <div style="padding: 10px; border: 1px solid #ccc; margin-top: 5px;">
    选C，原因是OSPF认为总代价最小的路由为好路由
  </div>
</details>

# 2

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320175958719.png"/>

<details style="color: darkred;">
  <summary style="cursor: pointer; color:rgb(27, 6, 247);"> 解析 </summary>
  <div style="padding: 10px; border: 1px solid #ccc; margin-top: 5px;">
  协议字段 = 17，表明是UDP用户数据报
  首部长度 = 5，单位4B，固长度20B
  总长度 = 0011 1111 1100 = 12 + 15 * 16 + 3 * 16 * 16 = 1020B
  数据载荷长度 = 1020B - 20B - 8B = 992B

  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320213343395.png"/>
  </div>
</details>

# 3

<img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320213932223.png"/>

<details style="color: darkred;">
  <summary style="cursor: pointer; color:rgb(27, 6, 247);"> 解析 </summary>
  <div style="padding: 10px; border: 1px solid #ccc; margin-top: 5px;">
  选D
  链路带宽 = $\frac{链路的时延带宽积}{链路的传播时延} = \fcac{100b}{10^{-6}s} = 100Mb/s$
  短板效应故发送速度为 100Mb/s
  <img src="https://raw.githubusercontent.com/MRchenyuheng/Blog_Pic_Bed/main/NET/20250320214547807.png"/>
  </div>
</details>
