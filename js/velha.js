var jogador, vencedor = null;
        var jogadorSelecionado = document.getElementById('jogador-selecionado');
        var vencedorSelecionado = document.getElementById('vencedor-selecionado');
        mudarJogador('X');
        var quadrados = document.getElementsByClassName('quadrado');

        function escolherQuadrado(id){
            var quadrado = document.getElementById(id);
            if(vencedor !==null){
                return;
            }
            if(quadrado.innerHTML !== '-'){
                return;
            }
            quadrado.innerHTML = jogador;
            quadrado.style.color = 'black';
            
            if(jogador === 'X'){
                jogador = 'O';
            }else{
                jogador = 'X';
            }
            mudarJogador(jogador);
            checaJogador();
        }
        
        function mudarJogador(valor){
            jogador = valor;
            jogadorSelecionado.innerHTML = jogador;
        }

        function mudarVencedor(quadrado){
            vencedor = quadrado.innerHTML;
            vencedorSelecionado.innerHTML = vencedor + ' &#x1F3C6';
        }

        function checaJogador(){
            var quadrado1 = document.getElementById('1');
            var quadrado2 = document.getElementById('2');
            var quadrado3 = document.getElementById('3');
            var quadrado4 = document.getElementById('4');
            var quadrado5 = document.getElementById('5');
            var quadrado6 = document.getElementById('6');
            var quadrado7 = document.getElementById('7');
            var quadrado8 = document.getElementById('8');
            var quadrado9 = document.getElementById('9');

            if(checaSequencia(quadrado1, quadrado2, quadrado3)){
                mudarCorQuadrado(quadrado1, quadrado2,quadrado3);
                mudarVencedor(quadrado1);
                return;
            }
            if(checaSequencia(quadrado1, quadrado4, quadrado7)){
                mudarCorQuadrado(quadrado1, quadrado4,quadrado7);
                mudarVencedor(quadrado1);
                return;
            }
            if(checaSequencia(quadrado4, quadrado5, quadrado6)){
                mudarCorQuadrado(quadrado4, quadrado5,quadrado6);
                mudarVencedor(quadrado4);
                return;
            }
            if(checaSequencia(quadrado7, quadrado8, quadrado9)){
                mudarCorQuadrado(quadrado7, quadrado8,quadrado9);
                mudarVencedor(quadrado7);
                return;
            }
            if(checaSequencia(quadrado2, quadrado5, quadrado8)){
                mudarCorQuadrado(quadrado2, quadrado5,quadrado8);
                mudarVencedor(quadrado2);
                return;
            }
            if(checaSequencia(quadrado3, quadrado6, quadrado9)){
                mudarCorQuadrado(quadrado3, quadrado6,quadrado9);
                mudarVencedor(quadrado3);
                return;
            }
            if(checaSequencia(quadrado1, quadrado5, quadrado9)){
                mudarCorQuadrado(quadrado1, quadrado5,quadrado9);
                mudarVencedor(quadrado1);
                return;
            }
            if(checaSequencia(quadrado3, quadrado5, quadrado7)){
                mudarCorQuadrado(quadrado3, quadrado5,quadrado7);
                mudarVencedor(quadrado3);
            }
        }

        function mudarCorQuadrado(quadrado1, quadrado2, quadrado3){
            quadrado1.style.background = '#00FF00';
            quadrado2.style.background = '#00FF00';
            quadrado3.style.background = '#00FF00';
        }
        function checaSequencia(quadrado1, quadrado2, quadrado3){
            var eigual = false;
            if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
                eigual = true;
            }return eigual;
        }

        function reiniciar(){
            vencedor = null;
            vencedorSelecionado.innerHTML = '';
            for(var i = 1; 1 <= 9; i++){
                var quadrado = document.getElementById(i);
                quadrado.style.color ='#d8d8d8';
                quadrado.style.background = '#d8d8d8';
                quadrado.innerHTML = '-';
            }
            mudarJogador('X');
        }