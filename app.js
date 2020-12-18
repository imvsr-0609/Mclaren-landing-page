const audio = document.createElement('audio')
const start = document.querySelector(".red")
const end = document.querySelector(".white")
const mclaren = document.querySelector(".mclaren")
const startEnd = document.querySelector(".line-logo")

startEnd.addEventListener('click',()=>{
    startEnd.classList.toggle("line-logo-reverse")
    startCar()
})

function startCar(){
   mclaren.style.backgroundImage =" url(mclaren-720s.jpg)"
   audio.src="exhaust.wav"
   audio.play()
}
audio.addEventListener('ended',()=>{
    mclaren.style.backgroundImage =" url(mclaren-720s-closed.jpg)"
    startEnd.classList=("line-logo")
})