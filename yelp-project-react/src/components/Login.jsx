import React, { Component } from 'react';
import './Login.css'

const Login = ({setToken}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    return(
        <div className= "login">
            <h1>LOGIN HERE</h1>
            <form>
                <label>Username: </label>
                <input type = "text" placeholder="Enter Your Username" name = "username" onChange={e => setUserName(e.target.value)}/>
                <br/>

                <label>Password: </label>
                <input type = "passsword" placeholder="Enter Your Password" name = "password" onChange={e => setPassword(e.target.value)}/>
                <br/>
                <button type="submit">LOGIN</button> 
            </form>
        </div>
    )
}

export default Login;