import React, { Component } from "react";
import { connect } from "react-redux";
// import { createEmployees } from "..//..//store/actions";

class AddEmployee extends Component {
  state = {
    name: "",
    salary: "",
    age: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.createEmployee(this.state);
    // this.props.history.push("/");
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add Employee</h5>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="age">Age</label>
            <input type="text" id="age" onChange={this.handleChange} required />
          </div>
          <div className="input-field">
            <label htmlFor="name">Salary</label>
            <input
              type="text"
              id="salary"
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="input-field">
            <button className="btn waves-effect blue lighten-1 z-depth-0">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createEmployee: (employee) => dispatch(createEmployees(employee)),
//   };
// };

export default AddEmployee;
