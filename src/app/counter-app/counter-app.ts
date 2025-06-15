import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
  count: number = 0;

  handleIncrement() {
    this.count += 1;
  }

  handleDecrement() {
    this.count -= 1;
  }

  handleReset() {
    this.count = 0;
  }

  handelCounter(val: string) {
    if (val == 'minus') {
      this.handleDecrement();
    } else if (val == 'plus') {
      this.handleIncrement();
    } else {
      this.handleReset();
    }
  }
}
