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
          {console.log(details)}
          
          <section className="section-poke-type">
            <h1 style={{margin: 0}}>{letraMaiscula(details.name)}</h1>
            <div className="poke-type">
              <p className="status-name-poke-type">{letraMaiscula(details.types[0].type.name)}</p>
              <p className="status-value-poke-type">{details.types.length > 1 ? <pre>{" & "}{letraMaiscula(details.types[1].type.name)}</pre> : null}</p>
            </div>
            <div className="linha-horizontal"></div>
          </section>

          <section className="section-poke-status section-ataque">
            <div className="div-poke-status status-ataque"> 
              <h3 style={{marginTop: 10}}>{letraMaiscula(details.stats[1].stat.name)}</h3>
              <p className="status-poke-value stat-poke-ataque-valor">{details.stats[1].base_stat}</p>
            </div>
          </section>

          <section className="section-poke-status section-defense">
            <div className="div-poke-status status-defense"> 
              <h3 style={{marginTop: 10}}>{letraMaiscula(details.stats[2].stat.name)}</h3>
              <p className="status-poke-value stat-poke-ataque-valor">{details.stats[2].base_stat}</p>
            </div>
          </section>

          <section className="section-poke-status section-special-attack">
            <div className="div-poke-status status-special-attack"> 
              <h3 style={{marginTop: 10}}>{letraMaiscula(details.stats[3].stat.name)}</h3>
              <p className="status-poke-value stat-poke-ataque-valor">{details.stats[3].base_stat}</p>
            </div>
          </section>

          <section className="section-poke-status section-special-defense">
            <div className="div-poke-status status-special-defense"> 
              <h3 style={{marginTop: 10}}>{letraMaiscula(details.stats[4].stat.name)}</h3>
              <p className="status-poke-value stat-poke-ataque-valor">{details.stats[4].base_stat}</p>
            </div>
          </section>

          <section className="section-poke-status section-speed">
            <div className="div-poke-status status-speed"> 
              <h3 style={{marginTop: 10}}>{letraMaiscula(details.stats[5].stat.name)}</h3>
              <p className="status-poke-value stat-poke-ataque-valor">{details.stats[5].base_stat}</p>
            </div>
          </section>

      </PokeModal>
    </>
  );
};

function letraMaiscula(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}