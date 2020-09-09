let generate = () => {
    let dataImgList = ["evilface", "angryface", "coolface", "feverface", "vomitface", "sneezeface", "mindblownface", 'thinkingface']
    // this code is to generate title in the page
    const gameContent = document.querySelector('.gameContainer')
    frontFlip = true

    const title = document.createElement('div')
    title.classList.add("container")

    const h1InTitle = document.createElement('h1')
    h1InTitle.classList.add("text-center", "text-white", "display-4")

    const titleContent = document.createTextNode("How is your memory")

    title.appendChild(h1InTitle)
    h1InTitle.appendChild(titleContent)
    gameContent.appendChild(title)

    // below code will execute the grid and the emoji in the page
    dataImgList.forEach((image) => {
        for (let k = 0; k < 2; k++) {
            // This creates a div and will go in gameContainer
            divForEmoji = document.createElement('div')
            divForEmoji.classList.add('card')
            divForEmoji.setAttribute('data-image', image)

            // This creates imgs and will go in div
            imgOfEmoji = document.createElement('img')
            altImgOfEmoji = document.createElement('img')

            // first element should be front-flip and rest for front class
            if (frontFlip) {
                Object.assign(imgOfEmoji, {
                    className: 'front flip',
                    src: `${image}.png`,
                    alt: `${image}`
                })
                frontFlip = false
            } else {
                Object.assign(imgOfEmoji, {
                    className: 'front',
                    src: `${image}.png`,
                    alt: `${image}`
                })
            }


            console.log(divForEmoji)
            Object.assign(altImgOfEmoji, {
                src: "lco.png",
                className: "back",
                alt: "lco"
            })
            divForEmoji.appendChild(imgOfEmoji)
            divForEmoji.append(altImgOfEmoji)
            gameContent.appendChild(divForEmoji)

        }
    })
}

generate()

const cards = document.querySelectorAll(".card");
console.log(cards);

//variables
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  //   console.log("Card flipped");
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }
}

function checkIt() {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
  //   console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail() {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 240);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

//TODO: shuffle

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();