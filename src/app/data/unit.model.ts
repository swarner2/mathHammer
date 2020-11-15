import { d6, d6Numbers, getToWoundOdds } from './stat_tables/dice.model'
import { faction, Weapon } from './weapon.model'

export class Unit {
    // tslint:disable: semicolon
    name: string
    faction: faction // TODO :: make faction
    // categories: object[] // TODO :: make categories
    movement: number
    weaponSkill: d6Numbers
    balisticSkill: d6Numbers
    strength: number
    toughness: number
    leadership: number
    save: d6Numbers
    invunSave: d6Numbers
    weapons: Weapon[]
    availableWeapons: Weapon[]
    // upgrades: object[]  TODO :: create upgrades

    constructor(unit: Partial<Unit>) {
        Object.assign(this, unit)
    }

    get hitAverage(): number {
        return d6.rollForNumberOrHigherOdds(this.balisticSkill)
    }

    getWeapon(unitWeaponName: string): Weapon {
        return this.weapons.find(weapon => weapon.name === unitWeaponName)
    }

    getWeaponAverageShots(unitWeaponName: string): number {
        const targetWeaponShots = this.getWeapon(unitWeaponName).shots
        if (typeof targetWeaponShots === 'number') {
           return targetWeaponShots
        }
        return targetWeaponShots.averageDiceRoll
    }

    getWeaponAverageHits(unitWeaponName: string): number {
        return this.getWeaponAverageShots(unitWeaponName) * d6.rollForNumberOrHigherOdds(this.balisticSkill)
    }

    getWeaponStrength(unitWeaponName: string): number {
        const targetWeapon: Weapon = this.getWeapon(unitWeaponName)
        return targetWeapon.strength === 'user' ? this.strength : targetWeapon.strength
    }

    getWeaponWoundAverage(unitWeaponName: string, targetUnitToughness: number): number {
        const weaponStrength: number = this.getWeaponStrength(unitWeaponName)
        return this.getWeaponAverageHits(unitWeaponName) * getToWoundOdds(weaponStrength, targetUnitToughness)
    }

    getWeaponArmorPiercingAverage(unitWeaponName: string, SV: number): number {
        const weapon = this.getWeapon(unitWeaponName)
        //  TODO :: Handle invun
        const AP = weapon.armorPiercing
        if (AP === 0) {
            return 1
        }
        const afterAP = SV + AP
        console.log({afterAP, SV, AP})
        return afterAP > 6 ? 1 : d6.rollForNumberOrHigherOdds(afterAP)
    }

    // TODO :: take targetUnit instead of targetUnitToughness and targetUnitArmorSave
    getWeaponDamageAverage(unitWeaponName: string, targetUnitToughness: number, targetUnitArmorSave: number): number {
        return this.getWeaponWoundAverage(unitWeaponName, targetUnitToughness)
    }
}

