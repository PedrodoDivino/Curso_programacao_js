let spaceship= prompt("Qual o nome da nave?")
let invertedname=""

for (let i=spaceship.length-1;i>=0;i--){
  if(spaceship[i]=="e"){
  break
}
invertedname += spaceship[i]
}
alert("Nome original:  "+ spaceship+ "\n Nome após ocultação:" +invertedname)