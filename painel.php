<?php
    session_start(  );
    $login = $_SESSION[ 'login' ];
    $tipo = $_SESSION[ 'tipo' ];
?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8" />
        <title>Atividades</title>
        <link rel="stylesheet" href="principal.css" />
        <script src="principal.js"></script>
        <script>
            sessionStorage.setItem( "login", '<?php echo $login; ?>' );
            sessionStorage.setItem( "tipo", '<?php echo $tipo; ?>' );
        </script>
    </head>
    <body>
    <header>
            <a href="index.html"><img src="logo.png"/></a>
            <nav class="menu">
                <a href="index.html">Página inicial</a>
                <a href="sobre.html">Sobre nós</a>
            </nav>
            <section class="menu">
                <a onclick="tipo( 'cad' )">Cadastrar</a>
                <a onclick="tipo( 'log' )">Logar</a>
            </section>
        </header>
        <main class="corpo">
            <h1>Bem vindo</h1>
        </main>
        <footer>
            <p>
                <h3>Contatos: </h3>
                Telefone: (11) 99999-9999<br/>
                E-mail:<a href="mailto:exemplo@examplo.com?subject=Assunto" >exemplo@examplo.com</a><br/><br/>
                &copy;All rights reserved.<br/>
            </p>
        </footer>
    </body>
</html>