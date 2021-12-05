/*class Spaceship{

}
let mySpaceship = new Spaceship();
console.log(mySpaceship);
class SpacialStation{
    constructor (name,plataformsQuantity) {
        this.name = name
        this.plataformsQuantity  = plataformsQuantity
    }
}
let observatory = new SpacialStation("Observatório", 40)
console.log(observatory)*/
class Spaceship{
    constructor(name,type="Descoberta"){
        this.name = name
       this.type = type 
    }
}
let darwin = new Spaceship("Darwin")
let helmet = new Spaceship("Helmeet", "Batalha")

console.log(darwin)
console.log(helmet)