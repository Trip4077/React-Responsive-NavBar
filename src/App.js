import React, { Component } from 'react';

import './App.css';
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClick = () => {
    this.setState(prevState => { return {sideDrawerOpen: !prevState.sideDrawerOpen} });
  };

  backdropToggleClick = () => { this.setState({sideDrawerOpen: false}) };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropToggleClick}/>
    }

    return (
      <div style={{height: '100%'}} className="App">
        <Toolbar drawerClick={this.drawerToggleClick}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main>
          <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
