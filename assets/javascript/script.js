//Script

// Pokemon Api Section Start ====================================

function accessPokemonApi() {
    var pokemonApiCall = "https://pokeapi.co/api/v2/pokemon?&limit=151&";

    fetch(pokemonApiCall)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            //this variable will be set dynamically based off the pokesona quiz
            var typePick = "fire";

            findAPokemonType(typePick);
            accessGiphyPokemonApi(typePick);
        })
        .then()
};

// edited function to select pokemon type instead of pokedex number

function findAPokemonType(typePick) {
    var pokesonaType = "https://pokeapi.co/api/v2/type/" + typePick + "/";

    fetch(pokesonaType)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var pokemonName = data.pokemon[Math.floor(Math.random() * 10)].pokemon.name;
            accessGiphyPokemonApi(pokemonName);
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

            //Dynamically calls pokemon giphs based off pokeName passed-in-variable
            var pokeGiph = data.data[0].images.original.url;

            //will be giph in html
            var giphLink = document.getElementById('gif');
            giphLink.setAttribute('src', pokeGiph);

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
});

var q2Answer = q2DropDown.addEventListener('change', function (event) {
    event.preventDefault();
});

var q3Answer = q3DropDown.addEventListener('change', function (event) {
    event.preventDefault();
});

var q4Answer = q4DropDown.addEventListener('change', function (event) {
    event.preventDefault();
});

var q5Answer = q5DropDown.addEventListener('change', function (event) {
    event.preventDefault();
});

// Quiz Pages Section End ===================================

// Type Assignment Section Start ============================
// logic to calculate the Poke-type from answers
function handleSubmit(event) {
    var answerArr = [];
    var typeCount = {};

    event.preventDefault();

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

    // finds the key with the highest value
    var max = 0;
    var maxKey = "";

    // for loop to find the type that shows up most frequently
    for (let type in typeCount) {
        if (typeCount[type] > max) {
            max = typeCount[type];
            maxKey = type;
        }
    }
    // send type to local storage
    localStorage.setItem("Type", maxKey);

    // search using the pokemon type
    findAPokemonType(maxKey);

    displayPrevType();
};

// Type Assignment Section End ==============================

// Display the result
var questionForm = document.getElementById('question-form');

// event listener for the submit button
questionForm.addEventListener('submit', handleSubmit);

function displayPrevType() {
    var previousType = localStorage.getItem("Type");
    var endP = "You're a " + previousType.toString() + " type!!!";
    var endPContainingEl = document.getElementById("stored-type");
    var endPEl = document.createElement("p");
    endPContainingEl.appendChild(endPEl);
    endPEl.setAttribute("class", "font-italic", "text-center");
    endPEl.setAttribute("id", "congrats")
    endPEl.innerHTML = endP;

    increaseFontSz();
};

function increaseFontSz () {
    document.getElementById("congrats").style.fontSize = "xxx-large";
};