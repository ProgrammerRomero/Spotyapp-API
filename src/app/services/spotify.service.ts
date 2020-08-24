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
      'Authorization': 'Bearer BQCkHFo9mGhJRiVb7FUKHsxOE_DkJorI5Bp6__nmcbYi5HOFOWhnd2pGJ9DyutzbyBSx09pCrd0Ta30Hqa52sltoXqVIP9y2jtf3PHYMzNyoda-80Ja5jKd-uCVcXHzkUWbC7DjclfmR--z26PHyt2VhQQdKWWU'
    });
      return this.http.get(url, { headers });
   }

   getNewReleases() {

      return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => data['albums'].items ));

   }

   getArtist(termino: string) {

      return this.getQuery(`search?q=${ termino }&type=artist&limit=5`)
                .pipe( map(data => data['artists'].items ));
   }
}
