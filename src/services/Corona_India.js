import axios from 'axios';

const Corona_India = () => {
	// return axios({
    //     method: 'post',
    //     url: 'http://api.weatherstack.com/current?access_key=60b1d542c94c248ed52d2579166c79c1&query=12.9716,77.5946',
    //   });
      const url = 'https://api.covid19api.com/country/india/status/confirmed';
      return axios.get(url).then(response => {
        // returning the data here allows the caller to get it through another .then(...)
        return response.data[response.data.length -1].Cases
      })
	 
	}

export default Corona_India ;