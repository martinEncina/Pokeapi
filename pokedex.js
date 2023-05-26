async function infoDetallada() { // Se usa la i dentro del link de para pedir la info individual de cada pokemon con la funcion for

    let pokemones = [] // Almacena la informacion detallada de todos los pokemons

    for (let i = 1; i <= 151; i++) {
        try {
            let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            let respuestaJson = await respuesta.json()
            pokemones.push(respuestaJson);
            //  console.log(respuestaJson)                                                  //<<<<<console.LOG
        }
        catch (err) {
            console.log(err)
        }
    }
    pintarInfo(pokemones)
    // console.log(pokemones[0].name);                                                      //<<<<<console.LOG
}
infoDetallada()


let olPokeDex = document.querySelector("#pokedex") // Valor inicial de toda la Api

function pintarInfo(pokemones) {
    for (let i = 0; i < pokemones.length; i++) {
        let pokemon = pokemones[i] // entro a cada objeto del array y lo guardo individualmente en la variable 
         console.log(pokemon.abilities);                                                                                      //<<<<<console.LOG
        let listPokemon$$ = document.createElement("li") // creo la lista de cada pokemon
        let figureFront$$ = document.createElement("figure") // figure que contiene la parte frontal de cada carta
        figureFront$$.setAttribute("class", "cardFront")// creo una clase para la parte delantera 
        listPokemon$$.appendChild(figureFront$$) //pongo el div dentro del li
        figureFront$$.innerHTML = `<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />        
                                   <h2>${pokemon.name}</h2>
                                   <span>${pokemon.types[0].type.name} `// dinamicamente inserto img, h2 span

        ///// PARTE DE ATRAS DE LA TARJETA            
        let figureBack$$ = document.createElement("figure") // figure que contiene la parte trasera de cada carta
        figureBack$$.setAttribute("class", "cardBack")// creo una clase para la parte trasera con :hover
        listPokemon$$.appendChild(figureBack$$) //pongo el div dentro del li
        figureBack$$.innerHTML = `<img src="${pokemon.sprites.back_default}" alt="${pokemon.name}" />        
                                  <h2>${pokemon.abilities[0].ability.name}</h2>
                                  <span>${pokemon.types[0].type.name} `// dinamicamente inserto img, h2 span  

        olPokeDex.appendChild(listPokemon$$) // pongo el li dentro del ol         
    }
}

// console.log(olPokeDex);