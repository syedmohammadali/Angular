import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Response } from '@angular/http';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService : DataServiceService){  }
 
  testData: string;
  
  getData(){    
    this.dataService.getData()
    .subscribe(
       (res: Array<Employee>)=>{           
        this.testData = res[0].City;           
    });   
  }
}
