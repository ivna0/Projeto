/* eslint-disable no-unused-vars */
import style from "./Class.module.css";
import Top from "../../img/top.jpeg";
import { IoMdStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import react, { useState } from "react";

function Class() {
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
      <div className={style.Container}>
        <h1>Comentários</h1>
        <div className={style.Comentar}>
          <div className={style.div1}>
            <img src={Top}></img>
            <div className={style.icon}>
              {[1, 2, 3, 4, 5].map((starValue) => (
                <div key={starValue} onClick={() => handleClickStar(starValue)}>
                  {renderSelectedStar(starValue)}
                </div>
              ))}
            </div>
            <div className={style.input}>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>

          <div className={style.div2}>
            <img src={Top}></img>
            <div className={style.icon}>
              {[1, 2, 3, 4, 5].map((starValue) => (
                <div key={starValue} onClick={() => handleClickStar(starValue)}>
                  {renderSelectedStar(starValue)}
                </div>
              ))}
              <button>Avaliar</button>
            </div>
            <div className={style.input}>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>

          <div className={style.div3}>
            <img src={Top}></img>
            <div className={style.icon}>
              {[1, 2, 3, 4, 5].map((starValue) => (
                <div key={starValue} onClick={() => handleClickStar(starValue)}>
                  {renderSelectedStar(starValue)}
                </div>
              ))}
              <button>Avaliar</button>
            </div>
            <div className={style.input}>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Class;
