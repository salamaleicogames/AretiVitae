<?php

    //print_r($_REQUEST);



    if(isset($_GET['submit']) && !empty($_GET['email']) && !empty($_GET['password'])){
       $dbHost = 'Localhost';
        $dbUsername = 'root';
        $dbPassword = '';
        $dbName = 'formulariocadastro'; //nome do primeiro banco criado para o projeto (Não defintivo)
        $connection = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);

        $email = $_GET['email'];
        $password = $_GET['password'];

        /*
        print_r($email);
        print_r($password);
        */

        $sql = "SELECT * FROM cadastro WHERE emailUsuario = '$email' and senhaUsuario = '$password'";
        $result = $connection->query($sql);

        //print_r($result);

        if(mysqli_num_rows($result) < 1){
            header('Location: l1.html');
        }
        else{
            header('Location: ../index/index.html');
        }
    }
    else{
        header('Location: l1.html');
    }

?>