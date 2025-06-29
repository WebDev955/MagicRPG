//IMPORTS - Hooks
import { useContext,useState } from "react"

//IMPORTS - Components 
import Dialouge from "../UI/Dialouge"
import Button from "../UI/Button"
import Chapter from "./Chapter"

//IMPORTS - Contexts
import { PlayerContext } from "../Contexts/PlayerContext"

//IMPORTS - Styles
import styles from "./Chap0Tutorial.module.css"



//IMPORTS - Images
import WizardEditNoBG from '../../assets/WizardEditNoBG.png' 
import Forest from '../../assets/Forest.jpg' 
import backgroundMusic from '../../assets/MagicBGM.mp3'


export default function Tutorial(){

    const [openForest, setOpenForest] = useState(false)

    function goToForest(){
        setOpenForest(true)
    }

        function leaveForest(){
        setOpenForest(false)
    }


    const playerCtx = useContext(PlayerContext)
    
    return(
        <>
            <div className ={styles.parentDiv}>
                {/*<audio src={backgroundMusic} autoPlay loop />*/}
                <div className={styles.wallDiv}/>
                    <img className ={styles.imgWizard}src={WizardEditNoBG} />
                    <Dialouge>"Hello, {playerCtx.player.playerName}Lorem ipsum dolor sit    amet, consectetur adipiscing elit. Maecenas aliquet tempus ullamcorper. Fusce fringilla urna ut lacus laoreet, sit amet molestie velit lobortis. Quisque ut dignissim justo, sed dapibus leo. Integer malesuada velit viverra massa cursus, ac cursus metus pulvinar. Quisque nec mi eu sapien porta bibendum eget sit amet ipsum. Etiam eget odio ante. Fusce libero neque, fermentum at mi eget, tristique faucibus urna. Cras non fringilla urna. Nam a fermentum arcu. Quisque ut dignissim justo, sed dapibus leo. Integer malesuada velit viverra massa cursus, ac cursus metus pulvinar.
                    </Dialouge>
                    <Button onClick={goToForest}>Go To Forest</Button>
                    <Button onClick={leaveForest}>Close Forest</Button>
                </div>
                {openForest 
                    ? <img className ={styles.imgForest}src={Forest}/>
                    : null
                }
        <div/>
        </> 
    )
}