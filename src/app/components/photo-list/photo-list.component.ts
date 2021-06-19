import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { PhotoBoardService } from './../../shared/components/photo-board/services/photo-board.service';
import { Photo } from './../../shared/components/photo-board/interfaces/photo';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  public photos$: Observable<Photo[]>;
  public fa = { faCircleNotch };

  constructor(private service: PhotoBoardService) { }

  public ngOnInit(): void {
    this.photos$ = this.service.getPhotos();
  }
}
