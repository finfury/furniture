import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.jsx';
import StartPage from './pages/StartPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import ContactsPage from './pages/ContactsPage/ContactsPage.jsx';
import GalleryPage from './pages/GalleryPage/GalleryPage.jsx';
import GoodPage from './pages/GoodPage/GoodPage.jsx';
import './App.css'


function App() {
    return <Routes>
        <Route path={'/'} element={<StartPage />}>
            <Route path={'main'} element={<MainPage />} />
            <Route path={'about'} element={<AboutPage />} />
            <Route path={'contacts'} element={<ContactsPage />} />
            <Route path={'gallery'} element={<GalleryPage />} />
            <Route path={'good'} element={<GoodPage />} />
        </Route>
        <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
}

export default App;
