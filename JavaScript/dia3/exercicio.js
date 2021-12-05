let nvname= prompt("Digite o nome da nave")
let substituir =prompt("Qual caracter voce deseja substituir?")
let newcaracter=prompt("Por qual caracter voce deseja substituir?")
let novaeroanve=""

for( let pos=0; pos < nvname.length; pos++){
    if(nvname[pos]==substituir){
    novaeroanve+= newcaracter;
    }else{
    novaeroanve+= nvname[pos];
    }
}
alert("O novo nome da Nave é " + novaeroanve)