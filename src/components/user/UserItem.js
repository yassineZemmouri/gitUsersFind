import React from "react";
import User from "./User";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

function UserItem() {
  const [user, setUser] = useState({});

  const { login } = useParams();
  useEffect(() => {
    axios.get(`https://api.github.com/users/${login}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <div className="userItem">
      <div key={user.id}>
        <User user={user} />
      </div>
    </div>
  );
}

export default UserItem;
