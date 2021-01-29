import React from "react";

const Employee = (props) => {
  return (
    <div class="container-fluid" class="rounded shadow mb-4 mt-4 mx-auto">
      <div class="row mb-1">
        <div class="col-md-6">
          <img class="rounded mx-auto d-block mt-4 mb-2"
            alt="Bootstrap Image Preview"
            src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
          />
        </div>
        <div class="col-md-6">
          <h3>{props.employee.id} . {props.employee.title}</h3>
          <dl>
            <dt>Description:</dt>
            <dd>{props.employee.body}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Employee;
