import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ObservableComponent } from './folder-observable/observable.component';
import { AsyncPipeComponent } from './folder-async-pipe/async-pipe.component';
import { AsyncComponent } from './folder-observable-promise/async.component';
import { PostComponent } from './folder-post-request/post.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    AsyncPipeComponent,
    AsyncComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
