import { useContext } from "react"
import { PlayerContext } from "../Contexts/PlayerContext"

import styles from "./Inventory.module.css"
import Button from "./Button"

export default function Inventory(){
const playerContext = useContext(PlayerContext)


    function equipItem(item){
        playerContext.equipItem(item)
    }

      function unequipItem(item){
        playerContext.unequipItem(item)
    }


    console.log(playerContext.equipedItems)
    return(
    <>
    <h1>Inventory</h1>
        <div className={styles.parentDiv}>
           <div className={styles.armor}>
                    <ul>
                    <h1>Armor</h1>
                    {playerContext.inventoryTest.armor.map((armor) =>
                        <li key = {armor.id}>
                            <Button onClick={() => equipItem(armor)}>Equip</Button>
                            <Button onClick={() => unequipItem(armor)}>Remove</Button>
                            <h3>{armor.type}</h3> 
                            <h4>Defesne: {armor.def}</h4>
                            <h4>Ability: {armor.ability}</h4>
                        </li>
                    )} 
                    </ul>
            </div>
            <div>
                <ul>
                <h1>Weapons</h1>
                {playerContext.inventoryTest.weapons.map((weapon) =>
                    <li>
                        <h3>{weapon.type}</h3>
                        <h4>Power Boost: {weapon.powerBoost}</h4>
                        <h4>Ability: {weapon.ability}</h4>
                    </li>
                )} 
                </ul>
            </div>
            <div>
                <ul>
                <h1>Potions</h1>
                {playerContext.inventoryTest.potions.map((potion) =>
                    <li>
                        <h3>{potion.type}</h3>
                        <h4>Restore Points: {potion.restorePts}</h4>
                        <h4>Bonus Effect: {potion.bonusEffect}</h4>
                    </li>
                )} 
            </ul>
        </div>
        <div>
                <ul>
                <h1>Spells</h1>
                {playerContext.inventoryTest.spells.map((spell) =>
                    <li>
                        <h3>{spell.name}</h3>
                        <h4>MP: {spell.MP}</h4>
                        <h4>Power: {spell.power}</h4>
                        <h4>Effect: {spell.effect}</h4>
                    </li>
                )} 
            </ul>
        </div>
    </div>
    </>
    )
}