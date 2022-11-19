import "./style.css";

function Label({ name, children }) {
  return (
    <label className="label" htmlFor={name}>
      {children}
    </label>
  );
}

export default Label;
