
const apiKey = 'e5561d2967814183afd194440230307'
const button = document.querySelector('#submitButton')
const input = document.querySelector('#textInput')
const city = document.querySelector('#cityName')

button.addEventListener('click', () =>{
    let inputValue = input.value;
    let cityValue = city.textContent;

    console.log(cityValue);
    console.log(inputValue)
    toggle()

});


function toggle (){
    button.classList.toggle('altColor')
}

