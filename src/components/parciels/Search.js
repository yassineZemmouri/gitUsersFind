import { Button, TextField } from "@mui/material";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  searchUser = (e) => {
    e.preventDefault();
    this.props.getSearchedUser(this.state.search);
  };

  render() {
    const { search } = this.state;
    return (
      <form onSubmit={this.searchUser}>
        <TextField
          id="outlined-basic"
          label="search user..."
          variant="outlined"
          value={search}
          onChange={this.handleChange}
        />
        <Button variant="contained" color="success" type="submit">
          Search
        </Button>
      </form>
    );
  }
}

export default Search;
