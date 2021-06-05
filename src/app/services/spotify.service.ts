import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery( query : string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQASQCPbyzbyIv0BxdBBAYWvHuBBFbHGsuld_Qu_aOJ1F7rRZWPT9X6JIQKumE06Kc5-XEh-c9L5Ji8Eq58'
    });

    return this.http.get(url, { headers })
  }

  getNewReleases(){

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAWIYTphT5VCu-fsKKwsaF1H8LCHI4j3xe4rDvVuoFCpsbj5LTeX_VbBWCutb28ZfMwFjESDSNdq-ntCzU'
    // });

    // this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    //         .subscribe( data => {
    //           console.log(data);
    //         } );

    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( data =>  data['albums'].items ) );
    
    // this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    //         .pipe( map( data =>  data['albums'].items ) );

  }

  getArtistas( termino: string ){

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAWIYTphT5VCu-fsKKwsaF1H8LCHI4j3xe4rDvVuoFCpsbj5LTeX_VbBWCutb28ZfMwFjESDSNdq-ntCzU'
    // });

    // return  this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=15`, {headers})
    //           .pipe( map( data => data['artists'].items ) );

   
    return this.getQuery(`search?query=${ termino }&type=artist&offset=0&limit=15`)
                          .pipe( map( data => data['artists'].items ) );

  }

  getArtista( id: string ){

    return this.getQuery(`artists/${ id }`)
                          // .pipe( map( data => data['artists'].items ) );
  }

  getTop( id: string ){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                          .pipe( map( data => data['tracks'] ) );
  }

}
