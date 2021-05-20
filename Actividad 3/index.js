//vriable de duración de 15 minutos para cada cookie
var fecha = new Date();
fecha.setTime(fecha.getTime()+1000*60*15);

//función para mostrar los prompt
function inicio(){
    //Guarda primer camino tomado
    let lado = prompt("¿que camino desea tomar? (Izquierda o Derecha)");
    //si el primer camino es izquierda
    if(lado === 'Izquierda'){
        let lado2 = prompt("¿Que camino desea tomar? (Izquierda o Derecha)");
        let cookie = undefined;
        //si el segundo camino es izquierda
        if(lado2 === 'Izquierda'){
            console.log("Haz llegado a la casa de Hansel y Gretel");
            document.cookie = 'cookie1=casa expires='+fecha.toGMTString(); 
        }
        //si el segundo camino es derecha
        else if(lado2 === 'Derecha'){
            console.log("Estas perdido, haz llegado a un arbol");
            document.cookie = 'cookie2=Arbol expires='+fecha.toGMTString();
            
        }
        //En caso de ingresar un valor no valido
        else{
            window.alert("Ingrese un valor valido");
            window.location.reload();
        }
        console.log(lado2);
    }
    //Si el primer camino es derecha
    else if (lado === 'Derecha'){
        let lado3 = prompt("¿Que camino desea tomar? (Izquierda o Derecha)");
        let cookie = undefined;
        //Si el segundo camino es izquierda
        if(lado3 === 'Izquierda'){
            console.log("Cuidado, haz llegado con un hongo furioso");
            document.cookie = 'cookie3=hongo expires='+fecha.toGMTString();
        }
        //Si el segundo camino es derecha
        else if(lado3 === 'Derecha'){
            console.log("Corre! Haz llegado a casa de la bruja");
            document.cookie = 'cookie4=casabru; expires='+fecha.toGMTString(); 
        }
        //Si se ingreso un valor incorrecto
        else{
            window.alert("Ingrese un valor valido");
            window.location.reload();
        }
        console.log(lado3);
    }
    //Si se ingreso un valor incorrecto
    else{
        window.alert("Ingrese un valor valido");
        window.location.reload();
    }
    console.log(lado);
    console.log(document.cookie);
    //redirigir según la cookie creada
    function redirigir(){
        if(document.cookie == 'cookie1=casa expires='+fecha.toGMTString()){
            //mandar a la casa
            window.location = './casa.html';
        }
        else if(document.cookie == 'cookie2=Arbol expires='+fecha.toGMTString()){
            //mandar al arbol
            window.location = './Arbol.html';
        }
        else if(document.cookie == 'cookie3=hongo expires='+fecha.toGMTString()){
            //mandar al hongo
            window.location = './Hongo.html';
        }
        else{
            //mandasr a la casa de la bruja
            window.location = './casabruja.html';
        }
    }
    redirigir();
}
//temporizador
let temporizador = setTimeout(inicio, 1000);

console.log(window.location);
console.log(document.cookie);
