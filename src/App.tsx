import { useEffect } from 'react';
import './App.css';
import Introduction from './components/Introduction';
import StaticPortfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import ThemeToggle from './components/ThemeToggle';

function App() {
  // Handle theme toggling based on localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light'; // Default to light theme
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <ThemeToggle />
      <main className="max-w-4xl mx-auto px-4 py-4">
        <header>
          <h1 className="text-3xl font-bold text-center">
            Hi, I'm Tim.
          </h1>
        </header>
        <Introduction />
        <StaticPortfolio />
        <Timeline />
      </main>
    </div>
  );
}

export default App;