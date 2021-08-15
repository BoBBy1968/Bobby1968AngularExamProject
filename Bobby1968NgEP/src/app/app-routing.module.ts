import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './clients/all/all.component';
import { EditComponent } from './clients/edit/edit.component';
import { NewComponent } from './clients/new/new.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { LoginComponent } from './users/login/login.component';
import { ProfileComponent } from './users/profile/profile.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'clients',
    component: AllComponent
  },
  {
    path: 'clients/:objectId',
    component: EditComponent
  },
  {
    path: 'new-client',
    component: NewComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
