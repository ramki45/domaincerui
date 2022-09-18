import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Domaincer from "./components/Domaincer";
import AddProject from "./components/AddProject";
import './App.css';
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const user = localStorage.getItem("token");
  useEffect(() => {
    // Update the document title using the browser API
    if(!localStorage.getItem('token')){
      if(window.location.pathname !== '/login'){
        window.location = '/login';
      }
    }
  });
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/login" exact element={<Login/>} />
			<Route path="/signup" exact element={<Register/>} />
      <Route path="/main" exact element={<Domaincer/>}/>
      <Route path='/addproject' exact element={<AddProject/>}/>
      </Routes> 
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
