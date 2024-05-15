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

    $username = $input["username"];
    $password = $input["password"];

    //If username or password is an empty string, bad request will be sent
    if($username == "" or $password == "") {
        $error = [
            "message" => "Username or password can not have empty values"
        ];
        sendJSON($error, 400);
    } 

    //If username or password is less than 3 characters, bad request will be sent
    if(strlen($username) < 3 or strlen($password) < 3) {
        $error = [
            "message" => "Username or Password needs to be at least 3 characters long"
        ];
        sendJSON($error, 400);
    }

    if($users != []){ 
        foreach($users as $user){
            if($user["username"] == $input["username"]){ 
                sendJSON(["message"=> "Username already taken"], 409); 
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