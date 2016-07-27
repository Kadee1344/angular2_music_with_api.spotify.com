import { Component} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MuSearcherService } from '../../services/mu-searcher.service';
import { Result } from '../../shared/result';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  providers: [HTTP_PROVIDERS, ROUTER_DIRECTIVES, MuSearcherService, Result]
})
export class SearchComponent{
  searchName: string;
  searchResult: Result[];

  constructor(private _muSearcher: MuSearcherService) { }

  searchMusic() {
    this._muSearcher.searchMu(this.searchName)
      .subscribe(res => {
        this.searchResult = res.artists.items;
      });
  }

  onClick(artist: Result[]) {
    console.log(artist);
  }


}
