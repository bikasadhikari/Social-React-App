import React, {useState, useEffect} from 'react'
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css'
import axios from 'axios'

const Feed = ({username}) => {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = username ? await axios.get(`/posts/profile/${username}`) : await axios.get("posts/timeline/614f69e03758eebdfd4d83e0"); 
            setPosts(response.data);
        }
        fetchPosts();
    },[username]);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    )
}

export default Feed;