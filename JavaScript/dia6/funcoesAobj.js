let spaceship ={
name: "Demeter",                       // Temos 4 propriedades dentro do objeto.. Massss
type: "Extração",                     //  Quando a propriedade vira função é chamada chama de
MaxCrew: 20,                         // MÉTODO, masss quando as propriedades nao são   
TurnOn: function(){                  // funções, mas     contem, dados normais, se chamamados
alert("Preparando Propulsão")         // de ATRIBUTOS  
alert("Ligando Computador de bordo")
console.log(this.name) 
    }
}
spaceship.velocity = 0
    spaceship.speddUp = function(aceleration){
this.velocity +=aceleration

    }
    console.log(spaceship)
    spaceship.speddUp(10)
    console.log(spaceship)
