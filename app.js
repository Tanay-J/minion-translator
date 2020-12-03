var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getURL(text){
    return serverURL+"?text="+text;
}

function errorHandler(){
    console.log("error occured",error);
    alert("Try again after sometime");
}
function clickEventHandler(){
    var inputText = textInput.value;
    fetch(getURL(inputText))
    .then(response => response.json())
    .then(json => {
        outputDiv.innerText = json.contents.translated
    })
    .catch(errorHandler)
}
   

btnTranslate.addEventListener("click", clickEventHandler);
 
