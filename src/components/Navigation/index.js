import React from "react";
import "./style.css";

function Navigation(props) {
  return (
    <div className="row text-center fixed-top navstyle fluid">
      <div className="col-sm-4">
        <a className="nav-link active " href="/">
          CLICKY
        </a>
      </div>
      <div className="col-sm-4">
        <span
          className={
            props.message === "You Lost!"
              ? "lostStyle nav-link"
              : "winStyle nav-link"
          }
        >
          {props.message}
        </span>
      </div>
      <div className="col-sm-4">
        <span className="nav-link">
          Score : <span>{props.score}</span> | Top score:{" "}
          <span>{props.topScore}</span>
        </span>
      </div>
    </div>
  );
}

export default Navigation;
