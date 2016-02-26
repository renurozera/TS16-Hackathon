<?php

$post_data = array(
    'From' => "7206814517",//"<First-phone-number-to-call (Your agent's number)>",
    'To' => "9034467686",//<Second-phone-number-to-call (Your customer's number)>",
    'CallerId' => "09243422233",//<Your-Exotel-virtual-number>",
   // 'TimeLimit' => "<time-in-seconds> (optional)",
   // 'TimeOut' => "<time-in-seconds (optional)>",
    'CallType' => "trans" //Can be "trans" for transactional and "promo" for promotional content
);
 
$exotel_sid = "crusader"; // Your Exotel SID - Get it from here: http://my.exotel.in/settings/site#api-settings
$exotel_token = "5f4b43b3d5e8e19a85ad1833922689af4b89be00"; // Your exotel token - Get it from here: http://my.exotel.in/settings/site#api-settings
 
$url = "https://".$exotel_sid.":".$exotel_token."@twilix.exotel.in/v1/Accounts/".$exotel_sid."/Calls/connect";
 
$ch = curl_init();
curl_setopt($ch, CURLOPT_VERBOSE, 1);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FAILONERROR, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post_data));
 
$http_result = curl_exec($ch);
$error = curl_error($ch);
$http_code = curl_getinfo($ch ,CURLINFO_HTTP_CODE);
 
curl_close($ch);
 
print "Response = ".print_r($http_result);

?>
