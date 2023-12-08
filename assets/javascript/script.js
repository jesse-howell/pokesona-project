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
            console.log(pokemonApiData)


            //this variable will be set dynamically based off the pokesona quiz
            var typePick = "fire";

            findAPokemonType(typePick);
            accessGiphyPokemonApi(typePick)
        })
        .then()
};

// accessPokemonApi();

// edited function to select pokemon type instead of pokedex number

function findAPokemonType(typePick) {
    var pokesonaType = "https://pokeapi.co/api/v2/type/" + typePick + "/";

    fetch(pokesonaType)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var pokemonNmae = data.pokemon[Math.floor(Math.random()*10)].pokemon.name
            accessGiphyPokemonApi(pokemonNmae)

        })
};

// Pokemon Api Section End ======================================



// Giphy Api Section Start ======================================

var giphyApiKey = "832va7uRpJ7h6cRIeQSDqVb72uTktwtu";



function accessGiphyPokemonApi(pokeName) {
    console.log("giphy")
    var giphyPokemonApiCall = "https://api.giphy.com/v1/gifs/search?&q=" + pokeName + "&api_key=" + giphyApiKey;

    fetch(giphyPokemonApiCall)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {


            var pokeGifArray = data;
            console.log(pokeGifArray.data[0].images.original.url);

            //Dynamically calls pokemon imgs based off pokeName passed-in-variable
            //var pokeImg = data.data[0].image.original_still.url;
            //console.log("Pokemon Img Link: " + pokeImg);

            //will be img in html
            //var imgLink = document.getElementById('pic');
            //imgLink.setAttribute('src', pokeImg);

            //Dynamically calls pokemon giphs based off pokeName passed-in-variable
//            var pokeGiph = data.data[0].images.original.url;
  //          console.log("Pokemon Gif Link: " + pokeGiph);

            //will be giph in html
            var giphLink = document.getElementById('gif');
            giphLink.setAttribute('src', pokeGifArray);

        })
};

// Giphy Api Section End ======================================


// Quiz Pages Section Start ===================================

var q1DropDown = document.getElementById('Q1-new');
var q2DropDown = document.getElementById('Q2-new');
var q3DropDown = document.getElementById('Q3-new');
var q4DropDown = document.getElementById('Q4-new');
var q5DropDown = document.getElementById('Q5-new');

var q1Answer = q1DropDown.addEventListener('change', function (event) {
    event.preventDefault();
    console.log(event.target.value)
});
var q2Answer = q2DropDown.addEventListener('change', function (event) {
    event.preventDefault();
    console.log(event.target.value)
});
var q3Answer = q3DropDown.addEventListener('change', function (event) {
    event.preventDefault();
    console.log(event.target.value)
});
var q4Answer = q4DropDown.addEventListener('change', function (event) {
    event.preventDefault();
    console.log(event.target.value)
});
var q5Answer = q5DropDown.addEventListener('change', function (event) {
    event.preventDefault();
    console.log(event.target.value)
});


// Quiz Pages Section End ===================================


function handleSubmit(event) {
    let answerArr = [];
    let typeCount = {};

    event.preventDefault();
    console.log('inside handleSubmit')
    console.log(q1DropDown.value);
    console.log(q2DropDown.value);
    console.log(q3DropDown.value);
    console.log(q4DropDown.value);
    console.log(q5DropDown.value);

    // pushes all values from dropdowns
    answerArr.push(q1DropDown.value);
    answerArr.push(q2DropDown.value);
    answerArr.push(q3DropDown.value);
    answerArr.push(q4DropDown.value);
    answerArr.push(q5DropDown.value);
    console.log(answerArr);

    // creates an objct to keep track of type frequency
    for (let i = 0; i < answerArr.length; i++) {
        var type = answerArr[i];
        if (type in typeCount) {
            typeCount[type]++;
        } else {
            typeCount[type] = 1;
        }
    }
    console.log(typeCount);

    // finds the key with the highest value
    var max = 0;
    var maxKey = "";

    // for loop to find the type that shows up most frequently
    for (let type in typeCount) {
        if (typeCount[type] > max) {
            max = typeCount[type];
            maxKey = type
        }
    }
    console.log(typeCount);
    console.log(maxKey);

    var resultStored = localStorage.setItem("Type", maxKey);
    // console.log(results);

    // search using the pokemon type
    findAPokemonType(maxKey);
};
// Display the result

var questionForm = document.getElementById('question-form');


// console.log(`\nBased on your responses, your Pokémon type is ${pokemonType}!`);



// event listener for the submit button
questionForm.addEventListener('submit', handleSubmit);

