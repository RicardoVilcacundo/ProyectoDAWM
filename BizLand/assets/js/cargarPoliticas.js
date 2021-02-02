document.addEventListener('DOMContentLoaded', function() {
    cargarJson();
})

let cargarJson = () => {

  fetch('https://raw.githubusercontent.com/RicardoVilcacundo/ProyectoDAWM/main/BizLand/assets/json/disenopoliticas.json')
  .then( (resultado) => {
    return resultado.json();
  })
  .then( (data) => {
    console.log(data);
    let sectiontitle = document.createElement('div');
    sectiontitle.setAttribute('class', 'section-title');
    let title = document.createElement("h3");
    let Tspan = document.createElement("span");
    Tspan.textContent = data.politicas[0].titulo;
    title.appendChild(Tspan)
	for ( cont1 of data.politicas[0].contenido) {
		let pgenerales = document.createElement('p');
		pgenerales.textContent = cont1;
		title.appendChild(pgenerales);
	}
    sectiontitle.appendChild(title);

    let sectiondepartamentales = document.createElement('div');
    sectiondepartamentales.setAttribute('class', 'section-title');
    let titledep = document.createElement('h3');
    let Tspandep = document.createElement("span");
    Tspandep.textContent = data.politicas[1].titulo;
    titledep.appendChild(Tspandep);
	for ( cont2 of data.politicas[1].contenido) {
		let pdef = document.createElement('p');
		pdef.textContent = cont2;
		titledep.appendChild(pdef);
	}
	
    let listtitle = document.createElement('h3');
    listtitle.textContent = data.politicas[2].titulo;
    let ul = document.createElement('ul');
    for( tipo of data.politicas[2].contenido){
        let li = document.createElement("li");  
        li.textContent = tipo;
        ul.appendChild(li);
    }
    sectiondepartamentales.appendChild(titledep);
    let seccionlista = document.createElement('div');
    seccionlista.setAttribute('class', 'section-lista')
    seccionlista.appendChild(listtitle);
    seccionlista.appendChild(ul);

    let sectionespec = document.createElement('div');
    sectionespec.setAttribute('class', 'section-title');
    let titleespec = document.createElement("h3");
    let Tspanespec = document.createElement("span");
    Tspanespec.textContent = data.politicas[3].titulo;
    titleespec.appendChild(Tspanespec)
	for ( cont3 of data.politicas[1].contenido) {
		let pespec = document.createElement('p');
		pespec.textContent = cont3;
		titleespec.appendChild(pespec);
	}
    sectionespec.appendChild(titleespec);

    let contenedor = document.getElementsByClassName("contAudi")[0];
    contenedor.appendChild(sectiontitle);
    contenedor.appendChild(sectiondepartamentales);
    contenedor.appendChild(seccionlista);
    contenedor.appendChild(sectionespec);




   })
  .catch( (error) => {
    console.log("Error ",error)

  })
}