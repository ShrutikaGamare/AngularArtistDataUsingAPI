import {Injectable} from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { IArtists } from 'src/artists/artist.model';
import 'rxjs/add/operator/map';
//import { map } from 'rxjs/operators';

@Injectable()

export class ArtistService
{
    

    private getMusicUrl="https://ngmusicdb.herokuapp.com/api/getMusic";
    
    constructor(private http:Http)
    {};

     
    getMusic():Observable<IArtists[]>
    {
        return this.http.get(this.getMusicUrl)
            .map((res:Response)=> <IArtists[]> res.json()[0].artists)
            .catch(this.handleError)
        
            
        
    }

    private handleError(error:Response)
    {
        return Observable.throw(error.json().error||" server error")
    }

}