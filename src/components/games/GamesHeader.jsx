import React from "react";

import "../../styles/Root.css";
import "../../styles/Multi.css";

function GamesHeader() {

  return (
    <div className="multi_header">
      <div className="multi_header_gems">
        <span className="multi_header_icon plx-rubine"></span>
        <span>17k</span>
      </div>
      <div className="multi_header_gems">
        <span className="multi_header_icon plx-sapphire"></span>
        <span>2</span>
      </div>
      <div className="multi_header_gems">
        <span className="multi_header_icon plx-jade"></span>
        <span>67K</span>
      </div>
      <div className="multi_header_gems">
        <span className="multi_header_icon plx-token"></span>
        <span>0</span>
      </div>
    </div>
  );
}

export default GamesHeader;
