import {Component,OnInit} from '@angular/core';
import { IArtists } from 'src/artists/artist.model';
import { ArtistService } from 'src/artists/artist.service';

@Component({
selector:"<artists></artists>",
templateUrl:`./artist.component.html`
})


export class ArtistComponent implements OnInit
{
    artists:IArtists[];
    


    constructor(private artistService:ArtistService)
    {}

    ngOnInit():void
    {
        this.artistService.getMusic()
        .subscribe(data =>{ this.artists = data; console.log('data',this.artists[0].albums[0].price)});
    }
    
}