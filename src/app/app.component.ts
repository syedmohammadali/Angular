import { Component } from '@angular/core';
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
  constructor(private dataService : DataServiceService,
    private spinnerService : Ng4LoadingSpinnerService){  }
 
  testData: Employee[];
  setQues : 'pet';
  answer: ''

  
  getData(){   
    this.dataService.getData()
    .subscribe(
       (res: Employee[])=>{    
        console.log(res); 
        this.testData = res;                 
    });   
  }

  onSubmit(form: NgForm){
    console.log(form);
  }
}
