import { Dice } from './stat_tables/dice.model'

export class Weapon {
    name: string
    faction: faction
    range: number
    type: weaponType
    shots: Dice | number
    strength: number | 'user'
    armorPiercing: number
    damage: Dice | number

    constructor(weapon: Weapon) {
        Object.assign(this, weapon)
    }
}

export type weaponType = 'assault'|'heavy'|'rapid fire'|'grenade'|'pistol'

export type faction = 'Tyranid' | 'Space Marine'
