
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';

import { HeaderComponent} from './header/header.component';
import { WholesaleComponent } from './wholesale/wholesale.component';
import { StreetsalesComponent } from './streetsales/streetsales.component';
import { SaleAnalysisComponent } from './sale-analysis/sale-analysis.component';
import { SalesComponent } from './sales/sales.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WholesaleComponent,
    StreetsalesComponent,
    SaleAnalysisComponent,
    SalesComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
