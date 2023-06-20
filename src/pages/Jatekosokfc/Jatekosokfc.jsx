import { useState, useEffect } from "react";
import { Link, json } from "react-router-dom";

const Jatekosokfc = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const data = async () => {
          try {
            const adat = await fetch("https://fociadatb.adaptable.app/jatekosfc");
    
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
      const jatekosfcTorol = async () => {
        try {
          
          console.log(id);
          const toroltJatekosfc = await fetch("https://fociadatb.adaptable.app/jatekosfc", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
          });
  
          console.log(toroltJatekosfc);
  
            if (toroltJatekosfc.ok) {
            const modositottJatekosfc = players.filter((item) => item._id != id);
            setPlayers(modositottJatekosfc);
            const jsonData = await toroltJatekosfc.json();
            window.alert(jsonData.msg);
          } else {
            const jsonData = await toroltJatekosfc.json();
            console.log(jsonData);
          }
  
        } catch (error) {
          console.log(error.message);
        }
      };
  
      jatekosfcTorol();
    };

    return (
      <div className="minden-container">
        <div className="univerzalis-container">
        {players.map((playerfc) => (
          <div className="jatekos-container" key={playerfc._id}>
            <Link
              to={{
                pathname: "/jatekosfc/" + playerfc._id,
              }}
            >
            <img src={playerfc.kep} alt="kép" /> 
              <h1>{playerfc.nev}</h1>
            </Link>
            <p>Kor: {playerfc.kor}</p>
            <button className="btn btn-danger" onClick={ () => torol(playerfc._id)}>Töröl</button>
          </div>
        ))}
        </div>
        <div className="gombDiv">
      <button type="button" className="btn btn-info"><Link to="/ujjatekosfc" className='uj-gomb'>Új játékos felvétele:</Link></button>
      </div>
      </div>
    )
}

export default Jatekosokfc