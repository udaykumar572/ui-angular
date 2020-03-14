import { Component, OnInit } from '@angular/core';
import { IposService } from 'src/app/ipos.service';
import { Observable } from 'rxjs';
import { Company } from 'src/app/company';
import { FormGroup, FormControl } from '@angular/forms';
import { Ipos } from 'src/app/ipos';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ipos',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css']
})
export class IposComponent implements OnInit {

  
  isupdated: boolean;

  constructor(private router:Router, private iposservice: IposService) { }

  iposList: Observable<Ipos[]>;

  ngOnInit() {

    this.iposservice.getAllipos().subscribe(data => {

      this.iposList = data;

    })
  }
  
}
