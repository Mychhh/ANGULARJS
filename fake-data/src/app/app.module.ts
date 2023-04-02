import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FakeDataModule } from './fake-data/fake-data.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FakeDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
