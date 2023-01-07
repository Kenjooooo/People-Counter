let countEl = document.getElementById("count-el") // [cmd+k+c]
let saveEL = document.getElementById("save-el")
let count = 0 

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEL.textContent += countStr // textContent instead of innerText to show the spaces from line 11
    countEl.textContent = 0
    count = 0
}