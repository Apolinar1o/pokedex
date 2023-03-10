let input = document.getElementById("pesquisa").value
input = input.toLowerCase()
let x = document.getElementsByClassName("lista")
function pesquisa_poke() {

    for (let i = 0; i <x.length; i++) {
        if(!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none"
            console.log("1")
        } else {
            x[i].style.display = "list-item"
            console.log("2")
        }
    }
}
function click() {
    x.style.display = "list-item"
}