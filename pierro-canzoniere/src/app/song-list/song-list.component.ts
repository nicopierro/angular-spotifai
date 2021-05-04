import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../models/song.model'

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  @Input() listaSongs: Song[]
  @Input() dettagliAlbum: Song

  constructor() { }

  ngOnInit(): void {
  }

  dettagli(song) {
    console.log("data uscita: " + song.data_uscita + "\n" + "durata: " + song.durata)
    this.dettagliAlbum.data_uscita = song.data_uscita;
    this.dettagliAlbum.durata = song.durata;
    this.dettagliAlbum.title = song.title;

  }

}

