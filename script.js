const apiKey = "f5dcd15d271a0ccde5990f1c133bdf90";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let search = document.querySelector('.search input');
let btn = document.querySelector('.button');
let icon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "kmph";

    if(data.weather[0].main == "Clouds"){
        icon.src = "img/cloud.png"
    }else if(data.weather[0].main == "Clear"){
        icon.src = "img/clear.png"
    }else if(data.weather[0] || [1].main == "Rain"){
        icon.src = "img/heavy rain.png"
    }else if(data.weather[0].main == "Drizzle"){
        icon.src = "img/light-rain.png"
    }else if(data.weather[0].main == "Mist"){
        icon.src = "img/mist.png"
    }else if(data.weather[0].main == "Snow"){
        icon.src = "img/snow.png"
    }
};
checkWeather()
btn.addEventListener('click', () =>{
    checkWeather(search.value);
    console.log('click')
});
