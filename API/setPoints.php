<?php 

require_once("utilites.php");

$filename = "users.json";

$users = json_decode(file_get_contents($filename), true);
$input = json_decode(file_get_contents("php://input"), true);

if($_SERVER["REQUEST_METHOD"] == "POST"){
    foreach($users as &$user){
        if($user["username"] == $input["username"]){
            if (!isset($user["games"])) {
                $user["games"] = array();
            }
            $user["games"][] = array(
                "points" => $input["points"],
                "timestamp" => date("Y-m-d")
            );
            file_put_contents($filename, json_encode($users, JSON_PRETTY_PRINT));
            sendJSON(["message" => "Points added successfully"]);
            exit; 
        }
    }
    sendJSON(["message" => "User not found"], 404);
} else {
    sendJSON(["message" => "Wrong method"], 405);
}

?>
