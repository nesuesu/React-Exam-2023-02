import UserContext from "../contexts/UserContext";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";


const Register = () => {

    const { users, setUsers, postUser, addUser, setIsLoggedIn} = useContext(UserContext);

    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: `, e.target.email.value);
        console.log(`Password: `, e.target.password.value);
        console.log(`Password: `, e.target.repeatPassword.value);

        if (users.find(item => (item.email === e.target.email.value) )) {
            alert('The email you entered exists');
        } else if (e.target.password.value !== e.target.repeatPassword.value) {         
            alert("Passwodrs must match");
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
            navigateTo('/');
        }
    }

    return (
        <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Email:
                <input type="text" name="email" />
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
            <input type="submit" />
        </form>
        <hr />
        </>
    )
}

export default Register;