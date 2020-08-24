import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service working')
   }

   getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCTAiEDrwGZtc6r99XA4faQW-TVY5-GXT5m82OeKeJgd3sNvsK83jqWLPdv5JxvMrGAvrdheDPG_yr_19-Cg6TngPJtNIHQObFfwTp65ZzE4cjYdyblDvNvs2vKgiWd8P3OIDHFI31vbMGpzptREG8Hai5qVn8?limit=20'
    });

      return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

   }
}
