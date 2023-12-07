//Script


// Pokemon Api Section Start ====================================


function accessPokemonApi() {
    var pokemonApiCall = "https://pokeapi.co/api/v2/pokemon?&limit=151&";

    fetch(pokemonApiCall)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {

            var pokemonApiData = data;
            // console.log(pokemonApiData)


            //this variable will be set dynamically based off the pokesona quiz
            var pokePick = 1;

            findAPokemon(pokePick);

        })


}

accessPokemonApi();



function findAPokemon(pokePick) {
    var pokedexNumber = "https://pokeapi.co/api/v2/pokemon/" + pokePick + "/";

    fetch(pokedexNumber)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {


            var pokemonApiData = data;
            console.log(pokemonApiData);

            var pokeType = pokemonApiData.types[0].type.name;
            console.log("Pokemon Type: " + pokeType);

        })

}

// Pokemon Api Section End ======================================



// Giphy Api Section Start ======================================

var giphyApiKey = "832va7uRpJ7h6cRIeQSDqVb72uTktwtu";



function accessGiphyPokemonApi(pokeName) {

    var giphyPokemonApiCall = "https://api.giphy.com/v1/gifs/search?&q=" + pokeName + "&api_key=" + giphyApiKey;

    fetch(giphyPokemonApiCall)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {


            var pokeGifArray = data;
            console.log(pokeGifArray);

            //Dynamically calls pokemon imgs based off pokeName passed-in-variable
            var pokeImg = data.data[0].image.original_still.url;
            console.log("Pokemon Img Link: " + pokeImg);

            //will be img in html
            var imgLink = document.getElementById('pic');
            imgLink.setAttribute('src', pokeImg);

            //Dynamically calls pokemon giphs based off pokeName passed-in-variable
            var pokeGiph = data.data[0].images.original.url;
            console.log("Pokemon Gif Link: " + pokeGiph);

            //will be giph in html
            var giphLink = document.getElementById('gif');
            giphLink.setAttribute('src', pokeGiph);

        })
};

// Giphy Api Section End ======================================


// Quiz Pages Section Start ===================================

var pokeStartPg = document.querySelector("#start");
var questionOnePg = document.querySelector("#uno");
var questionTwoPg = document.querySelector("#dos");
var questionThreePg = document.querySelector("#tres");
var questionFourPg = document.querySelector("#quatro");
var questionFivePg = document.querySelector("#cinco");

// Quiz Pages Section End ===================================



// Quiz Pages Section End ===================================







