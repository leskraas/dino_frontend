// App.js
import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Monaco from "./components/Monaco/Monaco";
import Backdrop from "./components/Backdrop/Backdrop";
import FileViewer from "./components/FileViewer/FileViewer";
import SvgViewer from "./components/SvgViewer/SvgViewer";

class App extends Component {
  state = {
    SideDrawerOpen: false,
    Code: "",
    Svg: "<svg />"
  };
  // constructor(props) {
  //   super(props);
  //   // connect();
  // }

  componentDidMount() {
    connect(svg => {
      console.log("SVG: ", svg);
      this.setState({ Svg: svg });
    });
  }
  veifyHandler = () => {
    sendMsg("verify", this.state.Code);
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  saveCode = code => {
    this.setState({ Code: code });
    console.log(this.state.Code);
  };

  dataFromServer = data => {
    console.log(data);
  };

  render() {
    let backdrop;
    if (this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <div className="container_toolbar">
          <Toolbar
            drawerClickHandler={this.drawerToggleClickHandler}
            verifyClickHandler={this.veifyHandler}
          />
          <SideDrawer show={this.state.SideDrawerOpen} />
          {backdrop}
        </div>
        <main className="container_main">
          <div className="box_fileViewer">
            <FileViewer />
          </div>
          <div className="box_monaco">
            <Monaco saveCode={this.saveCode} />
          </div>
          <div className="box_debug">
            <div className="box_svgViewer">
              <SvgViewer svgFile={this.state.Svg} />
            </div>
            <div className="box_console">placehodler</div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
