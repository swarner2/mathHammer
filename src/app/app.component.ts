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
  termagant = termagant
  svs = [2, 3, 4, 5, 6]

  saveAfterWoundAndSvMap = this.toughness.map(t => {
      return this.svs.map(sv => {
        return termagant.getWeaponAPAfterWoundAverage('devourer', t, sv, 0)
      })
    })

  ngOnInit(): void {}
}
