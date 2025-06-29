//HOOKS
import { useContext, useState } from "react"
//COMPONENT IMPORTS
import Inventory from "../UI/Inventory"
import Button from "./Button"
import Modal from "./Modal"
//COMPONENT IMPORTS - CONTEXTS
import { PlayerContext } from "../Contexts/PlayerContext"

//STYLES
import styles from "./PlayerStats.module.css"

export default function PlayerStats(){
    const [openBag, setOpenBag] = useState(false)
    
    function handleOpenBag(){
        setOpenBag(true)
    }

     function handleCloseBag(){
        setOpenBag(false)
    }

    const playerContext = useContext(PlayerContext)

    return(
        <div className={styles.parentDiv}>
            <h2>{playerContext.player.playerName}</h2>
            <div className={styles.statsDiv}>
                <h3 className={styles.health}>Hp: {playerContext.stats.hpts}</h3>
                <h3 className={styles.health}>Df: {playerContext.stats.defen}</h3>
                <h3 className={styles.magic}>Magic: {playerContext.stats.mpts}</h3>
                <h3 className={styles.gold}>Gold: {playerContext.inventory.gold}</h3>
                {openBag 
                    ? <Button onClick={handleCloseBag}>Close Bag</Button>
                    : <Button onClick={handleOpenBag}>Bag</Button>
                }
            </div>
            {openBag ? <Modal open={openBag}><Inventory/></Modal> : null}
        </div>
    )
}