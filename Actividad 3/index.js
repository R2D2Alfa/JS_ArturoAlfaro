var fecha = new Date();
fecha.setTime(fecha.getTime()+1000*60*15);


function inicio(){
    let lado = prompt("¿que camino desea tomar? (Izquierda o Derecha)");
    if(lado === 'Izquierda'){
        let lado2 = prompt("¿Que camino desea tomar? (Izquierda o Derecha)");
        let cookie = undefined;
        if(lado2 === 'Izquierda'){
            console.log("Haz llegado a la casa de Hansel y Gretel");
            document.cookie = 'cookie1=casa expires='+fecha.toGMTString(); 
        }
        else if(lado2 === 'Derecha'){
            console.log("Estas perdido, haz llegado a un arbol");
            document.cookie = 'cookie2=Arbol expires='+fecha.toGMTString();
            
        }
        else{
            window.alert("Ingrese un valor valido");
            window.location.reload();
        }
        console.log(lado2);
    }

    else if (lado === 'Derecha'){
        let lado3 = prompt("¿Que camino desea tomar? (Izquierda o Derecha)");
        let cookie = undefined;
        if(lado3 === 'Izquierda'){
            console.log("Cuidado, haz llegado con un hongo furioso");
            document.cookie = 'cookie3=hongo expires='+fecha.toGMTString();
        }
        else if(lado3 === 'Derecha'){
            console.log("Corre! Haz llegado a casa de la bruja");
            document.cookie = 'cookie4=casabru; expires='+fecha.toGMTString(); 
        }
        else{
            window.alert("Ingrese un valor valido");
            window.location.reload();
        }
        console.log(lado3);
    }
    else{
        window.alert("Ingrese un valor valido");
        window.location.reload();
    }
    console.log(lado);
    console.log(document.cookie);
    function redirigir(){
        if(document.cookie == 'cookie1=casa expires='+fecha.toGMTString()){
            window.location = './casa.html';
        }
        else if(document.cookie == 'cookie2=Arbol expires='+fecha.toGMTString()){
            window.location = './Arbol.html';
        }
        else if(document.cookie == 'cookie3=hongo expires='+fecha.toGMTString()){
            window.location = './Hongo.html';
        }
        else{
            window.location = './casabruja.html';
        }
    }
    redirigir();
}

let temporizador = setTimeout(inicio, 1000);
console.log(window.location);
console.log(document.cookie);
/*
document.cookie = "cookie1=casa; expires=Thu, 01 Jan 1970 00:00:00 GMT";
document.cookie = "cookie2=Arbol; expires=Thu, 01 Jan 1970 00:00:00 GMT";
document.cookie = "cookie3=hongo; expires=Thu, 01 Jan 1970 00:00:00 GMT";
document.cookie = "cookie4=casabru; expires=Thu, 01 Jan 1970 00:00:00 GMT";*/