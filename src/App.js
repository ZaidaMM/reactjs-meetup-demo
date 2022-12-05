import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetupsPage';
import FavoritesPage from './pages/FavoritesPage';
import NewMeetupPage from './pages/NewMeetupPage';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' exact element={<AllMeetupsPage />} />
          <Route path='/new-meetup' element={<NewMeetupPage />} />
          <Route path='/favorites-meetups' element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
