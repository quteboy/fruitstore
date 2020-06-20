import React from "react";
import { Link } from "react-router-dom";


export default function HomeView() {
  return (
    <div style={{ width: `100%`, overflowX: `hidden` }}>
      <div className="row">
        <div className="col-12">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Fruit Store</h1>
              <p className="lead">Welcome to my Fruit Store!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <img src='../../../dist/homepage.jpg' className="img-fluid" />
      </div>

      <div style={{ maxWidth: 480, margin: `0 auto`, position: `fixed`, bottom: 0, left: 0, right: 0 }}>
        <Link to="page1" className="btn btn-primary btn-lg btn-block">ENTER</Link>
      </div>
    </div>

  )
}
