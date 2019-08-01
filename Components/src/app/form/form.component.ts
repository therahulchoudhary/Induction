import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  fullName: boolean;
  age: boolean;
  contact: boolean;
  title: string;
  nextlink: string;
  genform = new FormGroup({
    fullName: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    contact: new FormControl('')
  });
  constructor() { 
    this.fullName = true;
    this.age = true;
    this.contact = true;
  }
  ngOnInit() {
    this.title = window.history.state['formstate'];
    if(this.title=="signup"){
      this.fullName = true;
      this.age = true;
      this.contact = true;
      this.nextlink = 'login';
    }
    else{
      this.fullName = false;
      this.age = false;
      this.contact = false;
      this.nextlink = 'signup';
    }
  }
  changeform(value: string){
    if(value=="signup"){
      this.fullName = true;
      this.age = true;
      this.contact = true;
      this.nextlink = 'login';
      this.title = 'Signup';
    }
    else{
      this.fullName = false;
      this.age = false;
      this.contact = false;
      this.nextlink = 'signup';
      this.title = 'Login';
    }
  }

}
