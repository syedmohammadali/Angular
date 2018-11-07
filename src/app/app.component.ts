import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Response } from '@angular/http';
import { Employee } from '../employee.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private dataService : DataServiceService,
    private spinnerService : Ng4LoadingSpinnerService){  }
 
  testData: Employee[];
  
  getData(){ 
  
    this.dataService.getData()
    .subscribe(
       (res: Employee[])=>{    
        console.log(res); 
        this.testData = res; 
                
    });   
  }
}
