/*************************************

打开一下小程序。

*************************************/
[rewrite_local]
https://www.feihevip.com/api/products/getRecommendExchange url script-request-header https://raw.githubusercontent.com/Kimi-ai8/qx-tanchaung/refs/heads/main/xmyx.js

[mitm]
hostname = www.feihevip.com
