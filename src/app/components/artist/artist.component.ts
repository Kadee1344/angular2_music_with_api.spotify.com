import { Component} from '@angular/core';
import { MuSearcherService } from '../../services/mu-searcher.service';
import { Result } from '../../shared/result';
import { Album } from '../../shared/result-album';
import { OnActivate, RouteSegment } from '@angular/router-deprecated';


@Component({
  moduleId: module.id,
  selector: 'app-artist',
  templateUrl: 'artist.component.html',
  styleUrls: ['artist.component.css']
})
export class ArtistComponent{
  id: string;
  artist: Result[];
  albums: Album[];

  constructor(private _muSearcher: MuSearcherService) { }

  routerOnActivate(curr: RouteSegment):void{
    this.id = curr.getParam('id');
    this._muSearcher.getArtist(this.id).subscribe(artist => {
      console.log(artist);
    });
  }
}
