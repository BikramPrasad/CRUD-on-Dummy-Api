import React, { Component } from "react";
import { connect } from "react-redux";
import { editEmployee } from "../../store/action/actions";
import axios from "axios";

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

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.editEmployee(this.props.match.params.id, this.state);
    this.props.history.push("/");
    const response = await axios.put(
      `http://dummy.restapiexample.com/api/v1/update/${this.props.match.params.id}`,
      {
        name: this.state.employee_name,
        salary: this.state.employee_salary,
        age: this.state.employee_age,
      }
    );
    const data = response.data.data;
    console.log(data);
  };

  componentDidMount() {
    const employee = this.props.employees.find((emp) => emp.id === this.props.match.params.id);
    this.setState({
      employee_name: employee.employee_name,
      employee_age: employee.employee_salary,
      employee_salary: employee.employee_age,
      profile_image: "",
    });
  }

  render(props) {
    const employee = this.state;
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
              value={employee.employee_name}
            />
          </div>
          <div className="input-field">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="employee_age"
              onChange={this.handleChange}
              value={employee.employee_age}
            />
          </div>
          <div className="input-field">
            <label htmlFor="name">Salary</label>
            <input
              type="text"
              id="employee_salary"
              onChange={this.handleChange}
              value={employee.employee_salary}
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
