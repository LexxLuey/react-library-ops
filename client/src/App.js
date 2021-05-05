import React, { useEffect, useState } from "react";
import "./App.css";
import Login from './components/Login';
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  //runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }

  }, []);

  return (
    <div className="app">
      
      {
        token ? (
          <h1>Enter into the place</h1>
        ) : (
          <Login />
        )
      }
  
      
    </div>
  )
}

export default App;