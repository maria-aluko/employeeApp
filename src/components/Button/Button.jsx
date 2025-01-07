const Button = ({onClick, type = 'button', text, className}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  );
};

export default Button;