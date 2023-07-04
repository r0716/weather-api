
const apiKey = 'e5561d2967814183afd194440230307'
const button = document.querySelector('#submitButton')
const input = document.querySelector('#textInput')
const city = document.querySelector('#cityName')
const temp = document.querySelector('#temp')

button.addEventListener('click', () =>{
    let inputValue = input.value;
    city.innerHTML = inputValue; // Update the cityName with the value of inputValue
    temp.innerHTML = '' //Update the city with the value of the temp from weatherapi    

    // console.log(city.innerHTML);
    // console.log(inputValue);
    toggle();


});


function toggle (){
    button.classList.toggle('altColor')
}

