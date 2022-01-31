import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";



function App() {
  return (
      <Router> 
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="login.html" element={<Login/>}/>
          <Route path="register.html" element={<Register/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </Router>
  );
}

export default App;
