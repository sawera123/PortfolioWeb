
import './App.css';
import HomePage from "../src/Pages/HomePage.jsx"
import ResumePage from '../src/Pages/ResumePage.jsx';
import RequestPage from '../src/Pages/RequestPage.jsx';
import JournalPage from '../src/Pages/JournalPage.jsx';
import StorePage from '../src/Pages/StorePage.jsx';
import SocialMediaPage from '../src/Pages/SocialMediaPage.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
  <>
 
 <BrowserRouter>
        <>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/request" element={<RequestPage />} />
                <Route path="/journal" element={<JournalPage />} />
                <Route path="/store" element={<StorePage />} />
                <Route path="/blog" element={<SocialMediaPage />} />
              
             </Routes>
          </>
      </BrowserRouter>

  </>
  );
}

export default App;
