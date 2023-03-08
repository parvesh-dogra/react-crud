import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/common/Navbar';
import NotFound from './components/common/NotFound';
import EditUser from "./components/User/EditUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
