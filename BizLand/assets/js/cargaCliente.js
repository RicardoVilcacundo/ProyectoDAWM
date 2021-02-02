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
	
	//Combobox
	let divprincipalE1 = document.createElement("div");
	divprincipalE1.setAttribute("class", "row");
		
	let primerdivE1 = document.createElement("div");
	primerdivE1.setAttribute("class", "col-sm-3 col-md-2 col-5");
	let etiquetaE1 = document.createElement("label");
	etiquetaE1.setAttribute("style", "font-weight:bold;");
	etiquetaE1.textContent = "Elegir reseña: "
	primerdivE1.appendChild(etiquetaE1);
		
	let segundodivE1 = document.createElement("div");
	segundodivE1.setAttribute("class", "col-md-8 col-6");
	segundodivE1.setAttribute("id", "combobox");
	
	let comboboxE1 = document.createElement("select");
	comboboxE1.setAttribute("name", "resenas");
	comboboxE1.setAttribute("id", "resenas");
	
	for(var k=0; k < longitudresena; k++){
		let opcion = document.createElement("option");
		opcion.setAttribute("value", (k+1).toString());
		opcion.textContent = (k+1).toString();
		comboboxE1.appendChild(opcion);
	}

	segundodivE1.appendChild(comboboxE1);

	let separacionE1 = document.createElement("hr");
		
	divprincipalE1.appendChild(primerdivE1);
	divprincipalE1.appendChild(segundodivE1);
	editarresena.appendChild(divprincipalE1);
	editarresena.appendChild(separacionE1);
	
	
	//TextArea
	let divprincipalE2 = document.createElement("div");
	divprincipalE2.setAttribute("class", "row");
		
	let primerdivE2 = document.createElement("div");
	primerdivE2.setAttribute("class", "col-sm-3 col-md-2 col-5");
	let etiquetaE2 = document.createElement("label");
	etiquetaE2.setAttribute("style", "font-weight:bold;");
	etiquetaE2.textContent = "Escriba el texto actualizado: "
	primerdivE2.appendChild(etiquetaE2);
		
	let segundodivE2 = document.createElement("div");
	segundodivE2.setAttribute("class", "col-md-8 col-6");
	segundodivE2.setAttribute("id", "textbox");
	let areatexto = document.createElement("textarea");
	areatexto.setAttribute("id", "resenaeditada");
	areatexto.setAttribute("name", "resenaeditada");
	areatexto.setAttribute("cols", "70");
	segundodivE2.appendChild(areatexto);

	let separacionE2 = document.createElement("hr");
		
	divprincipalE2.appendChild(primerdivE2);
	divprincipalE2.appendChild(segundodivE2);
	editarresena.appendChild(divprincipalE2);
	editarresena.appendChild(separacionE2);
	
	//Button
	let divprincipalE3 = document.createElement("div");
	divprincipalE3.setAttribute("class", "row");
		
	let primerdivE3 = document.createElement("div");
	primerdivE3.setAttribute("class", "col-sm-3 col-md-2 col-5");
	let entradaboton = document.createElement("input");
	entradaboton.setAttribute("type", "button");
	entradaboton.setAttribute("class", "btn btn-secondary");
	entradaboton.setAttribute("id", "btnUpdate");
	entradaboton.setAttribute("value", "Actualizar Reseña");
	primerdivE3.appendChild(entradaboton);
	
	divprincipalE3.appendChild(primerdivE3);
	editarresena.appendChild(divprincipalE3);
	
   })
  .catch( (error) => {
    console.log("Error ",error)

  })
}

document.addEventListener('DOMContentLoaded', function() {
    cargarJson();
})