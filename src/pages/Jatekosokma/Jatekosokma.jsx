import { useState, useEffect } from "react";
import { Link, json } from "react-router-dom";
import './Jatekosokma.css';

const Jatekosokma = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const data = async () => {
          try {
            const adat = await fetch("https://fociadatb.adaptable.app/jatekosma");
    
            if (adat.ok) {
              const jsonData = await adat.json();
              setPlayers(jsonData.msg);
            } else {
              const jsonData = await adat.json();
              console.log(jsonData);
            }
          } catch (error) {
            console.log(error);
          }
        };

        data();
    }, []);

  const torol = (id) => {
    const jatekosmaTorol = async () => {
      try {
        
        console.log(id);
        const toroltJatekosma = await fetch("https://fociadatb.adaptable.app/jatekosma", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        console.log(toroltJatekosma);

          if (toroltJatekosma.ok) {
          const modositottJatekosma = players.filter((item) => item._id != id);
          setPlayers(modositottJatekosma);
          const jsonData = await toroltJatekosma.json();
          window.alert(jsonData.msg);
        } else {
          const jsonData = await toroltJatekosma.json();
          console.log(jsonData);
        }

      } catch (error) {
        console.log(error.message);
      }
    };

    jatekosmaTorol();
  };


  return (
    <div className="minden-container">
      <div className="univerzalis-container">
      {players.map((playerma) => (
        <div className="jatekos-container" key={playerma._id}>
          <Link
            to={{
              pathname: "/jatekosma/" + playerma._id,
            }}
          >
          <img src={playerma.kep} alt="kép" /> 
            <h1>{playerma.nev}</h1>
          </Link>
          <p>Kor: {playerma.kor}</p>
          <button className="btn btn-danger" onClick={ () => torol(playerma._id)}>Töröl</button>
        </div>
      ))}
      </div>
      <div className="gombDiv">
      <button type="button" className="btn btn-info"><Link to="/ujjatekosma" className='uj-gomb'>Új játékos felvétele:</Link></button>
      </div>
    </div>
  )
}

export default Jatekosokma