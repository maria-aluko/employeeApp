const Button = ({onClick, type = 'button', text, role='primary'}) => {
  return (
  <button type={type} onClick={onClick} className={role}>
    {text}
    </button>
  );
};

export default Button;