let cargarJson = () => {

  fetch('https://raw.githubusercontent.com/RicardoVilcacundo/ProyectoDAWM/main/BizLand/assets/json/perfiles.json')
  .then( (resultado) => {
    return resultado.json();
  })
  .then( (data) => {
	  
	//LONGITUD DE LA CANTIDAD DE RESEÑAS
	let longitudresena = data.perfil[1].resenas.length;
	  
	//SE CARGARÁ EL NOMBRE Y LA CANTIDAD DE RESEÑAS DEL USUARIO
	let divdatosusuario = document.getElementsByClassName("userData ml-3")[0];
	
	let nombreg = document.createElement("h2");
	nombreg.setAttribute('class', 'd-block');
	nombreg.setAttribute('style', 'font-size: 1.5rem; font-weight: bold;');
	nombreg.textContent = data.perfil[0].nombreperfil;
	
	let resenag = document.createElement("h6");
	resenag.setAttribute('class', 'd-block');
	resenag.setAttribute('id', 'resenaescrita');
	resenag.textContent = longitudresena.toString() + " reseñas escritas";
	
	divdatosusuario.appendChild(nombreg);
	divdatosusuario.appendChild(resenag);
	
	//SE CARGARÁ EL NOMBRE COMPLETO, CORREO Y FECHA DE UNION DE USUARIO
	let divinfo = document.getElementById("basicInfo");
	
	//Nombre completo
	let divprincipal1 = document.createElement("div");
	divprincipal1.setAttribute("class", "row");
	
	let primerdiv1 = document.createElement("div");
	primerdiv1.setAttribute("class", "col-sm-3 col-md-2 col-5");
	let etiqueta1 = document.createElement("label");
	etiqueta1.setAttribute("style", "font-weight:bold;");
	etiqueta1.textContent = "Nombre completo: ";
	primerdiv1.appendChild(etiqueta1);
	
	let segundodiv1 = document.createElement("div");
	segundodiv1.setAttribute("class", "col-md-8 col-6");
	segundodiv1.textContent = data.perfil[0].nombrecompleto;

	let separacion1 = document.createElement("hr");
	
	divprincipal1.appendChild(primerdiv1);
	divprincipal1.appendChild(segundodiv1);
	divinfo.appendChild(divprincipal1);
	divinfo.appendChild(separacion1);
	
	//Correo electronico
	let divprincipal2 = document.createElement("div");
	divprincipal2.setAttribute("class", "row");
	
	let primerdiv2 = document.createElement("div");
	primerdiv2.setAttribute("class", "col-sm-3 col-md-2 col-5");
	let etiqueta2 = document.createElement("label");
	etiqueta2.setAttribute("style", "font-weight:bold;");
	etiqueta2.textContent = "Correo electrónico: ";
	primerdiv2.appendChild(etiqueta2);
	
	let segundodiv2 = document.createElement("div");
	segundodiv2.setAttribute("class", "col-md-8 col-6");
	segundodiv2.textContent = data.perfil[0].correo;

	let separacion2 = document.createElement("hr");
	
	divprincipal2.appendChild(primerdiv2);
	divprincipal2.appendChild(segundodiv2);
	divinfo.appendChild(divprincipal2);
	divinfo.appendChild(separacion2);
	
	//Fecha registro
	let dia = data.perfil[0].diaregistro.toString();
	let mes = data.perfil[0].mesregistro;
	let anio = data.perfil[0].anioregistro.toString();
	let fecharegistro = dia + " de " + mes + " de " + anio;
	
	let divprincipal3 = document.createElement("div");
	divprincipal3.setAttribute("class", "row");
	
	let primerdiv3 = document.createElement("div");
	primerdiv3.setAttribute("class", "col-sm-3 col-md-2 col-5");
	let etiqueta3 = document.createElement("label");
	etiqueta3.setAttribute("style", "font-weight:bold;");
	etiqueta3.textContent = "Fecha de registro: ";
	primerdiv3.appendChild(etiqueta3);
	
	let segundodiv3 = document.createElement("div");
	segundodiv3.setAttribute("class", "col-md-8 col-6");
	segundodiv3.textContent = fecharegistro;

	let separacion3 = document.createElement("hr");
	
	divprincipal3.appendChild(primerdiv3);
	divprincipal3.appendChild(segundodiv3);
	divinfo.appendChild(divprincipal3);
	divinfo.appendChild(separacion3);
	
	//SE CARGARÁ LAS RESEÑAS DENTRO DE LA PAGINA WEB
	let listaresenas = document.getElementById("reviewsCheck");
	var i = 0;
	
	for (let resena of data.perfil[1].resenas){
		
		i++;
		let divprincipalR = document.createElement("div");
		divprincipalR.setAttribute("class", "row");
		
		let primerdivR = document.createElement("div");
		primerdivR.setAttribute("class", "col-sm-3 col-md-2 col-5");
		let etiquetaR = document.createElement("label");
		etiquetaR.setAttribute("style", "font-weight:bold;");
		etiquetaR.textContent = "Reseña " + i.toString() + ": "
		primerdivR.appendChild(etiquetaR);
		
		let segundodivR = document.createElement("div");
		segundodivR.setAttribute("class", "col-md-8 col-6");
		segundodivR.setAttribute("id", i.toString());
		let parrafoR = document.createElement("p");
		parrafoR.setAttribute("class", "parrafo");
		parrafoR.textContent = resena.parafo;
		segundodivR.appendChild(parrafoR);

		let separacionR = document.createElement("hr");
		
		divprincipalR.appendChild(primerdivR);
		divprincipalR.appendChild(segundodivR);
		listaresenas.appendChild(divprincipalR);
		listaresenas.appendChild(separacionR);
		
	}
	
	//SE CARGARÁ LA SECCION DE EDITAR RESEÑA
	let editarresena = document.getElementById("reviewsEdit");
	
	let formularioR = document.createElement("form");
	
	let etiquetaER = document.createElement("label");
	etiquetaER.setAttribute("class", "col-sm-3 col-md-2 col-5");
	etiquetaER.setAttribute("style", "font-weight:bold;");
	etiquetaER.textContent = "Elegir reseña: ";
	formularioR.appendChild(etiquetaER);
	
	let comboboxER = document.createElement("select");
	comboboxER.setAttribute("class", "col-md-8 col-6");
	comboboxER.setAttribute("id", "resenas");
	comboboxER.setAttribute("name", "resenas");
	for(var k=0; k < longitudresena; k++){
		let opcion = document.createElement("option");
		opcion.setAttribute("value", (k+1).toString());
		opcion.textContent = (k+1).toString();
		comboboxER.appendChild(opcion);
	}
	formularioR.appendChild(comboboxER);
	
	let etiquetaTA = document.createElement("label");
	etiquetaTA.setAttribute("class", "col-sm-3 col-md-2 col-5");
	etiquetaTA.setAttribute("style", "font-weight:bold;");
	etiquetaTA.textContent = "Escriba el texto actualizado: ";
	formularioR.appendChild(etiquetaTA);
	
	let areadetexto = document.createElement("textarea");
	areadetexto.setAttribute("class", "col-md-8 col-6");
	areadetexto.setAttribute("id", "resenaeditada");
	areadetexto.setAttribute("name", "resenaeditada");
	areadetexto.setAttribute("cols", "70");
	formularioR.appendChild(areadetexto);
	
	// DE SER ESTRICTAMENTE NECESARIO, ELIMINAR ESTE BLOQUE DE CODIGO Y USAR EL SIGUIENTE!!
	let botonfinal = document.createElement("input");
	botonfinal.setAttribute("id", "btnUpdate");
	botonfinal.setAttribute("class", "btn btn-secondary");
	botonfinal.setAttribute("type", "button");
	botonfinal.setAttribute("value", "Actualizar Reseña");
	formularioR.appendChild(botonfinal);
	
	//let botonfinal = document.createElement("input");
	//botonfinal.setAttribute("id", "btnUpdate");
	//botonfinal.setAttribute("class", "btn btn-secondary");
	//botonfinal.setAttribute("type", "submit");
	//botonfinal.setAttribute("value", "Actualizar Reseña");
	//formularioR.appendChild(botonfinal);
	
	editarresena.appendChild(formularioR);
	
   })
  .catch( (error) => {
    console.log("Error ",error)

  })
}

document.addEventListener('DOMContentLoaded', function() {
    cargarJson();
})