import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Angular2TokenService } from 'angular2-token';

import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './auth/home/home.component';
import { ToolbarComponent } from './auth/toolbar/toolbar.component';
import { AuthDialogComponent } from './auth/auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';

import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth.guard";
import { ProfileComponent } from './auth/profile/profile.component';
import { NewAccountComponent } from './account/new/new.account.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent,
    NewAccountComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [Angular2TokenService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
