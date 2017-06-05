import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const BASE_URL: string = 'https://api.spotify.com/v1/';

@Injectable()

export class SearchService {
    
    
    constructor(private _http: Http){}

    public searchMusic(str: string, type: string = 'artist'){
        return this._http.get(BASE_URL + 'search', {params: {
            q: str,
            type: type
        }})
        .map(res => res.json());
    }

    public getArtist(id: string){
        return this._http.get(BASE_URL + 'artists/' + id)
        .map(artist => artist.json());
    }
    
    public getAlbums(artistId: string){
        return this._http.get(BASE_URL + 'artists/' + artistId + "/albums")
        .map(albums => albums.json());
    }
    
    public getAlbum(id: string){
        return this._http.get(BASE_URL + 'albums/' + id)
        .map(album => album.json());
    }
}