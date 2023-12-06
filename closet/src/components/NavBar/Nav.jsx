/* eslint-disable jsx-a11y/alt-text */
import style from "./Nav.module.css"
import logo from "../../img/logo.png"
import { FaSearch } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5"
import { FaHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { useState } from "react";

function Nav() {

  const [componenteVisivel, setComponenteVisivel] = useState(false);

  const toggleSearchField = () => {
    setComponenteVisivel(!componenteVisivel);
  };


  const [opçoes, setOpçoes] = useState(false);

  const toggleOptions = () => {
    setOpçoes(!opçoes);
  };

  
  return (
    <header className={style.header}> 
    <div className={style.navBar}>
        <div className={style.logo}>
          <img src={logo}></img>
        </div>
        <div className={style.navList}>
          <ul>
          {componenteVisivel && (
            <div className={style.inputPesquisa}>
              <input type="text" placeholder="Pesquisar produto" />
            </div>
          )}

          {opçoes && (
            <div className={style.dropdown}>
              <div className={style.active}>
              <ul>
                <li>Login</li>
                <li>Cadastro</li>
                <li>Relatório</li>
              </ul>
              </div>
              
            </div>
          )}
            <li className={style.item}><a href="#" onClick={toggleSearchField}><FaSearch/></a></li>
            <li className={style.item}><a href="#" onClick={toggleOptions}><IoPersonCircleSharp /></a></li>
            <li className={style.item}><a href="#"><IoBagHandle/></a></li>
          </ul>

          
        </div>
      </div>
      </header>
  )
}

export default Nav