import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useDataLayerValue } from '../DataLayer';

function Sidebar() {
    const [{ playlists}, dispatch] = useDataLayerValue();
    
    return(
        <div className="sidebar">
            <img className="sidebar_logo"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="spotify logo"
            />

        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

        <br />
        <strong className="sidebar_title">PLAYLISTS</strong>
        <hr />

        {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
        ))}
        
        </div>
       
    )
}

export default Sidebar;