import React from 'react'
import './friends.css'

export const Friends = ({user}) => {
    return (
        <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
    )
}