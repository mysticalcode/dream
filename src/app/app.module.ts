import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DesignthinkComponent } from './designthink/designthink.component';
import { ContentGeneratorComponent } from './content-generator/content-generator.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { KanbanAllModule } from '@syncfusion/ej2-angular-kanban';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DesignthinkComponent,
    ContentGeneratorComponent,
    HomeComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    
    BoardComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    KanbanAllModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
