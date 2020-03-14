import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  
  constructor(private userservice:UserService) { }  
  
  user : User=new User();  
  submitted = false;  
  
selectedFiles: FileList;  




  ngOnInit() {  
    var username=window.localStorage.getItem("edit-username");
    if(username!=null&&username!="")
    {
  
    this.userservice.getUser(username)
  
      .subscribe(
  
       data => {
  
        this.user =data;
  
        this.usersaveform.setValue(this.user);
  
       }) ;

    this.submitted = false;
      } 
  }  
  
selectFile(event) {

  const file = event.target.files.item(0);
 
 
 
  if (file.type.match('image.*')) {
 
   var size = event.target.files[0].size;
 
   if(size > 1000000)
 
   {
 
     alert("size must not exceeds 1 MB");
 
     this.usersaveform.get('profileimage').setValue("");
 
   }
 
   else
 
   {
 
    this.selectedFiles = event.target.files;
 
   }
 
  } else {
 
   alert('invalid format!');
 
  }
 
 } 
  
  usersaveform=new FormGroup({ 
    id:new FormControl('',[Validators.required, Validators.minLength(1)]), 
    username:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required, Validators.minLength(8)]),
    mobile:new FormControl('',[Validators.required, Validators.minLength(10)]),
    // confirm:new FormControl('',[Validators.required, Validators.minLength(2)]),
    profileimage : new FormControl()
  });  
  
  saveUser(saveUser){  
    this.user=new User(); 
    this.user.id=this.id.value;    
    this.user.username=this.Username.value; 
    this.user.usertype="user";  
    this.user.email=this.Email.value;
    this.user.password=this.Password.value; 
    this.user.mobile=this.Mobile.value;
    this.user.confirm="no";
    
this.user.profileimage=this.Profileimage.value;


    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.userservice.createUser(this.user)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.user = new User();  
    window.localStorage.removeItem("edit-username");
  }  
  
  get id(){  
    return this.usersaveform.get('id');  
  }  
  get Username(){  
    return this.usersaveform.get('username');  
  }  
  
  get Email(){  
    return this.usersaveform.get('email');  
  }  
  get Password()
  {
    return this.usersaveform.get('password');
  }
  get Mobile()
  {
    return this.usersaveform.get('mobile');
  } 
  get Confirm()
  {
    return this.usersaveform.get('confirm');
  } 
  get Usertype()
  {
    return this.usersaveform.get('usertype');
  }
  

 get Profileimage(){



  return this.usersaveform.get('profileimage');
  
  
  
   }
  addUserForm(){    
    this.submitted=false;  
    this.usersaveform.reset();  
  } 
} 