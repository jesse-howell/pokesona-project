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
                console.log(pokemonApiData)



            })





}

accessPokemonApi();













// Pokemon Api Section End ======================================