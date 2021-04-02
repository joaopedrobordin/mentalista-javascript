let numeroSecreto = parseInt(Math.random() * 10);
let chute = parseInt(pronpt("dijite um numero de 0 a 10"));//chute resebe o numero que voce digitar

while (temtativas > 0)// em quanto temtativas for maior que 0 temte dnv

    if(chute > numeroSecreto)//se o chute for maior que o numero secreto
    {alert("numero secreto é menor");//alerte que o numero é menor 
    temtativas = temtativas - 1}//menos 1 temtativa

    if(chute == numeroSecreto)//se o chute for igual o numero secreto
    {alert("parabems voce acertou");//alerte que voce acertou
    break}//parar o jogo 

    if(chute < numeroSecreto)//se o chute dor menor que o numero secreto
    {alert("numero secreto é maior");//alertar que o numero é maior 
    temtativas = temtativas - 1}//menos 1 temtativa
    

    