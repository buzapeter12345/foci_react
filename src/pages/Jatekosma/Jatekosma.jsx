import { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import './Jatekosma.css';


const Jatekosma = () => {
    const [playerma, setPlayerma] = useState({});
    const param = useParams();
    console.log(param);
    const navigate = useNavigate();
  
    useEffect(() => {
      const data = async () => {
        try {
          const adat = await fetch("https://fociadatb.adaptable.app/jatekosma");
  
          if (adat.ok) {
            const jsonData = await adat.json();
            console.log(jsonData);
            let playerVal = jsonData.msg.filter((elem) => elem._id === param.id);
            console.log(playerVal);
            setPlayerma(playerVal[0]);
          } else {
            const jsonData = await adat.json();
            console.log(jsonData);
          }
        } catch (error) {
          console.log(error);
        }
      };
  
      data();
    }, [param.id]);

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
              const jsonData = await toroltJatekosma.json();
              window.alert(jsonData.msg);
              navigate("/jatekosokma");
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
    <div className="jatekosma-container">
      <table>
        <tbody>
          <tr>
          <td><h1>A játékos neve: {playerma.nev}</h1></td>
          </tr>
          <tr>
          <td><p>A játékos életkora: {playerma.kor}</p></td>
          </tr>
          <tr>
          <td><img src={playerma.kep} alt="kép" /></td>
          </tr>
          <tr>
            <td><button className="btn btn-danger" onClick={ () => torol(playerma._id)}>Töröl</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Jatekosma