import React from 'react'
import {render} from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  NavLink 
} from 'react-router-dom'

import {HomePage} from "./component/homePage"
import {Mybuttons} from "./component/mybuttons"

render(
  <Router>
    <div>
      <ul>
        <li><NavLink  activeStyle={{color: "red"}} to="/homePage">Home Page</NavLink ></li>
        <li><NavLink  activeStyle={{color: "red"}} to="/mybuttons">My Buttons</NavLink ></li>
      </ul>

      <hr/>

      <Route exact path="/" component={HomePage}/>
      <Route exact path="/homePage" component={HomePage}/>
      <Route path="/mybuttons" component={Mybuttons}/>
    </div>   
  </Router>,
  document.querySelector('#app')
)