
import UserContext from "../contexts/UserContext";
import PostContext from "../contexts/PostContext";
import { useContext } from "react";

import Post from "./Post";

const Home = () => {

    const {users} = useContext(UserContext);
    const {posts} = useContext(PostContext);

    return (
        <>
        <h1>Home</h1>

        {posts ? 
            <div>
                <h3>Current Posts:</h3>
                {posts.map((post,index) => (
                    <Post  
                        post = {post}
                        key = {index}
                    />
                ))}
            </div>
        :
        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/>
        }

        </>
    )
}

export default Home;