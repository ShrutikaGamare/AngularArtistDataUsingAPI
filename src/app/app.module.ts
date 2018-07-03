import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component'; //Main 
import { ArtistComponent } from 'src/artists/artist.component'; //Artist
import { ArtistService } from 'src/artists/artist.service';

@NgModule({
  declarations: 
  [
    AppComponent,
    ArtistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }