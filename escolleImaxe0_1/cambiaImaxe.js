var palabras=["CÍRCULO",
"CADRADO","HEXÁGONO","PENTÁGONO","TRIÁNGULO","ROMBO"]
var imaxes=["circulo.png", "cadrado.png", "hexagono.png", "pentagono.png", "triangulo.png", "rombo.png"]

var numChou=0;

var imaxeEsquerda;
var imaxeDereita;
var palabra;
var numIncorrecto;
var resulchufo = document.getElementById('resultado');

function cambiaPalabra(){
    document.getElementById('resultado').classList.remove('aparece');
	document.getElementById('palabra').innerHTML="CAL É UN...";
	document.getElementById('resultado').innerHTML=" ";
	document.getElementById('imaxeEsquerda').src='imaxes/cardback.png';
	document.getElementById('imaxeDereita').src='imaxes/cardback.png';

	var numCorrecto = Math.round(Math.random()*(palabras.length-1));
	palabra=palabras[numCorrecto];
	numIncorrecto=Math.round(Math.random()*(palabras.length-1));
	while (numCorrecto==numIncorrecto){
		numIncorrecto=Math.round(Math.random()*(palabras.length-1));
	}
	numChou=Math.round(Math.random()*2);
	if (numChou==1){
		imaxeEsquerda=imaxes[numIncorrecto];
		imaxeDereita=imaxes[numCorrecto];
	}
	else {
		imaxeEsquerda=imaxes[numCorrecto];
		imaxeDereita=imaxes[numIncorrecto];
	}
	setTimeout("amosar()",1500)
	
}

function comprobaEsquerda() {

if (numChou==1){
	mal();
}
else {
	ben();
}
}

function comprobaDereita(){

	if (numChou!=1){
		mal();
	}
	else {
		ben();
	}
}

function mal(){	
	document.getElementById('resultado').innerHTML="NON, ESE ERA UN "+palabras[numIncorrecto]+"! :)";
	document.getElementById('resultado').classList.add('aparece');
}

function ben(){
	document.getElementById('resultado').innerHTML="BEN!";
	document.getElementById('resultado').classList.add('aparece');
}

function amosar(){
    document.getElementById('palabra').innerHTML=palabra +"?";
	document.getElementById('imaxeEsquerda').src='imaxes/'+imaxeEsquerda;
	document.getElementById('imaxeDereita').src='imaxes/'+imaxeDereita;
	document.getElementById('resultado').innerHTML="";

}