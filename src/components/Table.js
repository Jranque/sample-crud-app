import React, { Component } from "react";
import axios from "axios";
import Modal from "./modal/Modal";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: [],
      id: "",
      name: "",
      salary: "",
      age: ""
    };
  }
  state = { show: false };
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  resetCreateForm() {
    this.setState({
      employee_name: "",
      employee_salary: "",
      employee_age: ""
    });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

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
  getEmployeeById(id) {
    try {
      axios({
        method: "get",
        url: `http://dummy.restapiexample.com/api/v1/employee/${id}`
      }).then(response => {
        console.log("Selected employee data");
        console.log(response.data);
        this.setState({
          employee: response.data.id,
          employee_name: response.data.employee_name,
          employee_salary: response.data.employee_salary,
          employee_age: response.data.employee_age
        });
        this.showModal();
      });
    } catch (err) {
      console.log("Error on fetching selected employee data");
      console.log(err);
    }
  }
  updateEmployees(id, employee) {
    try {
      axios({
        method: "put",
        url: `http://dummy.restapiexample.com/api/v1/update/${id}`,
        data: employee
      }).then(response => {
        console.log("All Employee Details");
        console.log(response.details);
        this.getAllEmployees();
        this.resetCreateForm();
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
        this.getAllEmployees();
      });
    } catch (err) {
      console.log("Error on fetching all employee details");
      console.log(err);
    }
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.details.map(employee => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.employee_name}</td>
                <td>{employee.employee_salary}</td>
                <td>{employee.employee_age}</td>
                <td>
                  <button
                    onClick={() => this.deleteEmployees(employee.id)}
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
                          value={this.state.employee_name}
                          onChange={e =>
                            this.setState({ employee_name: e.target.value })
                          }
                          placeholder="Employee Name"
                          className="formField1"
                        />
                        <input
                          type="text"
                          value={this.state.employee_salary}
                          onChange={e =>
                            this.setState({ employee_salary: e.target.value })
                          }
                          placeholder="Salary"
                          className="formField1"
                        />
                        <input
                          type="text"
                          value={this.state.employee_age}
                          onChange={e =>
                            this.setState({ employee_age: e.target.value })
                          }
                          placeholder="Age"
                          className="formField1"
                        />
                        <button
                          onClick={() => {
                            this.updateEmployees(this.state.id, employee);
                            console.log("Form DATA on edit");
                            console.log(employee);
                          }}
                          className="Mybutton1"
                        >
                          Save
                        </button>
                      </form>
                    </div>
                  </Modal>
                  <button
                    onClick={() => {
                      this.getEmployeeById(employee.id);
                    }}
                    className="myListButton"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
