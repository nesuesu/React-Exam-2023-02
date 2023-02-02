import UserContext from "../contexts/UserContext";
import { useContext } from "react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {

    const { users, setIsLoggedIn, isLoggedIn } = useContext(UserContext);

    const [error, setError] = useState(false);

    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (users.find(item => (item.email === e.target.email.value) && (item.password === e.target.password.value))) {
            setIsLoggedIn(true);
            navigateTo('/');
        } else {
            setIsLoggedIn(false);
            setError(true);
            setTimeout(() => {setError(false)} , "1000");
            // alert("Username or password are wrong");
        }
   
    }

    return (
        <>
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Email:
                <input type="email" name="email" />
            </label>
            <br />
            <label htmlFor="">Password:
                <input type="password" name="password"/>
            </label>
            <br />
            <input type="submit" />
        </form>
        {error && <h3>ERROR</h3>}
        <hr />
        </>
    )
}

export default Login;