class Spaceship{
constructor(name){
    this.name = name
    this.velocity = 0


    }
    speedUp(aceleration){
this.velocity += aceleration

    }
}
let artemis = new Spaceship("Ártemis")
console.log(artemis)
artemis.speedUp(10)
artemis.speedUp(15)
console.log(artemis)
artemis.speedUp(-25)
console.log(artemis) 