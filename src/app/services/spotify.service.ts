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
      'Authorization': 'Bearer BQDNmtNxzIJQIji-5_m5y8xbT1aO4UP97IgkNvM1v2hnO32mqqqdYhpLldy2i-K76Igj96yVIAaEWtnT0GlNUZxg9GbaMYdk5CYnfDS07jzvHDtRiHM-vKZ3FAtzLYZbQAUM_uzKkjTN3NJ8eJgJZSdwsNlx1ag'
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
