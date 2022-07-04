var bool = undefined

const getElement = document.querySelector('#theme')
const lua = document.getElementById("escuro")
const sol = document.getElementById("claro")

getElement.addEventListener('click', function(e) {

    bool = !bool

    if(bool == true) {
        lua.style.display = "none"
        document.getElementById("claro").style.display = "block"
    } else {
        lua.style.display = "block"
        sol.style.display = "none"
    }
    
})

console.log(getElement);