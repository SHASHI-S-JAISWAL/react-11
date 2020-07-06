import axios from 'axios';

const LoginService = data => {
  //const proxy = 'http://allow-any-origin.appspot.com/'
      try {
        let res = axios({
          method: 'post',
          //url: 'https://shashi-express-back-11.herokuapp.com/api/user/login',
          url : 'https://shashi-express-back-11.herokuapp.com/api/user/login',
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
