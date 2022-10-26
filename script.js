let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

// part 1
document.getElementById("main-title").innerHTML = "Hi! Welcome to my homepage"

// part 2
const body = document.querySelector("body")
body.style.backgroundColor = "green"

// part 3
const favList = document.querySelector("#favorite-things")
const lastLi = favList.children[favList.children.length - 1]
lastLi.remove()

// part 4
const specialTitle = document.querySelectorAll(".special-title")
for (let i = 0; i < specialTitle.length; i++) {
  specialTitle[i].style.fontSize = "2rem"
}

// part 5
function removeCity(city) {
  const race = document.querySelectorAll("#past-races > li");
  for (let i = 0; i < race.length; i++) {
    if (race[i].innerHTML === city) {
      race[i].parentNode.removeChild(race[i]);
    }
  }
}
removeCity("Chicago");

// part 6
function addCity(city) {
  const newCity = document.createElement("li");
  newCity.textContent = city;
  document.getElementById("past-races").append(newCity);
}
addCity('New York')

// part 7
function newBlogPost(city, sentence) {
  let newDiv = document.createElement("div");
  let newH1 = document.createElement("h1");
  let newP = document.createElement("p");
  newDiv.classList.add("blog-post", "purple");
  newH1.textContent = city;
  newP.textContent = sentence;
  newDiv.append(newH1, newP);
  document.querySelector(".main").appendChild(newDiv);
}
newBlogPost('New York', "I drifted through Times Square!")

// part 8
const randomQuote = function () {
  document.querySelector("#quote-of-the-day").innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
};

function addQuote(quote) {
  const pickQuote = document.querySelector(quote);

  pickQuote.addEventListener("click", function () {
    randomQuote();
  },
    randomQuote()
  );
}
addQuote("#quote-title")

// part 9
function mouseOver(evt, color) {
  let blogPost = document.querySelectorAll(evt);

  blogPost.forEach(function (post) {
    console.log(post);
    post.addEventListener("mouseout", function () {
      post.classList.toggle(color);
    });
    post.addEventListener('mousecenter', function () {
      post.classList.toggle(color);
    });
  });
}
mouseOver(".blog-post", "purple")


function mouseCenter(evt, color) {
  let blogPost = document.querySelectorAll(evt);

  blogPost.forEach(function (post) {
    console.log(post);
    post.addEventListener("mouseout", function () {
      post.classList.toggle(color);
    });
    post.addEventListener('mousecenter', function () {
      post.classList.toggle(color);
    });
  });
}
mouseCenter(".blog-post", "red")
