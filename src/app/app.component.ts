import { Component, OnInit } from '@angular/core';
import { termagant } from './data/tyranids/units/termagant.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mathHammer ' + termagant.name + ' avg bs hit = ' + termagant.hitAverage;
  toughness = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  ngOnInit(): void {
    const woundMap = this.toughness.map(t => {
      return termagant.getWeaponWoundAverage('devourer', t)
    })

    console.log({woundMap})

    const svs = [1, 2, 3, 4, 5, 6]
    const saveMap = svs.map(sv => termagant.getWeaponArmorPiercingAverage('devourer', sv))
    console.log({saveMap})
  }
}
