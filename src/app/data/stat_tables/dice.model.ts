export class Dice {
    d: number
    // avgRoll: number

    constructor(init: Partial<Dice>) {
        Object.assign(this, init)
    }

    rollForNumberOrHigherOdds(targetNumberPlus: number): number {
        const numberOfSuccesses = this.getSuccessOnNumberPlus(targetNumberPlus)
        console.log({targetNumberPlus, numberOfSuccesses})
        return getRollOddsForNumberOrHigher(numberOfSuccesses, this.d)
    }

    get averageDiceRoll(): number {
        // Average = ( ( Max Die Roll + 1 ) / 2 ) * Number of Same-sided Dice
        return (( this.d + 1 ) / 2 ) * 1
    }

    getSuccessOnNumberPlus(targetNumberPlus: number): number {
        return (this.d + 1) - targetNumberPlus
    }
}

export const d6 = new Dice({
    d: 6
})

export const d3 = new Dice({
    d: 3
})

export type d6Numbers = 1|2|3|4|5|6

function getRollOddsForNumberOrHigher(numberOfSuccesses: number, numberOfPossibleOutcomes): number {
    return numberOfSuccesses / numberOfPossibleOutcomes
}

export type d3Numbers = 1|2|3

export const d3DiceRollAverage = 2
export const d6DiceRollAvg = 3.50

export enum diceName {
    'd3' = 'd3',
    'd6' = 'd6'
}

export function getToWoundOdds(userValue: number, targetsValue: number): number {
    switch (true) {
        case userValue / 2 >= targetsValue: return d6.rollForNumberOrHigherOdds(2)
        case userValue > targetsValue: return d6.rollForNumberOrHigherOdds(3)
        case userValue === targetsValue: return d6.rollForNumberOrHigherOdds(4)
        case targetsValue / 2 >= userValue: return d6.rollForNumberOrHigherOdds(6)
        case userValue < targetsValue: return d6.rollForNumberOrHigherOdds(5)
    }
}

