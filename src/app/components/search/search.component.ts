import { Component } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas: any[]=[];
  loading : boolean;

  constructor( private spotyfi: SpotifyService) { }

  
  buscar(termino){

    this.loading = true
    console.log(termino);

    this.spotyfi.getArtistas( termino )
        .subscribe( (data: any)  =>{
          console.log(data);
          this.artistas = data;
          this.loading = false;
        });
        
  }

}
