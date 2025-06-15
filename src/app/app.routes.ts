import { Routes } from '@angular/router';
import { CounterApp } from './counter-app/counter-app';
import { Home } from './home/home';
import { EventHandl } from './event-handl/event-handl';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'counter-app',
    component: CounterApp,
  },  
  {
    path: 'event-handle',
    component: EventHandl,
  },
];
