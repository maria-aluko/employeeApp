const Button = ({onClick, type = 'button', text}) => {
  return (
  <button type={type} onClick={onClick}>
    {text}
  </button>
  );
};

export default Button;