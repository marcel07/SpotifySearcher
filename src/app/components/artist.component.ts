import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from './../services/search.service';
import { Artist } from './../interfaces/artist';
import { Album } from './../interfaces/album';


@Component({
    selector: 'artist',
    templateUrl: 'artist.component.html',
})

export class ArtistComponent implements OnInit {
    
    id: string;
    artist: Artist[];
    albums: Album[];
    albumPulled: Album;

    constructor(
        private _searchService: SearchService,
        private _route: ActivatedRoute) { }
    
    ngOnInit() { 
        this._route.params
        .map(params => params['id'])
        .subscribe(id => {
            this._searchService.getArtist(id)
            .subscribe(artists => this.artist = artists);
          
            
            this._searchService.getAlbums(id)
            .subscribe(albums => { 
                this.albums = albums.items;
            });
            
            // this._searchService.getAlbum(id)
            // .subscribe(album => { 
            //     this.albumPulled = album;
            //     // console.log(this.albumPulled)
            // });
        });
    }
}