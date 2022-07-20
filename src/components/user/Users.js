import axios from "axios";
import React, { Component } from "react";
import Search from "../parciels/Search";
import User from "./User";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  getUsers = () => {
    axios.get("https://api.github.com/users").then((response) => {
      this.setState({
        users: response.data,
      });
    });
  };

  componentDidMount() {
    this.getUsers();
  }

  getSearchedUserGit = (data) => {
    if (data != "") {
      axios.get(`https://api.github.com/search/users?q=${data}`).then((res) => {
        this.setState({
          users: res.data.items,
        });
      });
    }
  };

  render() {
    return (
      <div>
        <Search getSearchedUser={this.getSearchedUserGit} />
        <div className="users">
          {this.state.users.map((user) => (
            <div key={user.id}>
              <User user={user} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
