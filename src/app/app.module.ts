import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';


import { HttpClientModule } from '@angular/common/http';

const appRouter : Routes = [
  {
      path : 'authors',
      component: AuthorsComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouter),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
