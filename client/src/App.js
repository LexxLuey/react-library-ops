import React, { useEffect, useState } from "react";
import "./App.css";
import Login from './components/Login';
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  //runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      console.log("_token =", _token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{
        console.log("Na user be this: ", user);
      });
    }

    console.log("token =", token);

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