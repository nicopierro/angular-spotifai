export class Song {

  data_uscita: Date;
  durata: number;
  title: string;

  constructor(data_uscita: Date, durata: number, title: string) {
    this.data_uscita = data_uscita;
    this.durata = durata;
    this.title = title;
  }

}
