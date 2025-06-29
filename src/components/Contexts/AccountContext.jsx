import { createContext, useState} from "react";

//NO SATE/HOOKS when creating context
//its just a template
export const AccountContext = createContext({
    userAccount: {
        playerName: undefined,
        password: undefined,
        email: undefined,
    },

    isCreatingAccount: false,
    isLoggingIn: false,
    isLoggedIn: false,
    createAccount: () => {},
    startCreatingAccount: () => {},
    stopCreatingAccount: () => {},
    //startLoggingIn: () => {},
    //stopLoggingIn: () => {},
    //verifyLogin: () => {},
    //logOut: () => {}
});

//Only in Provider is where you create functions and estbalish state
export function AccountContextProvider({children}){

    const [userAccount, setUserAccount] = useState({
        playerName: undefined,
        password: undefined,
        email: undefined,
    })


/**********************
 ACCOUNT CREATION
***********************/
    //State - open/closes Create Account Modal
    const [isCreatingAccount, setIsCreatingAccount] = useState(false)
    
    //Functions- open/close create modal 
    function startCreatingAccount(){
        setIsCreatingAccount(true)
    }
    function stopCreatingAccount(){
        setIsCreatingAccount(false)
    }

    //Function - create and store user account info, login user 
    function createAccount(newAccountData){
        setUserAccount(newAccountData)
        localStorage.setItem("user", JSON.stringify(newAccountData))
        setIsLoggedIn(true)
    }
    
/**********************
 LOGIN/LOGOUT 
***********************/
    
    //STATE - open/closes Login  Modal
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    
    //STATE - display current player location/Tutorial at start
    const [isLoggedIn, setIsLoggedIn] = useState(false)




/**********************
 ACCOUNT CONTEXT OBJECT
***********************/
    const accountCtx = {
        userAccount,
        isCreatingAccount,
        isLoggedIn,
        isLoggingIn,
        startCreatingAccount,
        stopCreatingAccount,
        createAccount,
    }

    return (
        <AccountContext.Provider value={accountCtx}>
            {children}
        </AccountContext.Provider>
    );
}


