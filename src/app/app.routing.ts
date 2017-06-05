import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { SearchComponent } from './components/search.component';
import { ArtistComponent } from './components/artist.component';
import { AlbumComponent } from './components/album.component';

export const ROUTES: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: SearchComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'artist/:id',
        component: ArtistComponent
    },
    {
        path: 'album/:id',
        component: AlbumComponent
    }
]);