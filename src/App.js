import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import AddEmployee from "./components/employee/addEmployee";
import EditEmployee from "./components/employee/editEmployee";
import EmployeeList from "./components/employee/index";
import Navbar from "./components/layout/Navbar";
import axios from "axios";
import { addNewEmployee } from "./store/action/actions";
import { connect } from "react-redux";
import { ADD_EMPLOYEE_ACTION } from "./store/action/actionTypes";

class App extends Component {
  async componentDidMount() {
    // Initial fetching of the data
    const response = await axios.get(
      `http://dummy.restapiexample.com/api/v1/employees`
    );
    const data = response.data.data;

    console.log(data);
    // Add this to store
    data.forEach((emp) => {
      this.props.addNewEmployee(emp);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={EmployeeList}></Route>
            <Route path="/index" component={EmployeeList}></Route>
            <Route path="/add" component={AddEmployee}></Route>
            <Route path="/edit/:id" Component={EditEmployee}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewEmployee: (emp) => {
      dispatch({
        type: ADD_EMPLOYEE_ACTION,
        payload: emp,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
