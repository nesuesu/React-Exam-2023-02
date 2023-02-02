import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from './contexts/UserContext';

const Header = () => {

    const {isLoggedIn} = useContext(UserContext);

    return (
        <header>
            <div>
                <img src={logo} alt="logo" />
            </div>

            {isLoggedIn ?
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/add'}>Add</Link>
            </div>
            :
            <div>
                <Link to={'/login'}>Log in</Link>
                <Link to={'/register'}>Register</Link>
            </div>
            
            }



            

            
        </header>
    )
}

export default Header;