import React from "react";

import "./SvgViewer.scss";

const svgViewer = props => {
  //   let svg = new DOMParser().parseFromString(<svg />, "text/xml");
  //   if (props.svgFile !== "") {
  //     svg = new DOMParser().parseFromString(props.svgFile, "text/xml");
  //   }
  return (
    <div
      className="svg_viewer"
      dangerouslySetInnerHTML={{ __html: props.svgFile }}
    >
      {/* <img src={require(process.env.PUBLIC_URL + "backend/files/out.svg")} /> */}
    </div>
  );
};

export default svgViewer;
