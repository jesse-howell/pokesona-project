//Script




// Pokemon Api Section Start ====================================


function accessPokemonApi() {
        var pokemonApiCall = "https://pokeapi.co/api/v2/pokemon?&limit=151&";

        fetch(pokemonApiCall)
        .then(function (response){
            return response.json()
        })
            .then(function (data){

                var pokemonApiData = data;
                // console.log(pokemonApiData)


                //this variable will be set dynamically based off the pokesona quiz
                var pokePick = 1;

                findAPokemon(pokePick);

            })


}

accessPokemonApi();



function findAPokemon(pokePick) {
    var pokedexNumber = "https://pokeapi.co/api/v2/pokemon/"+pokePick+"/";

    fetch(pokedexNumber)
    .then(function (response){
        return response.json()
    })
        .then(function (data){

            
            var pokemonApiData = data;
            console.log(pokemonApiData)


            var pokeName = pokemonApiData.name;
            console.log("Pokemon Name: " + pokeName)
            accessGiphyPokemonApi(pokeName)
            

            var pokeType = pokemonApiData.types[0].type.name;
                console.log("Pokemon Type: " + pokeType)



            var pokeAbilitiesArray = pokemonApiData.abilities;
                function countPokeAbilities(pokeAbilitiesArray) {
                    for (i = 0; i <pokeAbilitiesArray.length; i++){
                        console.log("Pokemon Abilities "+(i+1)+": " + pokeAbilitiesArray[i].ability.name)
                    }
                } 

                countPokeAbilities(pokeAbilitiesArray)

        })

}

// Pokemon Api Section End ======================================



// Giphy Api Section Start ======================================

var giphyApiKey = "832va7uRpJ7h6cRIeQSDqVb72uTktwtu"



function accessGiphyPokemonApi(pokeName) {

    var giphyPokemonApiCall = "https://api.giphy.com/v1/gifs/search?&q="+pokeName+"&api_key="+ giphyApiKey;
    fetch(giphyPokemonApiCall)
    .then(function(response){
        return response.json()
    })
    .then(function(data){


        var pokeGifArray = data
        console.log(pokeGifArray)

        //Dynamically calls pokemon imgs based off pokeName passed-in-variable
        var pokeImg = data.data[0].image.original_still.url;
        console.log("Pokemon Img Link: " + pokeImg)

        //will be img in html
        var imgLink = document.getElementById('pic')
        imgLink.setAttribute('src', pokeImg)

        //Dynamically calls pokemon giphs based off pokeName passed-in-variable
        var pokeGiph = data.data[0].images.original.url;
        console.log("Pokemon Gif Link: " + pokeGiph)

        //will be giph in html
        var giphLink = document.getElementById('gif')
        giphLink.setAttribute('src', pokeGiph)

    })


}











// Giphy Api Section End ======================================