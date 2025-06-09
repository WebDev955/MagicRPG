//IMPORT - HOOKS
import { useContext } from "react"
//IMPORT - CONTEXT
import { PlayerContext } from "../Contexts/PlayerContext"
import { AccountContext } from "../Contexts/AccountContext"
//IMPORT - COMPONENTS
import Input from "../UI/input"
import Button from "../UI/Button"
import Modal from "../UI/Modal"

//IMPORT - Styles


export default function PlayerCreationForm(){
    const playerContext = useContext(PlayerContext)
    const accountCtx = useContext(AccountContext)

    function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData (event.target)
        const playerName = formData.get('playerName')
        const email = formData.get('email')
        const password = formData.get('password')
        

        const newAccountData = {
            playerName,
            email,
            password,
            
        }
        
        accountCtx.createAccount(newAccountData)
        accountCtx.stopCreatingAccount()
    }


    return(
     <>
     <Modal open={accountCtx.isCreatingAccount}>
      <form onSubmit={handleSubmit}>
                <div>
                    <h2>Create Account</h2>
                    <Input
                        label= "Player Name: "
                        id = "playerName"
                        name="playerName" 
                    />
                    <Input
                        label= "Email: "
                        id = "email"
                        name="email"
                    />
                    <Input
                        label= "Password: "
                        id = "password"
                        name="password"
                    />
                    <Button type="submit">Create Player!</Button>
                </div>
        </form> 
        </Modal>
     </>
    )
}