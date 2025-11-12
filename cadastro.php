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

    
    
    $name = $_GET['name'];
    $email = $_GET['email'];
    $day = $_GET['day'];
    $month = $_GET['mon'];
    $year = $_GET['year'];
    $password = $_GET['password'];
    $plus18 = 0;
   if ($day && $month && $year) {
    $birthday = DateTime::createFromFormat('d/m/Y', "$day/$month/$year");
    if ($birthday) { 
        $date = new DateTime();
        $age = $date->diff($birthday)->y;
        if ($age >= 18) {
            $plus18 = 1;
        }
        else{
            $plus18 = 0;
        }
    }
}
    

    //Criação de querry para conexão

    $result = mysqli_query($connection, "INSERT INTO projetointegradorcadastro(nomeUsuario,emailUsuario,diaUsuario,mesUsuario,anoUsuario,maior18,senhaUsuario) VALUES ('$name','$email','$day','$month','$year','$plus18','$password')" );
    if (!$result) {
    echo("Erro no INSERT: " . $connection->error);
}

    //header("Location: l1.html");
    //exit;

?>
