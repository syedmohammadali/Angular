import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}from '@angular/forms'


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HighlightDirective } from './highlight.directive';
import { ShortenPipe } from './shorten.pipe';
import { DataServiceService } from './data-service.service';
import { HttpModule } from '@angular/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HighlightDirective,
    ShortenPipe
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
