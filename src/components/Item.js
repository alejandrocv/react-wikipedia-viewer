import React, { Component } from 'react';

const Item = props => (

  <div className="col-md-4 col-lg-4 col-sm-4 " style={{ padding:5 }}>
    <div className="card">
      <div className="card-header text-white bg-secondary">
        {props.titulo}
      </div>
      <div className="card-body">

        <p className="card-text">
          {
            props.descripcion
          }
        </p>
        <a href={props.enlace} target="_blanck" className="card-link">
          More
        </a>

      </div>
    </div>
  </div>
);

export default Item;
