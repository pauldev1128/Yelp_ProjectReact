import React, { Component } from 'react';
import Restaurant from './components/Restaurant';
import Login from './components/Login';
import Signup from './components/Signup';
import Update from './components/Update';
import axios from  'axios';
import './App.css';

import { FaSistrix } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';

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
    //  this.getComponents = this.getComponents.bind(this);
   }

  //  componentDidMount(){
  //    this.getComponents();
  //  }

  //  getComponents() {
  //    axios
  //    .get('api/restaurants')
  //    .then((res) => {
  //      let idx = Math.floor(Math.random() * 60)
  //      this.setState({
  //        restaurants:res.
  //      })
  //    })
  //  }
   

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
          <Update clickHandler={this.clickHandler} update={this.state.update}/>
        </div>  
      )
      case 'login':
      return (
        <div>
          <Login clickHandler={this.clickHandler} login={this.state.login}/>
        </div>  
      )
      case 'signup':
      return (
        <div>
          <Signup clickHandler={this.clickHandler} signup={this.state.signup}/>
        </div>  
      )
      default:
      return (
        <div>
          <Restaurant clickHandler={this.clickHandler} restaurants={this.state.restaurants}/>
        </div>
      )   
   }
  }
}
