import styles from './Input.module.css'

export default function Input({label, id, ...props}){
    return(
        <div className={styles.div}>
            <label htmlFor="username">{label}</label>
            <input
                id={id}
                {...props}
            />
        </div>
    )
}