let numberOfJokes = 2;

document.onload = setup();

function jokeCardCreator(jokeString){
    let jokeDiv = document.createElement("div");
    jokeDiv.className = "card card-body";
    jokeDiv.innerText = jokeString;

    let jokeDivCollapse = document.createElement("div");
    jokeDivCollapse.appendChild(jokeDiv);

    ++numberOfJokes;;
    jokeDivCollapse.className = "collapse";
    jokeDivCollapse.id = "joke" + numberOfJokes;

    let jokeHeader = document.createElement("h5");
    jokeHeader.className = "card-title";
    jokeHeader.innerText = "Joke " + numberOfJokes;

    let jokeButton = document.createElement("button");
    jokeButton.className = "btn btn-danger";
    jokeButton.type = "button";
    jokeButton.setAttribute("data-bs-toggle", "collapse");
    jokeButton.setAttribute("data-bs-target", "#joke"+numberOfJokes);
    jokeButton.setAttribute("aria-expanded", false);
    jokeButton.setAttribute("aria-controls", "collapseExample");
    jokeButton.innerText = "Joke";

    let cardBody = document.createElement("div");
    cardBody.appendChild(jokeHeader);
    cardBody.appendChild(jokeButton);
    cardBody.appendChild(jokeDivCollapse);
    cardBody.className = "card-body";

    let chimg = document.createElement("img");
    chimg.src = "./cnorris.jpg";
    chimg.className = "card-img-top";
    chimg.alt = "Chuclk Norris tips his hat at you";

    let totalCard = document.createElement("div");
    totalCard.appendChild(chimg);
    totalCard.appendChild(cardBody);
    totalCard.className = "card cn-joke-card";
    totalCard.style.width = "30vw";

    let cardContainer = document.getElementById("card-container");
    cardContainer.appendChild(totalCard);
}

function setup(){
    //add all event listeners
    let buyJokeButton = document.querySelector(".button-container button");
    buyJokeButton.addEventListener("click", async ()=>{
        let joke = await getJokeAsync();
        jokeCardCreator(joke);
    });
    console.log("buton worked");

    //try setting up an onload event for the html node to call this function
}

//two methods for getting a joke
//one with .then and .catch
//useless function to show how to do it before ES6
//dont need to use 
function getJokeDotThen(){
    let response = fetch("http://api.icndb.com/jokes/random?limitTo=[nerdy]");
    let dataPromise = response.then((data)=>{
        return data.json().then((parsedData)=>{
            return parsedData.value.joke;
        })
    }).catch((err)=>{
        console.log(err);
    });

    return dataPromise;
}

//another one with async and await

async function getJokeAsync(){
    try{
        //just wait for promise to resolve
        let response = await fetch("http://api.icndb.com/jokes/random?limitTo=[nerdy]");

        let data = await response.json();

        return data.value.joke;
    } catch(e){
        return "Sorry, Chuck Norris roundhoused this joke";
    }
}