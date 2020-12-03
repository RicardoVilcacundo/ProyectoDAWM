
let cargarJson = () => {

  fetch('https://raw.githubusercontent.com/RicardoVilcacundo/ProyectoDAWM/main/BizLand/assets/json/auditoria.json')
  .then( (resultado) => {
    return resultado.json();
  })
  .then( (data) => {
  
    let stitle = document.createElement("div");
    stittle.setAttribute('class', 'section-title')
    let title = document.createElement("h3");
    let Tspan = document.createElement("span");
    Tspan.textContent = "Auditoria Externa";
    tittle.appendChild(Tspan)
    for ( texto of data.auditoria.externa.descripcion){
    		let Tp= document.createElement("p");   
    		Tp.textContent = texto.textContent;
    		tittle.appendChild(Tp)
    }
    stitle.appendChild(title)   

    let clista = document.createElement("div");
    clista.setAttribute('class', 'section-lista')
    let ctitle = document.createElement("h3");
    let Lspan = document.createElement("span");
    Lspan.textContent = "Objetivos:";    
    ctitle.appendChild(Lspan)
    let ul = document.createElement("ul");
    for ( texto2 of data.auditoria.externa.objetivos){
    	     let li = document.createElement("li");  
    		li.textContent = texto2.textContent;
    		ul.appendChild(li)
    }
    clista.appendChild(cTitle)
    clista.appendchild(ul) 
    
    
    let stitle2 = document.createElement("div");
    stittle2.setAttribute('class', 'section-title')
    let title2 = document.createElement("h3");
    let Tspan2 = document.createElement("span");
    Tspan2.textContent = "Auditoria Interna";
    tittle2.appendChild(Tspan2)
    for ( texto of data.auditoria.interna.descripcion){
    		let Tp= document.createElement("p");   
    		Tp.textContent = texto.textContent;
    		tittle.appendChild(Tp)
    }
    stitle2.appendChild(title2)   

    let clista2 = document.createElement("div");
    clista2.setAttribute('class', 'section-lista')
    let ctitle2 = document.createElement("h3");
    let Lspan2 = document.createElement("span");
    Lspan2.textContent = "Objetivos:";    
    ctitle2.appendChild(Lspan2)
    let ul2 = document.createElement("ul");
    for ( texto2 of data.auditoria.interna.objetivos){
    	     let li = document.createElement("li");  
    		li.textContent = texto2.textContent;
    		ul2.appendChild(li)
    }
    clista2.appendChild(cTitle2)
    clista2.appendchild(ul2) 

   let contendor = document.getElemntsByClassName("contAudi")[0];
   contenedor.appendchild(stittle);
   contenedor.appendchild(clista);
   contenedor.appendchild(stittle2);
   contenedor.appendchild(clista2);
     
   })
  .catch( (error) => {

    console.log("Error ",error)

  })
}


document.addEventListener('DOMContentLoaded', function() {
	cargarJson();
})


