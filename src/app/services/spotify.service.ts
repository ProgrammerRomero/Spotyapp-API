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
      'Authorization': 'Bearer BQACRCL7XTWZYJqtT1MSkpB8vGd1YyY9sYRzXoyOOmTkrMt_qyYcv1FEyMIBnI7TDFjVhPPamATo5mQGk9maTTEISXyRe_5hTHlArazzRTOOzjpt5-bZ3qcRGa5IcsmUdL_g85P-hhoYapUY6bpISb0SXzpNS30'
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
