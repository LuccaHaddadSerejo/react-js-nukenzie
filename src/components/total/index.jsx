import "./style.css";

function TotalMoney({ value }) {
  return (
    <div className="total-container">
      <div className="total-div">
        <h2 className="total-title">Valor total:</h2>
        <span className="total-value">R$ {value}</span>
      </div>
      <span className="total-span">O valor se refere ao saldo</span>
    </div>
  );
}

export default TotalMoney;
