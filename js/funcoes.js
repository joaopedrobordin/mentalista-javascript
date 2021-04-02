let numeroSecreto = parseInt(Math.random() * 10);
let chute = parseInt(pronpt("dijite um numero de 0 a 10"));

while (temtativas > 0)

    if(chute > numeroSecreto)//se o chute for maior que o numero secreto
    {alert("numero secreto é menor");//escreva o numero é menor 
    temtativas = temtativas - 1}//menos 1 temtativa

    if(chute == numeroSecreto)
    {alert("parabems voce acertou");    break}

    if(chute < numeroSecreto)
    {alert("numero secreto é maior");
    temtativas = temtativas - 1}
    

    