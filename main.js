let next=document.querySelector('.next')
let previuos=document.querySelector('.previous')
let imgs=document.querySelector('.imgs')

next.addEventListener("click", function () {
    this.ParentElement.children[3].remove("d-none")
})
previuos.addEventListener("click", function () {
    this.ParentElement.children[3].remove("d-none")
})