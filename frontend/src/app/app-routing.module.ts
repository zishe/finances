import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./auth/home/home.component";
import { ProfileComponent } from "./auth/profile/profile.component";
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './account/new/new.account.component';
import { EditComponent } from './account/edit/edit.component';

import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'accounts/new',
    component: NewAccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'accounts/:id',
    component: EditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'accounts',
    component: AccountComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
