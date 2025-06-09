//HOOKS
//COMPONENT IMPORTS
//COMPONENT IMPORTS - CONTEXTS
//STYLES
import styles from "./Dialouge.module.css"

export default function Dialouge ({children}){
    return (
        <div className = {styles.textBox}>
            <div className = {styles.dialouge}>
                <p>{children}</p>
            </div>
        </div>
    )
}