/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import style from "./Detalhes.module.css";
import react, { useState } from "react";
import camisas from "../../img/camisas.png";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import { IoMdStar } from "react-icons/io"; //estrelas
import { IoIosStarOutline } from "react-icons/io"; //estrelas preenchidas
import { IoMdHeartEmpty } from "react-icons/io"; //coração
import { IoMdHeart } from "react-icons/io"; //coração preenchido
import Class from "../Classificação/Class";

function Detalhes() {
  const [selectedIcon, setSelectedIcon] = useState("heart");

  const handleClick = () => {
    // Lógica para alternar entre ícones
    if (selectedIcon === "heart") {
      setSelectedIcon("mdheart");
    } else if (selectedIcon === "mdheart") {
      setSelectedIcon("thumbs-up");
    } else {
      setSelectedIcon("heart");
    }
  };

  // Mapeia o ícone selecionado para o componente correspondente
  const renderSelectedIcon = () => {
    switch (selectedIcon) {
      case "heart":
        return <IoMdHeartEmpty />;
      case "mdheart":
        return <IoMdHeart />;
      case "thumbs-up":
        return <IoMdHeart />;
      default:
        return null;
    }
  };

  const [selectedStar, setSelectedStar] = useState(0);

  // Simplifiquei a lógica de handleClickStar
  const handleClickStar = (starValue) => {
    // Se a estrela clicada for a mesma que já está selecionada, desselecione-a
    if (selectedStar === starValue) {
      setSelectedStar(0);
    } else {
      setSelectedStar(starValue);
    }
  };

  // Simplifiquei a lógica de renderSelectedStar
  const renderSelectedStar = (starValue) => {
    return selectedStar >= starValue ? <IoMdStar /> : <IoIosStarOutline />;
  };

  return (
    <>
      <Nav />
      <div className={style.Container}>
        <div className={style.Espaço}></div>
        <div className={style.Fundo}>
          <div className={style.Detalhe1}>
            <img src={camisas} className={style.img1} />
            <div className={style.teste}>
              <img src={camisas} className={style.img2} />
              <img src={camisas} className={style.img3} />
            </div>
          </div>

          <div className={style.Detalhe2}>
            <div className={style.Texts}>
              <h1>3 Blusas</h1>
              <button>Blusas</button>
              <button>Feminino</button>
              <h2>R$ 55,99</h2>
              <h3>
                Detalhes: Modelo Tecido Algodão Teca, Teresa, Calada, Nenhuma,
                Não entendi, Que merda é essa?
              </h3>
              <div className={style.icon}>
                {[1, 2, 3, 4, 5].map((starValue) => (
                  <div
                    key={starValue}
                    onClick={() => handleClickStar(starValue)}
                  >
                    {renderSelectedStar(starValue)}
                  </div>
                ))}
              </div>
              <div className={style.carrinho}>
                <button>Adicionar ao Carrinho</button>
                <div className={style.coracao} onClick={handleClick}>
                  {renderSelectedIcon()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Class/>
      <Footer />
    </>
  );
}

export default Detalhes;
