
import './App.css';
import './i18n'; // Import the i18n configuration
import HomePage from "../src/Pages/HomePage.jsx"
import ResumePage from '../src/Pages/ResumePage.jsx';
import RequestPage from '../src/Pages/RequestPage.jsx';
import JournalPage from '../src/Pages/JournalPage.jsx';
import StorePage from '../src/Pages/StorePage.jsx';
import SocialMediaPage from '../src/Pages/SocialMediaPage.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Eye from './components/Eye.jsx';
function App() {
  return (
  <>
 
 <BrowserRouter>
        <>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/eye" element={<Eye />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/request" element={<RequestPage />} />
                <Route path="/journal" element={<JournalPage />} />
                <Route path="/store" element={<StorePage />} />
                <Route path="/social-media" element={<SocialMediaPage />} />
              
             </Routes>
          </>
      </BrowserRouter>

  </>
  );
}

export default App;
