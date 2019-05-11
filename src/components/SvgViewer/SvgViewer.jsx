import React from "react";

import "./SvgViewer.scss";

const svgViewer = props => {
  // var parser = new DOMParser();
  // var doc = parser.parseFromString(props.svgFile, "image/svg+xml");
  // console.log("000000000");
  // console.log(doc.lastChild);
  return (
    <div
      className="svg_viewer"
      dangerouslySetInnerHTML={{ __html: props.svgFile }}
    >
      {/* {doc.lastChild} */}
      {/* <img src={doc.lastChild} alt={"svg"} /> */}
    </div>
  );
};

export default svgViewer;
