let velocity= 150
let menu=prompt("A aeronave está a " + velocity+" km/s   \n Pressione 1 para freiar 20km/s até parar a aeronave!")
while(menu=="1" || velocity!=0){
    velocity= velocity-20
    if(velocity<=0)
    velocity=0
   newvelocity= prompt("A velocidade da nave é de  " + velocity + " km/s  \n Pressione 1 para continuar parando a Nave")
    if(velocity==0)
alert("A aeronave está parada e as comportas já podem ser abertas!!  \n Velocidade de: " + velocity + " km/s" )
}
/*
function slowDown(velocity, printer){
    let deceleration=20 
    while(velocity>0){
        printer(velocity)
        velocity-= deceleration
    }
        alert("Nave parada. As comportas podem ser abertas")
}
let spaceshipVelocity=150
slowDown(spaceshipVelocity,function(velocity){
    console.log("Velocidade atual: " + velocity)
}*/
