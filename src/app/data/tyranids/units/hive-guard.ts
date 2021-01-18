import { Unit } from '../../unit.model';
import { TyranidWeapons } from '../weapons/tyranid_weapons';

  export const hiveGuard = new Unit({
    name: 'Hive Guard',
    faction: 'Tyranid',
    movement: 5,  // TODO:: fix this
    weaponSkill: 4,
    balisticSkill: 3,
    strength: 4,
    toughness: 5,
    wounds: 3,
    attacks: 2,
    leadership: 7,
    save: 4,
    invunSave: null,
    weapons: [TyranidWeapons.impalerCannon],
    availableWeapons: [TyranidWeapons.impalerCannon]
  })
