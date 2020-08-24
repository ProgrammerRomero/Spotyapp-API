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
      'Authorization': 'Bearer BQCf3T1sqy-IC2hSrSsDHEFf7B8H2BAkzp1D1bp-su5p4W1tNZdiiWsv_yKvCHqujj0LhCDGk9uIqSt5UgcIbM6JYQfC7v4mLnCrD5wuQsnX4BoNHjNxPpHKgr-RRLriFSiShEq3RUFQOI5xLvq37tmrMYnLBmw'
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
}
