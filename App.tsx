import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import {
  CreditCard,
  Menu,
  X,
  Moon,
  Sun,
  ChevronDown,
  Twitter,
  Linkedin,
  Instagram,
  Globe
} from 'lucide-react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import HelpCenter from './pages/HelpCenter';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import ChatWidget from './components/ChatWidget';

// --- Shared Components ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDark(!isDark);

  const isActive = (path: string) => location.pathname === path ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-300 hover:text-primary transition-colors';

  const navLinks = [
    { name: 'Soluções', path: '/' },
    { name: 'Sobre Nós', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Carreiras', path: '/careers' },
    { name: 'Ajuda', path: '/help' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel bg-white/70 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <img src="/logo.png" alt="Bloopi Logo" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className={`text-sm font-medium ${isActive(link.path)}`}>
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="hidden sm:flex gap-3">
              <button className="h-9 px-4 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                Login
              </button>
              <button className="h-9 px-4 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all hover:scale-105">
                Criar Conta
              </button>
            </div>
            <button onClick={toggleMenu} className="md:hidden p-2 text-slate-700 dark:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button className="w-full h-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white font-bold">
              Login
            </button>
            <button className="w-full h-10 rounded-lg bg-primary text-white font-bold">
              Criar Conta
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Bloopi Logo" className="h-8 w-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
          <Link to="/terms" className="hover:text-primary transition-colors">Termos de Uso</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacidade</Link>
          <Link to="/help" className="hover:text-primary transition-colors">Central de Ajuda</Link>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
        <p>© 2024 Bloopi Pagamentos S.A. Todos os direitos reservados.</p>
        <p>Feito com 💙 em São Paulo</p>
      </div>
    </footer>
  );
};

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow bg-background-light dark:bg-background-dark transition-colors duration-300 relative overflow-hidden">
        {children}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;