let saveEl = document.getElementById("save-el")
let countEl = document.getElementById ("count-el")
let count = 0
console.log(saveEl)



function increment() {
    count += 1
    countEl.textContent = count


}

// Create a save function

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  console.log(count)
  countEl.textContent = 0
  count = 0


}
