import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicianFormComponent } from './musician-form/musician-form.component';
import { ProfileComponent } from './profile/profile.component';
import { MusicianListComponent } from './musician-list/musician-list.component';
import { GigRequestComponent } from './gig-request/gig-request.component';
import { GigListComponent } from './gig-list/gig-list.component';

const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "", component: HomeComponent },
    { path: "addMusician", component: MusicianFormComponent},
    { path: "profile", component: ProfileComponent },
    { path: "profile/:id", component: ProfileComponent },
    { path: "musicians/request/:id", component: GigRequestComponent },
    { path: "musicians/:name", component: MusicianListComponent },
    { path: "musicians", component: MusicianListComponent },
    { path: "gigs", component: GigListComponent },
    { path: "gig/:gigId", component: GigRequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
