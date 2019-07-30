import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HoverDirective } from './hover.directive';
import { FormsModule } from '@angular/forms';
import {SearchPipe} from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SettingsComponent } from './settings/settings.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PersonalComponent } from './personal/personal.component';
import {userIdPipe} from './usersId.pipe';
import {SettingsService} from './services/settings.service';
import { SettingsUserComponent } from './settings-user/settings-user.component';
import {UsersService} from './users.service';
import { RegistrationComponent } from './registration/registration.component';
import {ConstantList} from './constants';
import { LoginComponent } from './login/login.component';
import { MatterModule } from './materialaze.module';
import { TermsComponent } from './content-components/terms/terms.component';
import { RegisterService } from './services/register.service';
import { RegistrationCompleteComponent } from './registration-complete/registration-complete.component';
import {LoginService} from './services/login.service';
import {LoginGuard} from './services/loginGuard.service';
import { NotFoundComponent } from './content-components/not-found/not-found.component';
import {LoggedState} from './services/loggedUser';
import { ProfileComponent } from './profile/profile.component';
import { LoaderService } from './services/preload.service';
import {LoaderInterceptorService} from './services/preload-interceptor.service';
import { LoaderComponent } from './content-components/loader/loader.component';
import { ApiUsersInfoComponent } from './content-components/api-users-info/api-users-info.component';
import {ToasterService} from './services/toaster.service';
import {ChartsJsModule} from './charts.module';
import { LandingLineChartComponent } from './landing-line-chart/landing-line-chart.component';




const routes = [
  {path: '',  component: HomePageComponent},
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [LoginGuard]
  },
  {path: 'personal/:id', component: PersonalComponent},
  {path: 'signIn', component: LoginComponent},
  {path: 'signUp', component: RegistrationComponent},
  {path: 'signUp/thanks', component: RegistrationCompleteComponent},
  {path: '**', component: NotFoundComponent}
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
      LoginComponent,
      TermsComponent,
      RegistrationCompleteComponent,
      NotFoundComponent,
      ProfileComponent,
      LoaderComponent,
      ApiUsersInfoComponent,
      LandingLineChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatterModule,
    ChartsJsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    SettingsService, UsersService, ConstantList, RegisterService, LoginService,
    LoginGuard, LoggedState, LoaderService,  LoaderInterceptorService, ToasterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ]
})
export class AppModule { }
