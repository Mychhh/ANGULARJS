// Modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BooksModule } from './books/books.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  // component  
  declarations: [
    AppComponent,
  ],
  // Module here
  imports: [
    BrowserModule, FormsModule, BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
