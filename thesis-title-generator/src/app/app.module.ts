// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThesisTitleGeneratorModule } from './thesis-title-generator/thesis-title-generator.module'

// Component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ThesisTitleGeneratorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
