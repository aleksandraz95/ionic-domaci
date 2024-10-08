import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// rad sa Firebase bazom podataka
import { environment } from 'src/environments/environment';
//import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
//import { provideFirestore, getFirestore} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // inicijaliza firebase aplikacije i baze podataka
    //provideFirebaseApp(() => initializeApp(environment.firebase)), // izbacuje gresku
    //provideFirestore(() => getFirestore()), // izbacuje gresku
    AngularFireAuthModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    ],
    
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
