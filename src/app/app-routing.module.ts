import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentGeneratorComponent } from './content-generator/content-generator.component';
import { DesignthinkComponent } from './designthink/designthink.component';
import { HomeComponent } from './home/home.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'content',component:ContentGeneratorComponent},
{path:'design',component:DesignthinkComponent},
{path:'home',component:HomeComponent},
{path:'signup',component:SignupComponent},
{path:'signin',component:SigninComponent},
{path:'',redirectTo:'/home',pathMatch:'full'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
