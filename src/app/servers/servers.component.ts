import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { setMaxListeners } from 'cluster';

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
