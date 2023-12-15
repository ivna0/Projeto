/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import style from "./Class.module.css";
import Top from "../../img/top.jpeg";
import { IoMdStar } from "react-icons/io"; //estrela preenchida
import { IoIosStarOutline } from "react-icons/io"; //estrela 
import react, { useState } from "react";
import { IoClose } from "react-icons/io5"; //X
import { IoTrashBin } from "react-icons/io5"; //lixeira
import { HiOutlinePencilAlt } from "react-icons/hi"; //editar
import { RiSendPlaneFill } from "react-icons/ri"; //enviar
import { TextArea } from "../TextArea/TextArea";

function NovoComentario(){

  const [selectedStar, setSelectedStar] = useState(0);

  const handleClickStar = (starValue) => {
    // Se a estrela clicada for a mesma que já está selecionada, desselecione-a
    if (selectedStar === starValue) {
      setSelectedStar(0);
    } else {
      setSelectedStar(starValue);
    }
   };

    const renderSelectedStar = (starValue) => {
      return selectedStar >= starValue ? <IoMdStar /> : <IoIosStarOutline />;
    };

    //Novo Comentario

    const [commentText, setCommentText] = useState('')
    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = () => {
     setIsEditing(true)  
    };
  
    const habdleDelete = () => {
      console.log('Excluir comentario');
    };

    const handleSend = () => {
      if (isEditing) {
        console.log('Editar comentario:', commentText);
      }
      else {
        console.log('Enviar novo comentario:', commentText);
      }

      setCommentText('');
      setIsEditing(false);
    }


  return (
    <>
      <div className={style.Container}>
        <h1>Comentários</h1>
        <div className={style.Comentar}>

          <div className={style.div1}>
            <img src={Top}></img>
            <div className={style.icon}>
               <h4>{<IoMdStar/>}</h4>
               <h4>{<IoMdStar/>}</h4>
               <h4>{<IoMdStar/>}</h4>
               <h4>{<IoMdStar/>}</h4>
               <h4>{<IoMdStar/>}</h4>
            </div>

            <TextArea value="Anonimo: Adorei " className={style.input} />
          </div>

          <div className={style.div1}>
            <img src={Top}></img>
            <div className={style.icon}>
               <h4>{<IoMdStar/>}</h4>
               <h4>{<IoMdStar/>}</h4>
               <h4>{<IoMdStar/>}</h4>
               <h4>{<IoMdStar/>}</h4>
               <h4>{<IoMdStar/>}</h4>
            </div>
            <TextArea value="Anonimo: Adorei" className={style.input} />

          </div>

          <div className={style.div1}>
            <img src={Top}></img>
            <div className={style.icon}>
               <h4>{<IoMdStar/>}</h4>
               <h4>{<IoMdStar/>}</h4>
               <h4>{<IoMdStar/>}</h4>
               <h4>{<IoMdStar/>}</h4>
               <h4>{<IoMdStar/>}</h4>
            </div>
            <TextArea value="Anonimo: Adorei" className={style.input} />
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
                <icon onClick={handleEdit} className={style.Editar}><HiOutlinePencilAlt/></icon>
                <icon onClick={habdleDelete} className={style.Lixeira}><IoTrashBin/></icon>
                <icon onClick={handleSend} className={style.Enviar}><RiSendPlaneFill/></icon>
              </div>
              <div className={style.input}>
                <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10"> 
                onChange={(e) => setCommentText(e.target.value)}
                </textarea>
              </div>
              <div className={style.Avaliar}>
          <button>Avaliar Produto</button>
            </div>
        </div>
      </div>
    </>
  );
}


export default NovoComentario;