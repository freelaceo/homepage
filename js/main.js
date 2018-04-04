document.addEventListener('DOMContentLoaded', function(){

	// Margin por el header fixed
	var headerHeight = document.querySelector('.main-header').scrollHeight;
	document.querySelector('body').style.marginTop = headerHeight+'px';

	// Tabs
	var categorias = document.querySelectorAll('.event-categories li a');
	var tabEventos = document.querySelector('#tabs-events');
	var tituloTab = tabEventos.querySelector('h2');

	categorias.forEach(function(elem){
		elem.addEventListener('click', function(elem){
			elem.preventDefault();

			var categoriasLi = document.querySelectorAll('.event-categories li');
			var paneles = tabEventos.querySelectorAll('.tab-panel');
			tituloTab.innerText = elem.target.text+' Hackathons';

			categoriasLi.forEach(function(elem){
				if( elem.classList.contains('active') ){
					elem.classList.remove('active');
				}
			});
			
			elem.target.parentElement.classList.add('active');

			paneles.forEach(function(elem){
				if( elem.classList.contains('active') ){
					elem.classList.remove('active');
				}
			});

			tabEventos.querySelector(elem.target.hash).classList.add('active');
		});
	});


});