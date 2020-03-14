import { UserService } from '../user.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { User } from '../user'; 
import { DataTablesModule } from 'angular-datatables';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

} 