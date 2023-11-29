/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import style from "./Detalhes.module.css";
import react, { useState } from "react";
import camisas from "../../img/camisas.png";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import { IoMdStar, CiHeart, IoMdHeart } from "react-icons/io";


function Detalhes() {
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
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <p>5.0</p>
              </div>
              <div className={style.carrinho}>
                <button>Adicionar ao Carrinho</button>
                <div className={style.coracao}>
                  <CiHeart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detalhes;
