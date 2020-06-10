import React, { Component } from "react";
import { connect } from "react-redux";
class EditEmployee extends Component {
  render() {
    return (
      <div>
        <h2>Edit Employee</h2>
      </div>
    );
  }
}

export default connect()(EditEmployee);
