import React from "react";

import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

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
      <div className="toolbar_verify-button">Verify</div>
      <div className="toolbar_upload-button">Upload</div>
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
