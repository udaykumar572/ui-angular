import { Component, OnInit } from '@angular/core';
import { StockpriceService } from 'src/app/stockprice.service';
import { Observable } from 'rxjs';
import { Ipos } from 'src/app/ipos';
import { FormGroup, FormControl } from '@angular/forms';
import { Stockprice } from 'src/app/stockprice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})
export class StockpriceComponent implements OnInit {

  isupdated: boolean;

  constructor(private router:Router,private stockpriceservice: StockpriceService) { }

  stockpriceList: Observable<Stockprice[]>;

  ngOnInit() {

    this.stockpriceservice.getAllstockprices().subscribe(data => {

      this.stockpriceList = data;

    })

  }
  deleteStockPrice(stockprice : Stockprice ) {

    this.stockpriceservice.deleteStockprice(stockprice.stockexchange)
 
     .subscribe(
 
      data => {
 
       this.stockpriceservice.getAllstockprices().subscribe(data =>{
 
        this.stockpriceList =data;

        
 
        });
 
 
 
      }) ;
 
   };
 
   updateStockPrice(stockprice : Stockprice ) {
 
   window.localStorage.removeItem("edit-stockexchange");
 
   window.localStorage.setItem("edit-stockexchange", stockprice.stockexchange.toString());
 
   this.router.navigate(['createstockprice']);
 
   };




  stockpriceupdateform = new FormGroup({

    
    companyname: new FormControl(),
    stockexchange: new FormControl(),
    currentprice: new FormControl(),
    date: new FormControl(),
    time: new FormControl()



  });

  get Companyname(){  
    return this.stockpriceupdateform.get('companyname');  
  }  
  
  get Stockexchange(){  
    return this.stockpriceupdateform.get('stockexchange');  
  }  

  get Currentprice()
  {
    return this.stockpriceupdateform.get('currentprice');
  }

  get Date()
  {
    return this.stockpriceupdateform.get('date');
  }
  
  get Time()
  {
    return this.stockpriceupdateform.get('time');
  }

  changeisUpdate() {

    this.isupdated = false;

  }

}

