let nome=prompt("Olá, Qual o nome do piloto?");
let Vel = 0
let vel=prompt("Ola " + nome+"! A nave está parada...Que velocidade voce gostaria de acelerar a nave?")
confirm("Estamos acelerando a Nave para a velocidade " + vel +" ok?")
if (vel <0) alert("Nave está parada. Considere partir e aumentar a Velocidade")
else if(vel < 40){
    alert("Você está devagar, podemos aumentar mais")
}if(vel >=40 && vel <80)
{
alert("Parece uma boa velocidade para manter")
}else if(vel >=80 && vel <100)
{
alert("Velocidade alta, considere diminuir")
}else if(vel >=100)
{
alert("Velocidade perigosa. Controle automatico forçado")
}
alert("Olá Piloto " + nome + "!" + "\nVelocidade atual da sua Nave: " + vel+ "km/h")