import "./App.scss";

import Navbar from "./components/layout/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <p>Whatever goes here</p>
      </div>
    </div>
  );
};

export default App;
