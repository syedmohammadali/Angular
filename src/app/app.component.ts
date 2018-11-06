import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Response } from '@angular/http';
import { Employee } from '../employee.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService : DataServiceService,private spinnerService : Ng4LoadingSpinnerService){  }
 
  testData: Array<string>;
  
  getData(){    
    this.spinnerService.show();
    this.dataService.getData()
    .subscribe(
       (res: Array<Employee>)=>{    
        console.log(res); 
        this.testData = res[0].Cars; 
        this.spinnerService.hide();          
    });   
  }
}
