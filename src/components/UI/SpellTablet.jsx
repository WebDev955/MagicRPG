import { useContext } from "react"
import { PlayerContext } from "../Contexts/PlayerContext"

export default function SpellTablet(){

const playerContext = useContext(PlayerContext)
    return (
        <div>
            <h1>Spell Tablets</h1>
            <div>
                <ul>
                {playerContext.inventoryTest.spells.map((spell) =>
                    <li>
                        <h3>Spell: {spell.name}</h3>
                        <h4>Power: {spell.power}</h4>
                        <h4>Effect: {spell.effect}</h4>
                    </li>
            )} 
                </ul>
            </div>
                
        </div>
    )
}