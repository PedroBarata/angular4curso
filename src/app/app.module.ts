import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Boostrap 4 */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Angular fire */
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA_O_nRn5sN6me5I5fEQzNmvn2CwK3yGLE",
  authDomain: "angular4curso-d6009.firebaseapp.com",
  databaseURL: "https://angular4curso-d6009.firebaseio.com",
  projectId: "angular4curso-d6009",
  storageBucket: "angular4curso-d6009.appspot.com",
  messagingSenderId: "159776439331"
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
