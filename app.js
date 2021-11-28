let count = 25

function render(){
    let container = document.getElementById('pokemon')
    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`
}

let prev = document.getElementById('prev')
let next = document.getElementById('next')

prev.onclick = function(){ //whenever this button is clicked, run this code
    if (count > 1) {
        count--
        render()
    }
}

next.onclick = function(){ //whenever this button is clicked, run this code
    if (count < 650) {
        count++
        render()
    }
}

render()