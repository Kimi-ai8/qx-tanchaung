/*************************************

WX打开链接：https://m.aihoge.com/lottery/awardBonus/drawRedPacket?title=

*************************************/


[rewrite_local]
https://m.aihoge.com/api/memberhy/h5/js/signature url script-request-header https://raw.githubusercontent.com/Kimi-ai8/qx-tanchaung/refs/heads/main/dachao.js

[mitm]
hostname = m.aihoge.com
