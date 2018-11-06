import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
shortenme:string = "shortenmeplease";
allowNewServer:boolean = false;
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer= true;
    },2000)
  }
  //comment test
  ngOnInit() {
  }

}
