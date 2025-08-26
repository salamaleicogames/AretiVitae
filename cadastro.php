<?php
    //var_dump($_GET);
    //Se começou com $ é variável
    //var_dump($_POST)

    //Request é uma junção da post com a get, sendo algo mais global
    //var_dump($_REQUEST)


    //Capturando variáveis do formulário
    /*
    $name = $_GET["name"] ?? "Jhon doe";
    //Tem "colchetes" por se tratar de um array (vetor)
    $email = $_GET["email"] ?? "salamaleicogames@gmail.com";
    $age = $_GET["age"] ?? "999";
    $password = $_GET["password"] ?? "-7";
    $confirm = $_GET["confirm"] ?? "-7" ;

    echo "<b>fala meu mano</b> ", $name;
    */

    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'formulariocadastro'; //nome do primeiro banco criado para o projeto (Não defintivo)
    $connection = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);


    //TESTADOR DE CONEXÃO
    /*
    if($conexao->connect_errno){
        echo "Erro";
    }
    else{
        echo "<h1>boa mb<h1>";
    }
        */
    


    /*
    Use echo → quando quiser exibir texto ou valores simples.

    Use print_r → quando quiser inspecionar arrays ou objetos de forma legível.
    */
    if(isset($_GET['submit'])){
        print_r($_GET['name']);
        print_r($_GET['email']);
        print_r($_GET['age']);
        print_r($_GET['password']);
        print_r($_GET['confirm']);

    }
    
    $name = $_GET['name'];
    $email = $_GET['email'];
    $age = $_GET['age'];
    $password = $_GET['password'];
    $confirm = $_GET["confirm"];

    //Criação de querry para conexão

    $result = mysqli_query($connection, "INSERT INTO cadastro(nomeUsuario,emailUsuario,dataUsuario,senhaUsuario,confirmarUsuario) VALUES ('$name','$email','$age','$password','$confirm')" );

    header("Location: l1.html");
    exit;

?>
