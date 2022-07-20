import React, { Component } from "react";
import { Link } from "react-router-dom";

export class User extends Component {
  Com;
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="user">
        <img src={avatar_url} alt="" />
        <p>
          <Link to={`/users/${login}`}>more details</Link>
        </p>
      </div>
    );
  }
}

export default User;
