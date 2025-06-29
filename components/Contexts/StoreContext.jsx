import { createContext } from "react";

//Template for Player
export const StoreContext = createContext({
    
})

//Only in Provider is where you create functions and estbalish state
export function StoreContextProvider({children}){


    return (
        <StoreContext.Provider>
            {children}
        </StoreContext.Provider>
    )
}