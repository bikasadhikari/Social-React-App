import React from 'react'
import './rightbar.css'

const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Mohit</b> and <b>5 other friends</b> have their birthday today</span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="righbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/10.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Silvia</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="righbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/10.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Silvia</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="righbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/10.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Silvia</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="righbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/10.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Silvia</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="righbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/10.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Silvia</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="righbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/10.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Silvia</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Rightbar;