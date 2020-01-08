const jogador1 = "X";
const jogador2 = "O";
var vez = jogador1;
var gameOver = false;

atualizaVez();
inicializarEspacos();

function atualizaVez() {

    if(gameOver){
        return;
    }

    if(vez == jogador1){
        var player = document.querySelectorAll("div#vez img")[0];
        player.setAttribute("src", "img/X.png");
    } else {
        var player = document.querySelectorAll("div#vez img")[0];
        player.setAttribute("src", "img/O.png");
    }

}

function inicializarEspacos() {
    var espacos = document.getElementsByClassName('espacos');
    for(var i = 0; i < espacos.length; i++){
        espacos[i].addEventListener('click', 
            function() {
                
                if(gameOver){
                    return
                }

                if(this.getElementsByTagName('img').length == 0){

                    if(vez == jogador1){
                        this.innerHTML = "<img id='imgJogada' src='img/X.png'/>";
                        this.setAttribute("jogada", jogador1);
                        vez = jogador2;
                    } else {
                        this.innerHTML = "<img id='imgJogada' src='img/O.png'/>";
                        this.setAttribute("jogada", jogador2);
                        vez = jogador1;
                    }
                    atualizaVez();
                    verificarVencedor();
                }
            }
        );
    }
}


async function verificarVencedor() {
    var a1 = document.getElementById('a1').getAttribute('jogada');
    var a2 = document.getElementById('a2').getAttribute('jogada');
    var a3 = document.getElementById('a3').getAttribute('jogada');
    
    var b1 = document.getElementById('b1').getAttribute('jogada');
    var b2 = document.getElementById('b2').getAttribute('jogada');
    var b3 = document.getElementById('b3').getAttribute('jogada');
    
    var c1 = document.getElementById('c1').getAttribute('jogada');
    var c2 = document.getElementById('c2').getAttribute('jogada');
    var c3 = document.getElementById('c3').getAttribute('jogada');

    var vencedor = "";

    if((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 & a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "")){
        vencedor = a1;
    } else if((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")){
        vencedor = b2;
    } else if(((c3 == c2 && c3 == c1) || (c3 == a3 && c3 == b3)) && c3 != ""){
        vencedor = c3;
    }

    if (vencedor != ""){
        gameOver = true;

        await sleep(50);

        if(vencedor == "X"){
            modalBgJogo.classList.add('bg-active-jogo');
            var player = document.querySelectorAll("div#modalJogo img")[0];
            player.setAttribute("src", "img/X.png");
            modalCloseJogo.addEventListener('click', function(){
                modalBgJogo.classList.remove('bg-active-jogo');
            });
        } else {
            modalBgJogo.classList.add('bg-active-jogo');
            var player = document.querySelectorAll("div#modalJogo img")[0];
            player.setAttribute("src", "img/O.png");
            modalCloseJogo.addEventListener('click', function(){
                modalBgJogo.classList.remove('bg-active-jogo');
            });
        }
        
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* BOTÃO REINICIAR*/

function reiniciar() {
    window.location.reload();
}


/* MODAL CONTATO*/

var modalBtnContato = document.querySelector('.modal-btn-contato');
var modalBgContato = document.querySelector('.modal-bg-contato');
var modalCloseContato = document.querySelector('.modal-close-contato');

modalBtnContato.addEventListener('click', function(e){
    modalBgContato.classList.add('bg-active-contato'); 
     e.preventDefault();
});

modalCloseContato.addEventListener('click', function(){
    modalBgContato.classList.remove('bg-active-contato');
});

/* MODAL SOBRE */

var modalBtnSobre = document.querySelector('.modal-btn-sobre');
var modalBgSobre = document.querySelector('.modal-bg-sobre');
var modalCloseSobre = document.querySelector('.modal-close-sobre');

modalBtnSobre.addEventListener('click', function(e){
    modalBgSobre.classList.add('bg-active-sobre'); 
     e.preventDefault();
});

modalCloseSobre.addEventListener('click', function(){
    modalBgSobre.classList.remove('bg-active-sobre');
});

/* MODAL JOGO */
var modalBgJogo = document.querySelector('.modal-bg-jogo');
var modalCloseJogo = document.querySelector('.modal-close-jogo');