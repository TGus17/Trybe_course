let peca = "casa";

switch (peca) {
  case "cavalo":
    console.log(peca + " -> Movimento em L");
    break;
  case "peao":
    console.log(peca + " -> Ande uma casa a frente");
		break;
	case "bispo":
		console.log(peca + " -> Ande na diagonal");
		break;
	case "rainha":
		console.log(peca + " -> Anda em qualer direção");
		break;
	case "torre":
		console.log(peca + " -> Anda em movimentos perpendiculares");
		break;
	case "rei":
		console.log(peca + " -> Anda somente uma casa em torno de si");
		break;
	default:
		console.log(peca + " -> Não é uma peça válida");    
}