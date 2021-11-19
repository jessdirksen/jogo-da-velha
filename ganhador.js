function ganhador() {

   let td1 = document.getElementById(1).innerText
   let td2 = document.getElementById(2).innerText
   let td3 = document.getElementById(3).innerText
   let td4 = document.getElementById(4).innerText
   let td5 = document.getElementById(5).innerText
   let td6 = document.getElementById(6).innerText
   let td7 = document.getElementById(7).innerText
   let td8 = document.getElementById(8).innerText
   let td9 = document.getElementById(9).innerText

   if((td1 == td2 && td2 == td3 && td1 != "" && td2 != "" && td3 != "") || 
   (td4 == td5 && td5 == td6 && td4 != "" && td5 != "" && td6 != "") ||
   (td7 == td8 && td8 == td9 && td7 != "" && td8 != "" && td9 != "") ||
   (td1 == td4 && td4 == td7 && td1 != "" && td4 != "" && td7 != "") ||
   (td2 == td5 && td5 == td8 && td2 != "" && td5 != "" && td8 != "") ||
   (td3 == td6 && td6 == td9 && td3 != "" && td6 != "" && td9 != "")) {
   
    alert("Você ganhou!")
   }
}

