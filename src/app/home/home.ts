import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}

  goToProfile(param: string) {
    // this.router.navigate(['profile',{name:'Mahi'}]) // Param Method
    this.router.navigate(['profile'], { queryParams: { name: param } }); // Query Method
  }

  //--------------------------------------------

  users = [
    {
      id: 1,
      name: 'Mahi',
      age: 28,
      email: 'mahi@example.com',
    },
    {
      id: 2,
      name: 'Sam',
      age: 30,
      email: 'Sam@example.com',
    },
    {
      id: 3,
      name: 'Peter',
      age: 22,
      email: 'Peter@example.com',
    },
    {
      id: 4,
      name: 'Anil',
      age: 38,
      email: 'Anil@example.com',
    },
    {
      id: 5,
      name: 'Rose',
      age: 25,
      email: 'Rose@example.com',
    },
  ];
}
