import styles from './Input.module.css';

function Input(props) {
    return(
        <div className={styles.form}>
            <label className={styles.label}>{props.label}</label>
            <input type={props.type} />
        </div>
    )
    
};

export default Input;
