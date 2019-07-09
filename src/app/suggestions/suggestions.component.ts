import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SalesService} from '../sales.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  constructor( public saleService: SalesService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    var value = form.value;
    this.saleService.suggestions.push(value);
  }

}
