import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/company.service';
import { Company } from 'src/app/company';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.css']
})

export class ManagecompanyComponent implements OnInit {
  isupdated: boolean;

  constructor(private router: Router,private companyservice: CompanyService) { }

  companyList: Observable<Company[]>;

  ngOnInit() {

    this.companyservice.getAllCompanies().subscribe(data => {

      this.companyList = data;

      

    })

  }
  deleteCompany(company : Company ) {

    this.companyservice.deleteCompany(company.companyname)
 
     .subscribe(
 
      data => {
 
       this.companyservice.getAllCompanies().subscribe(data =>{
 
        this.companyList =data;

        
 
        });
 
 
 
      }) ;
 
   };
 
   updateCompany(company : Company ) {
 
   window.localStorage.removeItem("edit-companyname");
 
   window.localStorage.setItem("edit-companyname", company.companyname.toString());
 
   this.router.navigate(['createcompany']);
 
   };
 
 


  companyupdateform = new FormGroup({

    companyname: new FormControl(),
    turnover: new FormControl(),
    ceo: new FormControl(),
    boardofdirectors: new FormControl(),
    listedinstockexchange: new FormControl(),
    sector: new FormControl(),
    stockcode: new FormControl(),
    brief:new FormControl()



  });

  get Companyname() {
    return this.companyupdateform.get('companyname');
  }
  get Turnover() {
    return this.companyupdateform.get('turnover');
  }

  get Ceo() {
    return this.companyupdateform.get('ceo');
  }
  get Boardofdirectors() {
    return this.companyupdateform.get('boardofdirectors');
  }
  get Listedinstockexchange() {
    return this.companyupdateform.get('listedinstockexchange');
  }
  get Sector() {
    return this.companyupdateform.get('sector');
  }
  get Stockcode() {
    return this.companyupdateform.get('stockcode');
  }
  get Brief() {
    return this.companyupdateform.get('brief');
  }


  changeisUpdate() {

    this.isupdated = false;

  }

}


