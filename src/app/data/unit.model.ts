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
    wounds: number
    attacks: number | Dice
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

    getWeaponAverageShots(unitWeapon: Weapon): number {
        // TODO :: Handle rapid fire and blast
        const targetWeaponShots = unitWeapon.shots === 'user' ? this.attacks : unitWeapon.shots
        if (typeof targetWeaponShots === 'number') {
           return targetWeaponShots
        }

        return targetWeaponShots.averageDiceRoll
    }

    getWeaponAverageHits(unitWeapon: Weapon): number {
        return this.getWeaponAverageShots(unitWeapon) * d6.rollForNumberOrHigherOdds(this.balisticSkill)
    }

    getWeaponStrength(unitWeapon: Weapon): number {
        return unitWeapon.strength === 'user' ? this.strength : unitWeapon.strength
    }

    getWeaponWoundAfterHitsAverage(unitWeapon: Weapon, targetUnitToughness: number): number {
        const weaponStrength: number = this.getWeaponStrength(unitWeapon)
        return this.getWeaponAverageHits(unitWeapon) * getToWoundOdds(weaponStrength, targetUnitToughness)
    }

    getWeaponArmorPiercingAverage(unitWeapon: Weapon, SV: number, invunSave: number = 0): number {
        let afterAP = SV + unitWeapon.armorPiercing
        if (afterAP > invunSave) {
            afterAP = invunSave
        }
        if (afterAP === 0) {
            return 1 - d6.rollForNumberOrHigherOdds(SV)
        }
        return afterAP > 6 ? 1 : 1 - d6.rollForNumberOrHigherOdds(afterAP)
    }

    // tslint:disable-next-line: max-line-length
    getWeaponAPAfterWoundAverage(unitWeapon: Weapon, targetUnitToughness: number, targetUnitArmorSave: number, targetUnitInvunSave: number): number {
        return this.getWeaponWoundAfterHitsAverage(unitWeapon, targetUnitToughness) *
        this.getWeaponArmorPiercingAverage(unitWeapon, targetUnitArmorSave, targetUnitInvunSave)
    }

    getAmountOfDamage(unitWeapon: Weapon): number {
        const weaponDamage = unitWeapon.damage
        return typeof weaponDamage === 'number' ? weaponDamage : weaponDamage.averageDiceRoll
    }

    // tslint:disable:max-line-length
    getAverageDamageOfWeaponVsUnit(unitWeapon: Weapon, targetUnitToughness: number, targetUnitArmorSave: number, targetUnitInvunSave: number): number {
        return this.getWeaponAPAfterWoundAverage(unitWeapon, targetUnitToughness, targetUnitArmorSave, targetUnitInvunSave) * this.getAmountOfDamage(unitWeapon)
    }
}


