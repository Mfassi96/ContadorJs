
const clickBtn=document.getElementById('click')
const stopBtn=document.getElementById('stop')
const info=document.getElementById("info")




let contador=0
let guarda_contador=0

let seg=setInterval(()=>{
    seg+=1
},1000)

clickBtn.addEventListener('click',()=>{
    const numero=document.getElementById('numero')
    seg=0
    
    contador=contador+1
   numero.innerHTML=contador


})


stopBtn.addEventListener('click',()=>{
    alert(`Hiciste ${contador} clicks en ${seg} segundos`)
   contador=0
   numero.innerHTML=0
   
})





