import { Component, OnInit } from '@angular/core';

import { Sector } from 'src/app/sector';

import { SectorService } from 'src/app/sector.service';

import { Observable } from 'rxjs';

import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({

  selector: 'app-sectorlist',

  templateUrl: './sectorlist.component.html',

  styleUrls: ['./sectorlist.component.css']

})

export class SectorlistComponent implements OnInit {



  isupdated: boolean;



  constructor(private router:Router,private sectorservice: SectorService) { }



  sectorList: Observable<Sector[]>;



  ngOnInit() {



    this.sectorservice.getAllSectors().subscribe(data => {



      this.sectorList = data;



    })



  }




  deleteSector(sector : Sector ) {

    this.sectorservice.deleteSector(sector.sectorid)
 
     .subscribe(
 
      data => {
 
       this.sectorservice.getAllSectors().subscribe(data =>{
 
        this.sectorList =data;

        
 
        });
 
 
 
      }) ;
 
   };
 
   updateSector(sector : Sector ) {
 
   window.localStorage.removeItem("edit-sectorid");
 
   window.localStorage.setItem("edit-sectorid", sector.sectorid.toString());
 
   this.router.navigate(['sector']);
 
   };
 
 




  sectorsaveform = new FormGroup({



    sectorid: new FormControl(),

    sectorname: new FormControl(),

    brief: new FormControl(),



  });



  get Sectorid() {

    return this.sectorsaveform.get('sectorid');

  }



  get Sectorname() {

    return this.sectorsaveform.get('sectorname');

  }

  get Brief() {

    return this.sectorsaveform.get('brief');

  }





  changeisUpdate() {



    this.isupdated = false;



  }



}

