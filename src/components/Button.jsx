import styles from "./Button.module.css";
function Button({ children, onClick, type }) {
  return (
    <div>
      return{" "}
      <button onClick={onclick} className={`${styles.btn} ${styles[type]}`}>
        {children}
      </button>
    </div>
  );
}

export default Button;
