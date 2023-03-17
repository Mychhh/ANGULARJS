// Modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BooksModule } from './books/books.module';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  // component  
  declarations: [
    AppComponent,
    CartComponent,
  ],
  // Module here
  imports: [
    BrowserModule, FormsModule, BooksModule, AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
