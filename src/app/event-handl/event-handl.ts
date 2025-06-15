import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handl',
  imports: [],
  templateUrl: './event-handl.html',
  styleUrl: './event-handl.css',
})
export class EventHandl {
  name = '';
  displayName = '';
  email = '';

  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  showName() {
    this.displayName = this.name;
  }

  setName() {
    this.name = 'Mahi';
  }

  resetName() {
    this.displayName = '';
    this.name = '';
  }

  //-----------------------------------------------------

  showEmail(val: string) {
    this.email = val;
  }

  resetEmail() {
    this.email = '';
  }

  setEmail() {
    this.email = 'default@email.com';
  }
}
