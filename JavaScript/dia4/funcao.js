
/*function speedUp(velocity,acceleration) {
let newVelocity = velocity+acceleration
console.log("Nova velocidade: " + newVelocity)
}
speedUp(60,10)
speedUp(40,20)
speedUp(70,5)
----------------------------------------------------------------
function greetPilot(name,message= "Olá"){
    alert(message+ "," + name)
}
greetPilot("john Mars", "Seja bem")
function greetPilot(name="john Mars",message="Olá") {
    alert(message+"," + name)
}greetPilot()
----------------------------------------------------------------
function speedUp(velocity, acceleration,un="km/s",) {
   let newVelocity = velocity+acceleration 
   alert("Nova velocidade: "+newVelocity + un)
}speedUp(50,20)
function speedUp(velocity, acceleration){
    let newVelocity = velocity+acceleration
    console.log("Nova velocidade:" + newVelocity)
    return newVelocity
}
speedUp(100,20)
-----------------------------------------------------------*/

let nameship = prompt('Qual o nome da aeronave?')
let velocity=0
 let option=""
    while(option!="4"){
  option= prompt('Bem-vindo ao Menu de Navegação! Digite uma das opções a seguir:\n\n1 -> Acelerar a nave em 5km/s\n2 -> Desacelerar a nave em 5km/s\n3 -> Imprimir dados de bordo\n4 -> Sair do Programa\n')
  if(option=="1"){
    velocity=velocity+5 
    alert("Sua velocidade é de " + velocity)
        
 }else if(option=="2"){
      velocity=velocity-5 
      if(velocity<0){
        velocity=0
     alert("Sua velocidade é de " + velocity)
     }
 }else if(option=="3"){
     alert("Nome da Nave  "+ nameship +"\nVelocidade atual: " + velocity)
 
   
 }else if(option=="4"){
     alert("Você saiu do programa!\n " + "Nome da nave: "+ nameship +"\nVelocidade atual:" + velocity)
     break;
     
 }   
}

        
    




   

   




        




    
