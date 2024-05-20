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
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
