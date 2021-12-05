let spaceship="elemental"
let velocity=20
//console.log(spaceship.length==9&&velocity>15)
//V e V =V
//console.log(velocity>10&&velocity<19)
//V e F = F
//console.log(velocity< 17 && spaceship == "elemental")
//F e V= F
//console.log(spaceship=="golias" && velocity>21)
// F e F = F   "TABELA VERDADE DO E"
//console.log(spaceship.length==9 || velocity>15)
// V ou V = V
//console.log(velocity>10 || velocity<19)
//V OU F = V
//console.log(velocity<17 || spaceship =="elemental")
//F OU V = V
//console.log(spaceship=="golias" || velocity>21)
// F ou f =  F
//console.log(!velocity >19)
// NÃO V = F  
//console.log(! (spaceship=="golias"))
// NÃO F = V
console.log((!velocity > 25 && spaceship=="elemental" ) || (velocity-3==17 && spaceship.length+1 > 15))
// !F || F
//V || F
// V