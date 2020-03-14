import { Component, OnInit } from '@angular/core';

import { SectorService } from 'src/app/sector.service';

import { Sector } from 'src/app/sector';

import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({

 selector: 'app-sector',

 templateUrl: './sector.component.html',

 styleUrls: ['./sector.component.css']

})

export class SectorComponent implements OnInit {



 constructor(private sectorservice:SectorService) { }



 sector : Sector=new Sector();

 submitted = false;



 ngOnInit() {

    var sectorid=window.localStorage.getItem("edit-sectorid");
    if(sectorid!=null&&sectorid!="")
    {

  
    this.sectorservice.getSector(parseInt(sectorid))
  
      .subscribe(
  
       data => {
  
        this.sector =data;
  
        this.sectorsaveform.setValue(this.sector);
  
       }) ;
    this.submitted = false;
      }
   }  





 sectorsaveform=new FormGroup({

  sectorid:new FormControl('',[Validators.required, Validators.minLength(1)]),

  sectorname:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),

  brief:new FormControl('',[Validators.required,Validators.minLength(1)]),



 });







 saveSector(saveSector){

  this.sector=new Sector();

  this.sector.sectorid=this.Sectorid.value;

  this.sector.sectorname=this.Sectorname.value;

  this.sector.brief=this.Brief.value;



  this.submitted = true;

  this.save();

 }





 save() {

  this.sectorservice.createSector(this.sector)

   .subscribe(data => console.log(data), error => console.log(error));

  this.sector = new Sector();
  window.localStorage.removeItem("edit-sectorid");

 }



 get Sectorid(){

  return this.sectorsaveform.get('sectorid');

 }

 get Sectorname(){

  return this.sectorsaveform.get('sectorname');

 }



 get Brief(){

  return this.sectorsaveform.get('brief');

 }







 addSectorForm(){

  this.submitted=false;

  this.sectorsaveform.reset();

 }

}

