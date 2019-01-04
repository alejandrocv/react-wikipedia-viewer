import React from 'react';

const Form = props => (
  <form onSubmit={props.getContent}  >
    <div className="input-group" style={{ maxWidth: 430, margin: "0 auto" }}>
      <input type="text" className="form-control" name="queryText"
        placeholder="Search Wikipedia" />
      <button className="btn btn-primary">Search</button>
    </div>
  </form>
);

export default Form;