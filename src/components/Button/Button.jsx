import styles from './Button.module.css';

const Button = ({onClick, type = 'button', text, role='primary'}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${styles[role]}`}
    >
      {text}
    </button>
  );
};

export default Button;