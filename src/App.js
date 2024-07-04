
import './App.css';
import NavBar from './Frontend/Components/NavBar';
import Footer from './Frontend/Components/Footer';
import HomePage from './Frontend/Pages/HomePage';
import MembersPage from './Frontend/Pages/MembersPage';
import GuidesPage from './Frontend/Pages/GuidesPage';
import ProjectsPage from './Frontend/Pages/ProjectsPage';
import ServicesPage from './Frontend/Pages/ServicesPage';
import ContactPage from './Frontend/Pages/ContactPage';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="background-image"></div>
        <NavBar />
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/MembersPage' element={<MembersPage />} />
          <Route path='/GuidesPage' element={<GuidesPage />} />
          <Route path='/ProjectsPage' element={<ProjectsPage />} />
          <Route path='/ServicesPage' element={<ServicesPage />} />
          <Route path='/ContactPage' element={<ContactPage />} />


        </Routes>


        <Footer />

      </div >

    </Router>
  );
}

export default App;
