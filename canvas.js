var dibujo, lienzo, t, b;
function inicio(){

    t = document.getElementById("usuario");
    b = document.getElementById("dibujar");
    b.addEventListener("click",dibujarGrilla);


    dibujo = document.getElementById("dibujito");
    lienzo = dibujo.getContext("2d");

    //dibujarGrilla(lienzo);
    lienzo.beginPath();
    lienzo.strokeStyle = "#00F";
    lienzo.moveTo(100,100);
    lienzo.lineTo(100,200);
    lienzo.lineTo(300,300);
    lienzo.lineTo(100,100);
    lienzo.lineTo(300,0);
    lienzo.lineTo(150,50);
    lienzo.lineTo(0,0);
    lienzo.lineTo(100,100);
    lienzo.stroke();
    lienzo.closePath();


    lienzo.beginPath();
    lienzo.strokeStyle = "#00F";
    lienzo.arc(50,50,25,Math.PI*2,false);
    lienzo.stroke();
    lienzo.closePath();
    
}

function dibujarGrilla(){
    var l = lienzo;
    var rayas = Number(t.value);
    var ancholinea = 300/rayas;
    var ancho = 300, alto = 300;
    var linea;
    for(linea=0;linea<=rayas;linea++){
        l.beginPath();
        l.moveTo(ancholinea*linea,0);
        l.lineTo(ancholinea*linea,300);
        l.strokeStyle = "#000";
        l.closePath();
        l.stroke();
        
        l.beginPath();
        l.moveTo(0,ancholinea*linea);
        l.lineTo(300,ancholinea*linea);
        l.strokeStyle = "#000";
        l.closePath();
        l.stroke();
       
    }
}
