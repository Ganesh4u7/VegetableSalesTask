import {Component, OnInit, ViewChild} from '@angular/core';
import {SalesService} from "../sales.service";
import {NgForm} from "@angular/forms";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-streetsales',
  templateUrl: './streetsales.component.html',
  styleUrls: ['./streetsales.component.css']
})
export class StreetsalesComponent implements OnInit {
  @ViewChild('f') slForm : NgForm;
  @ViewChild('f1') slForm1 : NgForm;
  constructor(  public  salesService : SalesService) { }

  availableVegitables = this.salesService.PurchasedVegetables;
  expand1 :number =0;
  saledetails = [];
  Sales  = this.salesService.sales;
  totalCost = 0;

  ngOnInit() {
  }


  add(form:NgForm){
    var value = form.value;
    var i = 0,j=0;
    var val = value.name;
    //console.log(val)
    var n1 = val.substring(0,(val.indexOf('(') ));
    //console.log(n1)
    for( i = 0 ; i < this.availableVegitables.length; i++){
      if(this.salesService.PurchasedVegetables[i].name == n1) {
        if (this.salesService.PurchasedVegetables[i].amount >= value.quantity) {
         // console.log(this.salesService.PurchasedVegetables1[i].amount);
         // console.log(this.salesService.PurchasedVegetables[i].amount);
          this.salesService.PurchasedVegetables[i].amount = this.salesService.PurchasedVegetables[i].amount - value.quantity;
         // console.log(this.salesService.PurchasedVegetables1[i].amount);
         // console.log(this.salesService.PurchasedVegetables[i].amount);
        //  console.log(n1,value.quantity,value.amount);
          if(this.saledetails.length > 0 ) {
            for (j = 0; j < this.saledetails.length; j++) {
              if (this.saledetails[j].vegetable == n1) {
               // console.log(n1,value.quantity,value.amount);
                this.saledetails[j].amount = this.saledetails[j].amount + value.amount;
                this.saledetails[j].quantity = this.saledetails[j].quantity + value.quantity;
                break;
              }
              else if (j == this.saledetails.length - 1) {
                this.saledetails.push({vegetable: n1, quantity: value.quantity, amount: value.amount});
                break;
              }
            }
          }
          else{
            this.saledetails.push({vegetable:n1, quantity:value.quantity, amount:value.amount});

            break;
          }
         // console.log(this.salesService.PurchasedVegetables1);
         // console.log(this.salesService.PurchasedVegetables);
         // console.log(this.saledetails);
         // console.log(this.salesService.PurchasedVegetables1[i].amount);
          break;
        }
        else {
          alert("Don't have enough Quantity for this item , Available Quantity is " + this.availableVegitables[i].amount);
          break;
        }
      }


    }
   // console.log(amount);
    this.slForm1.reset();
  }
  Submit(form: NgForm){
    if(confirm("Are you sure you want to save this sale ?")) {
      const value = form.value;
      //console.log(value);
       this.salesService.sales.push({street :value.street,locality:value.locality,sale:this.saledetails});

       var  i=0,j=0;
       var  index =0,temp =0;
       for( i =0;i< this.saledetails.length ;i++){
         this.totalCost = this.totalCost + this.saledetails[i].amount;

           if(this.saledetails[i].quantity > temp){
             index= i;
             temp = this.saledetails[i].quantity;
           }
           for(j=0;j<this.salesService.saleDetails.length;j++){
             if(this.saledetails[i].vegetable == this.salesService.saleDetails[j].name){
               this.salesService.saleDetails[j].left = this.salesService.saleDetails[j].left - this.saledetails[i].quantity;
               this.salesService.saleDetails[j].sold = this.salesService.saleDetails[j].sold + this.saledetails[i].quantity;
               this.salesService.saleDetails[j].priceMade = this.salesService.saleDetails[j].priceMade + this.saledetails[i].amount;
               break;
             }
           }
       }
       this.salesService.totalSalesCost = this.totalCost;
       this.salesService.saleAnalysis.push({streetName:value.street,vegetable:this.saledetails[index].vegetable,amount:this.saledetails[index].quantity});
      // console.log(this.Sales);
     // this.saledetails = {};
    }
    //console.log(this.salesService.sales.length);

    this.slForm.reset();
    this.slForm1.reset();
    this.saledetails = [];

  }

}
