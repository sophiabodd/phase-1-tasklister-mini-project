//const { Button } = require("bootstrap")

console.log("hello world!")

const form = document.getElementById("create-task-form")
const div = document.getElementById("div")
const ul = document.getElementById("tasks")
const text = document.getElementById("new-task-description")
const btn = document.createElement("button")
document.body.append(btn)
btn.innerText = "delete"

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const li = document.createElement("li")
  ul.append(li)
  li.innerText = text.value
  const select = document.createElement("select")
  li.append(select)
  select.style.color = "red"
  btn.addEventListener("click", () => {
    li.remove()
})

})
form.addEventListener("click", () => {
  text.innerText = ul.value
})



  






