function calculation(){
    let bill = parseInt(document.getElementById("#b"))
    let tip = parseInt(document.getElementById("#t"))
    let n = parseInt(document.getElementById("#p"))
    let tii = (tip/100)
    let tiii = tii/n
    let res = parseInt(tiii)
    let to = bill+tiii
    document.getElementById("tipvalue").innerHTML = res
    document.getElementById("totalvale").innerHTML= to

}
