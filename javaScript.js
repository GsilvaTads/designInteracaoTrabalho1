// Função para alterar a cor do texto        
document.getElementById('alterarTexto').addEventListener('click', function() {
   const texto = document.getElementById('instrucao');
   const corTexto = document.getElementById('cor').value; // Obtém a cor do texto selecionada
   texto.style.color = corTexto; // Aplica a cor selecionada ao texto
   
});


// Função para alterar a cor da borda da div 'painel'
document.getElementById('alterarCor').addEventListener('click', function() {
   const painel = document.getElementById('painel');
   const corBorda = document.getElementById('cor').value; // Obtém a cor da borda selecionada
   painel.style.borderColor = corBorda; // Aplica a cor selecionada à borda
});

// Função para alterar a cor de fundo da div 'painel'
document.getElementById('alterarFundo').addEventListener('click', function() {
   const painel = document.getElementById('painel');
   const corFundo = document.getElementById('cor').value; // Obtém a cor de fundo selecionada
   painel.style.backgroundColor = corFundo; // Aplica a cor selecionada ao fundo
});

// Função para alterar o tamanho da imagem dentro da div 'painel'
document.getElementById('alterarTamanho').addEventListener('click', function() {
   const grafico = document.getElementById('grafico');
   const tamanhos = ['40px', '80px', '120px'];
   const tamanhoAleatorio = tamanhos[Math.floor(Math.random() * tamanhos.length)];
   grafico.style.width = tamanhoAleatorio;
   grafico.style.height = tamanhoAleatorio;
});

// Funções para mover a imagem
let topPos = 50;  // Posição inicial (50% do topo)
let leftPos = 50; // Posição inicial (50% da esquerda)

document.getElementById('moverCima').addEventListener('click', function() {
   if (topPos > 20) topPos -= 10; // Limita para não sair do topo
   document.getElementById('grafico').style.top = topPos + '%';
});

document.getElementById('moverBaixo').addEventListener('click', function() {
   if (topPos < 80) topPos += 20; // Limita para não sair da parte inferior
   document.getElementById('grafico').style.top = topPos + '%';
});

document.getElementById('moverEsquerda').addEventListener('click', function() {
   if (leftPos > 20) leftPos -= 10; // Limita para não sair pela esquerda
   document.getElementById('grafico').style.left = leftPos + '%';
});

document.getElementById('moverDireita').addEventListener('click', function() {
   if (leftPos < 80) leftPos += 10; // Limita para não sair pela direita
   document.getElementById('grafico').style.left = leftPos + '%';
});

// Função para resetar todas as propriedades do painel e da imagem
document.getElementById('resetar').addEventListener('click', function() {
   const painel = document.getElementById('painel');
   const grafico = document.getElementById('grafico');
   const texto = document.getElementById('instrucao');

   texto.style.color = 'black';
   painel.style.borderColor = 'black';  // Cor de borda original
   painel.style.backgroundColor = 'white';  // Cor de fundo original
   grafico.style.width = '100px';  // Tamanho original da imagem
   grafico.style.height = '100px';  // Tamanho original da imagem
   topPos = 50;  // Resetando posição vertical
   leftPos = 50;  // Resetando posição horizontal
   grafico.style.top = topPos + '%';
   grafico.style.left = leftPos + '%';
});