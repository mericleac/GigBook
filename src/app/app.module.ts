import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MusicianFormComponent } from './musician-form/musician-form.component';
import { MusicianListComponent } from './musician-list/musician-list.component';
import { ProfileComponent } from './profile/profile.component';
import { GigRequestComponent } from './gig-request/gig-request.component';
import { GigListComponent } from './gig-list/gig-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MusicianFormComponent,
    MusicianListComponent,
    ProfileComponent,
    GigRequestComponent,
    GigListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
