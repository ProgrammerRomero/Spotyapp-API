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
      'Authorization': 'Bearer BQD6cUPDsl5cD9ruZjviBa_Q3hnRLxhneWnMG6pS8ZEiPtTkIF_WFkGvb8qf8kjX7pGtGPOB_VuA7zF4u5TbPQQu30DrdlGGi0TM0R5StG-u5QWvJdQk_zoCJfET6kTEJm9nXyQaZOij9m3mMsaDC1jTVof35-I'
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
