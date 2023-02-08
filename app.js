const date=new Date()
const clickBtn=document.getElementById('click')
const stopBtn=document.getElementById('stop')
const crearFilaBtn=document.getElementById('btnCrearFila')
const info=document.getElementById("info")

function crearFila(){
const cuerpoTabla=document.getElementById('cuerpoTabla')
const creaFila=document.createElement("tr")
let creaTdNombre=document.createElement("td")
    creaTdNombre.innerHTML=nombre
let creaTdClicks=document.createElement("td")
    creaTdClicks.innerHTML=contador
let creaTdFecha=document.createElement("td")
    creaTdFecha.innerHTML=`${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`

let fila =cuerpoTabla.appendChild(creaFila)

    fila.appendChild(creaTdNombre)
    fila.appendChild(creaTdClicks)
    fila.appendChild(creaTdFecha)

}




let nombre=prompt('Ingresa tu nombre')
let contador=0

let seg=setInterval(()=>{
    contador+=1
},1000)

clickBtn.addEventListener('click',()=>{
    const numero=document.getElementById('numero')
    seg=0
    
    contador=contador+1
   numero.innerHTML=contador


})


stopBtn.addEventListener('click',()=>{

    alert(`Hola ${nombre} hiciste ${contador} clicks en ${seg} segundos`)
   contador=0
   numero.innerHTML=0

  
   
})

crearFilaBtn.addEventListener('click',()=>{
    crearFila()
})



