import React, { useState, useEffect } from "react";
import './profile.css'
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import axios from "axios";
import { useParams } from 'react-router'

const Profile = () => {
    const [user,setUser] = useState({});
    const params = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            const user = await axios.get(`/users?username=${params.username}`);
            setUser(user.data);
        }
        fetchUser();
    },[params.username]);

    return (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">                    
                        <img src={user.coverPicture ? user.coverPicture : "/assets/person/noCover.png"} alt="" className="profileCoverImg" />
                        <img src={user.profilePicture ? user.profilePicture : "/assets/person/noAvatar.png"} alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.desc}</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username={user.username} />
                    <Rightbar user={user}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile;