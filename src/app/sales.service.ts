import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  PurchasedVegetables = [];
  PurchasedVegetables1 = [];
  saleDetails = [];
  PurchasedVegitablesCost : number = 0 ;
  sales = [];
  saleAnalysis = [];
  startedEditing = new Subject<number>();
  totalSalesCost :number;
  suggestions = [];

  constructor() { }


}
