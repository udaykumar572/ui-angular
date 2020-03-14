import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from '../company.service';
import { Company } from '../company';
@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css']
})

export class CreatecompanyComponent implements OnInit {

  
  constructor(private companyservice:CompanyService) { }  
  
  company : Company =new Company();  
  submitted = false;  
  
  ngOnInit() {

    var companyname=window.localStorage.getItem("edit-companyname");
    if(companyname!=null&&companyname!="")
    {
  
    this.companyservice.getCompany(companyname)
  
      .subscribe(
  
       data => {
  
        this.company =data;
  
        this.companysaveform.setValue(this.company);
  
       }) ;
    this.submitted = false;
      }
   }  
  
  companysaveform=new FormGroup({  
    companyname:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),  
    turnover:new FormControl('',[Validators.required,Validators.minLength(2)]),
    ceo:new FormControl('',[Validators.required, Validators.minLength(3)]),
    boardofdirectors:new FormControl('',[Validators.required, Validators.minLength(3)]),
    listedinstockexchange:new FormControl('',[Validators.required, Validators.maxLength(1)]),
    sector:new FormControl('',[Validators.required, Validators.minLength(3)]),
    stockcode:new FormControl('',[Validators.required, Validators.minLength(3)]),
    brief:new FormControl('',[Validators.required, Validators.minLength(3)]),
  });  
  
  saveCompany(saveCompany){  
    this.company=new Company();   
    this.company.companyname=this.Companyname.value;  
    this.company.turnover=this.Turnover.value;
    this.company.ceo=this.Ceo.value; 
    this.company.boardofdirectors=this.Boardofdirectors.value;
    this.company.listedinstockexchange=this.Listedinstockexchange.value;
    this.company.sector=this.Sector.value;
    this.company.stockcode=this.Stockcode.value;
    this.company.brief=this.Brief.value;
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.companyservice.createCompany(this.company)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.company = new Company();  
    window.localStorage.removeItem("edit-companyname");
  }  
  
 
  get Companyname(){  
    return this.companysaveform.get('companyname');  
  }  
  get Turnover(){  
    return this.companysaveform.get('turnover');  
  }  
  get Ceo(){  
    return this.companysaveform.get('ceo');  
  }  
  get Boardofdirectors()
  {
    return this.companysaveform.get('boardofdirectors');
  }
  get Listedinstockexchange()
  {
    return this.companysaveform.get('listedinstockexchange');
  } 
  get Sector()
  {
    return this.companysaveform.get('sector');
  } 
  get Stockcode()
  {
    return this.companysaveform.get('stockcode');
  }
  get Brief()
  {
    return this.companysaveform.get('brief');
  }
  addCompanyForm(){    
    this.submitted=false;  
    this.companysaveform.reset();  
  } 
} 