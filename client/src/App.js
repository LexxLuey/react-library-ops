import React, { useEffect, useState } from "react";
import "./App.css";
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  //runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      console.log("_token =", _token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{
        // console.log("Na user be this: ", user);
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          user: playlists,
        })
      })
    }

    // console.log("token =", token);

  }, []);

  console.log("Na user be this outside getme: ", user);
  console.log("Na token be this outside getme: ", token);

  return (
    <div className="app">
      
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
  
      
    </div>
  )
}

export default App;