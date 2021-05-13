import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search/search-bar/search-bar.component';
import { InputComponent } from './common/input/input.component';
import { ButtonComponent } from './common/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    InputComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
