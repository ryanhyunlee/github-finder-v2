import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GithubState from "./context/github/GithubState";

import Navbar from "./components/layout/navbar/Navbar";
import Search from "./components/user/search/Search";

const App = () => {
  return (
    <GithubState>
      <Router>
        <Navbar />
        <div className='container'>
          <Search />
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
