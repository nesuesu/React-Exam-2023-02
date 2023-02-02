
import { createContext } from "react";
import { useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {

    const [users, setUsers] = useState(null);


    // ant pirmo užkrovimo atsisiunčiam visus vartotojus iš json serverio ir įsirašom juos į state kintamąjį
    const getUsers = async () => {
        const data = await fetch('http://localhost:5000/users')
        .then(res => res.json());
        setUsers(data);
    }

    useEffect(()=>{
        getUsers();
    }, []); 

    return (
        <UserContext.Provider
        value = {{
            users,
            setUsers,
        }}
        >
        {children}
        </UserContext.Provider>
    )
}

export {UserProvider};
export default UserContext;