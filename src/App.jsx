import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import BookShelf from './pages/bookshelf/BookShelf';
import Explore from './pages/explore/Explore';
import MyNotes from './pages/myNotes/MyNotes';
import SearchResult from './pages/searchResult/SearchResult';
import Settings from './pages/settings/Settings';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import ForgotPassword from './pages/resetPassword/forgotPassword/ForgotPassword';
import PasswordReset from './pages/resetPassword/passwordReset/PasswordReset';
import NewPassword from './pages/resetPassword/newPassword/NewPassword';
import PasswordDone from './pages/resetPassword/passwordDone/PasswordDone';

function App() {
  return (
    <BrowserRouter>
      <div className='bookworm-main'>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/dashboard' element = {<Dashboard />} />          
        <Route path = '/bookshelf' element = {<BookShelf />} />
        <Route path = '/explore' element = {<Explore />} />
        <Route path = '/mynotes' element = {<MyNotes />} />
        <Route path = '/searchresult' element = {<SearchResult />} />
        <Route path = '/settings' element = {<Settings />} />
        <Route path = '/signup' element = {<Signup />} />
        <Route path = '/login' element = {<Login />} />

        <Route path = '/forgotpassword' element = {<ForgotPassword />} />
        <Route path = '/passwordreset' element = {<PasswordReset />} />
        <Route path = '/newpassword' element = {<NewPassword />} />
        <Route path = '/passworddone' element = {<PasswordDone />} />

      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
