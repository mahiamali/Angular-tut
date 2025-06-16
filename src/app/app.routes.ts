import { Routes } from '@angular/router';
import { CounterApp } from './counter-app/counter-app';
import { Home } from './home/home';
import { EventHandl } from './event-handl/event-handl';
import { TodoApp } from './todo-app/todo-app';
import { PageNotFound } from './page-not-found/page-not-found';

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
  {
    path: 'todo-app',
    component: TodoApp,
  },
  { path: '**', component: PageNotFound },
];
