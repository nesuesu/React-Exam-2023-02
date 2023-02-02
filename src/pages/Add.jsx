
import PostContext from "../contexts/PostContext";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

const Add = () => {

    const { postData, addPost } = useContext(PostContext);

    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Title: `,e.target.title.value);
        console.log(`Description: `,e.target.description.value);

        const newPost = {
            title: e.target.title.value,
            description: e.target.description.value,
        }
        
        postData(newPost);
        addPost(newPost);

        navigateTo('/');
    }

    return (
        <>
        <h1>Add</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Title:
                <input type="text" name="title" />
            </label>
            <br />
            <label htmlFor="">Description:
                <textarea name="description" id="desc" cols="30" rows="10"></textarea>
            </label>
            <br />
            <input type="submit" />
        </form>
        <hr />
        </>
    )
}

export default Add;