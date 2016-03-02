var palabrasBen=["CÍRCULO",
"CADRADO","HEXÁGONO","PENTÁGONO","TUCHO","NOA"]
var palabrasMal=["CXRCULO",
"CXDRADO","HXXÁGONO","PXNTÁGONO","TRUCHO","NORA"]
var imaxes=["circulo.png", "cadrado.png", "hexagono.png", "pentagono.png", "tucho.jpg","noa.jpg"]

var chou;

function cambiaPalabra(){
  document.getElementById('resultado').innerHTML="&nbsp";
  var num=Math.round(Math.random()*(palabrasBen.length-1));
  var imaxe=imaxes[num];
  document.getElementById('imaxe').src="imaxes/"+imaxe;
  chou=Math.round(Math.random()*2);
  if (chou==1) {
    document.getElementById('palabraEsquerda').innerHTML=palabrasBen[num];
    document.getElementById('palabraDereita').innerHTML=palabrasMal[num]
  } else {
    document.getElementById('palabraEsquerda').innerHTML=palabrasMal[num];
    document.getElementById('palabraDereita').innerHTML=palabrasBen[num]
  }
}

function comprobaEsquerda(){
  if (chou==1) {
document.getElementById('resultado').innerHTML="BEN!"
  } else {
document.getElementById('resultado').innerHTML="MAL!"
  }
}

function comprobaDereita(){
  if (chou==1) {
document.getElementById('resultado').innerHTML="MAL!"
  } else {
document.getElementById('resultado').innerHTML="BEN!"
  }
}
