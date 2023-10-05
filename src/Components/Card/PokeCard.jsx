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
  }, []);

  if (details === null) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className="card-pokemon">
        <p className="id-poke" >{details.id}</p>
        <hr />
        <img
          src={details.sprites.front_default}
          className="img-poke"
          alt="imgPoke"
        />
        <p className="nome-poke">{letraMaiscula(details.name)}</p>
        <p className="vida-poke">
          <FaHeart className="icone-hp"/>  :{" "}
          {details.stats[0].base_stat}
        </p>
        <button className="btn-mais-info" onClick={() => setOpenModal(true)}>
          Mais informações
        </button>
      </div>

      <PokeModal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <div>
          <p>{console.log(details)}</p>
        </div>
      </PokeModal>

    </>
  );
};

function letraMaiscula(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function convertUpper(str) {
  return str.toUpperCase();
}