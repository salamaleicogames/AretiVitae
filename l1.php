<?php

    //print_r($_REQUEST);

    session_start();

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

        $sql = "SELECT * FROM projetointegradorcadastro WHERE emailUsuario = '$email' and senhaUsuario = '$password'";
        $result = $connection->query($sql);

        //print_r($result);

        if(mysqli_num_rows($result) < 1){
            header('Location: l1.html?erro=1');
            exit;
        }
        else{
            header('Location: ../index/index.html');
            exit;
        }
    }
    else{
    header('Location: 11.html?erro1=2');
    exit;
    }

?>