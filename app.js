let joke = document.getElementById("joke");
let btn = document.getElementById("btn");

btn.addEventListener("click" , ()=>{
    axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    .then(function (response) {
      // handle success
      joke.classList.remove("fade");
      joke.innerHTML = response.data.joke;
      joke.classList.add("fade");
    });
});
