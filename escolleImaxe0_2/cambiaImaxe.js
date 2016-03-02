var palabras=["CÍRCULO",
"CADRADO","HEXÁGONO","PENTÁGONO","TRIÁNGULO","ROMBO"]
var imaxes=["circulo.png", "cadrado.png", "hexagono.png", "pentagono.png", "triangulo.png", "rombo.png"]

var numChou=0;

var imaxeEsquerda;
var imaxeDereita;
var palabra;
var numIncorrecto;
var numPreguntas=6;
var index=0;
var respostasBen=0;
var respostasMal=0;
var tempoTotal=0;
var tempoParcial;

function comezar(){
	index=0;
	respostasBen=0;
	respostasMal=0;
	tempoTotal=0;
	document.getElementById('palabra').innerHTML="CAL É UN...";
	document.getElementById('resultado').innerHTML=" ";
	document.getElementById('imaxeEsquerda').src='imaxes/cardback.png';
	document.getElementById('imaxeDereita').src='imaxes/cardback.png';
	document.getElementById('tempo').innerHTML='';
	cambiaPalabra();
}
function cambiaPalabra(){
	
    if ( index<numPreguntas){
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
	setTimeout("amosar()",1500);
	index++;
}
else {
	document.getElementById('resultado').innerHTML="ACERTACHES "+respostasBen+", FALLACHES "+respostasMal;
	tempo=Math.abs(tempo-Date.now());
	document.getElementById('tempo').innerHTML="Tempo : "+tempoTotal+" milisegundos!";
}
	
}

function comprobaEsquerda() {
tempoTotal=tempoTotal+(Date.now()-tempoParcial);
if (numChou==1){
	mal();
}
else {
	ben();
}
}

function comprobaDereita(){
tempoTotal=tempoTotal+(Date.now()-tempoParcial);
	if (numChou!=1){
		mal();
	}
	else {
		ben();
	}
}

function mal(){	
	document.getElementById('resultado').innerHTML="NON, ESE ERA UN "+palabras[numIncorrecto]+"! :)";
	respostasMal++;
	tempoTotal=tempoTotal+1000;
	document.getElementById('resultado').classList.add('aparece');
	setTimeout("cambiaPalabra()",1000);
}

function ben(){
	document.getElementById('resultado').innerHTML="BEN!";
	respostasBen++;
	document.getElementById('resultado').classList.add('aparece');
	setTimeout("cambiaPalabra()",1000);
}

function amosar(){
    document.getElementById('palabra').innerHTML=palabra +"?";
	document.getElementById('imaxeEsquerda').src='imaxes/'+imaxeEsquerda;
	document.getElementById('imaxeDereita').src='imaxes/'+imaxeDereita;
	document.getElementById('resultado').innerHTML="";
	tempoParcial=Date.now();

}