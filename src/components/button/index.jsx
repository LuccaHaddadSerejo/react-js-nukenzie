import "./style.css";

export function Button({ children, type, onClick }) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export function ButtonTwo({ children, type, onClick }) {
  return (
    <button className="button-two" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
