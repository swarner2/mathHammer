import { Component, OnInit } from '@angular/core';
import { spaceMarineUnits } from './data/tyranids/units/space-marine-units';
import { tyranidUnits } from './data/tyranids/units/tyranid-units';
import { Unit } from './data/unit.model';
import { Weapon } from './data/weapon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mathHammer '
  toughness = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  svs = [2, 3, 4, 5, 6]
  units = Object.values(tyranidUnits).concat(Object.values(spaceMarineUnits))
  selectedUnit: Unit = this.units[0]
  selectedWeapon: Weapon = this.selectedUnit.weapons[0]

  ngOnInit(): void {
    console.log(this.selectedUnit, this.selectedWeapon)
  }

  handleUnitChange(name: string): void {
    // Update to get unit instead of name
    this.selectedWeapon = null
    this.selectedUnit = this.units.find(unit => unit.name === name)
    this.selectedWeapon = this.selectedUnit.weapons[0]
  }

  handleWeaponChange(name: string): void {
    this.selectedWeapon = this.selectedUnit.weapons.find(weapon => weapon.name === name)
    console.log('selectedWeapon', this.selectedWeapon)
  }
}
