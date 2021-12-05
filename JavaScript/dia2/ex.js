
let diAn = prompt("Qual a distancia em anos luz que  voce quer converter?")
let op =prompt(" \n1- Parsec (PC)\n2- Unidade astronomica (AU) \n3- Quilometros(KM)\n\n(Digite o numero da opção desejada)")


let opun 
let disConv

switch (op) {
case "1":
   opun = "1- Parsec"
   disConv= diAn * 0.306601
   break
   case "2":    op= "Unidade Atronomical"
       disConv= diAn*63231.1
       break
       case "3":
         op= "Quilometros"
      disConv= diAn*9.5 *Math.pow(10,12)
           break
     default:
               op= "unidade não identificada"
        disConv= "Conversão fora do escopo"

}
alert("Distancia em anos luz:"+ diAn+ "\n" +opun +":"+ disConv)
