import axios from 'axios';

const location  = async (address) => {
	
    const  locationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2hpdmFtdmlkaGkiLCJhIjoiY2tid21kaHZ6MGF5NDJ6bmFwMnN6cXhieCJ9.fKGC3NXR0bPC1M2FNhUxrA&limit=1'
    return axios.get(locationUrl).then(response => {
        // returning the data here allows the caller to get it through another .then(...)
        return response.data
         })
    };

export default location ;