import { Component} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { MuSearcherService } from '../../services/mu-searcher.service';
import { Result } from '../../shared/result';
import { Album } from '../../shared/result-album';


@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  providers: [HTTP_PROVIDERS, MuSearcherService],

})



export class SearchComponent{
  searchName: string;
  searchResult: Result[];
  artist: Result;
  albums: any[];

  constructor(private _muSearcher: MuSearcherService) { }

  searchMusic() {
    this._muSearcher.searchMu(this.searchName)
      .subscribe(res => {
        this.searchResult = res.artists.items;
      });
  }

  searchAlbums(id) {
    this._muSearcher.getAlbums(id)
      .subscribe(res => {
        this.albums = res.items;
      });
    console.log(this.albums);

  }

  onClick(artist: Result) {
    this.artist = artist;
    this.searchAlbums(this.artist.id);
  }


}

