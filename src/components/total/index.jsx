import "./style.css";

function TotalSection({ allFilteredItems }) {
  function getTotalMoney() {
    const total = allFilteredItems
      .map((elt) => {
        return Number(elt.value);
      })
      .reduce((acc, value) => acc + value, 0);

    return total;
  }
  return (
    <div className="total-container">
      <div className="total-div">
        <h2 className="total-title">Valor total:</h2>
        <span className="total-value">R$ {getTotalMoney()}</span>
      </div>
      <span className="total-span">O valor se refere ao saldo</span>
    </div>
  );
}

export default TotalSection;
