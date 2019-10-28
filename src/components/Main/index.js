import React from "react";
import "./style.css";

function Main(props) {
  return (
    <div className="row mt-5 ">
      <div className="col-sm-12 text-center">
        <h1 className="display-4 font-weight-bold mt-4 ">
          Try not to click on same picture twice
        </h1>
        <p className="lead">If you click on same picture twice, you loose!</p>
      </div>
    </div>
  );
}

export default Main;
