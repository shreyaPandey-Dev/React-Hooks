// import React, { Component } from "react";
// import Employee from "../../components/employee/employee";

// export default class EmployeeDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isFetching: false,
//       employeeList: [],
//     };
//   }

//   componentDidMount() {
//     this.fetchUsers();
//   }
//   fetchUsers() {
//     fetch(`https://jsonplaceholder.typicode.com/posts`)
//       .then((result) => result.json())
//       .then((result) => {
//         this.setState({ employeeList: result, isFetching: false });
//       })
//       .catch((e) => {
//         console.log(e);
//         this.setState({ ...this.state, isFetching: false, error: e });
//       });
//   }

//   render() {
//     return (
//       <div className="container-fluid">
//         <div class="alert alert-primary" role="alert">
//           A simple primary alert—check it out!
//         </div>
//         {this.state.employeeList.map((emp, i) => {
//           return <Employee key={i} employee={emp}></Employee>;
//         })}
//       </div>
//     );
//   }
// }
