import axios from 'axios';

const WeatherService =  async(loc) =>{
             console.log(loc);
             const latitude= loc.features[0].center[1];
            const longitude= loc.features[0].center[0];
            //const url = 'https://api.weather.yandex.ru/v1/forecast?lat='+latitude+'&lon='+longitude+'&extra=true,';
            const proxy = 'https://allow-any-origin.appspot.com/'
            //const proxy = 'https://cors-anywhere.herokuapp.com/';
            //const url = `https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${latitude},${longitude}`;
            //const proxy = 'https://cors-anywhere.herokuapp.com/';
            const url = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${latitude},${longitude}`;
            //const url = proxy + 'https://api.darksky.net/forecast/e6af5b5feb891b272e18f5e2fc0370a6/'+latitude+','+longitude;
             return axios.get(url).then(response => {
        // returning the data here allows the caller to get it through another .then(...)
              return response.data
             })
            };

export default WeatherService