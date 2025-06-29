//IMPORTS - Hooks
import { Children, useContext, useState } from "react"

//IMPORTS - Components 
import Dialouge from "../UI/Dialouge"
import Button from "../UI/Button"

//IMPORTS - Contexts
import { PlayerContext } from "../Contexts/PlayerContext"


//IMPORTS - Images

//Imports- STYLES
import styles from "./Chapter.module.css"

export default function Chapter({props}){

    const playerCtx = useContext(PlayerContext)
    
    return(
        <>
             <div className={styles.parentDiv}>
                <audio {...props } />
                <div {...props}/>
                    <img {...props } />
                    <Dialouge>Text</Dialouge>
                    <Button>Click Here</Button>
                    <Button>Click Here As well</Button>
                </div>
        <div/>
        </> 
    )
}