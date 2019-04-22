import React, { Component } from "react";


class Delete extends Component {
  constructor(props) {
    super(props);
  
    this.deleteEmployees = this.deleteEmployees.bind(this);
  }
  deleteEmployees(id) {
    try {
      axios({
        method: "delete",
        url: `http://dummy.restapiexample.com/api/v1/delete/${id}`
      }).then(response => {
        console.log("All Employee Details");
        console.log(response.data);
        const { deleteEmployees, employee_name}= this.props;
        deleteEmployees(name);
      });
    } catch (err) {
      console.log("Error on fetching all employee details");
      console.log(err);
    }
  }
  render() {
    const {  employee_name, employee_salary, deleteEmployees, employee_age }
    return (
            <div>
              <td>{employee_name}</td>
              <td>{employee_salary}</td>
              <td>{employee_age}</td>
              <td>
                <button onClick={() => this.deleteEmployees} className="ListButton">
                  Remove
                </button>
                </td>
             </div>
    );
  }
}
export default Delete;
