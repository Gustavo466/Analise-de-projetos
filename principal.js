
function tipo( tip ){
    sessionStorage.setItem( 'tipo', tip );
    window.location.href = 'entrar.html';
}

function entrar(  ){
    if ( sessionStorage.getItem( 'tipo' ) ){
        var tipo = sessionStorage.getItem( 'tipo' );
        if( tipo == 'cad' ){
            cadastro(  );
        }
        else if( tipo == 'log' ){
            login(  );
        }
    }
}

function login(  ){
    var login = document.getElementById('login');
    login.style.display = 'block';
    var entrada = document.getElementById('entrada');
    entrada.style.display = 'none';
}

function cadastro(  ){
    var cadastro = document.getElementById('cadastro');
    cadastro.style.display = 'block';
    var entrada = document.getElementById('entrada');
    entrada.style.display = 'none';
}

function gerente( ){
    var tipo = document.getElementById('tipo');
    tipo.value = 'gerente';
    var formulario = document.getElementById('form');
    formulario.style.display = 'block';
    var escolha = document.getElementById('escolha');
    escolha.style.display = 'none';
}

function corretor(  ){
    var tipo = document.getElementById('tipo');
    tipo.value = 'corretor';
    var formulario = document.getElementById('form');
    formulario.style.display = 'block';
    var escolha = document.getElementById('escolha');
    escolha.style.display = 'none';
}

function cliente( ){
    var tipo = document.getElementById('tipo');
    tipo.value = 'cliente';
    var formulario = document.getElementById('form');
    formulario.style.display = 'block';
    var escolha = document.getElementById('escolha');
    escolha.style.display = 'none';
}