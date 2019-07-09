import { Component, OnInit } from '@angular/core';
import {SalesService} from "../sales.service";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor( public  salesService: SalesService) { }

  sales = this.salesService.sales;

  ngOnInit() {
  }

}
