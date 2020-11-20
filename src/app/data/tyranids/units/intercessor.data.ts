import { Unit } from '../../unit.model';
import { boltRifle } from '../weapons/bolt_rifle';
import { devourer } from '../weapons/devourer.data';

  export const intercessor = new Unit({
    name: 'intercessor',
    faction: 'Space Marine',
    movement: 6,
    weaponSkill: 3,
    balisticSkill: 3,
    strength: 4,
    toughness: 4,
    wounds: 2,
    attacks: 2,
    leadership: 7,
    save: 3,
    invunSave: null,
    weapons: [boltRifle],
    availableWeapons: [boltRifle]
  })
