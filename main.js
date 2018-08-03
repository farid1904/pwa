//configuracion y carga de service worker
if('serviceWorker' in navigator){
	console.log('puedes usar el worker');
	navigator.serviceWorker.register('./sw.js')
	                       .then(res=> console.log('service worker loaded', res))
	                       .catch(err=> console.log('service worker not loaded', err));
}else{
	console.log('worker no activo');
}


 //funcion realiza animacion de scroll
$(document).ready(function(){               
	$("#menu a").click(function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $($(this).attr('href')).offset().top  //obtiene lugar del objeto en pixeles
		});
		return false;
	});
});