import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayGifsComponent } from './display-gifs/display-gifs.component';
import { SearchGifsComponent } from './search-gifs/search-gifs.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DisplayGifsComponent,
    SearchGifsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DisplayGifsComponent,
    SearchGifsComponent
  ]
})
export class HomeModule { }
