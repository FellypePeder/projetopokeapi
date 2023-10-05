import axios from "axios";
import "./PokeCard.css";
import { useState, useEffect } from "react";
import PokeModal from "../Modal/PokeModal";
import { FaHeart } from "react-icons/fa6";

export const Pokemon = ({ data }) => {
  const [details, setDetails] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios.get(data.url).then((response) => setDetails(response.data));
  }, [data]);

  if (details === null) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className="card-pokemon">
        <p className="id-poke" >{details.id}</p>
        <div className="linha-horizontal"></div>
        <img
          src={details.sprites.front_default}
          className="img-poke"
          alt="imgPoke"
        />
        <p className="nome-poke">{letraMaiscula(details.name)}</p>
        <p className="vida-poke">
          {details.stats[0].base_stat}
          <FaHeart className="icone-hp"/>
        </p>
        <button className="btn-mais-info" onClick={() => setOpenModal(true)}>
          More info
        </button>
      </div>

      <PokeModal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <div>
          <h1>{letraMaiscula(details.name)}</h1>
          <p>{details.types[0].type.name}</p>
          <p>{details.types.length > 1 ? <p>{details.types[1].type.name}</p> : null}</p>
        </div>
      </PokeModal>

    </>
  );
};

function letraMaiscula(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}