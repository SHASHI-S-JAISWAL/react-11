import axios from 'axios';

const WeatherService =  async(loc) =>{
             console.log(loc);
             const latitude= loc.features[0].center[1];
            const longitude= loc.features[0].center[0];
            const url = 'http://api.weatherstack.com/current?access_key=60b1d542c94c248ed52d2579166c79c1&query='+latitude+','+longitude;
             return axios.get(url).then(response => {
        // returning the data here allows the caller to get it through another .then(...)
              return response.data
             })
            };

export default WeatherService