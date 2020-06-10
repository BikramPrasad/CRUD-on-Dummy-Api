import React, { Component } from "react";
import { connect } from "react-redux";
import { editEmployee } from "../../store/action/actions";

class EditEmployee extends Component {
  render() {
    return (
      <div>
        <h2>Edit Employee</h2>
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
    deleteEmployee: (empId, newEmp) => {
      dispatch(editEmployee(empId, newEmp));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
