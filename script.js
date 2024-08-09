const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e6ab68b8c9mshfe38ea3137ebcc4p1591c8jsn075f25a46f10',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            document.getElementById('cloud_pct').innerHTML = response.cloud_pct;
            document.getElementById('temp').innerHTML = response.temp;
            document.getElementById('feels_like').innerHTML = response.feels_like;
            document.getElementById('min_temp').innerHTML = response.min_temp;
            document.getElementById('max_temp').innerHTML = response.max_temp;
            document.getElementById('wind_speed').innerHTML = response.wind_speed;
            document.getElementById('humidity').innerHTML = response.humidity;
        })
        .catch(err => console.error(err));
};
document.getElementById('submit').addEventListener('click',()=>{
    let x=document.getElementById('cityInput');
    if(x.value){
        getWeather(x.value);
    }
    else{
        getWeather('Delhi');
    }
})