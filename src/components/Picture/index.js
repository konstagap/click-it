import React from "react";
import "./style.css";

function Picture(props) {
  return (
    <div className="col-lg-3  ">
      <div className="card m-1">
        <div className="img-container" onClick ={() => props.addScore(props.id)}>
          <img alt={props.name} className=" img-fluid" src={props.image}/>
        </div>
      </div>
    </div>
  );
}
{/* <img alt={props.name} className=" card-img-overlay" src={props.image}/> */}

export default Picture;
