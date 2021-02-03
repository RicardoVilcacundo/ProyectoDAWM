var textoobtenido; //Para modificar una reseña
var textonuevo; //Para añadir una reseña nueva

function editarUsuario() {
	
	let elinput = document.getElementById("nuevonombre").value;
	let elnombre = document.getElementById("nombreusuario");
	elnombre.textContent = elinput;
}

function editarImagen() {
	
	let laimagen = document.getElementById("imgProfile");
	laimagen.setAttribute("src", "assets/img/login/user.png");
}

function editarResena(contenidotexto) {
	
	let listaresenas = document.getElementsByClassName("parrafo");
	let seleccion = document.getElementById("resenas").value;
	
	if(listaresenas.length > 0){
		for(var i=0; i < listaresenas.length; i++) {
			
			if ((parseInt(seleccion)-1) == i){
				
				listaresenas[i].textContent = contenidotexto;
				
			}
			
		}
	}
	
}

function eliminarResena() {
	
	let lasresenas = document.getElementsByClassName("parrafo");
	let lacantidad = lasresenas.length;
	if (lacantidad > 0){
		var eltexto = "div" + lacantidad.toString();
		let eldiv = document.getElementById(eltexto);
		eldiv.remove();
		
		//QUITA LA ULTIMA OPCION EN EL COMBOBOX DE EDITAR RESEÑA
		let comboboxr = document.getElementById("resenas");
		
		comboboxr.remove(comboboxr.length-1);
		
		//CAMBIA EL TOTAL DE RESEÑAS HECHAS POR EL USUARIO - DISMINUYE EN 1
		let resenashechas = document.getElementById("resenaescrita");
		var arreglopalabras = resenashechas.textContent.split(" ");
		var cantidadresenas = parseInt(arreglopalabras[0]);
		cantidadresenas--;
		resenashechas.textContent = cantidadresenas.toString() + " reseñas escritas"
	}
	
}

function anadirResena(contenido) {
	
	//AÑADE LA RESEÑA A LA LISTA DE RESEÑAS
	let listaresenas = document.getElementsByClassName("parrafo");
	let nuevoid = listaresenas.length + 1;
	let contenedorresenas = document.getElementById("reviewsCheck");
	
	let divprincipal = document.createElement("div");
	divprincipal.setAttribute("class", "row")
	divprincipal.setAttribute("id", ("div" + nuevoid.toString()));;
	
	//Llena el primer div que tiene un label
	let primerdiv = document.createElement("div");
	primerdiv.setAttribute("class", "col-sm-3 col-md-2 col-5");
	let etiqueta = document.createElement("label");
	etiqueta.setAttribute("style", "font-weight:bold;");
	etiqueta.textContent = "Reseña " + nuevoid.toString();
	primerdiv.appendChild(etiqueta);
	
	//Llena el segundo div con el parrafo
	let segundodiv = document.createElement("div");
	segundodiv.setAttribute("class", "col-md-8 col-6");
	segundodiv.setAttribute("id", nuevoid.toString());
	let parrafonuevo = document.createElement("p");
	parrafonuevo.setAttribute("class", "parrafo");
	parrafonuevo.textContent = contenido;
	segundodiv.appendChild(parrafonuevo);
	
	//Crea el elemento de division hr
	let separacion = document.createElement("hr");
	
	//Une todo
	divprincipal.appendChild(primerdiv);
	divprincipal.appendChild(segundodiv);
	contenedorresenas.appendChild(divprincipal);
	contenedorresenas.appendChild(separacion);
	
	//AÑADE UNA SELECCION MAS EN EL COMBOBOX DE EDITAR RESEÑA
	let comboboxr = document.getElementById("resenas");
	
	let nuevaseleccion = document.createElement("option");
	nuevaseleccion.setAttribute("value", nuevoid.toString());
	nuevaseleccion.textContent = nuevoid.toString();
	comboboxr.appendChild(nuevaseleccion);
	
	//CAMBIA EL TOTAL DE RESEÑAS HECHAS POR EL USUARIO - AUMENTA EN 1
	let resenashechas = document.getElementById("resenaescrita");
	var arreglopalabras = resenashechas.textContent.split(" ");
	var cantidadresenas = parseInt(arreglopalabras[0]);
	cantidadresenas++;
	resenashechas.textContent = cantidadresenas.toString() + " reseñas escritas"
}

//PARA EDITAR EL NOMBRE DEL USUARIO
setTimeout(() => {
	document.getElementById("btnClientUpdate").addEventListener('click', function() {
		editarUsuario();
}); }, 2000);

//PARA BORRAR LA IMAGEN DE PERFIL
setTimeout(() => {
	document.getElementById("btnPhotoUpdate").addEventListener('click', function() {
		editarImagen();
}); }, 2000);

//PARA MODIFICAR UNA RESEÑA
setTimeout(() => {
	document.getElementById("resenaeditada").addEventListener('input', function () {
		textoobtenido = this.value;
}); }, 2000);

setTimeout(() => {
	document.getElementById("btnUpdate").addEventListener('click', function() {
		editarResena(textoobtenido);
		alert("¡Reseña modificada con éxito! No olvides revisar en la pestaña de 'Reseñas escritas'")
}); }, 2000);

//PARA ELIMINAR UNA RESEÑA
setTimeout(() => {
	document.getElementById("btnReviewDelete").addEventListener('click', function() {
		eliminarResena();
}); }, 2000);

//PARA AÑADIR UNA RESEÑA
setTimeout(() => {
	document.getElementById("resenanueva").addEventListener('input', function () {
		textonuevo = this.value;
}); }, 2000);

setTimeout(() => {
	document.getElementById("btnAdd").addEventListener('click', function() {
		anadirResena(textonuevo);
		alert("¡Reseña creada con éxito! No olvides revisar en la pestaña de 'Reseñas escritas'")
}); }, 2000);