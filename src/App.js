import './App.css';

import Aux from './HOC/Aux_container';
import EmployeeDetails_hooks from './containers/employeeDetails/employeeDetails_hooks';


function App() {
  return (
   <div>
     <Aux>
        <EmployeeDetails_hooks></EmployeeDetails_hooks>
     </Aux>
   </div>
  );
}

export default App;
