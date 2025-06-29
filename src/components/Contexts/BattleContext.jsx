import { createContext } from "react";

//Template for Player
export const BattleContext = createContext({
    
})

//Only in Provider is where you create functions and estbalish state
export function BattleContextProvider({children}){


    return (
        <BattleContext.Provider>
            {children}
        </BattleContext.Provider>
    )
}