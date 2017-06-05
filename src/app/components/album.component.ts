import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from './../services/search.service';
import { Artist } from './../interfaces/artist';
import { Album } from './../interfaces/album';


@Component({
    selector: 'album',
    templateUrl: 'album.component.html',
})

export class AlbumComponent implements OnInit {
    
    id: string;
    album: Album;

    constructor(
        private _searchService: SearchService,
        private _route: ActivatedRoute) { }
    
    ngOnInit() { 
        this._route.params
        .map(params => params['id'])
        .subscribe(id => {
            this._searchService.getAlbum(id)
            .subscribe(album => this.album = album);
        });
    }
}