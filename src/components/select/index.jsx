import Option from "../options";

function Select({ name, value, onChange }) {
  return (
    <select name={name} value={value} onChange={onChange}>
      <Option value={"entrada"}>Entrada</Option>
      <Option value={"saida"}>Saída</Option>
    </select>
  );
}

export default Select;
