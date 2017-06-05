import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SearchService } from './../services/search.service';
import { Artist } from './../interfaces/artist';

@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
})

export class SearchComponent implements OnInit {

    searchStr: string = '';
    searchResult: Artist[] = [];

    constructor(private _searchService: SearchService) { }

    ngOnInit() {
        
    }

    searchMusic(){
        if(this.searchStr){
            this._searchService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchResult = res['artists']['items'];
            });
        } else {
            this.searchResult = [];
        }

    }
    
}