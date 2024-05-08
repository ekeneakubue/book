import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import BookShelf from './pages/bookshelf/BookShelf';
import Explore from './pages/explore/Explore';
import MyNotes from './pages/myNotes/MyNotes';
import SearchResult from './pages/searchResult/SearchResult';
import Settings from './pages/settings/Settings';
import SideNavbar from './components/sideNavbar/SideNavbar';
import About from './pages/about/About';

function App() {
  return (
    <BrowserRouter>
      <div className='bookworm-main'>
      <SideNavbar />
      <Routes>
        <Route path = '/' element = {<Dashboard />} />
        <Route path = '/bookshelf' element = {<BookShelf />} />
        <Route path = '/explore' element = {<Explore />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/mynotes' element = {<MyNotes />} />
        <Route path = '/searchresult' element = {<SearchResult />} />
        <Route path = '/settings' element = {<Settings />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
