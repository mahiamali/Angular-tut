import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private router:Router){}

  goToProfile(param:string) {
    // this.router.navigate(['profile',{name:'Mahi'}]) // Param Method
    this.router.navigate(['profile'], {queryParams:{name:param}}) // Query Method
  }
}
