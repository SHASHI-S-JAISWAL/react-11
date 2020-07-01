import axios from 'axios';

const WeatherService =  async(loc) =>{
             console.log(loc);
             const latitude= loc.features[0].center[1];
            const longitude= loc.features[0].center[0];
            //const url = 'https://api.weather.yandex.ru/v1/forecast?lat='+latitude+'&lon='+longitude+'&extra=true,';
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const url = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${latitude},${longitude}`;
             return axios.get(url).then(response => {
        // returning the data here allows the caller to get it through another .then(...)
              return response.data
             })
            };

export default WeatherService