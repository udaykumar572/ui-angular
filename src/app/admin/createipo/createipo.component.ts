import { Component, OnInit } from '@angular/core';
import { IposService } from 'src/app/ipos.service';
import { Exchange } from 'src/app/exchange';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ipos } from 'src/app/ipos';

@Component({
  selector: 'app-createipo',
  templateUrl: './createipo.component.html',
  styleUrls: ['./createipo.component.css']
})
export class CreateipoComponent implements OnInit {

  
  constructor(private iposservice:IposService) { }  
  
  ipos : Ipos=new Ipos();  
  submitted = false;  
  
  ngOnInit() {

    var id=window.localStorage.getItem("edit-id");
    if(id!=null&&id!="")
    {
  
    this.iposservice.getIpos(parseInt(id))
  
      .subscribe(
  
       data => {
  
        this.ipos =data;
  
        this.iposaveform.setValue(this.ipos);
  
       }) ;
    this.submitted = false;
      }
   }  
  
  iposaveform=new FormGroup({  
    id:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),  
    companyname:new FormControl('',[Validators.required,Validators.minLength(3)]),
    stockexchange:new FormControl('',[Validators.required,Validators.minLength(3)]),
    pricepershare:new FormControl('',[Validators.required,Validators.minLength(1)]),
    totalnoofshares:new FormControl('',[Validators.required,Validators.minLength(1)]),
    opendatetime:new FormControl('',[Validators.required,Validators.minLength(1)]),
    remarks:new FormControl('',[Validators.required,Validators.minLength(1)]),

  });  
  
  saveIpo(saveIpo){  
    this.ipos=new Ipos();   
    this.ipos.id=this.Id.value;  
    this.ipos.companyname=this.Companyname.value;
    this.ipos.stockexchange=this.Stockexchange.value; 
    this.ipos.pricepershare=this.Pricepershare.value;
    this.ipos.totalnoofshares=this.Totalnoofshares.value;
    this.ipos.opendatetime=this.Opendatetime.value;
    this.ipos.remarks=this.Remarks.value;
    this.submitted = true;  
    this.save();  
  }  
  
  save() {  
    this.iposservice.createIpos(this.ipos)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.ipos = new Ipos(); 
    window.localStorage.removeItem("edit-id"); 
  }  
  
 
  get Id(){  
    return this.iposaveform.get('id');  
  }  
  
  get Companyname(){  
    return this.iposaveform.get('companyname');  
  }  
  get Stockexchange(){  
    return this.iposaveform.get('stockexchange');  
  }  

  get Pricepershare()
  {
    return this.iposaveform.get('pricepershare');
  }

  get Totalnoofshares()
  {
    return this.iposaveform.get('totalnoofshares');
  }
  
  get Opendatetime()
  {
    return this.iposaveform.get('opendatetime');
  }

  
  get Remarks()
  {
    return this.iposaveform.get('remarks');
  } 

  addIpoForm(){    
    this.submitted=false;  
    this.iposaveform.reset();  
  } 
} 
