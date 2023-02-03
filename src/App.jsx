
import './App.css';
import {Routes,Route, useNavigate} from 'react-router-dom';

import Header from './Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Add from './pages/Add';
import Footer from './Footer';
import { useContext, useEffect } from 'react';
import UserContext from './contexts/UserContext';

function App() {

  const {isLoggedIn} = useContext(UserContext);
  const navigateTo = useNavigate();

  useEffect(() => {
    navigateTo('/');
  },[])


  return (
    <>
    
    <Header/>

    <Routes>
      <Route path='/' element={!isLoggedIn && <Login/>} />
      <Route path='/register' element={<Register/>} />

      <Route path='/home' element={isLoggedIn && <Home/>} />
      <Route path='/add' element={isLoggedIn && <Add/>} />

      <Route path="/*" element={<h1>404 Page not Found</h1>}/>
    </Routes>

    <Footer/>
    </>


  );
}

export default App;
