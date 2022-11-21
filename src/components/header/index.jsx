import "./style.css";
import logo from "../../assets/img/Nu Kenzie.svg";

function Header({ changePage }) {
  return (
    <div className="menu-full">
      <header className="container header">
        <img src={logo} alt="" />
        <button className="nav-button" onClick={() => changePage()}>
          Início
        </button>
      </header>
    </div>
  );
}

export default Header;
