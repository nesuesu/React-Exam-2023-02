
import PostContext from "../contexts/PostContext";
import { useContext } from "react";

import Post from "./Post";

const Home = () => {

    const { posts } = useContext(PostContext);

    return (
        <>

            <h1 style={{ textAlign: 'center', color: "blue", textDecoration: 'underline' }}>Animals (mammals):</h1>
            <div className="posts animals">
                {posts ?
                    (posts.map((post, index) => (
                        <Post
                            post={post}
                            key={index}
                        />
                    )))
                    :
                    (<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />)
                }
            </div>


        </>
    )
}

export default Home;