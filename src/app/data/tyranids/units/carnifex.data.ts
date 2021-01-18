import { Unit } from '../../unit.model';
import { TyranidWeapons } from '../weapons/tyranid_weapons';

  export const carnifex = new Unit({
    name: 'carnifex (enhanced senses)',
    faction: 'Tyranid',
    movement: 7,
    weaponSkill: 5,
    balisticSkill: 3, // enhanced senses
    strength: 6,
    toughness: 7,
    wounds: 8,
    attacks: 4,
    leadership: 6,
    save: 3,
    invunSave: null,
    weapons: [TyranidWeapons.devourerWithBrain, TyranidWeapons.deathspitterWithSlimerMaggots],
    availableWeapons: [TyranidWeapons.devourerWithBrain, TyranidWeapons.deathspitterWithSlimerMaggots]
  })
