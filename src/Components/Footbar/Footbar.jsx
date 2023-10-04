import "./Footbar.css";
import imgGithub from "../../Imagens/github.png";
import imgLinkedin from "../../Imagens/linkedin.png";

function Navbar() {
  return (
    <div className="footer-tela">
      <p className="minhas-redes-sociais">Minhas redes sociais</p>
      <footer className="footer-pagina ">
        <a className="link-redes" href="https://github.com/FellypePeder" target="_blank" rel="noreferrer"><img src={imgGithub} alt="imgGithub" className="imagem-link-footer github" /></a>
        <a className="link-redes" href="https://www.linkedin.com/in/fellype-pedersoli-cesar-verdi-cosme-6b3530233/" target="_blank" rel="noreferrer"><img src={imgLinkedin} alt="imgLinkedin" className="imagem-link-footer linkedin" /></a>
      </footer>
    </div>
  );
}

export default Navbar;
