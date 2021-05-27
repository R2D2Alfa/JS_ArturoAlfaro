
let figura = document.getElementById("fig")
let canvas=document.getElementById("myCanvas")
let ctx=canvas.getContext("2d")
//funcion para sacar los colores
function colores(){
    let color = document.getElementById("color");
    //evento de select tipo de color
    color.addEventListener("change", ()=>{
        //declaraciones para la funcion
        let colorv = document.getElementById("color").value;
        let color2 = document.getElementById("color2");
        let color1v = document.getElementById("color1").value;
        let color2v = document.getElementById("color2").value;
        //si el color es solido
        if(colorv == "sol"){
            color2.style.display = "none"
            ctx.fillStyle = color1v
            ctx.fill()
            console.log("hola")
        }
        //Si el color es degradado lineal
        else if(colorv == "degl"){
            color2.style.display = "block"
            var degradado = ctx.createLinearGradient(100,100,300,300);
            degradado.addColorStop(0, color1v)
            degradado.addColorStop(1, color2v)
            console.log("adios")
            ctx.fillStyle = degradado
            ctx.fill()
        }
        //Si el color es degradado radian
        else if(colorv == "degr"){
            color2.style.display = "block"
            var degradado = ctx.createRadialGradient(200,200,0,200,200,300);
            degradado.addColorStop(0, color1v)
            degradado.addColorStop(1, color2v)
            console.log("alv")
            ctx.fillStyle = degradado
            ctx.fill()
        }
    })
}
//Funcion para que cargue de inmediato
function carga(){
    let color = document.getElementById("color");
    let color1 = document.getElementById("color1");
    let color2 = document.getElementById("color2");
    let color1v = document.getElementById("color1").value;
    //evento de select
    color.addEventListener("change", ()=>{
      colores();  
      console.log("UwU")
    })
    //Evento al cambiar color
    color1.addEventListener("change", ()=>{
        colores(); 
        console.log("UnU") 
    })
    //Evento al cambiar el segundo color
    color2.addEventListener("change", ()=>{
        colores();  
        console.log("UmU")
    })
}
//figuras
figura.addEventListener("change", ()=>{
    let valor = document.getElementById("fig").value;
    //Si se escogió la estrella
    if(valor == "Est"){
        ctx.clearRect(0, 0, 400, 400)
        ctx.beginPath();
        ctx.moveTo(200,50);
        ctx.lineTo(110,325);
        ctx.lineWidth = 4;
        
        ctx.lineTo(339,149);
        ctx.lineWidth = 4;

        ctx.lineTo(61,149);
        ctx.lineWidth = 4;

        ctx.lineTo(290,325);
        ctx.lineWidth = 4;

        ctx.lineTo(200,50);
        ctx.lineWidth = 4;

        carga();
        ctx.fill();

        ctx.closePath();
    }
    //Si se escogió Mickey Mouse
    else if(valor == "Mic"){
        ctx.clearRect(0, 0, 400, 400)
        ctx.beginPath();
    ctx.arc(200, 200, 120, 0, Math.PI*2)
        moveTo(110,120)
        ctx.arc(110, 120, 70, 0, Math.PI*2)
        moveTo(290,120)
        ctx.arc(290, 120, 70, 0, Math.PI*2)
        carga();
    ctx.fill();
    }
    //Si se escogió el pinguino
    else if (valor == "Pin"){
        //limpiar figura anterior
        ctx.clearRect(0, 0, 400, 400)
        ctx.beginPath();
        //cuerpo y cabeza pinguino
        ctx.arc(200, 100, 80, 0, Math.PI*2)
        ctx.arc(200, 250, 120, 0, Math.PI*2)
        carga()
        ctx.fill();
        ctx.closePath();
ctx.beginPath();
//aletas pinguino
    ctx.moveTo(91,200);
    ctx.lineTo(60,350);
        ctx.lineWidth = 4;
        ctx.lineTo(100,250);
        ctx.lineWidth = 4;
    ctx.moveTo(309,200);
    ctx.lineTo(340,350);
        ctx.lineWidth = 4;
        ctx.lineTo(300,250);
        ctx.lineWidth = 4;
    carga();
    ctx.fill();
ctx.closePath();
ctx.beginPath();
//panza
    ctx.arc(200, 250, 80, 0, Math.PI*2)
    ctx.fillStyle="#FFFFFF"
    ctx.fill();
ctx.closePath()
ctx.beginPath();
//pico pinguino
    ctx.moveTo(180,110);
    ctx.lineTo(200,140);
    ctx.lineWidth = 4;
    ctx.lineTo(220,110);
    ctx.lineWidth = 4;
    ctx.fillStyle="#FFFB19"
    ctx.fill();
ctx.closePath();
ctx.beginPath();
//ojos
    ctx.arc(230, 80, 15, 0, Math.PI*2)
    ctx.fillStyle="#FFFFFF"
    ctx.fill();
ctx.closePath()
ctx.beginPath();
    ctx.arc(170, 80, 15, 0, Math.PI*2)
    ctx.fillStyle="#FFFFFF"
    ctx.fill();
ctx.closePath()
ctx.beginPath();
    ctx.arc(170, 80, 10, 0, Math.PI*2)
    ctx.fillStyle="#000000"
    ctx.fill();
ctx.closePath()
ctx.beginPath();
    ctx.arc(230, 80, 10, 0, Math.PI*2)
    ctx.fillStyle="#000000"
    ctx.fill();
ctx.closePath()
ctx.beginPath();
//Pies del pinguino
    ctx.rect(148,360,50,20)
    ctx.fillStyle="#FFFB19"
    ctx.fill();
ctx.closePath();
ctx.beginPath();
    ctx.rect(202,360,50,20);
    ctx.fillStyle="#FFFB19";
    ctx.fill();
ctx.closePath();
}
})

