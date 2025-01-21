/*************************************

[rewrite_local]
https://www.feihevip.com/api/products/getRecommendExchange url script-request-header https://raw.githubusercontent.com/Kimi-ai8/qx-tanchaung/refs/heads/main/xmyx.js

[mitm]
hostname = www.feihevip.com

*************************************/

let headers = $request.headers;
let token = headers['token'];
console.log(token);
$notify("星妈优选token", "", token);

$done();
