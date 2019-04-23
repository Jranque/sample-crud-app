import React, { Component } from "react";
import "./style/App.css";
import axios from "axios";
import Table from "./components/Table";
import Add from "./components/CreateAddEmployee";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: []
    };
    this.createEmployee = this.createEmployee.bind(this);
  }
  createEmployee(employee_name, employee_salary, employee_age) {
    const employee = {
      name: employee_name,
      salary: employee_salary,
      age: employee_age
    };
    try {
      axios
        .post("http://dummy.restapiexample.com/api/v1/create", employee)
        .then(res => console.log(res.data));
      this.setState({ employee });
      this.getAllEmployees();
    } catch (err) {
      console.log("Error on fetching all employee details");
      console.log(err);
    }
  }

  render() {
    return (
      <div className="App">
        <Add CreateAddEmployee createEmployee={this.createEmployee} />

        <br />
        <Table />
      </div>
    );
  }
}
export default App;
