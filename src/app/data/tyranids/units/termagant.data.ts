import { Unit } from '../../unit.model';
import { TyranidWeapons } from '../weapons/tyranid_weapons';

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
    weapons: [TyranidWeapons.devourer],
    availableWeapons: [TyranidWeapons.devourer]
  })
