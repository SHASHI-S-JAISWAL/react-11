import axios from 'axios';

const LoginService = data => {
	return axios({
        method: 'post',
        url: 'https://cors-anywhere.herokuapp.com/https://shashi-express-back-11.herokuapp.com/api/user/login',
        data
      });
	
	//axios.post('http://localhost:4000/registration/login', data)
	//	.then(res => res.status)
	}

export default LoginService;
