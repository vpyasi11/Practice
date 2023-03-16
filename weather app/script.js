const container = document.querySelector('.container')
const search = document.querySelector('.search-box button')
const weatherBox = document.querySelector('.weather-box')
const weatherDetails= document.querySelector('.weather-details')
const error404 = document.querySelector('.not-found')

search.addEventListener('click', ()=>{

    const APIkey = 'fc52cab83e4a5bb38564ba8073bd3889'
    const city = document.querySelector('.search-box input').value;

    if(city == ''){
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics&appid=${APIkey}`)
    .then(response => response.json())
        .then(data => {
            if(data.cod ==='404'){
                container.style.height = '600px'
                weatherBox.style.display = 'none'
                weatherDetails.style.display = 'none'
                error404.style.display = 'block'
                error404.classList.add('fadeIn')
                return;
            }
            console.log(data)

            error404.style.display = ''
            error404.classList.remove('fadeIn')

            const image = document.querySelector('.weather-box img')
            const temperature = document.querySelector('.weather-box .temperature')
            const description = document.querySelector('.weather-box .description')
            const humidity = document.querySelector('.weather-details .humidity span')
            const wind = document.querySelector('.weather-details .wind span')

            switch(data.weather[0].main){
                case 'Clear':
                    image.src = 'https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_SunAbstract.png'
                    break;
                
                case 'Rain':
                    image.src = 'https://cdn-icons-png.flaticon.com/512/1959/1959334.png'
                    break;

                case 'Snow':
                    image.src = 'https://cdn-icons-png.flaticon.com/512/3915/3915582.png'
                    break;

                case 'Clouds':
                    image.src = 'https://cdn-icons-png.flaticon.com/512/9788/9788766.png'
                    break;

                case 'Haze':
                    image.src = 'https://cdn-icons-png.flaticon.com/512/1779/1779807.png'
                    break;

                default:
                    image.src = ''
            }

            temperature.innerHTML = `${parseInt(data.main.temp)/10}<span>°C</span>`
            description.innerHTML = `${data.weather[0].description}`
            humidity.innerHTML = `${data.main.humidity}%`
            wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`

            weatherBox.style.display = ''
            weatherDetails.style.display = ''
            weatherBox.classList.add('fadeIn')
            weatherDetails.classList.add('fadeIn')
            container.style.height = '590px'
        })
})