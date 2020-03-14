import { Component, OnInit } from '@angular/core';
import { ExchangeService } from 'src/app/exchange.service';
import { Company } from 'src/app/company';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Exchange } from 'src/app/exchange';

@Component({
  selector: 'app-registernewstock',
  templateUrl: './registernewstock.component.html',
  styleUrls: ['./registernewstock.component.css']
})
export class RegisternewstockComponent implements OnInit {

  
  constructor(private exchangeservice:ExchangeService) { }  
  
  exchange : Exchange=new Exchange();  
  submitted = false;  
  
  ngOnInit() {

    var id=window.localStorage.getItem("edit-id");
    if(id!=null&&id!="")
  {
    this.exchangeservice.getExchange(parseInt(id))
  
      .subscribe(
  
       data => {
  
        this.exchange =data;
  
        this.exchangesaveform.setValue(this.exchange);
  
       }) ;
    this.submitted = false;
      }
   }  
  
  exchangesaveform=new FormGroup({  
    id:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),  
    stockexchange:new FormControl('',[Validators.required,Validators.minLength(3)]),
    brief:new FormControl('',[Validators.required, Validators.minLength(5)]),
    contactaddress:new FormControl('',[Validators.required, Validators.minLength(5)]),
    remarks:new FormControl('',[Validators.required, Validators.minLength(1)]),
   
  });  
  
  saveExchange(saveExchange){  
    this.exchange=new Exchange();   
    this.exchange.id=this.Id.value;  
    this.exchange.stockexchange=this.Stockexchange.value;
    this.exchange.brief=this.Brief.value; 
    this.exchange.contactaddress=this.Contactaddress.value;
    this.exchange.remarks=this.Remarks.value;
    this.submitted = true;  
    this.save();  
  }  
  
  save() {  
    this.exchangeservice.createExchange(this.exchange)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.exchange = new Exchange();  
    window.localStorage.removeItem("edit-id");
  }  
  
 
  get Id(){  
    return this.exchangesaveform.get('id');  
  }  
  get Stockexchange(){  
    return this.exchangesaveform.get('stockexchange');  
  }  
  get Brief(){  
    return this.exchangesaveform.get('brief');  
  }  
  get Contactaddress()
  {
    return this.exchangesaveform.get('contactaddress');
  }
  get Remarks()
  {
    return this.exchangesaveform.get('remarks');
  } 

  addExchangeForm(){    
    this.submitted=false;  
    this.exchangesaveform.reset();  
  } 
} 