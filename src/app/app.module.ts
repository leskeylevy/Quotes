import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteByComponent } from './quote-by/quote-by.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteByComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
