import React, { Component } from "react";
import { connect } from "react-redux";

class EmployeeList extends Component {
  componentDidUpdate() {
    // console.log(this.props);
  }

  render() {
    // console.log(this.props);
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
            <tr>
              <td>{}</td>
              <td></td>
              <td></td>
              <div className="">
                <td>
                  {/* <Link className="btn btn-primary">Edit</Link>
                  <a className="btn btn-danger">Delete</a> */}
                  <button className="btn waves-effect blue">Edit</button>
                  <button className="btn waves-effect red">Delete</button>
                </td>
              </div>
            </tr>
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
export default connect(mapStateToProps)(EmployeeList);
