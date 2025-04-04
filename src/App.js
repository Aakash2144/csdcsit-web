import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import Faculty from "./Faculty";
import Achievements from "./Achievements";
import Events from "./Events";
import TopNavbar from './TopNavbar';
import "./App.css";  // Add global styles
function App() {
  return (
    <div className="App">
       <TopNavbar />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
