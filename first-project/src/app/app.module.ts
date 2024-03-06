import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetDogsModule } from './get-dogs/get-dogs.module';
import { HttpClientModule } from '@angular/common/http';
import { EventListennerComponent } from './event-listenner/event-listenner.component';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListennerComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GetDogsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
