import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadDataComponent } from './read-data-component/read-data.component';
import { FakeDataComponent } from './fake-data.component';



@NgModule({
  declarations: [
    ReadDataComponent,
    FakeDataComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FakeDataComponent
  ]
})
export class FakeDataModule { }
