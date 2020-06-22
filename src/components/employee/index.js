import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEmployeeById } from "../../store/action/actions";
import Axios from "axios";

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <h2>Employee List</h2>
        <table className="highlight ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.employees.map((employee) => (
              <tr>
                <td>{employee.employee_name}</td>
                <td>{employee.employee_age}</td>
                <td>{employee.employee_salary}</td>
                <div className="">
                  <td>
                    <Link to={"edit/" + employee.id}>
                      <button className="btn waves-effect blue">Edit</button>
                    </Link>

                    <button
                      className="btn waves-effect red"
                      onClick={async () => {
                        this.props.deleteEmployee(employee.id);
                        await Axios.delete(
                          `http://dummy.restapiexample.com/api/v1/delete/${employee.id}`
                        );
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEmployee: (empId) => {
      dispatch(deleteEmployeeById(empId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
