import { Unit } from '../../unit.model';
import { devourer } from '../weapons/devourer.data';

  export const termagant = new Unit({
    name: 'termagant',
    faction: 'Tyranid',
    movement: 6,
    weaponSkill: 4,
    balisticSkill: 4,
    strength: 3,
    toughness: 3,
    leadership: 5,
    save: 6,
    invunSave: null,
    weapons: [devourer],
    availableWeapons: [devourer]
  })
