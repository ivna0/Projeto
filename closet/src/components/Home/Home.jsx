import style from "./Home.module.css";
import Nav from "../NavBar/Nav";
import mulher from "../../img/pretaazul.png"
import Slide from "../Slides/Slide";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
  <Nav/>
      <div className={style.marketing}>
          <img src={mulher}/>
      <div className={style.texts}>
        <h1>CADA PEÇA CONTA UMA HISTÓRIA</h1>
        <h1>CADA COMPRA FAZ A DIFERENÇA</h1>
      </div>
      </div>
    <Slide/>
    <Footer/>
    </div>
  )
}

export default Home