var textoobtenido; //Para modificar una reseña
var textonuevo; //Para añadir una reseña nueva

function editarResena(contenidotexto) {
	
	let listaresenas = document.getElementsByClassName("parrafo");
	let seleccion = document.getElementById("resenas").value;
	
	for(var i=0; i < listaresenas.length; i++) {
		
		if ((parseInt(seleccion)-1) == i){
			
			listaresenas[i].textContent = contenidotexto;
			
		}
		
	}
	
}

function anadirResena(contenido) {
	
	//AÑADE LA RESEÑA A LA LISTA DE RESEÑAS
	let listaresenas = document.getElementsByClassName("parrafo");
	let nuevoid = listaresenas.length + 1;
	let contenedorresenas = document.getElementById("reviewsCheck");
	
	let divprincipal = document.createElement("div");
	divprincipal.setAttribute("class", "row");
	
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
	
}


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