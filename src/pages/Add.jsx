
import PostContext from "../contexts/PostContext";
import { useContext } from "react";

const Add = () => {

    const { postData } = useContext(PostContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Title: `,e.target.title.value);
        console.log(`Description: `,e.target.description.value);
        
        postData({
            title: e.target.title.value,
            description: e.target.description.value,
        });



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