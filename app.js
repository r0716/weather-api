const apiKey = 'e5561d2967814183afd194440230307'
const button = document.querySelector('#submitButton')
const input = document.querySelector('#textInput')
const city = document.querySelector('#cityName')
const temp = document.querySelector('#temp')


button.addEventListener('click', () => {
    let inputValue = input.value;
    city.innerHTML = `City: ${inputValue}`; // Update the cityName with the value of inputValue
    temp.innerHTML = ''; // Clear the previous temperature value
  
    (async () => {
      try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputValue}&aqi=no`);
        console.log(response.data);
  
        // Update the temp element with the fetched temperature in Fahrenheit & Celcius
        temp.textContent = `Current Temp: ${response.data.current.temp_f} Fahrenheit`;
      } catch (error) {
        console.log(error);
        temp.innerHTML = 'Problem fetching weather data. Please try a different city.';

      }
  
    })();
  });
  
