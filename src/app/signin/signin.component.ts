import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errors?:string;

  signinForm:FormGroup=new FormGroup({});
  
  constructor(private authservice:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.signinForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    })

  }
  signin(){
    let email=this.signinForm.value.email;
    let password=this.signinForm.value.password;
    this.authservice.login(email,password).subscribe({next:data=>{
      this.router.navigate(['/']);
  
  },error:err=>{
    this.errors='An error occurred';
    if (!err.error || !err.error.error || !err.error.error.message) {
      this.errors='An error occurred';
    }else{
    switch(err.error.error.message){
      case 'EMAIL_NOT_FOUND':
        this.errors='This email is not registered please Register'; break;
      case 'INVALID_PASSWORD':
        this.errors='Please enter the correct Password'; break;
      
      
  }}}})
  }

}
