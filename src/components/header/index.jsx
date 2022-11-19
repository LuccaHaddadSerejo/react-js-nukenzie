import "./style.css";

function Header() {
  return (
    <div className="menu-full">
      <header className="container header">
        <h1 className="logo">
          Nu <span className="gradient">Kenzie</span>
        </h1>
        <button className="nav-button">Início</button>
      </header>
    </div>
  );
}

export default Header;
