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
    this.deleteEmployees = this.deleteEmployees.bind(this);
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
    } catch (err) {
      console.log("Error on fetching all employee details");
      console.log(err);
    }
  }
  updateEmployees(id, details) {
    try {
      axios({
        method: "put",
        url: `http://dummy.restapiexample.com/api/v1/update/${id}`,
        data: details
      }).then(response => {
        console.log("All Employee Details");
        console.log(response.data);
      });
    } catch (err) {
      console.log("Error on fetching all employee details");
      console.log(err);
    }
  }
  deleteEmployees(id) {
    try {
      axios({
        method: "delete",
        url: `http://dummy.restapiexample.com/api/v1/delete/${id}`
      }).then(response => {
        console.log("All Employee Details");
        console.log(response.data);
      });
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
