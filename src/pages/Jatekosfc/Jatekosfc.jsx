import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Jatekosfc.css";

const Jatekosfc = () => {
    const [playerfc, setPlayerfc] = useState({});
    const param = useParams();
    const navigate = useNavigate();
    console.log(param);
    useEffect(() => {
      const data = async () => {
        try {
          const adat = await fetch("https://fociadatb.adaptable.app/jatekosfc");
  
          if (adat.ok) {
            const jsonData = await adat.json();
            console.log(jsonData);
            let playerVal = jsonData.msg.filter((elem) => elem._id === param.id);
            console.log(playerVal);
            setPlayerfc(playerVal[0]);
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
              const jsonData = await toroltJatekosfc.json();
              window.alert(jsonData.msg);
              navigate("/jatekosokfc");
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
    <div className="jatekosfc-container">
      <table>
        <tbody>
          <tr>
          <td><h1>A játékos neve: {playerfc.nev}</h1></td>
          </tr>
          <tr>
          <td><p>A játékos életkora: {playerfc.kor}</p></td>
          </tr>
          <tr>
          <td><img src={playerfc.kep} alt="kép" /></td>
          </tr>
          <tr>
            <td><button className="btn btn-danger" onClick={ () => torol(playerfc._id)}>Töröl</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Jatekosfc