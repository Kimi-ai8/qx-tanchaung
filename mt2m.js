/*************************************

[rewrite_local]
https://whdy.igklh.cn/client/v3/course_info url script-request-header https://raw.githubusercontent.com/Kimi-ai8/qx-tanchaung/refs/heads/main/每天两毛.js

[mitm]
hostname = whdy.igklh.cn

*************************************/
let headers = $request.headers;
let token= headers['token'];
let Token= '${token}';

console.log(Token);
$notify("获取的Token, "", Token);

$done();
