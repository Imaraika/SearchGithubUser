import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoCompComponent } from './user-info-comp/user-info-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFormcompComponent } from './search-formcomp/search-formcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoCompComponent,
    SearchFormcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
