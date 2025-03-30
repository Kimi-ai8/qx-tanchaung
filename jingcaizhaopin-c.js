/*************************************

鲸才招聘QX获取CK 自用

*************************************/

[rewrite_local]
https://erp.5jingcai.com/MemberInfo/updateLastLoginTime url script-request-header https://raw.githubusercontent.com/Kimi-ai8/qx-tanchaung/refs/heads/main/jingcaizhaopin.js

[mitm]
hostname = erp.5jingcai.com
