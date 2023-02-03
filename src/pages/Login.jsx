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
            navigateTo('/home');
        } else {
            setIsLoggedIn(false);
            setError(true);
            setTimeout(() => { setError(false) }, "3000");
        }

    }

    return (
        <>
            <form className="forma" onSubmit={handleSubmit}>
                <h3>Log in</h3>
                <label htmlFor="">Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <label htmlFor="">Password:
                    <input type="password" name="password" />
                </label>
                <br />
                <input type="submit" value="Log In" />
            </form>
            {error && <h3 className="err">ERROR</h3>}
        </>
    )
}

export default Login;