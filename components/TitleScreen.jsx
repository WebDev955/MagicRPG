//HOOKS
import { useContext } from "react"

//COMPONENT IMPORTS
import Dialouge from "./UI/Dialouge"
import Button from "./UI/Button"
import PlayerCreationForm from "./AccountCreation/PlayerCreationForm"


//COMPONENT IMPORTS - CONTEXTS
import { AccountContext } from "./Contexts/AccountContext"

//STYLES
export default function TitleScreen(){
    const accountCtx = useContext (AccountContext)

    function handleCreateAccount(){
        accountCtx.startCreatingAccount()
    }

    return(
        <>
            <div>
                <h1>Magic RPG Game</h1>
                <Button onClick={handleCreateAccount}>New Game</Button>
                <Button>Continue</Button> 
                <PlayerCreationForm/> 
            </div>
        </>
    )
}

