/*************************************

打开一下小程序95156获取x-token。

*************************************/


[rewrite_local]

https://ylapi.luckystarpay.com/api/getUserInfo url script-request-header https://raw.githubusercontent.com/Kimi-ai8/qx-tanchaung/refs/heads/main/96156.js

[mitm]
hostname = ylapi.luckystarpay.com
