import React from "react";

import "./FileViewer.scss";

const fileViewer = props => {
  let drawerClasses = "file-viewer";
  //   if (props.show) {
  //     drawerClasses = "file-viewer open";
  //   }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Design</a>
          <ul className="file_list">
            <li>
              <a href="/">example1.v</a>
            </li>
            <li>
              <a href="/">example2.v</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Simulation</a>
          <ul className="file_list">
            <li>
              <a href="/">example1_tb.v</a>
            </li>
            <li>
              <a href="/">example2_tb.v</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default fileViewer;
