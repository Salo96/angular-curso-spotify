import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista: any = {};
  loading : boolean;
  top: any[] =[];

  constructor(private router:ActivatedRoute,
              private spotify:SpotifyService          
    ) {

    this.loading = true
    this.router.params.subscribe( params =>{
      // console.log(params['id']);
      this.getArtista( params['id'] );
      this.getTop( params['id'] );
    } );
  }

  getArtista( id: string ){

    this.loading = true

    this.spotify.getArtista( id )
        .subscribe( artista => {
          console.log(artista);
          this.artista = artista;
          this.loading = false
        } );

  }

  getTop( id:string ){
    this.spotify.getTop( id ).subscribe( toptracket =>{
      console.log(toptracket)
      this.top = toptracket;
    } );
  }

}
