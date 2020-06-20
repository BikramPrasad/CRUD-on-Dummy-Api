import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewEmployee } from "../../store/action/actions";

class AddEmployee extends Component {
  state = {
    id: Math.floor((25 + Math.random()) * 0x10),
    employee_name: "",
    employee_salary: "",
    employee_age: "",
    profile_image: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    //this.id = 25 + Math.floor(Math.random());
    this.props.addNewEmployeeToStore(this.state);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add Employee</h5>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="employee_name" onChange={this.handleChange} required />
          </div>
          <div className="input-field">
            <label htmlFor="age">Age</label>
            <input type="text" id="employee_age" onChange={this.handleChange} required />
          </div>
          <div className="input-field">
            <label htmlFor="name">Salary</label>
            <input type="text" id="employee_salary" onChange={this.handleChange} required />
          </div>

          <div className="input-field">
            <button className="btn waves-effect blue lighten-1 z-depth-0">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewEmployeeToStore: (employee) => {
      dispatch(addNewEmployee(employee));
    },
  };
};
export default connect(null, mapDispatchToProps)(AddEmployee);
