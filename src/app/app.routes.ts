import { Routes } from '@angular/router';
import { CounterApp } from './counter-app/counter-app';
import { Home } from './home/home';
import { EventHandl } from './event-handl/event-handl';
import { TodoApp } from './todo-app/todo-app';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';
import { User } from './user/user';

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
  {
    path: 'profile',
    component: Profile, 
    data: {def_name:'Default User'}
  },
  {
    path: 'user/:id/:name',
    component: User
  },
  { path: '**', component: PageNotFound },
];
