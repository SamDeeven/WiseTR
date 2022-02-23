import React,{useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import axios from 'axios';

import Cards from './components/Cards';
import Profile from './components/Profile';
function App() {
  const [users, setUsers] = useState([]);


  

  useEffect(()=>{
    (async ()=>{
      let userData;
      try{
        const response = await fetch("https://templates.buildwoofunnels.com/users.json");
        const userData = await response.json();
        // setUsers(userData);
        console.log(userData)
      }
      catch(error){
        console.log(error);
        userData = [];
      }
      
    })();

    
userData();



  },[]);
  return (


    
    <div className="body">
      


      <Router>
          <Routes>
          <Route exact path="/" element={<Cards/>}/>
            
          <Route exact path="/profile" element={<Profile/>}/>
         
          </Routes>
      </Router>





    </div>
  );
}

export default App;
