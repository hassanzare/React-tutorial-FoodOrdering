import "./styles/App.css";
import Navbar from "./components/Navbar";
import { ReactDOM } from "react-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
