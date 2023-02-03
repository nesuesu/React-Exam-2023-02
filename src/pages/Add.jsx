
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

        navigateTo('/home');
    }

    return (
        <>
        <form className="forma" onSubmit={handleSubmit}>
            <h3>Add Post</h3>
            <label htmlFor="">Title:
                <input type="text" name="title" />
            </label>
            <br />
            <label htmlFor="">Description:
                <textarea name="description" id="desc" cols="30" rows="10"></textarea>
            </label>
            <br />
            <input type="submit" value="Add"/>
        </form>
        </>
    )
}

export default Add;