import React, { Component } from "react";
import axios from "axios";
import Modal from "./modal/Modal";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: []
    };
    this.deleteEmployees = this.deleteEmployees.bind(this);
  }
  state = { show: false };
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  componentDidMount() {
    const employees = this.getAllEmployees();

    this.setState({ employees });
  }

  getAllEmployees() {
    try {
      axios({
        method: "get",
        url: "http://dummy.restapiexample.com/api/v1/employees"
      }).then(response => {
        console.log("All Employee Details");
        console.log(response.data);
        this.setState({ details: response.data });
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
        const employees = this.getAllEmployees();

        const filteredEmployees = employees.filter(employees => {
          return employees.name !== response.data;
        });
        this.setState({ employees: filteredEmployees });
      });
    } catch (err) {
      console.log("Error on fetching all employee details");
      console.log(err);
    }
  }
  render() {
    return (
      <table>
        <tr>
          <th>ID</th>
          <th>Employee Name</th>
          <th>Salary</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
        {this.state.details.map(employee => {
          return (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.employee_name}</td>
              <td>{employee.employee_salary}</td>
              <td>{employee.employee_age}</td>
              <td>
                <button
                  onClick={() => this.deleteEmployees}
                  className="ListButton"
                >
                  Remove{" "}
                </button>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                  <div className="App">
                    <h2 className="h2">EDIT EMPLOYEES</h2>
                    <form ref="myForm" className="Form">
                      <input
                        type="text"
                        employee="employee_name"
                        placeholder="Employee Name"
                        className="formField1"
                      />
                      <input
                        type="text"
                        employee="employee_salary"
                        placeholder="Salary"
                        className="formField1"
                      />
                      <input
                        type="text"
                        employee="employee_age"
                        placeholder="Age"
                        className="formField1"
                      />
                      <button
                        onSubmit={() => {
                          this.updateEmployees();
                          console.log("All Employee Details");
                        }}
                        className="Mybutton1"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </Modal>
                <button
                  type="button"
                  onClick={this.showModal}
                  className="myListButton"
                >
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    );
  }
}

export default Table;
