import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

library.add(fas);

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        {" "}
        <a href="/">Dino</a>{" "}
      </div>
      <div className="spacer" />
      <div className="toolbar_verify-button">
        <button className="btn" onClick={props.verifyClickHandler}>
          <FontAwesomeIcon icon="check" />
        </button>
      </div>
      <div className="toolbar_upload-button">
        <button className="btn">
          <FontAwesomeIcon icon="arrow-right" />
        </button>
      </div>
      <div className="spacer" />

      <div className="toolbar_navigation-items">
        <ul>
          <li>
            {" "}
            <a href="/">User</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
