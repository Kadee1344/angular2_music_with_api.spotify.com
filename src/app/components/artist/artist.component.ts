import { Component} from '@angular/core';
import { MuSearcherService } from '../../services/mu-searcher.service';
import { Result } from '../../shared/result';
import { Album } from '../../shared/result-album';
import { OnActivate, ComponentInstruction} from '@angular/router-deprecated';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  styleUrls: ['artist.component.css']
})
export class ArtistComponent{
  id: string;
  artist: Result[];
  albums: Album[];

  constructor(private _muSearcher: MuSearcherService, private _router: Router) { }

  routerOnActivate(curr: ComponentInstruction):void{
    this.id = curr.params['id'];
    this._muSearcher.getArtist(this.id).subscribe(artist => {
      console.log(artist);
    });
  }
}
