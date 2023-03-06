import React, { Component } from 'react'
import {
  
  Link
} from "react-router-dom";

export class navbar extends Component {
  
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">My App</Link>Link class="nav-link"
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
      
        <li classna="nav-item"><Link  class="nav-link" to="/business">Business</Link> </li>
        <li class="nav-item"><Link  class="nav-link" to="/entertainment">Entertainment</Link> </li>
        <li class="nav-item"><Link  class="nav-link" to="/general">General</Link> </li>
        <li class="nav-item"><Link  class="nav-link" to="/health">Helth</Link> </li>
        <li class="nav-item"><Link  class="nav-link" to="/science">Science</Link> </li>
        <li class="nav-item"><Link  class="nav-link" to="/sport">Sport</Link> </li>
        <li class="nav-item"><Link  class="nav-link" to="/technology">Technology</Link> </li>
       
       
       
          
        
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default navbar
