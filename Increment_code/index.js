
let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEL.innerText = count

}
function save() {
    let countstr = count + " - "
    saveEL.textContent += countstr
    countEL.textContent = 0
    count=0
}