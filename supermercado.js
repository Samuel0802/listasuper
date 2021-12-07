
{
  let nome = 'Consumidor(a)';

  let bv = function () {

    alert('Seja bem vindo! ' + nome);
  }
  bv();
}


var itens = [];

document.querySelector('input[type=submit]')
  .addEventListener('click', () => {

    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var valorProduto = document.querySelector('input[name=valor_produto]');




    itens.push({
      nome: nomeProduto.value,
      valor: valorProduto.value

    });


    let listaPro = document.querySelector('.lista-pro');
    let soma = 0;
    listaPro.innerHTML = "";
    itens.map(function (val) {
      soma += parseFloat(val.valor);

      listaPro.innerHTML += `
  <div class="lista-produto-single">
             <h3 style="color:yellow;">`+ val.nome + `</h3>
             <h3 class="price-produto"><span style="color:black;">R$ `+ val.valor + `</span></h3>
        </div>
  
  `
    })
    soma = soma.toFixed(2);  //somar apenas com 2 casa decimal 
    nomeProduto.value = "";
    valorProduto.value = "";


    let elementoSoma = document.querySelector('.soma-produto h1');

    elementoSoma.innerHTML = 'R$' + soma;

  });

document.querySelector('button[name=limpar]')
  .addEventListener('click', () => {
    itens = [];
    document.querySelector(".lista-pro").innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "R$ 0";
  });

//VALIDAÇÃO APENAS LETRAS
var nomeProduto = document.querySelector('input[name=nome_produto]');
nomeProduto.onkeyup = function () {
  var patterns = /[^a-z-ã-ç-A-Z- -]/g;
  var caretPos = this.selectionStart;

  this.value = nomeProduto.value.replace(patterns, '');
  this.setSelectionRange(caretPos, caretPos);
}

var valorProduto = document.querySelector('input[name=valor_produto]');
valorProduto.onkeyup = function () {
  var patterns = /[^0-9-,-.]/g;
  var caretPos = this.selectionStart;

  this.value = valorProduto.value.replace(patterns, '');
  this.setSelectionRange(caretPos, caretPos);
}

//VALIDAÇÃO DE CAMPO VAZIO
