import { Component, OnInit } from '@angular/core';
import { StockpriceService } from 'src/app/stockprice.service';
import { Ipos } from 'src/app/ipos';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Stockprice } from 'src/app/stockprice';

@Component({
  selector: 'app-createstockprice',
  templateUrl: './createstockprice.component.html',
  styleUrls: ['./createstockprice.component.css']
})
export class CreatestockpriceComponent implements OnInit {

  
  constructor(private stockpriceservice:StockpriceService) { }  
  
  stockprice : Stockprice=new Stockprice();  
  submitted = false;  
  ngOnInit() {

    var stockexchange=window.localStorage.getItem("edit-stockexchange");
    if(stockexchange!=null&&stockexchange!="")
    {

  
    this.stockpriceservice.getStockprice(stockexchange)
  
      .subscribe(
  
       data => {
  
        this.stockprice =data;
  
        this.stockpricesaveform.setValue(this.stockprice);
  
       }) ;
    this.submitted = false;
      }
   }  
  
  stockpricesaveform=new FormGroup({  
    companyname:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),  
    stockexchange:new FormControl('',[Validators.required]),
    currentprice:new FormControl('',[Validators.required,Validators.minLength(1)]),
    date:new FormControl('',[Validators.required,Validators.minLength(1)]),
    time:new FormControl()

  });  
  
  saveStockprice(saveStockprice){  
    this.stockprice=new Stockprice();   
    this.stockprice.companyname=this.Companyname.value;  
    this.stockprice.stockexchange=this.Stockexchange.value;
    this.stockprice.currentprice=this.Currentprice.value; 
    this.stockprice.date=this.Date.value;
    this.stockprice.time=this.Time.value;
    this.submitted = true;  
    this.save();  
  }  
  
  save() {  
    this.stockpriceservice.saveStockPrice(this.stockprice)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.stockprice = new Stockprice();  
    window.localStorage.removeItem("edit-stockexchange");
  }  
  
 
  get Companyname(){  
    return this.stockpricesaveform.get('companyname');  
  }  
  
   
  get Stockexchange(){  
    return this.stockpricesaveform.get('stockexchange');  
  }  

  get Currentprice()
  {
    return this.stockpricesaveform.get('currentprice');
  }

  get Date()
  {
    return this.stockpricesaveform.get('date');
  }
  
  get Time()
  {
    return this.stockpricesaveform.get('time');
  }

  addStockpriceForm(){    
    this.submitted=false;  
    this.stockpricesaveform.reset();  
  } 
} 
