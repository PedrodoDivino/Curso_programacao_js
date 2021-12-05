/*let spaceship = "Helmet"
let  newspaceship = ""

for(let i = 0; i < spaceship.length; i++){
    if(spaceship[i]=="e"){
        newspaceship+="i"
    }else{
        newspaceship+=spaceship[i]
    }
}
console.log(newspaceship) */ 
let spaceship = prompt('Digite o nome da nave:')
let charToreplace = prompt('Qual caracter você deseja substituir?')
let replacementChar = prompt('Por qual caracter você deseja substituir?')
let  newSpaceship= ""
for (let pos=0; pos < spaceship.length; pos++){
    if(spaceship[pos]== charToreplace){
        newSpaceship+=replacementChar
    }else{
        newSpaceship+=spaceship[pos]
    }
} 
alert("O novo nome da nave: é: " + newSpaceship)


