import "./App.css";
import Users from "./components/user/Users";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserItem from "./components/user/UserItem";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Routes>
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/users/:login" element={<UserItem />} />
            <Route path="*" element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
