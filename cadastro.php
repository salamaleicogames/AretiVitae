<?php
    //var_dump($_GET);
    //Se começou com $ é variável
    //var_dump($_POST)

    //Request é uma junção da post com a get, sendo algo mais global
    //var_dump($_REQUEST)


    //Capturando variáveis do formulário

    $name = $_GET["name"] ?? "Jhon doe";
    //Tem "colchetes" por se tratar de um array (vetor)
    $email = $_GET["email"] ?? "salamaleicogames@gmail.com";
    $age = $_GET["age"] ?? "999";
    $password = $_GET["password"] ?? "-7";
    $confirm = $_GET["confirm"] ?? "-7" ;

    echo "<b>fala meu mano</b> ", $name;

?>
