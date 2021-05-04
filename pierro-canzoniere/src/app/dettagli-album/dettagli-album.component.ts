import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../models/song.model';

@Component({
  selector: 'app-dettagli-album',
  templateUrl: './dettagli-album.component.html',
  styleUrls: ['./dettagli-album.component.css']
})
export class DettagliAlbumComponent implements OnInit {

  @Input() dettagliAlbum: Song;

  constructor() { }

  ngOnInit(): void {
  }

}
