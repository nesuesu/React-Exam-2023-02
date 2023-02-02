import logo from './images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="logo" />
            </div>

            <div>
                <Link to={'/login'}>Log in</Link>
                <Link to={'/register'}>Register</Link>
            </div>

            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/add'}>Add</Link>
            </div>

            
        </header>
    )
}

export default Header;