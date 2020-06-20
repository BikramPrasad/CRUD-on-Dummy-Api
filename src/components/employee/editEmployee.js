import React, { Component } from "react";
import { connect } from "react-redux";
import { editEmployee } from "../../store/action/actions";

class EditEmployee extends Component {
  state = {
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
    this.props.editEmployee(this.props.match.params.id, this.state);
    this.props.history.push("/");
  };
  render(props) {
    console.log(this.props.employees);
    const employee = this.props.employees.find((emp) => emp.id === this.props.match.params.id);
    return (
      <div className="container">
        <h2>Edit Employee</h2>
        <form onSubmit={this.handleSubmit} className="white">
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="employee_name"
              onChange={this.handleChange}
              defaultValue={employee.employee_name}
            />
          </div>
          <div className="input-field">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="employee_age"
              onChange={this.handleChange}
              defaultValue={employee.employee_age}
            />
          </div>
          <div className="input-field">
            <label htmlFor="name">Salary</label>
            <input
              type="text"
              id="employee_salary"
              onChange={this.handleChange}
              defaultValue={employee.employee_salary}
            />
          </div>
          <div className="input-field">
            <button className="btn waves-effect blue lighten-1 z-depth-0">Update</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log();
  return {
    employees: state.employees,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editEmployee: (empId, newEmpObj) => {
      dispatch(editEmployee(empId, newEmpObj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
