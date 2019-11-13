import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const [ changes, setChanges ] = useState ({
        username: '',
        password: ''
    });

    const changeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setChanges({ ...changes, [name]: value });
        //console.log(name)
    }

    const submitForm = e => {
        e.preventDfault();
        const newLogin = {
            ...changes,
        }
        axios.post(`http://localhost:5005/api/auth/login`,newLogin)
        .then(res => console.log(res))
    }

   return(
       <div>
           <h2>Login</h2>
           <form onSubmit={submitForm}>
               <label>
                   Username:
                   <input type="text" name ="username" onChange={changeHandler}/>
               </label>
               <label>
                   Password:
                   <input type="text" name="password" onChange={changeHandler}/>
               </label>
               <button type="submit">Login</button>
           </form>
       </div>
   ); 
}

export default Login;