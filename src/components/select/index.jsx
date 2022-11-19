import Option from "../options";
import "./style.css";

function Select({ name, value, onChange }) {
  return (
    <select className="select" name={name} value={value} onChange={onChange}>
      <Option value={"entrada"}>Entrada</Option>
      <Option value={"saida"}>Saída</Option>
    </select>
  );
}

export default Select;
