let pokemones = []; // Almacena la informacion detallada de todos los pokemons

async function infoDetallada() { // Se usa la i dentro del link de para pedir la info individual de cada pokemon con la funcion for
  for (let i = 1; i <= 151; i++) {
    try {
      let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        let respuestaJson = await respuesta.json();
          pokemones.push(respuestaJson);
      //  console.log(respuestaJson)                                                  //<<<<<console.LOG
    } catch (err) {
      console.log(err);
    }
  }
  pintarInfo(pokemones);
  // console.log(pokemones[0].name);                                                      //<<<<<console.LOG
}

  infoDetallada();

    let containerPadre$$ = document.querySelector(".container"); // se crea una variable que recoge los datos del container
     let filtrados = [];

   function buscarPokemon(input) { // se crea la funcion para alimentar la variable de filtrado y a su vez se indica que se busque en miniscula
     filtrados = pokemones.filter((pokemon) =>
       pokemon.name.toLowerCase().includes(input.toLowerCase()) // se indica que tome e incluya las letras minusculas
    );
    pintarInfo(filtrados);
  }

  let inputBuscador = document.createElement("input"); // creo el input
      inputBuscador.setAttribute("type", "text"); // pongo el atributo
      inputBuscador.setAttribute("placeholder", "Buscar Pokémon"); // texto que se vere en el input
      inputBuscador.classList.add("claseInput") // se llamada para darle estilo al input en css

    inputBuscador.addEventListener("input", function () {
  
      let inputResul = inputBuscador.value; // se recibe el valor del input y se guarda en una la variable

  buscarPokemon(inputResul); c
  // console.log(filtrados); 
});

   let containerBuscador = document.querySelector(".buscador")  // se selecciona al buscador
       containerBuscador.appendChild(inputBuscador); 
          // console.log(containerBuscador)
function pintarInfo(pokemones) {
  
   containerPadre$$.innerHTML = ''; // se hace para limpiar el buscador 

  for (let i = 0; i < pokemones.length; i++) { // recorre el largo de []
    let pokemon = pokemones[i];  // almacena los datos recogidos en la variable 
    
    let figureFront$$ = document.createElement("figure") // se crea dinameicamente figure
        figureFront$$.classList.add("card", pokemon.types[0].type.name)
        figureFront$$.innerHTML = `<span class="numero">#${pokemon.id}</span> 
                                   <img src="${pokemon.sprites.front_default}" class="card-img" alt="${pokemon.name}" />
                                   <figcaption class="cardTitle">${pokemon.name}</figcaption>`; //se crear dinamicamente y se agregan al html

    let figureBody$$ = document.createElement("figure") //se crea dinameicamente figura transparente 
        figureBody$$.setAttribute('class', 'cardBody')
        figureFront$$.appendChild(figureBody$$);
        figureBody$$.innerHTML = `<figcaption class="cardTitle">${pokemon.types[0].type.name}</figcaption>
                                  <figcaption class="cardTitle2">Abilities</figcaption>`;

      let habilidad = [] // almacenara las habilidades
        for (let habilidades of pokemon.abilities) {

          habilidad.push(habilidades.ability.name)

    }

         for (let i = 0; i < habilidad.length; i++) { // el for insera el sub titulo por cada vuelta
         figureBody$$.innerHTML += `<li class="card-sub-title">${habilidad[i]}</li>`;
     }
        containerPadre$$.appendChild(figureFront$$) // se introduce la figura al container.

  }


}
