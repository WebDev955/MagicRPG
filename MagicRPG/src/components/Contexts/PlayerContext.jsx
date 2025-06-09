//IMPORTS - HOOK
import { createContext, useState, useContext, useEffect, useCallback } from "react";
//IMPORTS - CONEXT
import { AccountContext } from "./AccountContext";

//Template for Player
export const PlayerContext = createContext({
    player: {
        playerName: undefined,
    },

    equipedItems: [],

    inventory: {
        gold: 0,
        spells: [{}],
        armor: [{}],
        weapons: [{}],
        potion: [{}]
    },

    inventoryTest: {
        gold: 0,
        spells: [{}],
        armor: [{}],
        weapons: [{}],
        potion: [{}]
    },

    stats: {
        hpts: 25,
        mpts: 30,
        defen: 0,
        buffs: undefined,
        debuffs: undefined
    },

    equipItem: () => {},
    unequipItem: () => {},

})

    

//Only in Provider is where you create functions and estbalish state
export function PlayerContextProvider({children}){
    
    const playerName = useContext(AccountContext)

    const player = {
        playerName: playerName.userAccount.playerName
    };

    const [stats, setStats] = useState({
        hpts: 25,
        mpts: 30,
        defen: 0,
        buffs: undefined,
        debuffs: undefined
    })

/*****************************************
    EQUIP - UNEQUIP ITEMS                         
***************************************/ 
    const [equipedItems, setEquipedItems] = useState([])

    function equipItem (item){
        setEquipedItems(prevItems => {
            const alreadyEquipped = prevItems.some(i => i.id === item.id)
            if (alreadyEquipped) return prevItems;
            return [...prevItems, item]
        });
    }

    const unequipItem = useCallback((item) => {
        setEquipedItems(prevItems =>
            prevItems.filter(i => i.id !== item.id)
        );
        }, []);


    useEffect(() => {
        setStats(prevStats => ({
            ...prevStats,
            defen: equipedItems.reduce((total, item) => total + item.def, 0)
        }));
    }, [equipedItems]);

/**************************************
    END EQUP-UNEQUIP ITMES
**************************************/

    const inventory = {
        gold: 0,
        spells: [{}],
        armor: [{}],
        weapons: [{}],
        potion: [{}]
    };


    const inventoryTest = {
        gold: 500,
        spells : [
            {name: "Basic Cast", MP: 0, power: 10, effect: "None" }, 
            {name: "Waterspell", MP: 3,power: 10, effect: "flood"}, 
            {name: "Firespell", MP: 5, power: 15, effect: "burn"}
        ],
        armor : [
            {type: "Glasses", def: 2, ability: "None", id:"face1"},
            {type: "School hat", def: 5, ability: "None", id:"head1"}, 
            {type: "School robe", def: 5, ability: "None", id:"body1"}, 
            {type: "School boots", def: 5, ability: "None", id:"feet1"}
        ],
        weapons : [
            {type: "Starter Wand", powerBoost: "0.2x", ability: "None" },
        ],
        potions : [
            {type: "Basic Health Potion", restorePts: "10 HP", bonusEffect: "None"},
            {type: "Basic Magic Potion", restorePts: "10 MP", bonusEffect: "None"}
        ]
    };

    const playerCtx = {
        player,
        stats,
        inventory,
        inventoryTest,
        equipedItems,
        equipItem,
        unequipItem
     
    }

    return (
        <PlayerContext.Provider value={playerCtx}>
            {children}
        </PlayerContext.Provider>
    )
}