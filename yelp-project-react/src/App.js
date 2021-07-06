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
       homepage: false,
       page : 'homepage',
       signup : false,
       login: false,
       restaurants : []
     }
     this.clickHandler = this.clickHandler.bind(this);
   }

   clickHanlder(e){
     let name = e.target.getAttribute("class");
     this.setState({
       page: name
     })
   }


   render() {
    switch (this.state.page){
      case 'update':
      return (
        <div>
          <Update clickHandler={this.clickHandler}/>
        </div>  
      )
      case 'login':
      return (
        <div>
          <Login clickHandler={this.clickHandler}/>
        </div>  
      )
      case 'signup':
      return (
        <div>
          <Signup clickHandler={this.clickHandler}/>
        </div>  
      )
      default:
      return (
        <div>
          <Restaurant clickHandler={this.clickHandler}/>
        </div>
      )   
   }
  }
}
