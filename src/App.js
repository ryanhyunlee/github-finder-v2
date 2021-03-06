import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GithubState from "./context/github/GithubState";

import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import UserDetail from "./components/user/users/UserDetail";

const App = () => {
  return (
    <GithubState>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' component={UserDetail} />
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
