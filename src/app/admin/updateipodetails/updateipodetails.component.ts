import { Component, OnInit } from '@angular/core';
import { IposService } from 'src/app/ipos.service';
import { Observable } from 'rxjs';
import { Company } from 'src/app/company';
import { FormGroup, FormControl } from '@angular/forms';
import { Ipos } from 'src/app/ipos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateipodetails',
  templateUrl: './updateipodetails.component.html',
  styleUrls: ['./updateipodetails.component.css']
})
export class UpdateipodetailsComponent implements OnInit {

  
  isupdated: boolean;

  constructor(private router:Router, private iposservice: IposService) { }

  iposList: Observable<Ipos[]>;

  ngOnInit() {

    this.iposservice.getAllipos().subscribe(data => {

      this.iposList = data;

    })

  }
  deleteIpos(ipos : Ipos ) {

    this.iposservice.deleteIpos(ipos.id)
 
     .subscribe(
 
      data => {
 
       this.iposservice.getAllipos().subscribe(data =>{
 
        this.iposList =data;

        
 
        });
 
 
 
      }) ;
 
   };
 
   updateIpos(ipos : Ipos ) {
 
   window.localStorage.removeItem("edit-id");
 
   window.localStorage.setItem("edit-id", ipos.id.toString());
 
   this.router.navigate(['createipo']);
 
   };



  iposupdateform = new FormGroup({

    id: new FormControl(),
    companyname: new FormControl(),
    opendatetime: new FormControl(),
    pricepershare: new FormControl(),
    remarks: new FormControl(),
    stockexchange: new FormControl(),
    totalnoofshares: new FormControl()



  });

  get Id(){  
    return this.iposupdateform.get('id');  
  }  
  
  get Companyname(){  
    return this.iposupdateform.get('companyname');  
  }  
  get Stockexchange(){  
    return this.iposupdateform.get('stockexchange');  
  }  

  get Pricepershare()
  {
    return this.iposupdateform.get('pricepershare');
  }

  get Totalnoofshares()
  {
    return this.iposupdateform.get('totalnoofshares');
  }
  
  get Opendatetime()
  {
    return this.iposupdateform.get('opendatetime');
  }

  
  get Remarks()
  {
    return this.iposupdateform.get('remarks');
  } 

  changeisUpdate() {

    this.isupdated = false;

  }

}
