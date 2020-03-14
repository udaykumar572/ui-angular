import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from '../user';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  isupdated: boolean;

  constructor(private router:Router,private userservice: UserService) { }

  userList: Observable<User[]>;

  ngOnInit() {

    this.userservice.getAllUsers().subscribe(data => {

      this.userList = data;

    })

  }
  deleteUser(user : User ) {

    this.userservice.deleteUser(user.username)
 
     .subscribe(
 
      data => {
 
       this.userservice.getAllUsers().subscribe(data =>{
 
        this.userList =data;

        
 
        });
 
 
 
      }) ;
 
   };
 
   updateUser(user : User ) {
 
   window.localStorage.removeItem("edit-username");
 
   window.localStorage.setItem("edit-username", user.username.toString());
 
   this.router.navigate(['signup']);
 
   };




  userupdateform = new FormGroup({

    id: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    usertype: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    confirm: new FormControl()



  });

  get id() {
    return this.userupdateform.get('id');
  }
  get Username() {
    return this.userupdateform.get('username');
  }

  get Email() {
    return this.userupdateform.get('email');
  }
  get Password() {
    return this.userupdateform.get('password');
  }
  get Mobile() {
    return this.userupdateform.get('mobile');
  }
  get Confirm() {
    return this.userupdateform.get('confirm');
  }
  get Usertype() {
    return this.userupdateform.get('usertype');
  }


  changeisUpdate() {

    this.isupdated = false;

  }

}

