import { Component, OnInit } from '@angular/core';
import {SalesService} from "../sales.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sale-analysis',
  templateUrl: './sale-analysis.component.html',
  styleUrls: ['./sale-analysis.component.css']
})
export class SaleAnalysisComponent implements OnInit {

  constructor(
    public salesService: SalesService
  ) { }
sales =this.salesService.sales;
  salesAnalysis =this.salesService.saleAnalysis;
  salesDetails = this.salesService.saleDetails;

  ngOnInit() {

    }





}
