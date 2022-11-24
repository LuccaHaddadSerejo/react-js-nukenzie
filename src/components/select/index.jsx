import "./style.css";

function Select({ name, value, onChange }) {
  return (
    <select className="select" name={name} value={value} onChange={onChange}>
      <option value={"entrada"}>Entrada</option>
      <option value={"saida"}>Saída</option>
    </select>
  );
}

export default Select;
