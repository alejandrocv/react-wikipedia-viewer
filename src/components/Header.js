import React from 'react';


export default ({ title }) => (
  <div className="navbar navbar-dark bg-dark text-white">
    <h3>{title}</h3>

    <a id="random-btn" className="navbar btn btn-outline-light" target="_blank" href="https://en.wikipedia.org/wiki/Special:Random">Random</a>
  </div>
);