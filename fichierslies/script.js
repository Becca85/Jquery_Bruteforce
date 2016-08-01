jQuery(document).ready(function(){  



$("#chercher").click(function(){
var tabDeMot = [];
var brutDeForce = $.ajax({
	url : 'http://docusland.fr/code-academie/js_bruteforce/',
	type : 'POST',
	dataType : 'html',
}); // appel ajax du site a craquer
	tabDeMot = $.ajax({
	url:'http://docusland.fr/code-academie/js_bruteforce/data/dico.txt',
	type : 'GET',
	dataType : 'text'
});// appel ajax du dico

	function decouvrirmotdepasse() {
			tabDeMot.split();// decoupage de la liste de mot en tableau
			for (var i = 0; i < tabDeMot.length; i++){
				if("brutDeForce + '?password=' + tabDeMot[i] = 'success'"){
					return tabDeMot[i];
				}

			}
	});

});

// tentative d'utiliser get et post au lieu d'ajax
 /*$("#chercher").click(function(){


var i = 0;
$.get({
	'http://docusland.fr/code-academie/js_bruteforce/dico.txt',
	'false', 
	function tabDeMot,
	'text',
});
$.post({
	'http://docusland.fr/code-academie/js_bruteforce/',
	 function decouvrirmotdepasse,
	'html',
});*/
 