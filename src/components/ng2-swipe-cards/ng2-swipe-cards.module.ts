import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardComponent } from './components/card';
import { TinderCardDirective } from './directives/tinder-card';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'pan': { enable: true }
  }
}

@NgModule({
  declarations: [
    CardComponent,
    TinderCardDirective
  ],
  exports: [
    CardComponent,
    TinderCardDirective
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerConfig
  }]
})
export class SwipeCardsModule { }

export { CardComponent } from './components/card';
export { TinderCardDirective } from './directives/tinder-card';
