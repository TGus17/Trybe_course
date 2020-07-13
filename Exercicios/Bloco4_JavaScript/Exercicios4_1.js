let custoProduto = 10;
let valorVenda = 20;
let lucro = (valorVenda - (custoProduto * 1.2)) * 1000;

if ((custoProduto > 0) && (valorVenda > 0)) {
  console.log("Seu lucro total foi de " + lucro);
} else {
  console.log("Mensagem de erro.");
}