import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  details(){
    this.router.navigate(['/design']);

  }
  content(){
    this.router.navigate(['/content']);
  }
  det(){
    this.router.navigate(['/signin']);
  }
  signup(){
    this.router.navigate(['/signup']);
  }

}
