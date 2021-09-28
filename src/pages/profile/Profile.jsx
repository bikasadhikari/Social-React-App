import React from "react";
import './profile.css'
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

export const Profile = () => {
    return (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">                    
                        <img src="/assets/person/3.jpeg" alt="" className="profileCoverImg" />
                        <img src="/assets/person/7.jpeg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Bikas Adhikari</h4>
                        <span className="profileInfoDesc">Hello my friends</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
            </div>
        </div>
        </>
    )
}