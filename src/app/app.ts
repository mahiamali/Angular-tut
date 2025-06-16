import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [RouterModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'Angular Tutorial';
}
