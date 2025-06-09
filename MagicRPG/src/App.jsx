//HOOKS
import { useContext } from 'react'

//COMPONENT IMPORTS
import TitleScreen from './components/TitleScreen'
import StatOverview from './components/UI/StatOverview'
import SpellTablet from './components/UI/SpellTablet'
import PlayerCreationForm from './components/AccountCreation/PlayerCreationForm'
import Tutorial from './components/GameProgression/Chap0Tutorial'

//COMPONENT IMPORTS - CONTEXTS
import { PlayerContextProvider } from './components/Contexts/PlayerContext'
import { AccountContext, AccountContextProvider } from './components/Contexts/AccountContext'

//STYLES
import './App.css'


function App() {

  return (
    <AccountContextProvider>
      <PlayerContextProvider> 
        <AppContent/>
      </PlayerContextProvider>
    </AccountContextProvider>
  )
}

function AppContent() {
  const accountCtx = useContext(AccountContext)

  return (
    <>
      <TitleScreen />
      {accountCtx.isLoggedIn &&
        <>
        <StatOverview/> 
        <Tutorial/>
        </>
        }
    </>
  )
}



export default App
