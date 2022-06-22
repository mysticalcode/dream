import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  private userSub?:Subscription;
  isAuthenticate=false;

  constructor(private route:Router,private authservice:AuthenticationService) { }

  ngOnInit(): void {
    this.userSub=this.authservice.user.subscribe(user=>{
      if(user){
        this.isAuthenticate=true;

      }
      else{
        this.isAuthenticate=false;
      }
    })
  }
  ngOnDestroy(): void {
    if(this.userSub){
      this.userSub.unsubscribe();
    }
  }
  login(){
    this.route.navigateByUrl('/signin');

  }
  signUp(){
    this.route.navigateByUrl('/signup');

  }
  logout(){
    this.authservice.logout()
    
    
  }
}
