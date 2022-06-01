import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Nav from './components/Nav';

function App() {
  const [clothes, setClothes] = useState([]);
  const apparel = async (type) => {
    const typeUpperCased = type.toUpperCase();
    if (typeUpperCased === 'ALL') {
      const response = await fetch('./clothes.json');
      const data = await response.json();
      setClothes(data);
    } else {
      const response = await fetch('./clothes.json');
      const data = await response.json();
      const typeOnly = data.filter(
        (data) => data.type.toUpperCase() === typeUpperCased
      );
      setClothes(typeOnly);
    }
  };

  useEffect(() => {
    apparel('All');
  }, []);

  return (
    <div className='conatiner'>
      <Nav apparel={apparel} />
      {clothes?.length > 0 ? (
        <div className='box'>
          {clothes.map((cloth) => {
            return <Card cloth={cloth} />;
          })}
        </div>
      ) : (
        <div className='empty'>
          <h2>Nothing found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
