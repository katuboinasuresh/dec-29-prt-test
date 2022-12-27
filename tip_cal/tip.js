function calculation(){
    let bill = document.querySelector("#b")
    let tip = document.querySelector("#t")
    let n = document.querySelector("#p")
    let tii = (tip/100)
    let tiii = tii/n
    let res = parseInt(tiii)
    let to = bill+tiii
    document.querySelector("#bi").innerHTML=bill
    document.querySelector("#ti").innerHTML=tip
    document.querySelector("#n").innerHTML=n
    document.getElementById("tipvalue").innerHTML = res
    document.getElementById("totalvale").innerHTML= to

}
