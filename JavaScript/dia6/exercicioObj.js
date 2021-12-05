let spaceship ={
    vel: 0,
    speedUp: function(aceleration){
        this.vel += aceleration
    }
}
function menu(){
spaceship.name= prompt("Qual o nome da sua Nave?")
spaceship.type= prompt("Qual o tipo da sua Nave?")
spaceship.Maxvel= Number (prompt("Qual a velocidade maxima da nave:(km/s)?"))
}
function acelerate(){
    let acceleration= Number (prompt(")Quanto voce quer acelerar a nave?"))
    spaceship.speedUp(acceleration)
    if (spaceship.vel>spaceship.Maxvel){
        alert("Velocidade Máxima ultrapassada" + spaceship.vel+ "\n Velocidade Máxima da nave: " + spaceship.Maxvel + "\n VOCE MORREU")
    }
}
function stop(){
    alert("Nome: " +spaceship.name + "\nTipo da Nave" + spaceship.type + "\nVelocidade da Nave: " + spaceship.vel+ "\nVelocidade Maxima da nave " + spaceship.Maxvel)
    spaceship.vel=0
}
function painel(){
let options
do{
    options=prompt("Voce deseja: \n1- Acelerar \n2- Parar"  )
    switch(options){
        case "1":
            acelerate()
            break;
        case "2":
            stop()
            break;
            default:
                Alert("Opção Invalida")
         }
    }while(options!=2)
}
menu()
painel()
