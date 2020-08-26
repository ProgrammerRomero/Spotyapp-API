import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service working')
   }

   getQuery( query: string ) {

    const url= `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDzWJxlYXqSwSzFyX77cPLzOVdqhZm4Jd7dEiNxIJev7yxJuqEudS3nLf6a8GlFpOoedEEc09ljeESHH1wKZkzTVaohGt-bNw91LPjS3TqErPHdl_PPxZmTSP0pc37pPqhSpGsPg8EYYXRUkxJyh26nrFdGO1Y'
    });
      return this.http.get(url, { headers });
   }

   getNewReleases() {

      return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => data['albums'].items ));

   }

   getArtists(termino: string) {

      return this.getQuery(`search?q=${ termino }&type=artist&limit=5`)
                .pipe( map(data => data['artists'].items ));
   }

   getArtist(id: string) {

      return this.getQuery(`artists/${id}`);
                // .pipe( map(data => data['artists'].items ));
   }

   getTopTracks(id: string) {

      return this.getQuery(`artists/${id}/top-tracks?=country=us`)
                .pipe( map(data => data['tracks'] ));
   }


}
