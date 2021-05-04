import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliAlbumComponent } from './dettagli-album.component';

describe('DettagliAlbumComponent', () => {
  let component: DettagliAlbumComponent;
  let fixture: ComponentFixture<DettagliAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
