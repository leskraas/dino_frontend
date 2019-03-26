// App.js
import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Monaco from "./components/Monaco/Monaco";
import Backdrop from "./components/Backdrop/Backdrop";
import FileViewer from "./components/FileViewer/FileViewer";

class App extends Component {
  state = {
    SideDrawerOpen: false
  };
  constructor(props) {
    super(props);
    connect();
  }

  send() {
    console.log("hello");
    sendMsg("hello");
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.SideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: "64px" }}>
          {/* <button onClick={this.send}>Hit</button> */}
          <FileViewer />
          <Monaco />
        </main>
      </div>
    );
  }
}

export default App;
