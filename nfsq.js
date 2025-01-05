/*************************************

[rewrite_local]
https://gateway.jmhd8.com/geement.actjextra url script-request-header nfsq.js

[mitm]
hostname = gateway.jmhd8.com

*************************************/
let headers = $request.headers;
let uniqueIdentity = headers['unique_identity'];
let apiToken = headers['apitoken'];

let combinedValue = ${uniqueIdentity}#${apiToken}#;

console.log(combinedValue);
$notify("农夫CK，#后自行备注", "", combinedValue);

$done();
