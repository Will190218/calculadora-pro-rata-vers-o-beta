// var valor_mensalidade = document.getElementById("valor_mensalidade").value;
// var valorDigitado = parseInt(valor_mensalidade.value);
// console.log(valorDigitado);

// var dias_trancados = document.getElementById("dias_trancados").value;
// var valor_concatenado = valor_mensalidade + dias_trancados;
// var valorInteiro = parseInt(valor_concatenado)
// var button = document.getElementById("button");
//   console.log(valorInteiro);
//   // if (isNaN(valorInteiro)) {
//   //   console.log("Valor inválido");
//   // } else {
//   //   console.log(valor_mensalidade * dias_trancados);
//   // }
 button.addEventListener("click", function() {

const valor_mensalidade = document.getElementById("valor_mensalidade").value;
const dias_trancados = document.getElementById("dias_trancados").value;
const valor_concatenado = valor_mensalidade + dias_trancados;
const diasMes = 30
const valorInteiro = parseFloat(valor_concatenado);
const valorDiaria = valor_mensalidade / diasMes;
const valorDesconto = valorDiaria * dias_trancados;
var resultado  = document.getElementById("valor_desconto");
resultado.innerHTML =  ("O valor do desconto é R$"+ valorDesconto);

console.log("O valor da díaria é:"+ valorDiaria);
console.log("O valor total do desconto é de R$"+ valorDesconto);


setTimeout(function() {
  document.getElementById("button_remove").removeAttribute("style");
  console.log("Mensagem exibida após 3 segundos");

}, 3000);
  });

let maisInfo = document.getElementById("button_remove");

 maisInfo.addEventListener("click", function(){
  alert("Essa função ainda não está disponível, estamos trabalhando nisso")
//    console.log("funcionou")
//  document.getElementById("mais_info").removeAttribute("style")
// let valorDiaria = document.getElementById("valor_diaria");
// let valorMensalidade = document.getElementById("valor_mensalidade");


//  valorDiaria.innerHTML = ("Valor da diária R$" +valorMensalidade / diasMes);


});




  


  

