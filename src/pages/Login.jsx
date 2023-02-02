import UserContext from "../contexts/UserContext";
import { useContext } from "react";

const Login = () => {

    const { users, setIsLoggedIn, isLoggedIn } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: `, e.target.email.value);
        console.log(`Password: `, e.target.password.value);

        if (users.find(item => (item.email === e.target.email.value) && (item.password === e.target.password.value))) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
            alert("Username or password are wrong");
        }
        console.log(isLoggedIn);
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
        <hr />
        </>
    )
}

export default Login;