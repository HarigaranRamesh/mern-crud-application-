function Button({ children, variant = "primary", type = "button", onClick, className = "" }) {
  const variantClass = {
    primary: "",
    secondary: "btn-cancel",
    info: "btn-edit",
    danger: "btn-delete"
  }[variant] || "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantClass} ${className}`.trim()}
    >
      {children}
    </button>
  );
}

export default Button;
