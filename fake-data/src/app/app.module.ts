import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FakeDataModule } from './fake-data/fake-data.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FakeDataModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
