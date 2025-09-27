import './App.css';
import {Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import RulePage from './pages/RulePage/RulePage';
import LorePage from './pages/LorePage/LorePage';
import DonatePage from './pages/DonatePage/DonatePage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/lore' element={<LorePage />} />
        <Route path='/rule' element={<RulePage />} />
        <Route path='/donate' element={<DonatePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
