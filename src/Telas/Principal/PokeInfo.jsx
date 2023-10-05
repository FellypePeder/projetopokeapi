import "../Principal/PokeInfo.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Pokemon } from "../../Components/Card/PokeCard";

function PokeInfo() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0")
      .then((response) => setList(response.data.results));
  }, []);

  return (
    <>
      {/* <div className="botoes">
        <button className="prox-lista-poke">A</button>
        <button className="lista-poke-anterior">B</button>
      </div> */}
      <div className="poke-info">
        {list.map((item) => (
          // componente que carrega os dados
          <Pokemon key={item.name} data={item} />
        ))}
    </div>
    </>
    
  );
}

export default PokeInfo;
