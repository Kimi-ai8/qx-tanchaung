/*************************************

打开一下小程序社服活动获取x-token。

*************************************/
[rewrite_local]

https://sfapi.bjsfxh.com/api/getLevelRedPacket url script-request-header https://raw.githubusercontent.com/Kimi-ai8/qx-tanchaung/refs/heads/main/96156sf.js

[mitm]
hostname = sfapi.bjsfxh.com
