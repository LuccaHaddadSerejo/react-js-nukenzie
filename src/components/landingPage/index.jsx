import "./style.css";
import logo from "../../assets/img/Nu Kenzie White.svg";
import ilustration from "../../assets/img/Group 262.svg";

function LandingPage({ changePage }) {
  return (
    <div className="all">
      <div className="landing-full">
        <div className="description-div">
          <img src={logo} alt="Logo NuKenzie" />
          <h2 className="description-title">
            Centralize o controle das suas finanças
          </h2>
          <p className="description-p">de forma rápida e segura</p>
          <button className="description-button" onClick={() => changePage()}>
            Iniciar
          </button>
        </div>
        <div className="ilustration-div">
          <img
            className="ilustration-img"
            src={ilustration}
            alt="dashboardIlustration"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
