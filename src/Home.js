import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        this.setState({
          posts: res.data.data,
        });
      });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <ul className="collection" key={post.id}>
            <li className="collection-item avatar">
              <span className="title">
                <b>{post.employee_name}</b>
              </span>
              <h6>Age:{post.employee_age}</h6>
              <p>Salary:{post.employee_salary}</p>
            </li>
          </ul>
        );
      })
    ) : (
      <div className="center">No data yet!</div>
    );
    return (
      <div className="container black-text">
        <h4 className="center red-text">Employee Details!</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
