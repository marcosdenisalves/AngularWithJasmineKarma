import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhotoBoardModule } from './../../shared/components/photo-board/photo-board.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';

@NgModule({
  declarations: [PhotoListComponent],
  imports: [CommonModule, PhotoBoardModule, FontAwesomeModule],
  exports: [PhotoListComponent]
})
export class PhotoListModule { }
