const generator = document.getElementById('generator');

getQuote = () => {
    document.getElementById("quote-text").innerHTML = "Fetching... Please wait!";
    const url = "https://geek-quote-api.herokuapp.com/v1/quote"
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("quote-text").innerHTML = data.quote;
        document.getElementById('author').innerHTML = data.author;
        document.getElementById('number').innerHTML = data.id;
        console.log(data)
    });
}

generator.addEventListener('click', ()=>{
   getQuote();
})
