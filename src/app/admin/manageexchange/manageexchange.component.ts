import { Component, OnInit } from '@angular/core';
import { ExchangeService } from 'src/app/exchange.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Exchange } from 'src/app/exchange';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageexchange',
  templateUrl: './manageexchange.component.html',
  styleUrls: ['./manageexchange.component.css']
})

export class ManageexchangeComponent implements OnInit {
  isupdated: boolean;

  constructor(private router:Router,private exchangeservice: ExchangeService) { }

  exchangeList: Observable<Exchange[]>;

  ngOnInit() {

    this.exchangeservice.getAllexchanges().subscribe(data => {

      this.exchangeList = data;

    })

  }
  deleteExchange(exchange : Exchange ) {

    this.exchangeservice.deleteManageExchange(exchange.id)
 
     .subscribe(
 
      data => {
 
       this.exchangeservice.getAllexchanges().subscribe(data =>{
 
        this.exchangeList =data;

        
 
        });
 
 
 
      }) ;
 
   };
 
   updateExchange(exchange : Exchange ) {
 
   window.localStorage.removeItem("edit-id");
 
   window.localStorage.setItem("edit-id", exchange.id.toString());
 
   this.router.navigate(['registernewstock']);
 
   };




  exchangeupdateform = new FormGroup({

    id: new FormControl(),
    stockexchange: new FormControl(),
    contactaddress: new FormControl(),
    brief: new FormControl(),
    remarks: new FormControl()
  });

  get Id() {
    return this.exchangeupdateform.get('id');
  }
  get Stockexchange() {
    return this.exchangeupdateform.get('stockexchange');
  }

  get Contactaddress() {
    return this.exchangeupdateform.get('contactaddress');
  }
  get Remarks() {
    return this.exchangeupdateform.get('remarks');
  }
  get Brief() {
    return this.exchangeupdateform.get('brief');
  }


  changeisUpdate() {

    this.isupdated = false;

  }

}



