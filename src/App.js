

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Blog from "./pages/Blog";


function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Blog" element={<Blog/>} />
  
          
        </Routes>
      </BrowserRouter>

  )

}
export default App;