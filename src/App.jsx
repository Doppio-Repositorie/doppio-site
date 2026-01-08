import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Identity from './sections/Identity';
import Products from './sections/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <Hero />
        <Identity />
        <Products />
      </main>

      <Footer />
    </div>
  );
}

export default App;
