import { Component } from '@angular/core';
import { gyroscope$ } from '@sensorim/sensor/gyroscope';
import { catchError, EMPTY, of, tap } from 'rxjs';
import { isGyroscope } from '../../../../sensorim/sensor/gyroscope/gyroscope';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  perms = isGyroscope();
  g = gyroscope$().pipe(
    tap(x => console.log(x)),
    catchError(e => {
      return of(e.toString() + ' ** ' + e.error.toString());
    })
  );

  test() {
    console.log(this.g);
  }
}
