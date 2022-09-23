import React from "react";
import { SearchBar } from "./searchBar/SearchBar";
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import AddIcon from '@mui/icons-material/Add';
import RedditIcon from '@mui/icons-material/Reddit';
import { setHome } from "../../features/posts/postsSlice";
import { togglePost } from "../../features/posts/postsSlice";
import { useDispatch } from "react-redux";
// import avatar from '../../avatar/avatar'


export const NavMenu = () => {
    const dispatch = useDispatch();
    
    const logo2 = require('../../avatar/avatar.webp');

    return (
        <div id="nav">
            <a id="reddit" onClick={() => window.location.reload()}>
                <RedditIcon id="reddit-icon"/>
                <p>reddit</p>
            </a>
            
            <div id="home">
                <div id="house">
                    <HomeIcon/>
                    <h4>Home</h4>
                </div>
                
                <div id="arrow">
                    <ExpandMoreOutlinedIcon id="expand-icon"/>
                </div>
            </div>

            <SearchBar/>
            <a title="Popular"><TrendingUpIcon id="popular"/></a>
            <a title="Reddit Live"><PhotoCameraFrontIcon id="live"/></a>
            <a title="Chat"><ChatBubbleOutlineOutlinedIcon id="chat"/></a>
            <a title="Notifications"><NotificationsNoneRoundedIcon id="notifications"/></a>
            <a title="Create Post"><AddIcon id="add"/></a>

            {/* <img src={logo}/> */}
            <img src={logo2} id="avatar"/>
        </div>
    )
}