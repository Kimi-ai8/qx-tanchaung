/*************************************

打开一下小程序就直接关，不用等他加载小程序，不然会弹很多。

*************************************/

[rewrite_local]
https://gateway.jmhd8.com/geement.actjextra url script-request-header https://raw.githubusercontent.com/Kimi-ai8/qx-tanchaung/refs/heads/main/nfsq.js

[mitm]
hostname = gateway.jmhd8.com
