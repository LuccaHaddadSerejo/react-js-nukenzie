function TotalMoney({ value }) {
  return (
    <div>
      <div>
        <h2>Valor total:</h2>
        <span>R$ {value}</span>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
}

export default TotalMoney;
