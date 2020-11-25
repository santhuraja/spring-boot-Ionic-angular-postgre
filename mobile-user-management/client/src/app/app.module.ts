import { NgModule, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { File } from '@ionic-native/file/ngx';
//import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
//import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AutoCompleteModule } from 'ionic4-auto-complete';
//const keycloakService = new KeycloakService();

@NgModule({
  declarations: [AppComponent, ForbiddenComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AutoCompleteModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CalendarComponent,
    EmailComposer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // {
    //   provide: KeycloakService,
    //   useValue: keycloakService
    // },
    // AuthService
    Camera,
    File ,
  ],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {
  async ngDoBootstrap(app) {
    //const { keycloakConfig } = environment;
    const {  } = environment;

    try {
     // await keycloakService.init({ config: keycloakConfig });
      app.bootstrap(AppComponent);
    } catch (error) {
      console.error('Keycloak init failed', error);
    }
  }
}
