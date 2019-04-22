import React, { Component } from "react";
import "./style/App.css";
import axios from "axios";
import Table from "./components/Table";
import Add from "./components/Add";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: []
    };
    this.createEmployees = this.createEmployees.bind(this);
    this.deleteEmployees = this.deleteEmployees.bind(this);
  }
  createEmployees(details) {
    try {
      axios({
        method: "post",
        url: "http://dummy.restapiexample.com/api/v1/create",
        data: details
      }).then(response => {
        console.log("All Employee Details");
        console.log(response.data);
        const employees = this.createEmployees();

        this.setState({ employees });
      });
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
        <Add createEmployees={this.createEmployees} />

        <br />
        <Table />
      </div>
    );
  }
}
export default App;
