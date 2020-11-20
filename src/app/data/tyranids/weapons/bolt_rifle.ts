import { Weapon } from '../../weapon.model';

  export const boltRifle = new Weapon({
    name: 'bolt rifle',
    faction: 'Space Marine',
    range: 30,
    type: 'rapid fire',
    strength: 4,
    armorPiercing: 1,
    shots: 1,
    damage: 1,
  })
