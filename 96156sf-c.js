/*************************************
打开一下小程序96156获取x-token,和社服活动获取token。
*************************************/
[rewrite_local]
https://ylapi.luckystarpay.com/api/getUserInfo url script-request-header https://raw.githubusercontent.com/Kimi-ai8/qx-tanchaung/refs/heads/main/96156.js
https://sfapi.bjsfxh.com/api/getLevelRedPacket url script-request-header https://raw.githubusercontent.com/Kimi-ai8/qx-tanchaung/refs/heads/main/96156sf.js
[mitm]
hostname = ylapi.luckystarpay.com, sfapi.bjsfxh.com
