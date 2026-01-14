import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // The theme is now reliably set by an inline script in index.html before React loads.
    // We can read it directly from the DOM to initialize the state.
    if (typeof window === 'undefined') {
      return 'dark'; // Fallback for non-browser environments
    }
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    // For Tailwind's class-based dark mode, we add the 'dark' class for the dark theme
    // and remove it for the light theme.
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen font-sans leading-relaxed">
      <Cursor />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <main className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;