let hitchedSpaceships =["Demeter", "Darvin", "Supernova", "Fenix" , "Puller"]

/*let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship, index) {
    let upcased= currentSpaceship.toLocaleUpperCase()
    return upcased
})
console.log(upcasedSpaceships)*/
let with7chars= hitchedSpaceships.find(elements =>{return elements.length >= 7})
console.log(with7chars)