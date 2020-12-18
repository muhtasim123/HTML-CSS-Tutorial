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
    buyJokeButton.addEventListener("click", ()=>{
        let joke = "There is no chin behind Chuck Norris' beard, only another first";
        jokeCardCreator(joke);
    });
    console.log("buton worked");

    //try setting up an onload event for the html node to call this function
}

