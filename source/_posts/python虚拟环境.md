---
title: python虚拟环境
date: 2022-12-10 22:47:54
tags: python
---

## windows python虚拟环境

1. 虚拟环境的第三方包 `pip install virtualenv`  
使用清华源安装：  
`pip install virtualenv -i <https://pypi.python.org/simple/>`

2. 创建虚拟环境  
cd 到存放虚拟环境的地址  
`virtualenv ENV` 在当前目录下创建名为ENV的虚拟环境  
（如果第三方包virtualenv安装在python3下面，此时创建的虚拟环境就是基于python3的）  
`virtualenv -p /usr/local/bin/python2.7 ENV2`  
参数 -p 指定python版本创建虚拟环境  
`virtualenv --system-site-packages ENV`  
参数--system-site-packages 指定创建虚拟环境时继承系统三方库

3. 激活/退出虚拟环境  
`cd ~/ENV` 跳转到虚拟环境的文件夹  
`activate.bat` 激活虚拟环境  
`pip list` 查看当前虚拟环境下所安装的第三方库  
`deactivate.bat` 退出虚拟环境
