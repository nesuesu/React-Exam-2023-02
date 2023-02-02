
import { createContext } from "react";
import { useState, useEffect } from "react";

const PostContext = createContext();

const PostProvider = ({children}) => {

    const [posts, setPosts] = useState(null);


    // ant pirmo užkrovimo atsisiunčiam visus vartotojus iš json serverio ir įsirašom juos į state kintamąjį
    const getPosts = async () => {
        const data = await fetch('http://localhost:5000/AnimalsTypes')
        .then(res => res.json());
        setPosts(data);
    }

    useEffect(()=>{
        getPosts();
    }, []); 

    return (
        <PostContext.Provider
        value = {{
            posts,
            setPosts,
        }}
        >
        {children}
        </PostContext.Provider>
    )
}

export {PostProvider};
export default PostContext;