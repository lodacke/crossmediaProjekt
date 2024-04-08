    <?php

    require_once("utilites.php");

    $filename = "users.json";

    if(!file_exists($filename)){ 
        file_put_contents($filename, "[]");
    }

    $users = json_decode(file_get_contents($filename), true);
    $input = json_decode(file_get_contents("php://input"), true);

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        
        if(!isset($input["username"],
                $input["password"])){
            sendJSON(["message"=>"Wrong data"], 401);
        }

        if($users != []){ 
            foreach($users as $user){
                if($user["username"] == $input["username"] and $user["password"] == $input["password"]){
                    unset($user["password"]);
                    sendJSON($user); 
                }
            }
        } 
        sendJSON(["message"=>"Wrong username or password"], 404);
    } else {
        sendJSON(["message"=>"Wrong method"], 405);
    }

    ?>