import { d3 } from '../../stat_tables/dice.model';
import { Weapon } from '../../weapon.model';

  export const impalerCannon = new Weapon({
    name: 'impaler cannon',
    faction: 'Tyranid',
    range: 36,
    type: 'heavy',
    strength: 8,
    armorPiercing: 2,
    shots: 2,
    damage: d3,
  })
