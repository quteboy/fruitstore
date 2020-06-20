import React from "react";
import { Link } from "react-router-dom";

export default function ErrorView(props) {
  return (
    <div style={{ maxWidth: 600, margin: `0 auto`, padding: 8, textAlign: `center` }}>
      <h1>Error 404</h1>
      <p>
        <small> It looks like we hit a snag </small><br /> {props.location.pathname}
      </p>

      <div className="w3-section">
        <Link to="/" className="btn btn-primary btn-lg">
          Back To Home
            </Link>
      </div>
    </div>


  );

}
