/// <reference types="@types/w3c-generic-sensor" />

import { Observable, type Subscriber } from 'rxjs';

export function isGyroscope() {
  // @ts-ignore
  return navigator.permissions.query({name: 'gyroscope'});
}

export interface GyroscopeOrientation {
  x?: number;
  y?: number;
  z?: number;
}

export function gyroscope$(frequency = 60) {
  return new Observable(function subscribe(subscriber: Subscriber<GyroscopeOrientation>) {
    const gyroscope = new Gyroscope({frequency});
    gyroscope.addEventListener('reading', () => subscriber.next({x: gyroscope.x, y: gyroscope.y, z: gyroscope.z}));
    gyroscope.addEventListener('error', (e: SensorErrorEvent) => subscriber.error(e));
    gyroscope.start();
    return function unsubscribe() {
      gyroscope.stop();
    }
  });
}

