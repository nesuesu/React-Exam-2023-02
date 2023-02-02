
import { createContext } from "react";
import { useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {

    const [users, setUsers] = useState(null);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // ant pirmo užkrovimo atsisiunčiam visus vartotojus iš json serverio ir įsirašom juos į state kintamąjį
    const getUsers = async () => {
        const data = await fetch('http://localhost:5000/users')
        .then(res => res.json());
        setUsers(data);
    }

    useEffect(()=>{
        getUsers();
    }, []); 

    const postUser = (newUser) => {
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser),
        })
        .then((res) => res.json());
    }

    return (
        <UserContext.Provider
        value = {{
            users,
            setUsers,
            isLoggedIn,
            setIsLoggedIn,
            postUser,
        }}
        >
        {children}
        </UserContext.Provider>
    )
}

export {UserProvider};
export default UserContext;