import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetDogsModule } from './get-dogs/get-dogs.module';
import { HttpClientModule } from '@angular/common/http';
import { EventListennerComponent } from './event-listenner/event-listenner.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListennerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GetDogsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
