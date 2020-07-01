import axios from 'axios';
//import bcrypt from 'bcryptjs';

export const UserRegistration = data => {
    
    return axios({
        method: 'post',
        url: 'https://cors-anywhere.herokuapp.com/https://shashi-express-back-11.herokuapp.com/api/user/register',
        data
      });
    //return axios.post('https://shashi-express-back-11.herokuapp.com/api/user/register', data)
     //   .then(res => res.status);
};

// export const UsernameValidation = data => (
//     axios.post('http://localhost:4000/registration/validateUsername', data)
//     .then(exist => exist.status)
//)