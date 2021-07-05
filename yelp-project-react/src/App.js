import React, { Component } from 'react';
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
        <div><p>This is the update</p></div>  
      )
      case 'login':
      return (
        <div><p>This is the login</p></div>  
      )
      case 'signup':
      return (
        <div><p>This is the signup</p></div>  
      )
      default:
      return (
        <div> This is the homepage</div>
      )   
   }
  }
}
