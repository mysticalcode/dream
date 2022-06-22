import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, tap } from 'rxjs';
import { User } from './shared/user.model';



interface Response{
  kind:string;
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn:string;
  localId:string;
  registered?:boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user=new Subject<any>();

  constructor(private http:HttpClient,private router:Router) { }

  autoLogin(){
    const userData=localStorage.getItem('userData')
    
    if (!userData){
      return;
    }
    const userd=JSON.parse(userData);
    const loadedUser=new User(userd.email,userd.id,userd._token,new Date(userd._tokenExpirationDate));
    
    if (loadedUser.token){
      this.user.next(loadedUser);
      console.log('step2')

  }}
  signup(Email:string,Password:string){

    return this.http.post<Response>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCj6Is5AzINlY8_dxNXYz1JmVD30Eav3P8",{email:Email , password:Password,returnSecureToken:true}).pipe(
      tap(res=>{
        const expirationdate=new Date(new Date().getTime()+Number(res.expiresIn)*1000);
        const user=new User(res.email,res.localId,res.idToken,expirationdate);
        this.user.next(user);
        localStorage.setItem('userData',JSON.stringify(user));

      })
    )
  }
  login(Email:string,Password:string){

   return this.http.post<Response>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCj6Is5AzINlY8_dxNXYz1JmVD30Eav3P8',{email:Email , password:Password,returnSecureToken:true}).pipe(
     tap(res=>{
        const expirationdate=new Date(new Date().getTime()+Number(res.expiresIn)*1000);
        const user=new User(res.email,res.localId,res.idToken,expirationdate);
        this.user.next(user);
        localStorage.setItem('userData',JSON.stringify(user));
     })
   )

}
logout(){
  this.user.next(null);
  this.router.navigate(['/']);
  localStorage.removeItem('userData')
}}
