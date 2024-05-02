<?php

require_once("utilites.php");

$filename = "users.json";

if(!file_exists($filename)){ 
    file_put_contents($filename, "[]");
} else{
    file_get_contents($filename);
}

$users = json_decode(file_get_contents($filename), true);
$input = json_decode(file_get_contents("php://input"), true);

if($_SERVER["REQUEST_METHOD"] == "POST"){ 

    if(!isset(
            $input["username"],
            $input["password"])){
        sendJSON(["message"=>"No data"], 401);
    }


    if($users != []){ 
        foreach($users as $user){
            if($user["username"] == $input["username"]){ 
                sendJSON(["message"=>"Username already taken"], 409); 
            }
        }
    }

    $newUser = [ 
        "username" => $input["username"],
        "password" => $input["password"],
    ];

    $users[] = $newUser; 
    file_put_contents($filename, json_encode($users, JSON_PRETTY_PRINT)); 

    unset($newUser["password"]); 
    sendJSON($newUser); 

} 

?>