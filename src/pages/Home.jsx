
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

const Home = () => {

    const {users} = useContext(UserContext);

    return (
        <>
        <h1>Home</h1>
        <h3>Current Users:</h3>
        {users ? 
            <div>
                {users.map(user => (
                    <p>{user.id} - {user.email} - {user.password}</p>
                ))}
            </div>
        :
        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/>
        }

        </>
    )
}

export default Home;