import { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [szoveg, setSzoveg] = useState('');

  useEffect(() => {
    const data = async () => {
      try {
        const adat = await fetch('http://localhost:3500');

        if (adat.ok) {
          const jsonData = await adat.json();
          setSzoveg(jsonData.msg);
        } else {
          const jsonData = await adat.json();
          console.log(jsonData);
          setSzoveg(jsonData.msg);
        }
      } catch (error) {
        console.log(error);
      }
    };

    data();
  }, []);

  return (
    <div className="home-container">
      <h1>BL Döntő</h1>
      <div className='selector'>
        <div className='csapat' id='csapat1'>
          <a href="/jatekosokma"><img src="./Manchester.png" alt="Manchester City" /></a>
        </div>
        <div className='csapat' id='csapat2'>
      <a href="/jatekosokfc"><img src="./Inter.png" alt="Fc Internazionale" /> </a>   
        </div>
      </div>
    </div>
  );
};

export default Home;
