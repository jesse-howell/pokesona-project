//Script




// Pokemon Api Section Start ====================================


function accessPokemonApi() {
        var pokemonApiCall = "https://pokeapi.co/api/v2/pokemon?&limit=151&"

        fetch(pokemonApiCall)
        .then(function (response){
            return response.json()
        })
            .then(function (data){

                var pokemonApiData = data;
                // console.log(pokemonApiData)


                //this variable will be set dynamically based off the pokesona quiz
                var pokePick = 1;


                



                findAPokemon(pokePick)

            })


}

accessPokemonApi();



function findAPokemon(pokePick) {
    var pokedexNumber = "https://pokeapi.co/api/v2/pokemon/"+pokePick+"/"

    fetch(pokedexNumber)
    .then(function (response){
        return response.json()
    })
        .then(function (data){

            
            var pokemonApiData = data;
            console.log(pokemonApiData)


            var pokeName = pokemonApiData.name;
            console.log("Pokemon Name: " + pokeName)
            

            var pokeType = pokemonApiData.types[0].type.name;
                console.log("Pokemon Type: " + pokeType)



            var pokeAbilitiesArray = pokemonApiData.abilities 
                function countPokeAbilities(pokeAbilitiesArray) {
                    for (i = 0; i <pokeAbilitiesArray.length; i++){
                        console.log("Pokemon Abilities "+(i+1)+": " + pokeAbilitiesArray[i].ability.name)
                    }
                } 

                countPokeAbilities(pokeAbilitiesArray)



        })
    



}









// Pokemon Api Section End ======================================