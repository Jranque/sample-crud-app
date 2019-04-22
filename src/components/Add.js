import React, { Component } from "react";

class Add extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();

    this.props.createEmployees(
      this.employee_nameInput.value,
      this.employee_salaryInput.value,
      this.employee_ageInput.value
    );
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit} ref="myForm" className="myForm">
          <h1 className="h2">ADD EMPLOYEES</h1>
          <input
            type="text"
            placeholder="Employee Name"
            ref={nameInput => (this.employee_nameInput = nameInput)}
            className="formField"
          />
          <input
            type="text"
            placeholder="Salary"
            ref={salaryInput => (this.employee_salaryInput = salaryInput)}
            className="formField"
          />
          <input
            type="text"
            placeholder="Age"
            ref={ageInput => (this.employee_ageInput = ageInput)}
            className="formField"
          />
          <button className="Mybutton">Submit</button>
        </form>
      </div>
    );
  }
}
export default Add;
