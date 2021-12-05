/*let velocity = 50
 let acceleration= 5

while (velocity<=100) {

console.log("Estamos acelerando a " +velocity +"km/s")
velocity+= acceleration
}

//-------------------------------
let constellation = "Andromeda"
let pos= 0
let constellationLength = constellation.length
while(pos <constellationLength){
    if(constellation[pos]=="a" || constellation[pos]=="A"){
        console.log([pos])
    }
    pos++
}*/

let dobra=0
let option=""
let shipname= prompt("Qual o nome da Nave?")
 option=prompt("Deseja entrar em dobra espacial? \n1-SIM \n2-NÃO")


while(option=="1"){
    dobra++
   option= prompt("Deseja realizar a róxima dobra espacial? \n1-SIM \n2-NÃO")

}
alert("Nome da nave: " + shipname + "\n Numero de Dobras Espaciais: " + dobra + "")