    const apiKey = "3ff52596a6bda54f2f0e0ba9d66c0885";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector('.search input');
    const searchBtn = document.querySelector('.search button');
    const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector('.error').style.display ='block';
        document.querySelector('.weather').style.display ='none';
        document.querySelector('.intro').style.display ='none';
    }
    else{
    var data = await response.json();
    

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.feels-like').innerHTML = Math.round(data.main.feels_like) +'°c';
    document.querySelector('.max-temp').innerHTML = Math.ceil(data.main.temp_max) +'°c';
    document.querySelector('.min-temp').innerHTML = Math.floor(data.main.temp_min) +'°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.degree').innerHTML = data.wind.deg + '°';
    document.querySelector('.pressure').innerHTML = data.main.pressure + ' Pa';
    document.querySelector('.cloudiness').innerHTML = data.clouds.all + '%';
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' km/h';
    document.querySelector('.visibility').innerHTML= data.visibility / 1000 +' km';

    if (data.weather[0].main == 'Rain' ){
      weatherIcon.src = 'images/rain.png';
    }
    else if(data.weather[0].main == 'Clouds'){
        weatherIcon.src= 'images/clouds.png';
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src= 'images/clear.png';
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src= 'images/drizzle.png';
    }
    document.querySelector('.weather').style.display ='flex';
    document.querySelector('.intro').style.display ='none';
    document.querySelector('.error').style.display ='none';

}
}

searchBtn.addEventListener('click',function(e){
    checkWeather(searchBox.value);

})
