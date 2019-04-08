import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HoverDirective } from './hover.directive';
import { FormsModule } from '@angular/forms';
import {SearchPipe} from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SettingsComponent } from './settings/settings.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PersonalComponent } from './personal/personal.component';
import {userIdPipe} from './usersId.pipe';
import {SettingsService} from "./settings.service";
import { SettingsUserComponent } from './settings-user/settings-user.component';
import {UsersService} from "./users.service";
import { RegistrationComponent } from './registration/registration.component';
import {ConstantList} from './constants';
import { LoginComponent } from './login/login.component';



const routes = [
  {path: '', component: HomePageComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'personal/:id', component: PersonalComponent},
  {path: 'signIn', component: LoginComponent},
  {path: 'signUp', component: RegistrationComponent}
];


@NgModule({
  declarations: [
      AppComponent,
      UserComponent,
      HoverDirective,
      SearchPipe,
      userIdPipe,
      HomePageComponent,
      SettingsComponent,
      PersonalComponent,
      SettingsUserComponent,
      RegistrationComponent,
      LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    SettingsService, UsersService, ConstantList
  ]
})
export class AppModule { }
