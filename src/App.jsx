
import './App.css';
import {Routes,Route} from 'react-router-dom';

import Header from './Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Add from './pages/Add';
import Footer from './Footer';

function App() {
  return (
    <>
    
    <Header/>

    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />

      <Route path='/' element={<Home/>} />
      <Route path='/add' element={<Add/>} />

      <Route path="/*" element={<h1>404 Page not Found</h1>}/>
    </Routes>

    <Footer/>
    </>


  );
}

export default App;
