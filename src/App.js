import { Route, Routes } from "react-router-dom";
import Navigation from "./navigation/navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users from "./pages/Users";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="about/:name" element={<Users/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
