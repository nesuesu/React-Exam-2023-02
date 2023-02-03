import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from './contexts/UserContext';

const Header = () => {

    const {isLoggedIn} = useContext(UserContext);

    return (
        <header>

            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>

            <div>
                <img style={{width:'100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkN4MHT61mUb3ILYKY6mqXnNRu7vrDFxwW2M2_AqDv38J6UDKpMGkf36LQTs_rFlHPQ&usqp=CAU" />
            </div>

            {isLoggedIn ?
            <div className='menu'>
                <Link to={'/home'}>Home</Link>
                <Link to={'/add'}>Add</Link>
            </div>
            :
            <div className='menu'>
                <Link to={'/'}>Log in</Link>
                <Link to={'/register'}>Register</Link>
            </div>
            
            }



            

            
        </header>
    )
}

export default Header;