import { d3 } from '../../stat_tables/dice.model';
import { Weapon } from '../../weapon.model';

  export const heavyVenomCannon = new Weapon({
    name: 'Heavy Venom Cannon',
    faction: 'Tyranid',
    range: 36,
    type: 'assault',
    strength: 9,
    armorPiercing: 2,
    shots: d3,
    damage: 3,
  })
// TODO :: add blast
