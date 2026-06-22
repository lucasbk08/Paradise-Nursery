import { useState } from 'react';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <div className="App">
      {showLanding ? (
        <AboutUs onGetStarted={() => setShowLanding(false)} />
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
