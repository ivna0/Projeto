import style from "./Nav.module.css"
import logo from "../../img/logo.png"

function Nav() {
  return (
    <header className={style.header}> 
    <div className={style.navBar}>
        <div className={style.logo}>
          <img src={logo}></img>
        </div>
        <div className={style.navList}>
          <ul>
            <li className={style.item}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                <path d="M40.7828 37.6208L29.8774 26.7136C31.6348 24.2984 32.5802 21.3878 32.5774 18.4009C32.5774 10.583 26.2167 4.22235 18.3989 4.22235C10.581 4.22235 4.22034 10.583 4.22034 18.4009C4.22034 26.2187 10.581 32.5794 18.3989 32.5794C21.3857 32.5823 24.2964 31.6369 26.7116 29.8794L37.6188 40.7849L40.7828 37.6208ZM18.3989 28.1014C16.48 28.1015 14.6042 27.5327 13.0087 26.4668C11.4132 25.4008 10.1696 23.8857 9.43525 22.1129C8.70087 20.3402 8.50867 18.3895 8.88297 16.5076C9.25727 14.6256 10.1813 12.8969 11.5381 11.5401C12.8949 10.1833 14.6236 9.25929 16.5055 8.88499C18.3875 8.51069 20.3382 8.70288 22.1109 9.43726C23.8837 10.1716 25.3988 11.4152 26.4647 13.0107C27.5307 14.6063 28.0995 16.482 28.0993 18.4009C28.0963 20.9727 27.0733 23.4383 25.2548 25.2568C23.4363 27.0754 20.9707 28.0983 18.3989 28.1014Z" fill="white"/>
                </svg></a></li>
            <li className={style.item}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                <path d="M22.5007 4.21674C12.4205 4.21674 4.21942 12.4178 4.21942 22.498C4.21942 32.5782 12.4205 40.7792 22.5007 40.7792C32.5809 40.7792 40.7819 32.5782 40.7819 22.498C40.7819 12.4178 32.5809 4.21674 22.5007 4.21674ZM22.6765 12.6542C23.928 12.6542 25.1515 13.0254 26.1922 13.7207C27.2328 14.4161 28.0439 15.4044 28.5229 16.5607C29.0018 17.717 29.1272 18.9894 28.883 20.2169C28.6388 21.4445 28.0361 22.572 27.1511 23.457C26.2661 24.342 25.1385 24.9447 23.911 25.1889C22.6835 25.4331 21.4111 25.3077 20.2548 24.8288C19.0985 24.3498 18.1102 23.5387 17.4148 22.4981C16.7195 21.4574 16.3483 20.2339 16.3483 18.9824C16.3483 17.304 17.015 15.6945 18.2018 14.5077C19.3885 13.3209 20.9981 12.6542 22.6765 12.6542ZM22.5007 37.9667C20.3671 37.9676 18.2565 37.526 16.3023 36.6698C14.3481 35.8135 12.5926 34.5613 11.147 32.9921C11.9239 28.9685 18.9024 28.123 22.5007 28.123C26.0989 28.123 33.0774 28.9685 33.8544 32.9913C32.4089 34.5607 30.6535 35.8132 28.6993 36.6696C26.745 37.526 24.6343 37.9677 22.5007 37.9667Z" fill="white"/>
                </svg></a></li>
            <li className={style.item}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                <path d="M22.5007 39.376C21.9362 39.3753 21.385 39.2047 20.9187 38.8865C14.0114 34.1975 11.0205 30.9825 9.37075 28.9724C5.85513 24.6878 4.17202 20.2888 4.21948 15.5252C4.27485 10.0663 8.65444 5.62604 13.9824 5.62604C17.8566 5.62604 20.5399 7.80836 22.1026 9.62594C22.1521 9.68294 22.2133 9.72864 22.2819 9.75996C22.3506 9.79128 22.4252 9.80749 22.5007 9.80749C22.5762 9.80749 22.6508 9.79128 22.7195 9.75996C22.7882 9.72864 22.8494 9.68294 22.8989 9.62594C24.4616 7.8066 27.1449 5.62604 31.0191 5.62604C36.347 5.62604 40.7266 10.0663 40.782 15.526C40.8294 20.2906 39.1446 24.6895 35.6307 28.9733C33.981 30.9834 30.9901 34.1984 24.0828 38.8874C23.6164 39.2053 23.0652 39.3756 22.5007 39.376Z" fill="white"/>
                </svg></a></li>
            <li className={style.item}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                <path d="M39.9593 14.8873C39.6986 14.6248 39.3884 14.4166 39.0467 14.2748C38.705 14.1329 38.3385 14.0603 37.9686 14.0612H32.3436V12.6549C32.3436 10.0442 31.3065 7.54039 29.4604 5.69432C27.6143 3.84826 25.1105 2.81116 22.4998 2.81116C19.8891 2.81116 17.3853 3.84826 15.5392 5.69432C13.6932 7.54039 12.6561 10.0442 12.6561 12.6549V14.0612H7.03107C6.28515 14.0612 5.56977 14.3575 5.04233 14.8849C4.51488 15.4124 4.21857 16.1277 4.21857 16.8737V35.858C4.21857 39.2858 7.11896 42.1862 10.5467 42.1862H34.4529C36.111 42.1867 37.7034 41.5384 38.8897 40.38C39.4866 39.8105 39.962 39.1259 40.2871 38.3676C40.6122 37.6093 40.7802 36.793 40.7811 35.9679V16.8737C40.7822 16.5047 40.7102 16.1391 40.5691 15.7982C40.4281 15.4572 40.2208 15.1476 39.9593 14.8873ZM15.4686 12.6549C15.4686 10.7901 16.2094 9.00168 17.528 7.68306C18.8466 6.36445 20.635 5.62366 22.4998 5.62366C24.3646 5.62366 26.153 6.36445 27.4717 7.68306C28.7903 9.00168 29.5311 10.7901 29.5311 12.6549V14.0612H15.4686V12.6549ZM32.3436 21.0924C32.3436 23.7031 31.3065 26.2069 29.4604 28.053C27.6143 29.8991 25.1105 30.9362 22.4998 30.9362C19.8891 30.9362 17.3853 29.8991 15.5392 28.053C13.6932 26.2069 12.6561 23.7031 12.6561 21.0924V19.6862C12.6561 19.3132 12.8042 18.9555 13.0679 18.6918C13.3317 18.4281 13.6894 18.2799 14.0623 18.2799C14.4353 18.2799 14.793 18.4281 15.0567 18.6918C15.3204 18.9555 15.4686 19.3132 15.4686 19.6862V21.0924C15.4686 22.9572 16.2094 24.7456 17.528 26.0643C18.8466 27.3829 20.635 28.1237 22.4998 28.1237C24.3646 28.1237 26.153 27.3829 27.4717 26.0643C28.7903 24.7456 29.5311 22.9572 29.5311 21.0924V19.6862C29.5311 19.3132 29.6792 18.9555 29.9429 18.6918C30.2067 18.4281 30.5644 18.2799 30.9373 18.2799C31.3103 18.2799 31.668 18.4281 31.9317 18.6918C32.1954 18.9555 32.3436 19.3132 32.3436 19.6862V21.0924Z" fill="white"/>
                </svg></a></li>
          </ul>
          
        </div>
      </div>
      </header>
  )
}

export default Nav