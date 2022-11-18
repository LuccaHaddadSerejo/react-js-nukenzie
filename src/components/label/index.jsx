function Label({ name, children }) {
  return <label htmlFor={name}>{children}</label>;
}

export default Label;
