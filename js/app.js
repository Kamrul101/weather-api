const api_key = `78fa4d0dd09eb0dab18cda2f8dc202f4`;

const loadweather = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => loadTemperature(data));
}

const loadTemperature = temp => {
    // console.log(temp);
    const temperature = document.getElementById('temperature');
    temperature.innerText = temp.main.temp;

    const weatherDetail = document.getElementById('weather-detail');
    weatherDetail.innerText = temp.weather[0].main;

    document.getElementById('city-name').innerText = temp.name ;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const cityName = searchField.value;
    // console.log(cityName);
    
    loadweather(cityName);
})

loadweather('dhaka');