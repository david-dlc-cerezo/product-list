import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {TechsModule} from './techs';
import {AppFormsModule} from './forms';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {FooterComponent} from './footer';
import { AlertService, AuthenticationService, UserService } from './services/index';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    TechsModule,
    AppFormsModule
  ],
  providers: [  
      AlertService,
      AuthenticationService,
      UserService
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
