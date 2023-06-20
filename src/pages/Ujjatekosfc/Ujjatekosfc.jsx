import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Ujjatekosfc.css';

const Ujjatekosfc = () => {
    const [nev, setNev] = useState("");
    const [kor, setKor] = useState(0);
    const [kep, setKep] = useState("");

    const navigate = useNavigate();

    const feldolgoz = (e) => {
        e.preventDefault();
        const adatok = { nev, kor, kep };
    
        const elkuld = async () => {
          const adat = await fetch("https://fociadatb.adaptable.app/jatekosfc", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(adatok),
          });
    
          if (adat.ok) {
            const response = await adat.json();
            window.alert(response.msg);
            navigate("/jatekosokfc");
          } else {
            const response = await adat.json();
            window.alert(response.msg);
          }
        };
    
        elkuld();
    };

  return (
    <div className="add-container">
      <div className="form-div">
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label className="labelel" htmlFor="nev">Név: </label>
              </td>
              <td>
                <input className="form-control" placeholder="Név" autocomplete="off"
                  type="text"
                  name="nev"
                  id="nev"
                  onChange={(e) => setNev(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="labelel" htmlFor="kor">Kor: </label>
              </td>
              <td>
                <input className="form-control" placeholder="Kor" autocomplete="off"
                  type="number"
                  name="kor"
                  id="kor"
                  onChange={(e) => setKor(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="labelel" htmlFor="kep">Avatár címe:</label>
              </td>
              <td>
                <input className="form-control" placeholder="Kép címe" autocomplete="off"
                  type="text"
                  name="kep"
                  id="kep"
                  onChange={(e) => setKep(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
          <button className="btn btn-success gombh" onClick={(event) => feldolgoz(event)}>Hozzáadás</button>
      </form>
      </div>
    </div>
  )
}

export default Ujjatekosfc