import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUp:FormGroup=new FormGroup({});
  errors?:string;
  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.signUp=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      name:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      


  })
  

}
signup(){
  const email=this.signUp.value.email;
  const name=this.signUp.value.name;
  const password=this.signUp.value.password;
  this.authService.signup(email,password).subscribe({next:data=>{
    this.router.navigate(['/']);
    

},error:err=>{
  this.errors='An error occurred';
  if (!err.error || !err.error.error || !err.error.error.message) {
    this.errors='An error occurred';
  }else{
  switch(err.error.error.message){
    case 'EMAIL_EXISTS':
      this.errors='This email already exists'; break;
    case 'TOO_MANY_ATTEMPTS_TRY_LATER':
      this.errors='Too many attempts, try again later'; break;
    
}}}


  })}}
