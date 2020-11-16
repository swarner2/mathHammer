import { d6, d6Numbers, Dice, getToWoundOdds } from './stat_tables/dice.model'
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

    getWeaponByName(unitWeaponName: string): Weapon {
        return this.weapons.find(weapon => weapon.name === unitWeaponName)
    }

    getWeaponAverageShots(unitWeaponName: string): number {
        const targetWeaponShots = this.getWeaponByName(unitWeaponName).shots
        if (typeof targetWeaponShots === 'number') {
           return targetWeaponShots
        }
        return targetWeaponShots.averageDiceRoll
    }

    getWeaponAverageHits(unitWeaponName: string): number {
        return this.getWeaponAverageShots(unitWeaponName) * d6.rollForNumberOrHigherOdds(this.balisticSkill)
    }

    getWeaponStrength(unitWeaponName: string): number {
        const targetWeapon: Weapon = this.getWeaponByName(unitWeaponName)
        return targetWeapon.strength === 'user' ? this.strength : targetWeapon.strength
    }

    getWeaponWoundAfterHitsAverage(unitWeaponName: string, targetUnitToughness: number): number {
        const weaponStrength: number = this.getWeaponStrength(unitWeaponName)
        return this.getWeaponAverageHits(unitWeaponName) * getToWoundOdds(weaponStrength, targetUnitToughness)
    }

    getWeaponArmorPiercingAverage(unitWeaponName: string, SV: number, invunSave: number = 0): number {
        const weapon = this.getWeaponByName(unitWeaponName)
        let afterAP = SV + weapon.armorPiercing
        if (afterAP > invunSave) {
            afterAP = invunSave
        }
        if (afterAP === 0) {
            return 1 - d6.rollForNumberOrHigherOdds(SV)
        }
        return afterAP > 6 ? 1 : 1 - d6.rollForNumberOrHigherOdds(afterAP)
    }

    // tslint:disable-next-line: max-line-length
    getWeaponAPAfterWoundAverage(unitWeaponName: string, targetUnitToughness: number, targetUnitArmorSave: number, targetUnitInvunSave: number): number {
        return this.getWeaponWoundAfterHitsAverage(unitWeaponName, targetUnitToughness) *
        this.getWeaponArmorPiercingAverage(unitWeaponName, targetUnitArmorSave, targetUnitInvunSave)
    }

    getAmountOfDamage(unitWeaponName: string): number {
        const weaponDamage = this.getWeaponByName(unitWeaponName).damage
        return typeof weaponDamage === 'number' ? weaponDamage : weaponDamage.averageDiceRoll
    }

    // tslint:disable:max-line-length
    getAverageDamageOfWeaponVsUnit(unitWeaponName: string, targetUnitToughness: number, targetUnitArmorSave: number, targetUnitInvunSave: number): number {
        return this.getWeaponAPAfterWoundAverage(unitWeaponName, targetUnitToughness, targetUnitArmorSave, targetUnitInvunSave) * this.getAmountOfDamage(unitWeaponName)
    }
}


