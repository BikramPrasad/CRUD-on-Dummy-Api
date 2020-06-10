import axios from "axios";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddEmployee from "./components/employee/addEmployee";
import EditEmployee from "./components/employee/editEmployee";
import EmployeeList from "./components/employee/index";
import Navbar from "./components/layout/Navbar";
import { addNewEmployee } from "./store/action/actions";

class App extends PureComponent {
  async componentDidMount() {
    // Initial fetching of the data
    const response = await axios.get(`http://dummy.restapiexample.com/api/v1/employees`);
    const data = response.data.data;

    // Add this to store
    data.forEach((emp) => {
      this.props.addNewEmployeeToStore(emp);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={EmployeeList}></Route>
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
    addNewEmployeeToStore: (employee) => {
      dispatch(addNewEmployee(employee));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
