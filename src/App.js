import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import ContactListing from './Component/ContactListing';
import AddContact from './Component/AddContact';
import UpdateContact from './Component/UpdateContact';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <div className='header'>
            <Link to={'/'}>Home</Link>
            <Link to={'/contact'}>Contact</Link>
          </div>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/contact' element={<ContactListing></ContactListing>}></Route>
            <Route path='/contact/add' element={<AddContact></AddContact>}></Route>
            <Route path='/contact/edit/:code' element={<UpdateContact></UpdateContact>}></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer className="toast-position"
        position="bottom-right"></ToastContainer>
      </div>
    </Provider>
  );
}

export default App;
