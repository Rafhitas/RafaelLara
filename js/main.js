(function($) {
	"use strict"
	
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	// Mobile Toggle Btn
	$('.navbar-toggle').on('click',function(){
		$('#header').toggleClass('nav-collapse')
	});
	
})(jQuery);

const typed= new Typed('.typed', {
	strings:[
	'<i class="saludo">Bienvenidos</i>',
	'<i class="saludo">Welcome</i>',
	'<i class="saludo">Bienvenue</i>',
	'<i class="saludo">Bem-vinda</i>'
],

typeSpeed: 75, //Velocidad en la que se escriben las letras
startDelay: 300, //Tiempo de retraso en iniciar la animación
backSpeed: 75, //Velocidad en milisegundos para borrar la letra
smartBackspace:true,//Elimina las palabras que solo sean nuevas
shuffle: false,//Altera el orden en el que se escriben las palabras
backDelay:1500,//Tiempo de espera despues de que termina de escribir la palabra
loop:true,//Repetir el orden del array
loopCount:false,//Cantidad de veces de repetir el array
showCursor:true,//Mostrar cursor palpitando
cursorChar:'|',//Caracter para el cursor
contenType:'html',//html o mull para texto sin formato

});
