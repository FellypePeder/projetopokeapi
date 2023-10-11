import "../Principal/PokeInfo.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Pokemon } from "../../Components/Card/PokeCard";

function PokeInfo() {
  const [list, setList] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
      .then((response) => setList(response.data.results));

    if(offset<0){
      setOffset(limit-20);
    }

  }, [offset]);

  return (
    <>
      <div className="botoes">
        <button className="volta-pagina" type="button" onClick={()=>{setOffset(offset-limit)}}><GoArrowLeft/></button>
        <button className="avanca-pagina" type="button" onClick={()=>{setOffset(offset+limit)}}><GoArrowRight/></button>
      </div>

      <div className="poke-info">
        {list.map((item) => (
          <Pokemon key={item.name} data={item} />
        ))}
    </div>
    </>
    
  );
}

export default PokeInfo;