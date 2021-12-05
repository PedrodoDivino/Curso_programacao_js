let departureDateentry = prompt("Digite a data de partida(forma DD/MM/AAAA")
let departureDate = moment(departureDateentry,"DD/MM/AAAA")
let today = moment()
let datediff= today - departureDate
let chosenOption =prompt("Escolha como gostaria de exibir o tempo de partida \n1- Segundos\n2- Minutos \n3- Horas\n4-Dias")
if(chosenOption=="1"){
    let secondsOFDeparture =Math.round(datediff/1000)
    alert("Tempo de voo: " + secondsOFDeparture+" Segundos")
}else if(chosenOption=="2"){
minutesOfDeparture = Math.round(datediff/1000/60)
alert("Tempo de voo: " + minutesOfDeparture+" Minutos")
}else if(chosenOption=="3"){
    hoursOfDeparture = Math.round(datediff/1000/3600)
    alert("Tempo de voo: " + hoursOfDeparture+" Horas")
    }else if(chosenOption=="4"){
DaysOfDeparture = Math.round(datediff/1000/3600/24)
alert("Tempo de voo: " + DaysOfDeparture+" Dias")
}else{
    alert("Opção Invalida")
}

