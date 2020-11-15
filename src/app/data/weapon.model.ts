import { Dice, diceName } from './stat_tables/dice.model'

export class Weapon {
    name: string
    faction: faction
    range: number
    type: weaponType
    shots: Dice | number
    strength: strength
    armorPiercing: number
    damage: Dice | number

    constructor(weapon: Weapon) {
        Object.assign(this, weapon)
    }
}


export type weaponType = 'assault'|'heavy'|'rapid fire'|'grenade'|'pistol'

export type strength = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|'user'

export type faction = 'Tyranid'
