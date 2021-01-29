import React, { useState, useEffect } from "react";
import Employee from "../../components/employee/employee";

function EmployeeDetails_hooks() {
  const [employeeList, setEmployeeList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((result) => result.json())
      .then((result) => {
        setEmployeeList(result);
        setLoading(false);
      })
      .catch((error) => {
        setHasError(true);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div
          class="spinner-border text-primary  mx-auto d-block mt-5"
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      ) : hasError ? (
        <div>Error occured.</div>
      ) : (
        employeeList.map((emp, index) => (
          <Employee key={index} employee={emp}></Employee>
        ))
      )}
    </div>
  );
}

export default EmployeeDetails_hooks;
