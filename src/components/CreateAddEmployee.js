import React, { Component } from "react";

class CreateAddEmployee extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();

    this.props.createEmployee(
      this.nameInput.value,
      this.salaryInput.value,
      this.ageInput.value
    );
    this.nameInput.value = "";
    this.salaryInput.value = "";
    this.ageInput.value = "";
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit} ref="myForm" className="myForm">
          <h1 className="h2">ADD EMPLOYEES</h1>
          <input
            type="text"
            placeholder="Employee Name"
            ref={nameInput => (this.nameInput = nameInput)}
            className="formField"
          />
          <input
            type="text"
            placeholder="Salary"
            ref={salaryInput => (this.salaryInput = salaryInput)}
            className="formField"
          />
          <input
            type="text"
            placeholder="Age"
            ref={ageInput => (this.ageInput = ageInput)}
            className="formField"
          />
          <button className="Mybutton">Submit</button>
        </form>
      </div>
    );
  }
}
export default CreateAddEmployee;
