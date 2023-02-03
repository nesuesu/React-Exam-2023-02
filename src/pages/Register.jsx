import UserContext from "../contexts/UserContext";
import { useContext } from "react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";


const Register = () => {

    const { users, setUsers, postUser, addUser, setIsLoggedIn} = useContext(UserContext);
    
    const [error, setError] = useState(false);

    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (users.find(item => (item.email === e.target.email.value)) || (e.target.email.value === '') || (e.target.password.value !== e.target.repeatPassword.value) ) {
            setError(true);
            setTimeout(() => {setError(false)} , "1000");
        } else {
            postUser({
                email: e.target.email.value,
                password: e.target.password.value,
            });

            addUser({
                email: e.target.email.value,
                password: e.target.password.value,
            });

            setIsLoggedIn(true);
            navigateTo('/home');
        }
    }

    return (
        <>
        <form className="forma" onSubmit={handleSubmit}>
            <h3>Register</h3>
            <label htmlFor="">Email:
                <input type="email" name="email" />
            </label>
            <br />
            <label htmlFor="">Password:
                <input type="password" name="password" />
            </label>
            <br />
            <label htmlFor="">Confirm Password:
                <input type="password" name="repeatPassword" />
            </label>
            <br />
            <input type="submit" value="Register"/>
        </form>
        {error && <h3 className="err">ERROR</h3>}
        </>
    )
}

export default Register;