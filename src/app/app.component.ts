import { Component, ViewChild } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Response } from '@angular/http';
import { Employee } from '../employee.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  @ViewChild('f') signupForm : NgForm;
  constructor(private dataService : DataServiceService,
    private spinnerService : Ng4LoadingSpinnerService){  }
 
  testData: Employee[];
  setQues : 'pet';
  answer: '';    

  suggestUsername(form:NgForm){
    console.log("set username");
     form.setValue({
       username:"sayed",
       email:"test@test.com",
       secret:'pet',
       questionAnswer:'tatt'
     });
  }

  
  getData(){   
    this.dataService.getData()
    .subscribe(
       (res: Employee[])=>{    
        console.log(res); 
        this.testData = res;                 
    });   
  }

  onSubmit(signupForm: NgForm){
    console.log(signupForm);
  }
}
