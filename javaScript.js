// Função cor do texto        
document.getElementById('alterarTexto').addEventListener('click', function() {
   const texto = document.getElementById('instrucao');
   const corTexto = document.getElementById('cor').value; 
   texto.style.color = corTexto;    
});

// Função cor borda
document.getElementById('alterarCor').addEventListener('click', function() {
   const painel = document.getElementById('painel');
   const corBorda = document.getElementById('cor').value;
   painel.style.borderColor = corBorda; 
});

// Função cor fundo
document.getElementById('alterarFundo').addEventListener('click', function() {
   const painel = document.getElementById('painel');
   const corFundo = document.getElementById('cor').value; 
   painel.style.backgroundColor = corFundo; 
});

// Função tamanho image
document.getElementById('alterarTamanho').addEventListener('click', function() {
   const grafico = document.getElementById('grafico');
   const tamanhos = ['40px', '80px', '120px'];
   const tamanhoAleatorio = tamanhos[Math.floor(Math.random() * tamanhos.length)];
   grafico.style.width = tamanhoAleatorio;
   grafico.style.height = tamanhoAleatorio;
});

// Funções mover
let topPos = 50;  
let leftPos = 50; 

document.getElementById('moverCima').addEventListener('click', function() {
   if (topPos > 20) topPos -= 10; 
   document.getElementById('grafico').style.top = topPos + '%';
});

document.getElementById('moverBaixo').addEventListener('click', function() {
   if (topPos < 80) topPos += 20; 
   document.getElementById('grafico').style.top = topPos + '%';
});

document.getElementById('moverEsquerda').addEventListener('click', function() {
   if (leftPos > 20) leftPos -= 10; 
   document.getElementById('grafico').style.left = leftPos + '%';
});

document.getElementById('moverDireita').addEventListener('click', function() {
   if (leftPos < 80) leftPos += 10; 
   document.getElementById('grafico').style.left = leftPos + '%';
});

// Função reset
document.getElementById('resetar').addEventListener('click', function() {
   const painel = document.getElementById('painel');
   const grafico = document.getElementById('grafico');
   const texto = document.getElementById('instrucao');

   texto.style.color = 'black';
   painel.style.borderColor = 'black';  
   painel.style.backgroundColor = 'white';  
   grafico.style.width = '100px';  
   grafico.style.height = '100px';  
   topPos = 50;  
   leftPos = 50;  
   grafico.style.top = topPos + '%';
   grafico.style.left = leftPos + '%';
});
