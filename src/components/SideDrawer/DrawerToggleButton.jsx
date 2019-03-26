import React from "react";

import "./DrawerToggleButton.scss";

const drawerToggleButton = props => (
  <button className="toogle-button" onClick={props.click}>
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
  </button>
);

export default drawerToggleButton;
