var btnAbrirPopup = document.getElementById('botonprincipal'),
	overlay = document.getElementById('fondo'),
	popup = document.getElementById('ventana'),
	btnCerrarPopup = document.getElementById('cerrar-ventana');

    btnAbrirPopup.addEventListener('click', function(){
	fondo.classList.add('active');
	ventana.classList.add('active');
});

    btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	fondo.classList.remove('active');
	ventana.classList.remove('active');
});

var btnAbrirPopup = document.getElementById('botonprincipal2'),
	overlay = document.getElementById('fondo2'),
	popup = document.getElementById('ventana2'),
	btnCerrarPopup = document.getElementById('cerrar-ventana2');

    btnAbrirPopup.addEventListener('click', function(){
	fondo2.classList.add('active');
	ventana2.classList.add('active');
});

    btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	fondo2.classList.remove('active');
	ventana2.classList.remove('active');
});

var btnAbrirPopup = document.getElementById('botonprincipal3'),
	overlay = document.getElementById('fondo3'),
	popup = document.getElementById('ventana3'),
	btnCerrarPopup = document.getElementById('cerrar-ventana3');

btnAbrirPopup.addEventListener('click', function(){
	fondo3.classList.add('active');
	ventana3.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	fondo3.classList.remove('active');
	ventana3.classList.remove('active');
});

var btnAbrirPopup = document.getElementById('botonprincipal4'),
	overlay = document.getElementById('fondo4'),
	popup = document.getElementById('ventana4'),
	btnCerrarPopup = document.getElementById('cerrar-ventana4');

btnAbrirPopup.addEventListener('click', function(){
	fondo4.classList.add('active');
	ventana4.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	fondo4.classList.remove('active');
	ventana4.classList.remove('active');
});
    