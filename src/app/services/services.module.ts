import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { MovieService } from './movie.service';
import { DummyService } from './dummy.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UserService,
    MovieService,
    DummyService,
  ],
})
export class ServicesModule { }
