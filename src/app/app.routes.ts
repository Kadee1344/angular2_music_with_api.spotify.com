import { provideRouter } from "@angular/router";
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

export const APP_ROUTES = [
  provideRouter([
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
  ])
];

