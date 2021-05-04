
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from './models/song.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pierro-canzoniere';
  obsSongs: Observable<Song[]>
  listaSongs: Song[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obsSongs = this.http.get<Song[]>('https://my-json-server.typicode.com/malizia-g/hotel/short-songlist')
    this.obsSongs.subscribe(this.getSongs)
  }

  getSongs = (data: Song[]) => {
    this.listaSongs = data
  }
}
