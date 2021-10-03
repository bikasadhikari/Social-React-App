import React, { useState, useEffect, useContext } from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Post = ({post}) => {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const {user:currentUser} = useContext(AuthContext);

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));
    }, [currentUser._id, post.likes])

    const likeHandler = () => {
        try {
            axios.put(`/posts/${post._id}/like`, {userId: currentUser._id});
        } catch (err) {
            console.log(err);
        }
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(isLiked ? false : true);
    }

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users?userId=${post.userId}`);
            setUser(response.data);
        }
        fetchUser();
    }, [post.userId]);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user._id}`}>
                        <img src={user.profilePicture || "/assets/person/noAvatar.png"} alt="" className="postProfileImg" />
                        </Link>
                        <span className="postUsername">{user.username}</span>

                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={post.img} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/heart.png" className="likeIcon" onClick={likeHandler} alt="" />
                        <img src="/assets/like.png" className="likeIcon" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comments} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;