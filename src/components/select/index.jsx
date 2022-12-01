import "./style.css";

function Select({ name, defaultValue, onChange }) {
  return (
    <select
      className="select"
      name={name}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      <option value={"entrada"}>Entrada</option>
      <option value={"saida"}>Saída</option>
    </select>
  );
}

export default Select;
