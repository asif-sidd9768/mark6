var input = document.querySelector("#input")
var button = document.querySelector("#button")
var output = document.querySelector("#output")
var serverURL = "https://api.funtranslations.com/translate/pirate.json?text="

function errorHandler(error){
    alert("Something went wrong, Please try again after some time.")
}
function clickEventHandler(){
    var inputText = serverURL + input.value
    fetch(inputText)
    .then(response => response.json())
    .then(json => output.innerText = json.contents.translated)
    .catch(errorHandler)
}


button.addEventListener("click", clickEventHandler)