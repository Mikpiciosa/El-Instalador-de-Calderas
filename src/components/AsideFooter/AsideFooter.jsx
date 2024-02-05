export const AsideFooter = ({alternative, none}) =>{
    return(
        <aside className={`frontpage__rrss ${alternative ? "frontpage__rrss-alternative" : ""} ${none ? "frontpage__rrss-none" : ""}`}>
        <a href="">
          <img src="./WhatsApp.svg" alt="icono para ir a whatsapp" />
        </a>
        <a href="">
          <img src="./Facebook.svg" alt="icono para ir a facebook" />
        </a>
        <a className="rrss" href="">
          <img src="./Instagram.svg" alt="icono para ir a instagram" />
        </a>
      </aside>
    )
}