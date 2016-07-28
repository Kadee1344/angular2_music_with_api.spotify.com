import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MuSearcherService {
  private searchUrl: string;
  private albumUrl: string;

  constructor(private _http: Http) { }

  searchMu(str: string, type = 'artist') {
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    return this._http.get(this.searchUrl)
      .map(res => res.json());
  }

  getAlbums(artid: string) {
    this.albumUrl = 'https://api.spotify.com/v1/albums/'+artid;
    return this._http.get(this.albumUrl)
      .map(res => res.json());
  }
}

