// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BooksModule } from './books/books.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

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
    BrowserModule, BooksModule, AppRoutingModule, AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
