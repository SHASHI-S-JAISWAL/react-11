import axios from 'axios';

const LoginService = data => {
      try {
        let res = axios({
          method: 'post',
          url: 'https://cors-anywhere.herokuapp.com/https://shashi-express-back-11.herokuapp.com/api/user/login',
          data
        });
    
        return res;
      } catch (error) {
        console.log('44'); // this is the main part. Use the response property from the error object
    
        alert(error.response);
      }
	//axios.post('http://localhost:4000/registration/login', data)
	//	.then(res => res.status)
	}

export default LoginService;
