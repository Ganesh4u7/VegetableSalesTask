import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WholesaleComponent} from "./wholesale/wholesale.component";
import {StreetsalesComponent} from "./streetsales/streetsales.component";
import {SaleAnalysisComponent} from "./sale-analysis/sale-analysis.component";
import {SalesComponent} from "./sales/sales.component";
import {SuggestionsComponent} from './suggestions/suggestions.component';


const appRoutes: Routes = [
  { path: 'wholesale', component:WholesaleComponent},
  { path:'streetsales',component:StreetsalesComponent},
  { path:'saleAnalysis', component:SaleAnalysisComponent},
  { path: 'sales', component: SalesComponent},
  { path:'suggestions',component: SuggestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
