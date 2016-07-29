import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MuSearcherService {
  private searchUrl: string;
  private albumsUrl: string;
  private artistUrl: string;


  constructor(private _http: Http) { }

  searchMu(str: string, type = 'artist') {
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    return this._http.get(this.searchUrl)
      .map(res => res.json());
  }

  getArtist(id: string) {
    this.artistUrl = 'https://api.spotify.com/v1/artist/'+id;
    return this._http.get(this.artistUrl)
      .map(res => res.json());
  }

  getAlbums(artid: string) {
    this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artid+'/albums';
    return this._http.get(this.albumsUrl)
      .map(res => res.json());
  }
  
}

