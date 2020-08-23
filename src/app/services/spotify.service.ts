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
      'Authorization': 'Bearer BQBSpeX_2FJGxs-uygehyQD2vTkfqjfxTrKkA3TKcplAq1PmKLWxQ_6bXBG8f9pbeOGs1IzM8aBIC-bdWDGemdR1-0FsHQTgZz9fFE6UQJmJ5mFH3wTzzOIJFzq_azRmLxUXu7ZYI2CGjcezVgTDGha29D0dK1U?limit=20'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe( data => {
        console.log(data);
      });
   }
}
