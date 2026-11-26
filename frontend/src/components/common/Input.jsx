function Input({ name, type = "text", placeholder, value, onChange, required = false }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}

export default Input;
