
import { createContext } from "react";
import { useState, useEffect } from "react";

const PostContext = createContext();

const PostProvider = ({children}) => {

    const [posts, setPosts] = useState(null);

    // STATE FUNCTIONS

    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    // CRUD FUNCTIONS

    // ant pirmo užkrovimo atsisiunčiam visus vartotojus iš json serverio ir įsirašom juos į state kintamąjį
    const getPosts = async () => {
        const data = await fetch('http://localhost:5000/AnimalsTypes')
        .then(res => res.json());
        setPosts(data);
    }

    useEffect(()=>{
        getPosts();
    }, []); 

    const postData = (newPost) => {
        fetch('http://localhost:5000/AnimalsTypes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPost),
        })
        .then((res) => res.json());
    }

    return (
        <PostContext.Provider
        value = {{
            posts,
            setPosts,
            postData,
            addPost,
        }}
        >
        {children}
        </PostContext.Provider>
    )
}

export {PostProvider};
export default PostContext;