class Agenda{
constructor(name,number){
this.name=name
this.number=number
this.number
    }

verificationNumber(){
this.verificationNumber=true
    }
}
function menu(){
    let option
    while(option!="1" && option!="2" && option!="3"){
        option=prompt("O que deseja fazer?\n1-Agendar \n2-Ver lista de clientes \n3-Sair do Aplicativo")
    }
    return option
}
function createClient(){
    let clientName = prompt("Informe o nome do cliente:")
    let clientNumber= prompt("Informe o numero do cliente:")
    let client = new Agenda(clientName,clientNumber)
    return client
}
function printList(listClients){
    let clientList=""
    listClients.forEach((listClients,index) => {
       clientList += (index+1) + "- " + listClients.name + 
       " (" +  listClients.number + ")\n"})
alert(clientList)
}


let listClients=[]
let chosenOption

while(chosenOption!="3"){
    chosenOption= menu()
    switch (chosenOption){
        case "1":
     let addclient= createClient()
     addclient.verificationNumber()
     listClients.push(addclient)
     break
     case "2":
         printList(listClients)
     break
    case "3":
        alert("Saindo do Aplicativo")
     
    }
}



  