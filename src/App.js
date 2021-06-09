import React, { Component } from "react";


import './welcome.css';
import Project from './Project';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      page: "welcome"
    }
  }

  openProject = e => {
    //console.log('clicked open project')
    this.setState((state, props) => {
      return {page: 'project'}
    });
  }

  render() {
    if(this.state.page === 'welcome') {
      return ( 
        <div className="wrapper">
          <main>
            <h1 className="title">Design and Construction of <br /> UAV for weapons</h1>
            
            <div className="content">
              <p className="by">By</p>
              <p><span className="name">Ashiru A. Ashiru</span> <br /> NAS/PHY/16/2023 <br /> Alqalam University </p>
            </div>
            <br /><br />
            <div>
              <button className="button" onClick={() => this.openProject()}>Open Project</button>
            </div>
            <br />
          </main>
          
          <footer>
            © 2021 | Design by Ashiru A. Ashiru
          </footer>
        </div>
        );
    } else {
      return (
        <Project />
      )
    }
    
  }
}

export default App;
