var content = document.createElement('div');
content.id = "content";

var card = document.createElement('div');
card.className = "card col-6";

var card_body = document.createElement('div');
card_body.className = "card-body";

var card_title = document.createElement('h5');
card_title.className = "card-title";
card_title.innerHTML="Cute Cat Pics😺"

var card_text = document.createElement("img");
card_text.className = "card-text";
card_text.id="card-text";




var button = document.createElement('button');
button.className = "btn btn-success";
button.innerHTML = "Get Cute One";
button.addEventListener("click", getApiData);


card_body.append(card_title,card_text, button);
card.append(card_body);
content.append(card);
document.body.append(content);

async function getApiData() {
    var apiRawData = await fetch("https://api.thecatapi.com/v1/images/search?limit=1");
    var apiData = await apiRawData.json();
    console.log(apiData);
    document.getElementById("card-text").src= apiData[0].url;
    // document.getElementById("card-text").height=100%;
    // document.getElementById("card-text").width=100%;
}
getApiData();