let P1 = "X"
let P2 = "O"

let sinal = P1

function marcar(id) {
    //APONTAR PARA TD PELO ID RECEBIDO
   td = document.getElementById(id)
   // RETORNAR SE JÁ TIVER SIDO MARCADO
   if(td.innerText != "") return
   //COLOCAR O TEXTO (X/O) NO TD INDICADO PELO ID ACIMA
   td.innerText = sinal
   //TROCAR O SINAL (X/O), CICLO
   if(sinal =="X") {
       sinal ="O"
   } else{
       sinal = "X"
   }
ganhador(id)
}