
import { Component, OnInit,ViewChild,



  ElementRef,
 
 
 
  AfterViewInit,
 
 
 
  OnDestroy,
 
 
 
  ChangeDetectorRef, } from '@angular/core';
 
 
 
 import { CompanyService } from 'src/app/company.service';
 
 
 
 import { StockpriceService } from 'src/app/stockprice.service';
 
 
 
 import { Router } from '@angular/router';
 
 
 
 import { Company } from 'src/app/company';
 
 
 
 import { Observable } from 'rxjs/internal/Observable';
 
 
 
 import { Stockprice } from 'src/app/stockprice';
 
 
 
 import { SectorService } from 'src/app/sector.service';
 
 
 
 import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
 
 
 
 import { Sector } from 'src/app/sector';
 
 
 
 import { of } from 'rxjs';
 
 
 
 import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
 
 
 
 import { HighchartsServiceService } from 'src/app/highcharts-service.service';
 
 
 
 import * as Highcharts from 'highcharts';
 

 @Component({
  selector: 'app-comparecompany',
  templateUrl: './comparecompany.component.html',
  styleUrls: ['./comparecompany.component.css']
})
 
export class ComparecompanyComponent implements OnInit {




  myGroup: FormGroup;



  constructor(private hcs: HighchartsServiceService,private formBuilder: FormBuilder,private router:Router,private companyserviceservice:CompanyService,private sectorsserviceservice: SectorService,private stockpriceservice:StockpriceService){ }
 
 
 
  companyList: Company[];
 
 
 
  companyListAll: Company[];
 
 
 
  sectorsList: Sector[];
 
 
 
  stockpriceList: Observable<Stockprice[]>;
 
 
 
  ngOnInit() {
 
 
 
   this.stockpriceservice.getmultiplelinechart().subscribe(result => {
 
    var formatteddata = [];
 
    for (var key in result) {
 
     var singleObject = {
 
     name: '',
 
     data: []
 
     }
 
     singleObject.name = key.toUpperCase();
 
     for (var i = 0; i < result[key].length; i++) {
 
     singleObject.data.push(parseInt(result[key][i].currentprice));
 
     }
 
     formatteddata.push(singleObject);
 
   }
 
   this.drawMultipleLineChart(formatteddata);
 
 
 
  });
 
   this.myGroup= this.formBuilder.group({
 
   "choose": new FormControl([ Validators.required ]),
 
   "sectorname": new FormControl([ Validators.required ]),
 
   "companyname": new FormControl([ Validators.required ]),
 
   "fromdate":new FormControl([ Validators.required ]),
 
   "todate":new FormControl([ Validators.required ])
 
   })
 
   this.companyserviceservice.getAllCompanies().subscribe(data => {
 
   this.companyList = data;
 
   this.companyListAll=data;
 
   this.companyList=this.companyList.filter(comp=>comp.sector == 'NSE') ;
 
   })
 
   this.stockpriceservice.getAllstockprices().subscribe(data => {
 
   this.stockpriceList = data;
 
   })
 
   this.sectorsserviceservice.getAllSectors().subscribe(data => {
 
    this.sectorsList = data;
 
    })
 
  }
 
  sectorChange()
 
  {
 
   var sectorValue=this.myGroup.controls['sectorname'].value;
 
   this.companyList=this.companyListAll.filter(comp=>comp.sector == sectorValue) ;
 
  }
 
  drawMultipleLineChart(formatteddata) {
 
   Highcharts.chart('container', {
 
    title: {
 
     text: 'Comparision of Companies According to Stock Prices during 2010-2020'
 
    },
 
    // subtitle: {
 
    //  text: 'Source: thesolarfoundation.com'
 
    // },
 
    yAxis: {
 
     title: {
 
     text: 'No of Companies'
 
     }
 
    },
 
    legend: {
 
     layout: 'vertical',
 
     align: 'right',
 
     verticalAlign: 'middle'
 
    },
 
    plotOptions: {
 
     series: {
 
     label: {
 
      connectorAllowed: false
 
     },
 
     pointStart: 2000
 
     }
 
    },
 
    series: formatteddata,
 
    responsive: {
 
     rules: [{
 
     condition: {
 
      maxWidth: 500
 
     },
 
     chartOptions: {
 
      legend: {
 
      layout: 'horizontal',
 
      align: 'center',
 
      verticalAlign: 'bottom'
 
      }
 
     }
 
     }]
 
    }
 
    });
 
   }
  }