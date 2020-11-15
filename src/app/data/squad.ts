import { Unit } from './unit.model'
import { faction } from './weapon.model';

export class Squad {
    // tslint:disable: semicolon
    name: string
    faction: faction // TODO :: make faction
    // categories: object[] // TODO :: make categories
    minimumNumberOfUnits: number
    maximumNumberOfUnits: number
    unitTypes: Unit[]

    constructor(squad: Squad) {
        Object.assign(this, squad)
    }
}
