import React, { Component } from 'react';
import Restaurant from './components/Restaurant';
import Login from './components/Login';
import Signup from './components/Signup';
import Update from './components/Update'
import './App.css';

export default class App extends Component {
   constructor(props) {
     super(props); 
     this.state = {
       page : 'homepage',
       signup : false,
       login: false,
       restaurants : []
     }
   }

   



   render() {
    switch (this.state.page){
      case 'update':
      return (
        <div>
          <Update/>
        </div>  
      )
      case 'login':
      return (
        <div>
          <Login/>
        </div>  
      )
      case 'signup':
      return (
        <div>
          <Signup/>
        </div>  
      )
      default:
      return (
        <div>
          <Restaurant/>
        </div>
      )   
   }
  }
}
