function doubleVelocity(velocity,printer){
    console.log('Entrei em doubleVelocity')
    let newVelocity =velocity*2
    printer(newVelocity)
    return newVelocity
}
let anotherVelocity= doubleVelocity(50,function(velocity){
    console.log("outra velocidade " + velocity)
})

