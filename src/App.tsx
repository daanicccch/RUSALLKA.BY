import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/sections/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { ScrollReset } from './components/ui/ScrollReset';
import { Home } from './pages/Home';
import { SkiPage } from './pages/ski/SkiPage';
import { KayakPage } from './pages/kayak/KayakPage';
import { AutoToursPage } from './pages/auto-tours/AutoToursPage';
import { GiftsPage } from './pages/gifts/GiftsPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollReset />
      <div className="min-h-screen bg-primary-dark text-white font-sans antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ski" element={<SkiPage />} />
          <Route path="/kayak" element={<KayakPage />} />
          <Route path="/auto-tours" element={<AutoToursPage />} />
          <Route path="/gifts" element={<GiftsPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
