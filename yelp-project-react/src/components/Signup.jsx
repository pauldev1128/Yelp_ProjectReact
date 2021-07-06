import React, { Component } from 'react';
import './Login.css'

const Signup = () => {
    return(
        <div className="sign-up">
            <h1>SIGN UP</h1>
            <form>
                <label>First Name: </label>   
                <input type="text" name="first-name"/>  
                <br/>

                <label>Last Name: </label>   
                <input type="text" name="last-name"/>  
                <br/>

                <label>Email: </label>   
                <input type="text" name="last-name"/>  
                <br/>

                <label>Password : </label>   
                <input type="password" name="password"/>  
                <br/><br/>
                
                <button type="submit">Sign Up</button> 
            </form>
        </div>
    )
}

export default Signup;