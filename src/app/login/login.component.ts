import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router,private userservice:UserService) { }



  user : User=new User();
 
 
 
  submitted = false;
 
 
 
  ngOnInit() {
 
   this.submitted=false;
 
  }
 
  usersaveform=new FormGroup({
 
 
 
   username:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
 
 
 
   password:new FormControl('' , [Validators.required , Validators.minLength(5) ] )
 
  });
 
 
 
  get Username(){
 
 
 
   return this.usersaveform.get('username');
 
 
 
   }
 
   get Password(){
 
 
 
   return this.usersaveform.get('password');
 
 
 
   }
 
  findByUsernameAndPassword(findByUsernameAndPassword){
 
 
 
   this.user=new User();
 
 
 
   this.user.username=this.Username.value;
 
 
 
   this.user.password=this.Password.value;
 
   this.submitted = true;
 
   this.userservice.findByUsernameAndPassword(this.user.username,this.user.password)
 
 
 
   .subscribe(data => { this.user=data;
 
 
 
   if(this.user!=null && this.user.usertype=='admin'){
 
    alert("WELCOME ADMIN  "+this.user.username);
 
    this.router.navigate(['/admin']);
    
 
    }
 
 
 
    else if(this.user!=null && this.user.usertype=='user'){
 
 
      alert("WELCOME USER  "+this.user.username);

    this.router.navigate(['user']);
 
 
 
    }
 
   else{

    alert("Details are Incorrect");
 
     this.router.navigate(['login']);
 
   }
 
 
 
 
 
   },
 
 
 
    error => console.log(console.error()));
 
 
 
   }
 
 
 
  }
 
 