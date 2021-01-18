import { Unit } from '../../unit.model';
import { TyranidWeapons } from '../weapons/tyranid_weapons';

  export const hiveTyrant = new Unit({
    name: 'Hive Tyrant',
    faction: 'Tyranid',
    movement: 7,  // TODO:: fix this
    weaponSkill: 2,
    balisticSkill: 3,
    strength: 6,
    toughness: 7,
    wounds: 12,
    attacks: 4,
    leadership: 10,
    save: 3,
    invunSave: 4,
    weapons: [TyranidWeapons.devourerWithBrain, TyranidWeapons.deathspitterWithSlimerMaggots, TyranidWeapons.heavyVenomCannon],
    availableWeapons: [TyranidWeapons.devourerWithBrain, TyranidWeapons.deathspitterWithSlimerMaggots, TyranidWeapons.heavyVenomCannon]
  })
