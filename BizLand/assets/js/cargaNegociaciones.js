
let cargarJson = () => {

  fetch('https://raw.githubusercontent.com/RicardoVilcacundo/ProyectoDAWM/main/BizLand/assets/json/negociaciones.json')
  .then( (resultado) => {
    return resultado.json();
  })
  .then( (data) => {
	  
	//En esta parte de la pagina se cargará todo lo que va a continuacion
    let contenedor = document.getElementsByClassName("container")[2];
	
	//-------------------Se llena el primer div, el cual tendrá titulo, subtitulo, y unos parrafos-----------------
	let primerDiv = document.createElement("div");
	primerDiv.setAttribute('class', 'section-title');
	
	let dtitulo = document.createElement("h2");
	dtitulo.textContent = "Concierto y reestructuración de pasivos";
	let dsubtitulo = document.createElement("h3");
	let dspan = document.createElement("span");
	dspan.textContent = "Reestructuración de Pasivos";
	dsubtitulo.appendChild(dspan);
	primerDiv.appendChild(dtitulo);
	primerDiv.appendChild(dsubtitulo);
	
	for ( desc1 of data.negociacion[0].contenido){
		let parrafo1 = document.createElement("p");
		parrafo1.textContent = desc1;
		primerDiv.appendChild(parrafo1);
	}
	
	
	//--------------------Se llena el segundo div, el cual tendrá informacion y una lista de elementos---------------------
	let segundoDiv = document.createElement("div");
	segundoDiv.setAttribute('class', 'row');
	
	//-------------PRIMER DIV INTERNO--------------------
	let primerDivInterno = document.createElement("div");
	primerDivInterno.setAttribute('class', 'col-lg-6');
	primerDivInterno.setAttribute('data-aos', 'zoom-out');
	primerDivInterno.setAttribute('data-aos-delay', '100');
	let dimagen = document.createElement("img");
	dimagen.setAttribute('src', 'assets/img/negociacion.jpg');
	dimagen.setAttribute('class', 'img-fluid');
	dimagen.setAttribute('alt', '');
	primerDivInterno.appendChild(dimagen);
	
	//-------------SEGUNDO DIV INTERNO-------------------
	let segundoDivInterno = document.createElement("div");
	segundoDivInterno.setAttribute('class', 'col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center');
	segundoDivInterno.setAttribute('data-aos', 'fade-up');
	segundoDivInterno.setAttribute('data-aos-delay', '100');
	
	//Creacion de parrafo
	for ( desc2 of data.negociacion[1].contenido){
		let dinformacion = document.createElement("p");
		dinformacion.setAttribute('class', 'font-italic');
		dinformacion.textContent = desc2;
		segundoDivInterno.appendChild(dinformacion);
	}
	
	//Creacion de lista
	let dlista = document.createElement("ul");
	for(let elemento of data.negociacion[2].contenido){
		
		let dli = document.createElement("li");
		let di = document.createElement("i");
		
		let miniDiv = document.createElement("div");
		let dsup = document.createElement("h5");
		dsup.textContent = elemento;
		miniDiv.appendChild(dsup);

		
		di.appendChild(miniDiv);
		dli.appendChild(di);
		dlista.appendChild(dli);
	}
	
	//Agrego al segundo div interno
	segundoDivInterno.appendChild(dlista);
	
	//Agrego los divs internos al segundo div
	segundoDiv.appendChild(primerDivInterno);
	segundoDiv.appendChild(segundoDivInterno);
	
	
	//--------------------Se llena el div principal, el cual tendrá toda la informacion que se quiere---------------------
	//Agrego los divs al div principal
	contenedor.appendChild(primerDiv);
	contenedor.appendChild(segundoDiv);
	
   })
  .catch( (error) => {
    console.log("Error ",error)

  })
}

document.addEventListener('DOMContentLoaded', function() {
    cargarJson();
})