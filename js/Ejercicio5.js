let btnmodal = document.getElementById("am")
let venmodal = document.getElementById("vmpc")
let cermodal = document.querySelector(".cerrarModal")

btnmodal.addEventListener("click", () => {
    venmodal.style.display = "block"
})

cermodal.addEventListener("click", () => {
    venmodal.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == venmodal) {
        venmodal.style.display = "none"
    }
})

let btnmoda = document.getElementById("dm")
let venmoda = document.getElementById("vmac")
let cermoda = document.querySelector(".cerrarModal1")

btnmoda.addEventListener("click", () => {
    venmoda.style.display = "block"
})

cermoda.addEventListener("click", () => {
    venmoda.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == venmoda) {
        venmoda.style.display = "none"
    }
})



const sele=document.getElementById('girar');
sele.addEventListener('click', ()=>
{
    random=Math.floor(Math.random() *2) +1;
    let selec =document.getElementById('elige').value
    let apuesta =document.getElementById('apuesta').value

    let acumulado = 0;
    let opcion;
    let contador = 0; 
   
    opcion=confirm("¿Desea empezar a jugar?")
    while(opcion == true)
    {
        random=Math.floor(Math.random() *2) +1;
    if(selec == random)
    {
        alert(random)
        alert(`Es correcto, usted gano`)
        acumulado=acumulado+(apuesta*2)
        alert(`Usted ha ganado, lleva acumulado:`+acumulado)
    }
    else
    {
        alert(random)
        alert(`Usted ha perdido`)
        acumulado=acumulado-apuesta
        alert(`Usted ha perdido, acumulo:`+acumulado)
    }
    if(acumulado<=0){
        opcion==false
    }
    
    contador = contador+1;

    opcion=confirm("Desea seguir jugando?")
}
    
        alert(`Usted ha jugado `+contador+ " partidas y su dinero acumulado es: "+acumulado)

})

